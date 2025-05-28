import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import fotosGaleria from "../data/fotosGaleria";

function Home() {
  // Seleccionamos 3 fotos destacadas
  const destacadas = fotosGaleria.slice(0, 3);

  return (
    <>
      <SEO
        title="Inicio — RodriDev Fotografía"
        description="Portfolio profesional de Rodrigo Otreras. Descubrí su trabajo fotográfico y contactalo."
        image="/og-image.jpg"
        url="https://www.rodridev.com.ar/"
      />
      <section className="flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-3 tracking-tight">
          <span className="text-blue-600">Contando historias</span>
          <br />a través de la fotografía
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Hola, soy Rodrigo Otreras. Transformo momentos en recuerdos
          imborrables con mi cámara. Mirá mi galería y descubrí el arte de
          capturar emociones.
        </p>

        {/* Showcase de fotos destacadas */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
          {destacadas.map((foto, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow hover:scale-105 transition"
            >
              <img
                src={foto.url}
                alt={foto.alt}
                className="object-cover w-full h-56"
                loading="lazy"
              />
              <div className="bg-white py-2 px-3 text-left">
                <span className="text-sm font-medium text-gray-700">
                  {foto.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón destacado debajo del showcase */}
        <Link
          to="/galeria"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-base transition"
        >
          <ImageIcon className="w-5 h-5" />
          Ver Galería
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </>
  );
}

export default Home;
