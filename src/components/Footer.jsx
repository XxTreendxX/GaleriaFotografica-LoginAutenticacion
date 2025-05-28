import { Link } from "react-router-dom";

function Footer({ className = "" }) {
  return (
    <footer
      className={`w-full bg-gradient-to-t from-[#f4f6f8] to-[#e2e8f0] border-t border-gray-200 py-4 ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:pl-40 text-[#1F2937]">
        {/* Logo o nombre */}
        <a
          href="https://www.rodridev.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold tracking-tight text-blue-600 hover:text-blue-500 transition"
          aria-label="RodriDev"
        >
          RodriDev
        </a>
        {/* Derechos */}
        <p className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Rodrigo Otreras — Todos los derechos
          reservados
        </p>
        {/* Redes sociales */}
        <div className="flex space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rodrigo-nahuel-otreras-703a741a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.852 0-2.135 1.445-2.135 2.939v5.667H9.354V9h3.414v1.561h.047c.476-.902 1.636-1.85 3.368-1.85 3.602 0 4.265 2.37 4.265 5.455v6.286zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.068 0-1.142.926-2.069 2.069-2.069 1.142 0 2.068.927 2.068 2.069 0 1.141-.926 2.068-2.068 2.068zm1.777 13.019H3.561V9h3.553v11.452z" />
            </svg>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/XxTreendxX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.292 3.438 9.772 8.205 11.387.6.113.82-.26.82-.577v-2.01c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.731.083-.731 1.204.085 1.84 1.236 1.84 1.236 1.073 1.84 2.812 1.308 3.495.999.108-.777.42-1.308.763-1.61-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.222-.123-.303-.536-1.524.117-3.177 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.655 1.653.242 2.874.12 3.177.77.841 1.234 1.912 1.234 3.222 0 4.609-2.803 5.624-5.475 5.921.431.37.815 1.104.815 2.227v3.293c0 .319.217.694.825.576C20.565 22.271 24 17.791 24 12.5 24 5.873 18.627.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
