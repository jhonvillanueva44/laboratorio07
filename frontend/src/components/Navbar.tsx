import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {   Cog6ToothIcon, ShieldCheckIcon,  ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from "@heroicons/react/24/outline"; 

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#C00959] px-6 py-4 flex justify-between items-center text-white shadow-md">
      {/* Logo y nombre */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2 font-bold text-2xl hover:opacity-90 transition-opacity">
          <span>JhonAgrega</span>
        </Link>

        {/* Menú para usuarios logueados */}
        {user && (
          <div className="flex items-center space-x-6 ml-8">
            <Link to="/dashboard" className="flex items-center gap-1 hover:underline transition-all">
              <ShoppingBagIcon className="h-5 w-5" /> {/* 👈 cambia el icono */}
              <span>E-Commerce</span>
            </Link>

            {user.role === 'admin' && (
              <Link to="/admin" className="flex items-center gap-1 hover:underline transition-all">
                <Cog6ToothIcon className="h-5 w-5" />
                <span>Administrar</span>
              </Link>
            )}

            {user.role === 'moderator' && (
              <Link to="/moderator" className="flex items-center gap-1 hover:underline transition-all">
                <ShieldCheckIcon className="h-5 w-5" />
                <span>Moderador</span>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Botones de la derecha */}
      <div className="flex items-center space-x-4">
        {user ? (
          <button 
            onClick={logout} 
            className="flex items-center space-x-2 bg-white text-[#C00959] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Salir</span>
          </button>
        ) : (
          <>
            <Link to="/login" className="flex items-center gap-1 hover:underline transition-all">
              <span>Ingresar</span>
            </Link>
            <Link to="/register" className="bg-white text-[#C00959] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Crear Cuenta
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
