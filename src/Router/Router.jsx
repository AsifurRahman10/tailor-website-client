import { Route, Routes } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Appointment from "@/Pages/Appointment/Appointment";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
      </Route>
    </Routes>
  );
}
