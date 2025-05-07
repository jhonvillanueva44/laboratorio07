import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';
import { LockClosedIcon, UserIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const schema = z.object({
  username: z.string().min(3, "Usuario requerido"),
  password: z.string().min(6, "Contraseña mínima 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { login } = useAuth();

  const onSubmit = (data: FormData) => {
    login(data);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-300">
        <div className="text-center mb-6">
          <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-[#C00959] mb-4">
            <LockClosedIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-900">Iniciar Sesión</h2>
          <p className="mt-2 text-gray-500">Por favor ingresa tus credenciales</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Usuario
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                {...register('username')}
                placeholder="Ingresa tu usuario"
                className="input pl-10 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C00959] focus:border-[#C00959]"
              />
            </div>
            {errors.username && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.username.message}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
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
                placeholder="Ingresa tu contraseña"
                className="input pl-10 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#C00959] focus:border-[#C00959]"
              />
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <ExclamationCircleIcon className="h-5 w-5 mr-1" />
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#C00959] hover:bg-[#9d0847] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C00959] transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
