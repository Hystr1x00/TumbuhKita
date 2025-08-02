import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, hasRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4EEFF80]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5F41B2] mx-auto mb-4"></div>
          <p className="text-[#5F41B2] font-medium">Memuat...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute; 