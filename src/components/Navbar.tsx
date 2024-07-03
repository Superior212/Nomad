"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

import { NavItems } from "@/lib/data";
import logo from "../assets/images/logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Mobile */}
      <nav className="md:hidden  p-2 flex items-center justify-between py-4 px-4 w-full">
        <Link className="text-white font-bold" to="/">
          <img src={logo} className="w-24 h-20" alt="logo" />
        </Link>
        <div>
          <Menu
            className="h-8 w-8 text-white-500 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Desktop */}
      <nav className="hidden md:flex fixed z-10   mx-auto p-2 items-center justify-between py-0 px-[3rem] w-full ">
        <Link className="text-white font-bold" to="/">
          <img src={logo} className="md:w-28 md:h-24" alt="logo" />
        </Link>
        <div>
          {NavItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="  text-white-400 mx-6">
              {item.title}
            </Link>
          ))}

          <Button className="btn-primary px-10">Join waitlist</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-start space-y-8 px-5 bg-primary-700 w-full h-[30vh] z-20 absolute top-0 left-0 pt-20">
            {NavItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="  text-white-400 mx-5">
                {item.title}
              </Link>
            ))}

            <Button className="btn-secondary font-bold text-white-400 mx-3">
              Register
            </Button>

            <div
              onClick={toggleMenu}
              className="w-10 h-10  cursor-pointer absolute top-0 right-3 flex items-center justify-center ">
              <X className="h-8 w-8 text-white-500 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
