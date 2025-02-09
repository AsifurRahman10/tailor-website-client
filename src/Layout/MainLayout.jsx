import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
