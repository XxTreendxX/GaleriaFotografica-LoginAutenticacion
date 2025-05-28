import { Instagram, Linkedin, Download } from "lucide-react";
import profileImg from "../assets/profile.jpg";

function SobreMi() {
  return (
    <section className="flex flex-col items-center justify-center py-12">
      <img
        src={profileImg}
        alt="Rodrigo Otreras"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-blue-100 object-cover mb-6"
      />
      <h2 className="text-4xl font-bold mb-2">Rodrigo Otreras</h2>
      <h3 className="text-xl text-blue-600 font-semibold mb-4">
        Fotógrafo Profesional
      </h3>
      <p className="text-gray-600 max-w-2xl text-center mb-5">
        ¡Hola! Soy Rodrigo, apasionado de la fotografía. Me encanta capturar
        momentos únicos y contar historias reales a través de mi lente. <br />
        Especializado en{" "}
        <span className="font-medium text-blue-500">
          retratos, naturaleza y eventos
        </span>
        . Siempre busco la luz y el detalle para crear imágenes inolvidables.
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          Retratos
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          Naturaleza
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          Eventos
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          Edición Creativa
        </span>
      </div>
      <div className="flex gap-4 mb-6">
        <a
          href="https://instagram.com/tu_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          <Instagram /> Instagram
        </a>
        <a
          href="https://linkedin.com/in/tu_linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          <Linkedin /> LinkedIn
        </a>
        <a
          href="/Rodrigo_Otreras_CV.pdf"
          download
          className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-semibold transition"
        >
          <Download /> Descargar CV
        </a>
      </div>
    </section>
  );
}

export default SobreMi;
