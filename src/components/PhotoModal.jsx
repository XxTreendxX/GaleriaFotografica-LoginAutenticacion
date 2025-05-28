import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Info,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PhotoModal({
  foto,
  onClose,
  fotos = [],
  fotoIndex = 0,
  onNavigate = () => {},
}) {
  const [zoom, setZoom] = useState(false);
  const dialogRef = useRef(null);
  const imgRef = useRef(null);
  let touchStartX = null;

  // 1 & 3: Keyboard navigation and close with ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onNavigate(Math.min(fotos.length - 1, fotoIndex + 1));
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, fotoIndex - 1));
      // Zoom with +
      if (e.key === "+" || e.key === "=") setZoom(true);
      // Zoom out with -
      if (e.key === "-") setZoom(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    // 7: Accessibility: Focus modal when opens
    setTimeout(() => dialogRef.current?.focus(), 60);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fotoIndex, fotos.length, onClose, onNavigate]);

  // 8: Swipe to close (mobile)
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX !== null && e.changedTouches.length === 1) {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (dx > 80) onNavigate(Math.max(0, fotoIndex - 1)); // Swipe right
      else if (dx < -80)
        onNavigate(Math.min(fotos.length - 1, fotoIndex + 1)); // Swipe left
      else if (Math.abs(dx) < 20) onClose(); // Small tap/click closes
    }
    touchStartX = null;
  };

  // 2: Cierre al clickear fuera
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!foto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-colors"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      ref={dialogRef}
      onClick={handleOverlayClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative bg-white rounded-2xl shadow-lg p-4 max-w-2xl w-full mx-2 animate-fadeIn flex flex-col items-center outline-none">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition"
          aria-label="Cerrar modal"
          tabIndex={0}
        >
          <X size={24} className="text-gray-700" />
        </button>

        {/* 3: Botones de navegación */}
        <button
          onClick={() => onNavigate(Math.max(0, fotoIndex - 1))}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow hover:bg-blue-50 transition ${
            fotoIndex === 0 && "opacity-40 pointer-events-none"
          }`}
          aria-label="Anterior"
          tabIndex={0}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={() => onNavigate(Math.min(fotos.length - 1, fotoIndex + 1))}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow hover:bg-blue-50 transition ${
            fotoIndex === fotos.length - 1 && "opacity-40 pointer-events-none"
          }`}
          aria-label="Siguiente"
          tabIndex={0}
        >
          <ChevronRight size={28} />
        </button>

        {/* 4: Imagen con zoom */}
        <div className="relative mb-4 w-full flex justify-center">
          <img
            ref={imgRef}
            src={foto.url}
            alt={foto.alt}
            className={`rounded-lg shadow-lg object-contain max-h-[60vh] transition-all duration-300 ${
              zoom ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
            }`}
            style={{ transition: "transform 0.3s" }}
            onClick={() => setZoom((z) => !z)}
            tabIndex={0}
          />
          <button
            onClick={() => setZoom((z) => !z)}
            className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 transition"
            aria-label={zoom ? "Alejar imagen" : "Acercar imagen"}
          >
            {zoom ? <ZoomOut size={22} /> : <ZoomIn size={22} />}
          </button>
        </div>

        {/* 6: Más info de la foto */}
        <div className="text-center w-full">
          <div className="flex flex-col items-center mb-1">
            <span className="text-xs inline-flex items-center gap-1 bg-blue-100 text-blue-800 font-semibold rounded-full px-3 py-1 mb-1">
              <Info size={15} /> {foto.categoria}
            </span>
            <h2 className="text-xl font-bold">{foto.alt}</h2>
            <p className="text-gray-500 text-sm">
              Por <span className="font-semibold">{foto.autor}</span>
            </p>
            {foto.fecha && (
              <p className="text-xs text-gray-400 mt-1">Fecha: {foto.fecha}</p>
            )}
            {foto.descripcion && (
              <p className="text-xs text-gray-700 mt-1">{foto.descripcion}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
