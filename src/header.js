import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "./images/cart.png";
import logo from "./images/logo.png";
import menu from "./images/menu.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => setOpen(!open);

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 bg-white z-[1000] px-4 py-2">
      <img src={logo} alt="logo" className="h-[70px] mt-2 md:h-[70px] sm:h-[50px]" />

      <nav
        className={`${
          open ? "flex flex-col absolute top-20 right-0 w-1/2 bg-white/90 rounded-md p-4 gap-4" : "hidden"
        } md:flex md:flex-row md:items-center md:gap-8 md:mr-14`}
      >
        <Link to="/" className="text-black font-semibold text-lg hover:text-red-600 transition-all">
          Home
        </Link>
        <Link to="/About" className="text-black font-semibold text-lg hover:text-red-600 transition-all">
          About
        </Link>
        <Link to="/Products" className="text-black font-semibold text-lg hover:text-red-600 transition-all">
          Products
        </Link>
        <Link to="/Contact" className="text-black font-semibold text-lg hover:text-red-600 transition-all">
          Contact Us
        </Link>
        <Link to="/Cart" className="text-black font-semibold text-lg hover:text-red-600 transition-all flex items-center">
          <img src={cart} alt="cart" className="h-5 mr-1" />
          Cart
        </Link>
        <Link to="/Login">
          <button className="bg-red-600 animate-bounce hover:bg-black hover:text-red-500 text-black font-bold rounded-md px-3 py-1 shadow-md transition-all">
            Login
          </button>
        </Link>
      </nav>

      <div className="block md:hidden">
        <img
          src={menu}
          alt="menu"
          className="h-6 w-6 cursor-pointer"
          onClick={handleMenu}
        />
      </div>
    </div>
  );
};

export default Header;
