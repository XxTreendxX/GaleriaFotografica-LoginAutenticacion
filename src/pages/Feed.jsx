import { Image } from "lucide-react";

const fotos = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Foto 1",
    autor: "Autor Ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1747619715083-3db63905a75a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 2",
    autor: "Autor Ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1746699421299-ac9d7e868855?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 3",
    autor: "Autor Ejemplo",
  },

  {
    url: "https://images.unsplash.com/photo-1745933121819-576063018cbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 4",
    autor: "Autor Ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1745172366995-a55968e94797?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 5",
    autor: "Autor Ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1745750747233-c09276a878b3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 6",
    autor: "Autor Ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1685972296712-602ab8774bad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 7",
    autor: "Autor Ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1745750747228-d7ae37cba3a5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 8",
    autor: "Autor Ejemplo",
  },
  {
    url: "  https://images.unsplash.com/photo-1745512463455-52f052d52ba4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 9",
    autor: "Autor Ejemplo",
  },
  // ...agrega más fotos o imágenes de muestra!
];

function Feed() {
  return (
    <section className="w-full flex-1 flex flex-col items-center py-12">
      {/* Título e ícono */}
      <div className="flex items-center gap-2 mb-8">
        <Image className="w-7 h-7 text-blue-600" />
        <h1 className="text-3xl font-bold text-[#1F2937]">Feed fotográfico</h1>
      </div>
      {/* Grid de fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-2">
        {fotos.map((foto, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={foto.url}
              alt={foto.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-3">
              <p className="font-medium text-[#1F2937] truncate">{foto.alt}</p>
              <span className="text-xs text-gray-500">{foto.autor}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feed;
