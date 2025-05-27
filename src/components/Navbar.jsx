import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Image,
  LayoutGrid,
  User,
  Mail,
  LogIn,
  UserPlus,
  Camera,
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Inicio", icon: <Home className="w-5 h-5" /> },
  { to: "/galeria", label: "Galería", icon: <Image className="w-5 h-5" /> },
  { to: "/feed", label: "Feed", icon: <LayoutGrid className="w-5 h-5" /> },
  { to: "/sobre-mi", label: "Sobre mí", icon: <User className="w-5 h-5" /> },
  { to: "/contacto", label: "Contacto", icon: <Mail className="w-5 h-5" /> },
  {
    to: "/login",
    label: "Iniciar sesión",
    icon: <LogIn className="w-5 h-5" />,
  },
  {
    to: "/register",
    label: "Registrarte",
    icon: <UserPlus className="w-5 h-5" />,
  },
];

function Navbar() {
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 h-screen w-40 bg-white border-r border-gray-200 flex flex-col justify-between py-8 px-4">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <Camera className="w-6 h-6 text-black" />
        <span className="font-semibold tracking-wide text-sm">RodriDev</span>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-2 text-sm px-2 py-2 rounded-md transition-colors duration-200 ${
              location.pathname === link.to
                ? "bg-[#2563EB] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      {/* Pie opcional o redes (luego) */}
      <div className="text-xs text-gray-400 text-center mt-8">
        © 2025 Rodrigo Otreras
      </div>
    </aside>
  );
}

export default Navbar;
