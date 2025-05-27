import { useState } from "react";
import { Mail, Lock, User, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // UX: mostrar/ocultar contraseña
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Actualizar los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validar y simular registro
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validaciones básicas
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Completa todos los campos.");
      return;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Si pasaron las validaciones:
    setSuccess(true);
    // Aquí conectarías con el backend o API
  };

  return (
    <div className="min-h-screen flex flex-1 flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#f4f6f8] to-[#e2e8f0]">
      <motion.form
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Registrate</h2>

        {error && <p className="mb-4 text-red-600 text-center">{error}</p>}
        {success && (
          <p className="mb-4 text-green-600 text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            ¡Registro exitoso!
          </p>
        )}

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
              value={formData.nombre}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-all duration-150 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#374151] mb-1 text-left">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-all duration-150 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Contraseña */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#374151] mb-1 text-left">
            Contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`pl-10 pr-10 py-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-all duration-150 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blue-400 ${
                formData.password && formData.password.length < 6
                  ? "border-red-500"
                  : ""
              }`}
              autoComplete="off"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 cursor-pointer"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          {/* Tooltip si la contraseña es corta */}
          {formData.password && formData.password.length < 6 && (
            <span className="text-xs text-red-500 pl-1">
              Mínimo 6 caracteres
            </span>
          )}
        </div>

        {/* Confirmar contraseña */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#374151] mb-1 text-left">
            Confirmar contraseña
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="pl-10 pr-10 py-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-all duration-150 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 cursor-pointer"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-95 transition-all"
        >
          Registrarse
        </button>

        <p className="mt-4 text-sm text-center">
          ¿Ya tenés cuenta?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Iniciar sesión
          </Link>
        </p>
      </motion.form>
    </div>
  );
}

export default Register;
