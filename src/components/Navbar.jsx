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
      <li>
        <NavLink to="/appointment" className="hover:text-gray-500">
          Book an appointment
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
