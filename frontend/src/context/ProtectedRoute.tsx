import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/Loader';

const ProtectedRoute = ({ children, roles }: { children: JSX.Element, roles?: string[] }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user === undefined) {
    // Aún verificando la autenticación
    return <Loader />;
  }

  if (!user) {
    // No autenticado - redirigir a login con la ubicación actual
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Verificar roles si se especifican
  if (roles && !roles.includes(user.role)) {
    // Usuario no tiene el rol requerido
    return <Navigate to="/dashboard" replace />; // O a una página de "no autorizado"
  }

  return children;
};

export default ProtectedRoute;