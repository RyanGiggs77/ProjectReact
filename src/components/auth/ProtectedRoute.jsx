import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn, loading } = useAuth();

  // Tampilkan loading saat pengecekan autentikasi berlangsung
  if (loading) return <div>Loading...</div>;

  // Jika user belum login, redirect ke halaman login
  if (!userLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login, render komponen anaknya
  return children;
};

export default ProtectedRoute;
