import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f4f6f8] to-[#e2e8f0]">
      <Navbar />
      <div className="flex-1 flex flex-col md:pl-60">
        <ScrollToTop />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default MainLayout;
