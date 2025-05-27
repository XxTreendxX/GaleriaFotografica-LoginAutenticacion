import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ghost } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col items-center"
      >
        <Ghost className="w-16 h-16 text-blue-600 mb-6 animate-bounce" />
        <h1 className="text-5xl font-bold text-[#1F2937] mb-2 tracking-tight">
          404
        </h1>
        <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-500 mb-8">
          Lo que buscás no existe o fue movido.
          <br />
          Volvé al inicio o navegá usando el menú.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 active:scale-95 transition"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
