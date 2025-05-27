import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-1 flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
        Galería Profesional
      </h1>
      <p className="text-lg text-[#6B7280] mb-10 leading-relaxed max-w-xl">
        Una colección curada de momentos, miradas, paisajes y detalles. Cada
        imagen tiene una historia, y cada historia una emoción que compartir.
      </p>
      <Link
        to="/galeria"
        className="inline-block text-sm uppercase tracking-widest bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition-all duration-300"
      >
        Ver Galería
      </Link>
    </section>
  );
}

export default Home;

