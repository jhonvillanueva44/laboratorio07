import { useAuth } from "../hooks/useAuth";
import {
  ShoppingCartIcon,
  TagIcon,
  HeartIcon,
  GiftIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">¡Bienvenido <span className="text-[#C00959]">{user?.username}</span>!</h1>
            <p className="text-sm text-gray-500 mt-1">Explora nuestras mejores ofertas para ti.</p>
          </div>
          <button className="p-2 rounded-full bg-[#C00959] hover:bg-[#a30849]">
            <ShoppingCartIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Banner Principal */}
        <section className="bg-[#C00959] rounded-2xl p-8 text-white text-center shadow-md">
          <h2 className="text-2xl font-bold mb-2">¡Grandes Descuentos de Primavera!</h2>
          <p className="mb-4">Aprovecha hasta un 50% en productos seleccionados</p>
          <button className="bg-white text-[#C00959] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
            Ver Ofertas
          </button>
        </section>

        {/* Categorías */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Categorías</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard title="Moda" Icon={TagIcon} />
            <CategoryCard title="Tecnología" Icon={GiftIcon} />
            <CategoryCard title="Hogar" Icon={HeartIcon} />
            <CategoryCard title="Deportes" Icon={StarIcon} />
          </div>
        </section>

        {/* Productos Destacados */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Productos Recomendados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard name="Auriculares Inalámbricos" price="59.99" image="https://picsum.photos/200/200" />
          <ProductCard name="Zapatillas Running" price="89.99" image="https://picsum.photos/200/200" />
          <ProductCard name="Reloj Inteligente" price="129.99" image="https://picsum.photos/200/200" />
          <ProductCard name="Silla Ergonómica" price="199.99" image="https://picsum.photos/200/200" />

          </div>
        </section>

      </main>
    </div>
  );
};

const CategoryCard = ({ title, Icon }: { title: string; Icon: any }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition">
    <div className="bg-[#C00959] p-4 rounded-full mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h4 className="font-semibold text-gray-900">{title}</h4>
  </div>
);

const ProductCard = ({ name, price, image }: { name: string; price: string; image: string }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
    <div className="h-40 bg-gray-100 flex items-center justify-center">
      <img src={image} alt={name} className="h-full object-cover" />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h5 className="font-semibold text-gray-900 mb-2">{name}</h5>
      <p className="text-[#C00959] font-bold text-lg">${price}</p>
      <button className="mt-auto bg-[#C00959] text-white py-2 rounded-lg hover:bg-[#a30849] transition">
        Agregar al Carrito
      </button>
    </div>
  </div>
);

export default Dashboard;
