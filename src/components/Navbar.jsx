import { Link, NavLink } from "react-router";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navList = (
    <>
      <li>
        <NavLink to="/" className="hover:text-gray-500">
          Home
        </NavLink>
      </li>
      <li className="relative group">
        <NavLink
          to="/category"
          className="hover:text-gray-500 transition-colors duration-200"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Category
        </NavLink>
        <div className="absolute left-0 hidden pt-2 space-y-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block w-48 z-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <NavLink
            to="/category/men"
            className="block px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
          >
            Men
          </NavLink>
          <NavLink
            to="/category/kids"
            className="block px-6 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
          >
            Kids
          </NavLink>
        </div>
      </li>

      <li>
        <NavLink to="/appointment" className="hover:text-gray-500">
          Book appointment
        </NavLink>
      </li>

      <li>
        <NavLink to="/" className="hover:text-gray-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="hover:text-gray-500">
          Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center py-8 w-11/12 lg:w-9/12 mx-auto">
      <Link to="/" className="text-2xl font-bold font-second">
        Khan Tailor
      </Link>

      {/* wide menu */}
      <ul className="hidden md:flex space-x-6 text-[#737373]">{navList}</ul>

      {/* last part */}
      <div className="hidden md:block">
        <Button>Login</Button>
      </div>
      <div className="block md:hidden">
        <Drawer onOpenChange={(open) => setIsOpen(open)}>
          <DrawerTrigger>
            {isOpen ? (
              <IoCloseSharp className="text-3xl text-[#383838]" />
            ) : (
              <IoMenuOutline className="text-3xl text-[#383838]" />
            )}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold mb-2">
                Menu
              </DrawerTitle>
              <DrawerDescription>
                <div>
                  <ul className="space-y-4 mb-4">{navList}</ul>
                  <Button className="px-8">Login</Button>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
