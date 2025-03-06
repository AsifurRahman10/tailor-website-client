import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { observe } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";

export default function MainLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = dispatch(observe());

    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
