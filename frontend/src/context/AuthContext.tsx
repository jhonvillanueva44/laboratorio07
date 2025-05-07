import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { AuthContextType, User, LoginData } from '../types/auth';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    try {
      const response = await api.post('/auth/signin', data);
      
      // Verifica la estructura de la respuesta
      if (!response.data) {
        throw new Error('Respuesta inválida del servidor');
      }

      // Asegúrate de que la respuesta tenga la estructura esperada
      const loggedUser = response.data.user || response.data; // Intenta ambas opciones
      const token = response.data.token || response.data.accessToken; // Intenta ambas opciones

      if (!loggedUser || !token) {
        throw new Error('Datos de usuario o token no recibidos');
      }

      // Verifica que el usuario tenga un rol
      if (!loggedUser.role) {
        loggedUser.role = 'user'; // Asigna un rol por defecto si no viene
      }

      // Guardar en localStorage
      localStorage.setItem('user', JSON.stringify(loggedUser));
      localStorage.setItem('token', token);
      
      setUser(loggedUser);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Redirigir según rol
      switch (loggedUser.role.toLowerCase()) { // Usa toLowerCase para evitar problemas de mayúsculas
        case 'admin':
          navigate('/admin');
          break;
        case 'moderator':
          navigate('/moderator');
          break;
        default:
          navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed', error);
      // Muestra un mensaje de error al usuario
      alert('Error al iniciar sesión. Verifica tus credenciales.');
      throw error; // Propaga el error para manejarlo en el componente
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      
      if (storedUser && token) {
        try {
          // Verificar si el token es válido
          await api.get('/auth/validate');
          const parsedUser = JSON.parse(storedUser);
          
          // Asegúrate de que el usuario tenga un rol
          if (!parsedUser.role) {
            parsedUser.role = 'user';
          }
          
          setUser(parsedUser);
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } catch (error) {
          // Token inválido o expirado
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          delete api.defaults.headers.common['Authorization'];
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  if (loading) {
    return null; // O un componente de carga
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};