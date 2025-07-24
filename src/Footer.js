import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="flex justify-center gap-28 pt-5 md:gap-40">
        <Link className="hover:scale-110 transition duration-500 opacity-100 hover:opacity-40">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
        </Link>
        <Link className="hover:scale-110 transition duration-500 opacity-100 hover:opacity-40">
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
        </Link>
        <Link className="hover:scale-110 transition duration-500 opacity-100 hover:opacity-40">
          <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
        </Link>
      </div>

      <div className="flex justify-center text-white gap-8 md:gap-16 pt-5 flex-wrap text-beige text-sm md:text-base">
        <Link to="/" className="no-underline text-beige hover:text-yellow-400">Home</Link>
        <Link to="/about" className="no-underline text-beige hover:text-yellow-400">About</Link>
        <Link to="/products" className="no-underline text-beige hover:text-yellow-400">Products</Link>
        <Link to="/contact" className="no-underline text-beige hover:text-yellow-400">Contact Us</Link>
      </div>

      <div className="text-white text-center mt-5 pb-5 text-xs md:text-sm font-sans">
        <h4>
          &copy; 2025 - <span className="text-red-500 text-sm">The Spicy Meal.</span> All Rights Reserved.
        </h4>
      </div>
    </div>
  );
}

export default Footer;
