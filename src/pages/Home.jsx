import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F4F6F8] to-[#DCE3E8] text-[#1F2937] px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Bienvenido a la Galería Profesional
        </h1>

        <p className="text-lg sm:text-xl text-[#4B5563] mb-8">
          Un espacio donde cada imagen tiene una historia. Explorá una colección
          cuidadosamente seleccionada de trabajos visuales, desde retratos hasta
          paisajes artísticos.
        </p>

        <Link
          to="/galeria"
          className="inline-block bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3 px-6 rounded-md transition duration-300 shadow"
        >
          Ver Galería
        </Link>
      </div>
    </section>
  );
}

export default Home;
