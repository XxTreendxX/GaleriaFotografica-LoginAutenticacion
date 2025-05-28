import PhotoCard from "./PhotoCard";

function GalleryGrid({ fotos, onFotoClick }) {
  if (!fotos || fotos.length === 0) {
    return (
      <div className="w-full py-16 text-center text-gray-400 text-lg">
        No hay fotos para mostrar.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-2 mb-8">
      {fotos.map((foto, idx) => (
        <PhotoCard
          key={idx}
          foto={foto}
          onClick={() => onFotoClick(foto, idx)}
        />
      ))}
    </div>
  );
}

export default GalleryGrid;
