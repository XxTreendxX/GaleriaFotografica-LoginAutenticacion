import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Image,
  Users,
  GalleryHorizontal,
  LogIn,
  UserPlus,
  Send,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", text: "Inicio", icon: <Home size={20} /> },
    { to: "/galeria", text: "Galería", icon: <GalleryHorizontal size={20} /> },
    { to: "/sobre-mi", text: "Sobre mí", icon: <Users size={20} /> },
    { to: "/contacto", text: "Contacto", icon: <Send size={20} /> },
    { to: "/login", text: "Iniciar sesión", icon: <LogIn size={20} /> },
    { to: "/register", text: "Registrarte", icon: <UserPlus size={20} /> },
  ];

  // Cierra el menú al navegar en mobile
  const handleNavClick = () => setOpen(false);

  return (
    <>
      {/* Hamburguesa SOLO en mobile/tablet */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md border md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu size={26} />
      </button>

      {/* Navbar lateral (sidebar) */}
      <aside
        className={`
          fixed z-40 left-0 top-0 h-screen w-60 bg-white shadow-md border-r flex flex-col
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Cerrar menú en mobile */}
        <div className="md:hidden flex justify-end p-2">
          <button
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Cerrar menú"
          >
            <X size={26} />
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 px-6 pt-5 pb-2 text-xl font-bold text-blue-600"
          onClick={handleNavClick}
        >
          <GalleryHorizontal size={28} /> RodriDev
        </Link>

        {/* Links navegación */}
        <nav className="flex flex-col gap-2 mt-8 px-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-2 px-4 py-2 rounded transition
                ${
                  location.pathname === link.to
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "hover:bg-blue-50 text-gray-700"
                }
              `}
              onClick={handleNavClick}
            >
              {link.icon} {link.text}
            </Link>
          ))}
        </nav>
        {/* Footer mini en el navbar */}
        <div className="mt-auto px-6 py-5 text-xs text-gray-400">
          © 2025 Rodrigo Otreras
        </div>
      </aside>

      {/* Overlay para cerrar el menú al hacer click fuera (solo mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
