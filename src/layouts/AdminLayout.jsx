import { Outlet } from "react-router-dom";
// Aquí podrías agregar un navbar/menú de admin si querés

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* <AdminSidebar /> */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
export default AdminLayout;
