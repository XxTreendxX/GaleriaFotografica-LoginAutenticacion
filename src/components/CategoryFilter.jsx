import { Camera, Mountain, User, PawPrint } from "lucide-react";

// Relaciona iconos con categorías
const iconosCategoria = {
  Todos: <Camera size={18} />,
  Paisajes: <Mountain size={18} />,
  Retratos: <User size={18} />,
  Naturaleza: <PawPrint size={18} />,
};

function CategoryFilter({ categorias, categoriaSeleccionada, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap gap-3 justify-center">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            flex items-center gap-2 px-5 py-2 rounded-full font-semibold border-2 transition-all duration-300
            ${
              categoriaSeleccionada === cat
                ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white border-blue-600 shadow-lg scale-105"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-300
          `}
        >
          {iconosCategoria[cat] || <Camera size={18} />} {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
