import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doSignInWithGoogle } from "../../firebase/auth"; 

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Inisialisasi state dari localStorage (jika ada)
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [userLoggedIn, setUserLoggedIn] = useState(!!accessToken);

    // Fungsi refresh token
    const refreshAccessToken = async () => {
        try {
            const response = await fetch('https://react-express-backend.vercel.app/auth/refresh', {
                method: 'POST',
                credentials: 'include'
            });
            const data = await response.json();
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                setAccessToken(data.accessToken);
                return data.accessToken;
            } else {
                await logout();
            }
        } catch (error) {
            console.error('Failed to refresh token:', error);
            await logout();
        }
    };

    // Middleware fetch yang menangani auto-refresh token
    const fetchWithAuth = async (url, options = {}) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            if (!options.headers) options.headers = {};
            options.headers['Authorization'] = `Bearer ${token}`;
        }
        let response = await fetch(url, options);
        if (response.status === 403) {
            const newToken = await refreshAccessToken();
            if (newToken) {
                options.headers['Authorization'] = `Bearer ${newToken}`;
                response = await fetch(url, options);
            }
        }
        return response;
    };

    // Fungsi untuk register dengan email dan password
    const registerWithEmailPassword = async (email, password) => {
        try {
            const response = await fetch('https://react-express-backend.vercel.app/auth/register', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (data.user) {
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                setUserLoggedIn(true);
                return data;
            } else {
                throw new Error(data.error || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration Error:', error);
            throw error;
        }
    };

    // Gunakan onAuthStateChanged untuk mendeteksi perubahan Firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Jika user Firebase ada (login dengan Google)
                const newUser = {
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName || currentUser.email,
                    photoURL: currentUser.photoURL,
                };
                setUser(newUser);
                setUserLoggedIn(true);
                localStorage.setItem("user", JSON.stringify(newUser));
            } else {
                // Jika Firebase tidak mendeteksi user,
                // cek apakah masih ada accessToken di localStorage (login backend)
                if (!localStorage.getItem("accessToken")) {
                    setUser(null);
                    setUserLoggedIn(false);
                    localStorage.removeItem("user");
                    localStorage.removeItem("accessToken");
                    setAccessToken(null);
                }
                // Jika ada token, biarkan state user seperti dari localStorage
            }
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        try {
            const result = await doSignInWithGoogle();
            const idToken = await result.user.getIdToken();

            const response = await fetch('https://react-express-backend.vercel.app/auth/google-login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idToken })
            });

            const data = await response.json();
            console.log(data.accessToken)
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                const newUser = {
                    uid: result.user.uid,
                    email: result.user.email,
                    displayName: result.user.displayName || result.user.email,
                    photoURL: result.user.photoURL,
                };
                localStorage.setItem('user', JSON.stringify(newUser));
                setAccessToken(data.accessToken);
                setUser(newUser);
                setUserLoggedIn(true);
            }
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    const loginWithEmailPassword = async (email, password) => {
        try {
            const response = await fetch('https://react-express-backend.vercel.app/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                const newUser = {
                    uid: data.userId, 
                    email: data.email,
                    displayName: data.displayName,
                    photoURL: data.photoURL,
                };
                localStorage.setItem('user', JSON.stringify(newUser));
                setAccessToken(data.accessToken);
                setUser(newUser);
                setUserLoggedIn(true);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    const logout = async () => {
        try {
            if (user && user.uid) {
                await signOut(auth);
                console.log('User signed out');
            }
            await fetch('https://react-express-backend.vercel.app/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            setUser(null);
            setAccessToken(null);
            setUserLoggedIn(false);
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            userLoggedIn, 
            accessToken, 
            loginWithGoogle, 
            loginWithEmailPassword, 
            registerWithEmailPassword, // Tambahkan ini
            logout,
            fetchWithAuth // opsional, jika ingin dipakai di komponen lain
        }}>
            {children}
        </AuthContext.Provider>
    );
};