import { useAuth } from "../hooks/useAuth";
import {
  
  CalendarIcon,
  DocumentTextIcon,
  CogIcon,
  UserCircleIcon,
  BellIcon,
  CheckCircleIcon,
  InboxIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hola, <span className="text-[#C00959]">{user?.username}</span></h1>
            <p className="text-sm text-gray-500 mt-1">Te damos la bienvenida a tu espacio personalizado.</p>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <BellIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-[#C00959] hover:bg-[#a30849]">
              <UserCircleIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Cards principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="Acciones Completadas" value="24" Icon={CheckCircleIcon} />
          <Card title="Eventos Programados" value="5" Icon={CalendarIcon} />
          <Card title="Documentos Subidos" value="12" Icon={DocumentTextIcon} />
          <Card title="Configuraciones" value="3" Icon={CogIcon} />
        </div>

        {/* Sección estadísticas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Estadísticas rápidas */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen General</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                <ArrowTrendingUpIcon className="h-8 w-8 text-[#C00959]" />
                <div>
                  <p className="text-gray-500 text-sm">Tareas Completadas</p>
                  <p className="font-bold text-lg">48</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                <InboxIcon className="h-8 w-8 text-[#C00959]" />
                <div>
                  <p className="text-gray-500 text-sm">Mensajes Recibidos</p>
                  <p className="font-bold text-lg">17</p>
                </div>
              </div>
            </div>
          </div>

          {/* Perfil rápido */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <UserCircleIcon className="h-24 w-24 text-[#C00959] mb-4" />
            <h3 className="text-lg font-semibold">{user?.username}</h3>
            <p className="text-gray-500 text-sm mb-2">Miembro desde 2023</p>
            <button className="mt-4 px-4 py-2 bg-[#C00959] hover:bg-[#a30849] text-white rounded-lg">
              Editar Perfil
            </button>
          </div>
        </div>

        {/* Últimas Actividades */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Última Actividad</h2>
          <ul className="space-y-5">
            <Activity time="Hoy, 10:30 AM" description="Actualizaste tu contraseña" />
            <Activity time="Ayer, 3:45 PM" description="Publicaste un comentario" />
            <Activity time="Lunes, 9:15 AM" description="Subiste un nuevo archivo" />
            <Activity time="Domingo, 8:00 PM" description="Completaste tu perfil" />
          </ul>
        </section>
      </main>
    </div>
  );
};

const Card = ({ title, value, Icon }: { title: string; value: string; Icon: any }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center space-x-4 hover:shadow-md transition">
    <div className="p-3 rounded-lg bg-[#C00959]">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const Activity = ({ time, description }: { time: string; description: string }) => (
  <li className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <CheckCircleIcon className="h-6 w-6 text-[#C00959]" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{time}</p>
      <p className="text-gray-900 font-medium">{description}</p>
    </div>
  </li>
);

export default AdminPanel;