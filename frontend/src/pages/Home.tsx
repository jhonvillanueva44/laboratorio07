import {  UserPlusIcon } from '@heroicons/react/24/solid';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-50 via-white to-pink-100 px-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#C00959] mb-6">
            Únete a <span className="text-[#C00959]">JhonAgrega</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            Accede fácilmente a tu cuenta o regístrate en segundos. Descubre todas las herramientas que tenemos para potenciar tu productividad y colaboración.
          </p>
        </div>

        {/* Ícono decorativo */}
        <div className="flex-1 flex justify-center">
          <div className="bg-[#C00959] p-8 rounded-full shadow-2xl animate-bounce-slow">
            <UserPlusIcon className="h-20 w-20 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
