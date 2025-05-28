import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Tus páginas
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import FotoDetalle from "./pages/FotoDetalle";
import SobreMi from "./pages/SobreMi";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <div className="flex min-h-screen bg-gradient-to-br from-[#f4f6f8] to-[#e2e8f0]">
          {/* NAVBAR: Siempre fijo y visible a la izquierda */}
          <Navbar />

          {/* MAIN: Padding left en desktop para no tapar el contenido */}
          <div className="flex-1 flex flex-col min-h-screen md:pl-60">
            <main className="flex-1 flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/foto/:id" element={<FotoDetalle />} />
                <Route path="/sobre-mi" element={<SobreMi />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<AdminPanel />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {/* El footer siempre abajo, dentro del main */}
            <Footer />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
