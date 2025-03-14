import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doSignInWithGoogle } from "../../firebase/auth"; 

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName || currentUser.email,
                    photoURL: currentUser.photoURL,
                });
                setUserLoggedIn(true);
            } else {
                setUser(null);
                setUserLoggedIn(false);
                localStorage.removeItem("accessToken");
                setAccessToken(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        try {
            const result = await doSignInWithGoogle();
            const idToken = await result.user.getIdToken();

            const response = await fetch('http://localhost:5000/auth/google-login', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idToken })
            });

            const data = await response.json();
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                setAccessToken(data.accessToken);
                setUser({
                    uid: result.user.uid,
                    email: result.user.email,
                    displayName: result.user.displayName || result.user.email,
                    photoURL: result.user.photoURL,
                });
                setUserLoggedIn(true);
            }
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    // 🔹 Tambahkan login dengan Email & Password
    const loginWithEmailPassword = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                credentials: 'include', // ✅ Pastikan cookie refresh token dikirim
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
            console.log("Response Login:", data); // 🔍 Debugging: Lihat data yang diterima
    
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('user', JSON.stringify({
                    uid: data.userId, 
                    email: data.email,
                    displayName: data.displayName,
                    photoURL: data.photoURL
                }));
    
                setAccessToken(data.accessToken);
                setUser({
                    uid: data.userId,
                    email: data.email,
                    displayName: data.displayName,
                    photoURL: data.photoURL
                });
                setUserLoggedIn(true);
    
                console.log("Access Token Stored:", data.accessToken); // 🔍 Debugging: Pastikan token tersimpan
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    const registerWithEmailPassword = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
    
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Registration failed');
    
            return data; // Kembalikan data user yang berhasil didaftarkan
        } catch (error) {
            throw error;
        }
    };
    
    
    const refreshAccessToken = async () => {
        try {
            const response = await fetch('http://localhost:5000/auth/refresh', {
                method: 'POST',
                credentials: 'include' // ✅ Pastikan refresh token dikirim
            });
    
            const data = await response.json();
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                setAccessToken(data.accessToken);
            }
        } catch (error) {
            console.error('Failed to refresh token:', error);
        }
    };
    
    

    const logout = async () => {
        try {
            await fetch('http://localhost:5000/auth/logout', {
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
    setUser,  // ✅ Tambahkan ini
    userLoggedIn, 
    setUserLoggedIn,  // ✅ Tambahkan ini juga jika dibutuhkan
    accessToken, 
    loginWithGoogle, 
    loginWithEmailPassword, 
    registerWithEmailPassword, 
    logout, 
        }}>
            {children}
        </AuthContext.Provider>
    );
};
