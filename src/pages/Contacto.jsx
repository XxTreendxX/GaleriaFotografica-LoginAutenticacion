import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageCircle, Briefcase, Send } from "lucide-react";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    tipo: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones mínimas
    if (!form.nombre || !form.email || !form.tipo || !form.mensaje) {
      setError("Por favor completá todos los campos.");
      return;
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
    setForm({ nombre: "", email: "", tipo: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen flex flex-1 flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#f4f6f8] to-[#e2e8f0]">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-md"
      >
        <h1 className="text-3xl font-bold mb-2 text-center text-[#1F2937]">
          ¿Listo para tu próxima sesión?
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          Contame qué proyecto tenés en mente y coordinemos juntos.
          <br />
          Fotografía profesional para retratos, eventos, productos y más.
        </p>
        <form onSubmit={handleSubmit} autoComplete="off">
          {/* Nombre */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#374151] mb-1 text-left">
              Nombre
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 shadow-sm"
                placeholder="Tu nombre completo"
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#374151] mb-1 text-left">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 shadow-sm"
                placeholder="nombre@empresa.com"
              />
            </div>
          </div>
          {/* Tipo de proyecto */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#374151] mb-1 text-left">
              ¿Qué tipo de proyecto?
            </label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 shadow-sm bg-white"
              >
                <option value="">Elegí una opción</option>
                <option value="Retrato">Retrato personal/profesional</option>
                <option value="Evento">Evento social o empresarial</option>
                <option value="Producto">Producto/Marca</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>
          {/* Mensaje */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#374151] mb-1 text-left">
              Detalles del proyecto o mensaje
            </label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                className="pl-10 pr-4 pt-2 pb-2 w-full border rounded focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 shadow-sm resize-none"
                placeholder="Contame más sobre tu idea, fechas, ubicación, presupuesto estimado..."
              />
            </div>
          </div>
          {/* Feedback */}
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          {success && (
            <p className="text-green-600 text-center mb-4 flex items-center gap-2 justify-center">
              <Send className="w-5 h-5" />
              ¡Mensaje enviado! Te responderé a la brevedad.
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-95 transition-all"
          >
            <Send className="w-5 h-5" />
            Enviar consulta
          </button>
        </form>
        {/* Extra: tus redes o WhatsApp */}
        <div className="mt-8 text-center text-sm text-gray-500">
          ¿Preferís contacto directo? <br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            WhatsApp
          </a>
          {"  |  "}
          <a
            href="mailto:tuemail@ejemplo.com"
            className="text-blue-600 hover:underline font-medium"
          >
            Email directo
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacto;
