import { Instagram, Linkedin, Download } from "lucide-react";

export default function SobreMi() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-[#f4f6f8] to-[#e2e8f0]">
      <div className="bg-white shadow-xl rounded-3xl max-w-4xl w-full p-0 md:flex items-center">
        {/* Columna imagen */}
        <div className="flex-1 flex justify-center md:justify-end items-center bg-gradient-to-t from-blue-100 to-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-8">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
            alt="Rodrigo Otreras Fotógrafo"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-300 shadow-lg"
          />
        </div>
        {/* Columna texto */}
        <div className="flex-1 px-8 py-10">
          <h2 className="text-4xl font-black text-gray-900 mb-1">
            Rodrigo Otreras
          </h2>
          <p className="text-xl font-semibold text-blue-600 mb-4">
            Fotógrafo Profesional
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
            Me dedico a capturar momentos y emociones únicas. Con más de{" "}
            <span className="font-bold text-gray-800">
              5 años de experiencia
            </span>{" "}
            en retratos, eventos y productos, mi objetivo es crear imágenes con
            alma y estilo propio.
            <br />
            <span className="block mt-2">
              ¿Buscás fotografías con calidad profesional y una mirada creativa?
              ¡Hablemos!
            </span>
          </p>
          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Retratos",
              "Eventos",
              "Productos",
              "Edición Creativa",
              "Fotografía Artística",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold hover:scale-105 transition"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="/cv-rodri.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition"
            >
              <Download size={18} /> Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
