import { ShieldExclamationIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
          <ShieldExclamationIcon className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Acceso no autorizado</h2>
        <p className="text-gray-600 mb-6">
          No tienes permisos para acceder a esta página. Por favor, contacta al administrador si crees que esto es un error.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;