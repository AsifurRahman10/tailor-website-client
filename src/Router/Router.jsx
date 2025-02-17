import { Route, Routes } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Appointment from "@/Pages/Appointment/Appointment";
import Category from "@/Pages/Category/Category";
import CategoryType from "@/Pages/Appointment/CategoryType";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:type" element={<CategoryType />} />
      </Route>
    </Routes>
  );
}
