import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function validarEmail(email) {
  // Expresión regular simple para validar emails
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // Validación en vivo
  const emailValido = !formData.email || validarEmail(formData.email);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Limpia error al tipear
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.email || !formData.password) {
      setError("Completá todos los campos.");
      return;
    }
    if (!validarEmail(formData.email)) {
      setError("Ingresá un correo válido.");
      return;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Simula login exitoso (reemplazá por tu lógica real)
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }, 700);
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
              className={`pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:border-blue-500 transition-all duration-150 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blue-400 ${
                formData.email && !emailValido ? "border-red-500" : ""
              }`}
              autoComplete="off"
            />
          </div>
          {/* Tooltip de email inválido */}
          {formData.email && !emailValido && (
            <span className="text-xs text-red-500 pl-1">
              Ingresá un correo electrónico válido.
            </span>
          )}
        </div>

        {/* Contraseña */}
        <div className="mb-2">
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

        {/* Recuperar contraseña */}
        <div className="flex justify-end mb-6">
          <Link
            to="/recuperar"
            className="text-xs text-blue-600 hover:underline font-medium"
          >
            ¿Olvidaste tu contraseña?
          </Link>
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
