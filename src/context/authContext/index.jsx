import React from 'react';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Buat context baru dengan nama AuthContext
const AuthContext = React.createContext();

// Buat custom hook untuk mengakses context yang telah dibuat
export function useAuth() {
    return React.useContext(AuthContext);
}

// Buat provider untuk AuthContext
export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [userLoggedIn, setUserLoggedIn] = React.useState(false);
    const [loading, setLoading] = React.useState(true); 

    // Gunakan useEffect untuk memanggil fungsi onAuthStateChanged dari auth Firebase yang digunakan untuk mengecek apakah user sudah login atau belum
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])
    
    // Fungsi untuk menginisialisasi user
    async function initializeUser(user) {
        if (user) {
            setCurrentUser({...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false); 
        }
        setLoading(false);
    }

    // Buat value yang akan digunakan oleh AuthContext.Provider
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    // Kembalikan AuthContext.Provider dengan value yang telah dibuat
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}
