import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useAuth } from "../hooks/useAuth"; // Si ya usás autenticación

function Login() {
  // const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // UX: mostrar/ocultar contraseña
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Simulación: validación básica
    if (!formData.email || !formData.password) {
      setError("Completá todos los campos.");
      return;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Simula login exitoso (reemplazá por tu lógica real de login)
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        navigate("/admin"); // Redirecciona después del login exitoso
      }, 1000);
    }, 700);
    // Si usás login real, reemplazá lo de arriba por tu lógica de login
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
        <h2 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        {error && <p className="mb-4 text-red-600 text-center">{error}</p>}
        {success && (
          <p className="mb-4 text-green-600 text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            ¡Login exitoso!
          </p>
        )}

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
        <div className="mb-6">
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
              className="pl-10 pr-10 py-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-all duration-150 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blue-400"
              autoComplete="off"
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 cursor-pointer"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-95 transition-all"
        >
          Iniciar sesión
        </button>

        <p className="mt-4 text-sm text-center">
          ¿No tenés cuenta?{" "}
          <Link to="/register" className="text-blue-600 underline">
            Registrate acá
          </Link>
        </p>
      </motion.form>
    </div>
  );
}

export default Login;
