import { Route, Routes } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
