import { useState, useRef, useEffect } from "react";
import { Image, ChevronDown } from "lucide-react";
import PhotoCard from "../components/PhotoCard";
import CategoryFilter from "../components/CategoryFilter";
import GalleryGrid from "../components/GalleryGrid";
import fotosGaleria from "../data/fotosGaleria";
import Loader from "../components/Loader";
import PhotoModal from "../components/PhotoModal";

const FOTOS_POR_PAGINA = 6;

const categorias = [
  "Todos",
  ...Array.from(new Set(fotosGaleria.map((f) => f.categoria))),
];

// COMPONENTE
function Galeria() {
  const [filtro, setFiltro] = useState("Todos");
  const [cantidadMostrada, setCantidadMostrada] = useState(FOTOS_POR_PAGINA);
  const [loading, setLoading] = useState(true);
  const [fotoModal, setFotoModal] = useState(null); // Foto actual en modal
  const [fotoIndex, setFotoIndex] = useState(0); // Índice foto actual en modal
  const gridRef = useRef(null);

  // Filtrar según categoría
  const fotosFiltradas =
    filtro === "Todos"
      ? fotosGaleria
      : fotosGaleria.filter((f) => f.categoria === filtro);

  // Paginado
  const fotosAMostrar = fotosFiltradas.slice(0, cantidadMostrada);

  useEffect(() => {
    // Simula carga inicial (puede ser un fetch real)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader mensaje="Cargando fotos..." />;

  // Cambia filtro y vuelve al top de grid
  const handleFiltro = (cat) => {
    setFiltro(cat);
    setCantidadMostrada(FOTOS_POR_PAGINA);
  };

  // Maneja click en la foto para abrir el modal con índice
  const handleFotoClick = (foto, idx) => {
    setFotoModal(foto);
    setFotoIndex(idx);
  };

  // Navegación entre fotos en el modal
  const handleNavigate = (idx) => {
    if (idx >= 0 && idx < fotosAMostrar.length) {
      setFotoModal(fotosAMostrar[idx]);
      setFotoIndex(idx);
    }
  };

  // Cierra el modal
  const handleCloseModal = () => setFotoModal(null);

  return (
    <section className="w-full flex-1 flex flex-col items-center py-12">
      {/* Título e ícono */}
      <div className="flex items-center gap-2 mb-8">
        <Image className="w-7 h-7 text-blue-600" />
        <h1 className="text-3xl font-bold text-[#1F2937]">Galería</h1>
      </div>

      {/* Filtros */}
      <CategoryFilter
        categorias={categorias}
        categoriaSeleccionada={filtro}
        onChange={handleFiltro}
      />

      {/* Grid de fotos */}
      <div ref={gridRef} className="w-full max-w-6xl mx-auto px-2 mb-8">
        <GalleryGrid fotos={fotosAMostrar} onFotoClick={handleFotoClick} />
      </div>

      {/* Botón "Ver más" */}
      {cantidadMostrada < fotosFiltradas.length && (
        <div className="flex justify-center w-full">
          <button
            onClick={() =>
              setCantidadMostrada((prev) => prev + FOTOS_POR_PAGINA)
            }
            className="px-6 py-3 flex items-center gap-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition group"
          >
            <span>Ver más</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}

      {/* Modal de foto */}
      <PhotoModal
        foto={fotoModal}
        fotos={fotosAMostrar}
        fotoIndex={fotoIndex}
        onNavigate={handleNavigate}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default Galeria;
