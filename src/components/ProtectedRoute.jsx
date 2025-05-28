import { useAuth } from "../hooks/useAuth"; // o tu contexto de Auth
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./Loader";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  // Mientras se verifica la autenticación, mostrar un loader
  if (loading) return <Loader mensaje="Verificando acceso..." />;

  // Si no hay usuario, redirecciona al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderiza la ruta protegida
  return <Outlet />;
}

export default ProtectedRoute;