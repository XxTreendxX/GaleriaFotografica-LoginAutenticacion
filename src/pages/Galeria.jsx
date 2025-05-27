import { useState } from "react";
import { Image, ChevronDown } from "lucide-react";

const FOTOS_POR_PAGINA = 6;

const fotosGaleria = [
  // --- PAISAJES ---
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Montaña nevada al atardecer",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
    alt: "Lago y bosque en otoño",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Valle entre montañas",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    alt: "Costa rocosa y mar",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    alt: "Camino entre árboles",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    alt: "Montañas y nubes",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    alt: "Playa al amanecer",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    alt: "Cascada en la montaña",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },
  {
    url: "https://images.unsplash.com/photo-1433878455169-4698b20b6be9?auto=format&fit=crop&w=600&q=80",
    alt: "Pradera y cielo azul",
    autor: "Autor de Ejemplo",
    categoria: "Paisajes",
  },

  // --- RETRATOS ---
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato de mujer sonriente",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato en blanco y negro",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato creativo de hombre",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3150?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato de joven con luz lateral",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato con fondo desenfocado",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato artístico en el bosque",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato femenino al aire libre",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato cálido y natural",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Retrato con expresión intensa",
    autor: "Autor de Ejemplo",
    categoria: "Retratos",
  },

  // --- NATURALEZA/ANIMALES ---
  {
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    alt: "Ciervo en el bosque",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3150?auto=format&fit=crop&w=600&q=80",
    alt: "Pájaro posado en rama",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    alt: "Mariposa en flor",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    alt: "Lobo entre los árboles",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
    alt: "Pato en lago al amanecer",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Águila volando",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    alt: "Caballo en la pradera",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Gato salvaje entre arbustos",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    alt: "Zorro en el campo",
    autor: "Autor de Ejemplo",
    categoria: "Naturaleza",
  },
];

const categorias = [
  "Todos",
  ...Array.from(new Set(fotosGaleria.map((f) => f.categoria))),
];

function Galeria() {
  const [filtro, setFiltro] = useState("Todos");
  const [cantidadMostrada, setCantidadMostrada] = useState(FOTOS_POR_PAGINA);

  // Filtro las fotos según la categoría seleccionada
  const fotosFiltradas =
    filtro === "Todos"
      ? fotosGaleria
      : fotosGaleria.filter((f) => f.categoria === filtro);

  // Array de fotos que realmente se muestran
  const fotosAMostrar = fotosFiltradas.slice(0, cantidadMostrada);

  // Cuando cambio de filtro, vuelvo a mostrar solo las primeras
  const handleFiltro = (cat) => {
    setFiltro(cat);
    setCantidadMostrada(FOTOS_POR_PAGINA);
  };

  return (
    <section className="w-full flex-1 flex flex-col items-center py-12">
      {/* Título e ícono */}
      <div className="flex items-center gap-2 mb-8">
        <Image className="w-7 h-7 text-blue-600" />
        <h1 className="text-3xl font-bold text-[#1F2937]">Galería</h1>
      </div>
      {/* Filtros por categoría */}
      <div className="mb-8 flex flex-wrap gap-4">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFiltro(cat)}
            className={`px-4 py-2 rounded-full border
              ${
                filtro === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-[#1F2937] border-gray-300 hover:bg-blue-50"
              }
              transition`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Grid de fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-2">
        {fotosAMostrar.map((foto, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={foto.url}
              alt={foto.alt}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-3">
              <p className="font-medium text-[#1F2937] truncate">{foto.alt}</p>
              <span className="text-xs text-gray-500">{foto.autor}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Botón "Ver más" SOLO si hay más fotos por mostrar */}
      {cantidadMostrada < fotosFiltradas.length && (
        <button
          onClick={() => setCantidadMostrada((prev) => prev + FOTOS_POR_PAGINA)}
          className="mt-8 px-6 py-3 flex items-center gap-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition group"
        >
          <span>Ver más</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      )}
    </section>
  );
}

export default Galeria;

/*
  const fotosGaleria = [
    // --- PAISAJES ---
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      alt: "Montaña nevada al atardecer",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
      alt: "Lago y bosque en otoño",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      alt: "Valle entre montañas",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      alt: "Costa rocosa y mar",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      alt: "Camino entre árboles",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      alt: "Montañas y nubes",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      alt: "Playa al amanecer",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
      alt: "Cascada en la montaña",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },
    {
      url: "https://images.unsplash.com/photo-1433878455169-4698b20b6be9?auto=format&fit=crop&w=600&q=80",
      alt: "Pradera y cielo azul",
      autor: "Autor de Ejemplo",
      categoria: "Paisajes",
    },

    // --- RETRATOS ---
    {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato de mujer sonriente",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato en blanco y negro",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato creativo de hombre",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3150?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato de joven con luz lateral",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato con fondo desenfocado",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato artístico en el bosque",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato femenino al aire libre",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato cálido y natural",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      alt: "Retrato con expresión intensa",
      autor: "Autor de Ejemplo",
      categoria: "Retratos",
    },

    // --- NATURALEZA/ANIMALES ---
    {
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      alt: "Ciervo en el bosque",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1465101178521-c1a9136a3150?auto=format&fit=crop&w=600&q=80",
      alt: "Pájaro posado en rama",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
      alt: "Mariposa en flor",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
      alt: "Lobo entre los árboles",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
      alt: "Pato en lago al amanecer",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      alt: "Águila volando",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      alt: "Caballo en la pradera",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      alt: "Gato salvaje entre arbustos",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      alt: "Zorro en el campo",
      autor: "Autor de Ejemplo",
      categoria: "Naturaleza",
    },
  ];
*/
