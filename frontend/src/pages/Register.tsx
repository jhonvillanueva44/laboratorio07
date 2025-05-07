import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import api from '../services/api';
import { UserIcon, EnvelopeIcon, LockClosedIcon, ExclamationCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const schema = z.object({
  username: z.string().min(3, "Usuario requerido (mínimo 3 caracteres)"),
  email: z.string().email("Email inválido").min(1, "Email requerido"),
  password: z.string().min(6, "Contraseña mínima 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await api.post('/auth/signup', { ...data, role: "user" });
      alert("Registro exitoso. Ahora inicia sesión.");
      window.location.href = '/login';
    } catch (error) {
      console.error('Error en el registro', error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#C00959] mb-4">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Crear una cuenta</h2>
          <p className="mt-2 text-gray-600">Completa el formulario para registrarte</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre de usuario
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                {...register('username')}
                className="input pl-10 w-full"
              />
            </div>
            {errors.username && (
              <p className="mt-2 flex items-center text-sm text-red-600">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.username.message}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="input pl-10 w-full"
              />
            </div>
            {errors.email && (
              <p className="mt-2 flex items-center text-sm text-red-600">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                {...register('password')}
                className="input pl-10 w-full"
              />
            </div>
            {errors.password && (
              <p className="mt-2 flex items-center text-sm text-red-600">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="btn-primary w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#C00959] hover:bg-[#A4084C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C00959] transition-colors"
            >
              <span>Registrarse</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="font-medium text-[#C00959] hover:text-[#A4084C] transition-colors">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
