import { useAuth } from "../hooks/useAuth";
import { ShieldCheckIcon, ChatBubbleOvalLeftEllipsisIcon, DocumentDuplicateIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const ModeratorPanel = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-screen bg-gray-50 p-10">
      {/* Cabecera */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#C00959] mb-3">Panel Central de Moderación</h1>
        <p className="text-lg text-gray-700">
          Hola <strong className="text-[#C00959]">{user?.username}</strong>, aquí podrás mantener el orden en la comunidad.
        </p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex items-center">
          <div className="p-3 bg-pink-100 rounded-full mr-4">
            <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7 text-[#C00959]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Comentarios Pendientes</p>
            <p className="text-2xl font-bold text-gray-800">18</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex items-center">
          <div className="p-3 bg-pink-100 rounded-full mr-4">
            <DocumentDuplicateIcon className="h-7 w-7 text-[#C00959]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Publicaciones Reportadas</p>
            <p className="text-2xl font-bold text-gray-800">7</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex items-center">
          <div className="p-3 bg-pink-100 rounded-full mr-4">
            <ShieldCheckIcon className="h-7 w-7 text-[#C00959]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Usuarios Sancionados</p>
            <p className="text-2xl font-bold text-gray-800">2</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex items-center">
          <div className="p-3 bg-pink-100 rounded-full mr-4">
            <WrenchScrewdriverIcon className="h-7 w-7 text-[#C00959]" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Configuraciones</p>
            <p className="text-2xl font-bold text-gray-800">Ajustar</p>
          </div>
        </div>
      </div>

      {/* Actividades recientes */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 mb-12">
        <h2 className="text-2xl font-bold text-[#C00959] mb-6">Actividad Reciente</h2>
        <ul className="space-y-6">
          <li className="border-b pb-4">
            <p className="text-sm text-gray-500">Hoy, 11:45 AM</p>
            <p className="text-base font-semibold text-gray-800">Eliminaste un comentario ofensivo</p>
          </li>
          <li className="border-b pb-4">
            <p className="text-sm text-gray-500">Ayer, 5:20 PM</p>
            <p className="text-base font-semibold text-gray-800">Sancionaste a un usuario por spam</p>
          </li>
          <li>
            <p className="text-sm text-gray-500">Lunes, 8:15 AM</p>
            <p className="text-base font-semibold text-gray-800">Publicación editada exitosamente</p>
          </li>
        </ul>
      </div>

      {/* Acciones rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-[#C00959] text-white font-semibold py-4 rounded-xl hover:bg-pink-700 transition">
          Revisar Comentarios
        </button>
        <button className="bg-[#C00959] text-white font-semibold py-4 rounded-xl hover:bg-pink-700 transition">
          Ver Publicaciones
        </button>
        <button className="bg-[#C00959] text-white font-semibold py-4 rounded-xl hover:bg-pink-700 transition">
          Configurar Preferencias
        </button>
      </div>
    </section>
  );
};

export default ModeratorPanel;
