import { Route, Routes } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Appointment from "@/Pages/Appointment/Appointment";
import Category from "@/Pages/Category/Category";
import ServiceDetails from "@/Pages/ServiceDetails/ServiceDetails";
import Login from "@/Pages/Login/Login";
import { Register } from "@/Pages/Register/Register";
import { AboutUs } from "@/Pages/AboutUs/AboutUs";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/serviceDetails/:id" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
}
