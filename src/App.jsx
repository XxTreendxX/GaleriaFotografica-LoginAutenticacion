import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

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
import Feed from "./pages/Feed";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex min-h-screen">
          <Navbar />

          {/* Contenido principal */}
          <div className="flex flex-col flex-grow">
            <main className="flex-1 flex px-6 bg-gradient-to-br from-[#f4f6f8] to-[#e2e8f0]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/foto/:id" element={<FotoDetalle />} />
                <Route path="/sobre-mi" element={<SobreMi />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Rutas protegidas */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/admin" element={<AdminPanel />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
