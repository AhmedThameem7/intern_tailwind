import React from "react";
import truck from "./images/trucka.avif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-black/90 py-6 px-4 md:px-0">
      <div className="col-span-1 flex flex-col items-center justify-center text-white text-center font-CormorantUpright text-xl tracking-widest leading-[3rem]">
        <h4>
          ENJOY <br /> OUR <br /> DELICIOUS <br /> MEAL
        </h4>
        <Link to="/Products">
          <button className="mt-12  bg-yellow-400 text-black font-bold py-2 px-4 rounded border-none hover:bg-slate-400">
            EXPLORE
          </button>
        </Link>
      </div>
      <div className="col-span-3 flex justify-center items-center mt-6 md:mt-0">
        <motion.img
          src={truck}
          alt="Food Truck"
          className="w-[90vw] rounded-3xl p-5 md:p-8"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />
      </div>
    </div>
  );
}

export default Banner;
