import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          Bienvenido, {user?.name || user?.email}
        </h1>
        <p className="mb-6 text-gray-700">Este es tu panel de administrador.</p>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
