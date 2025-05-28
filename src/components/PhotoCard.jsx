export default function PhotoCard({ foto, onClick }) {
  return (
    <div
      className="relative bg-gray-50 rounded-xl shadow-md overflow-visible flex flex-col items-center pt-6 pb-4 px-3 border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-[0_8px_32px_4px_rgba(59,130,246,0.10)] hover:border-blue-300"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalle de ${foto.alt}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick && onClick();
        }
      }}
    >
      {/* Etiqueta de categoría (vertical, izquierda) */}
      {foto.categoria && (
        <div className="absolute -left-3 top-6 rotate-[-15deg] bg-blue-600 text-white px-2 py-1 rounded-xl text-xs font-bold shadow-md select-none z-10">
          {foto.categoria}
        </div>
      )}

      {/* Imagen con marco tipo polaroid */}
      <div className="relative mb-3 rounded-lg shadow-lg bg-white p-1 w-full flex justify-center">
        <img
          src={foto.url}
          alt={foto.alt}
          className="object-cover rounded-lg w-full h-52 shadow-md border-2 border-white"
          loading="lazy"
        />
      </div>

      {/* Pie de foto estilo polaroid */}
      <div className="w-full text-center">
        <p className="font-semibold text-base text-gray-700 mb-0.5 truncate">
          {foto.alt}
        </p>
        <span className="text-xs text-gray-500 italic">Por {foto.autor}</span>
      </div>
    </div>
  );
}
