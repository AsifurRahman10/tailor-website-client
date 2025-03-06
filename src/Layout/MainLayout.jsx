import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { observe } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";

export default function MainLayout() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = dispatch(observe());

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [dispatch]);

  if (loading) {
    return <p>Loading ....</p>;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
