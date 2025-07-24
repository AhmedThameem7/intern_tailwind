import React from "react";
import cntimg from "./images/cntimg.png";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      <h2 className="text-orange-400 mt-24 ml-8 text-2xl font-semibold">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-8 overflow-y-hidden">
        
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <form className="flex flex-col gap-4 ml-6 mr-6">
            <label className="font-bold">Name :</label>
            <input
              className="w-full md:w-[35rem] border p-2 rounded focus:outline-none focus:ring focus:ring-gray-300 hover:shadow-md"
              type="text"
              placeholder="Enter your name"
            />
            <label className="font-bold">Email :</label>
            <input
              className="w-full md:w-[35rem] border p-2 rounded focus:outline-none focus:ring focus:ring-gray-300 hover:shadow-md"
              type="email"
              placeholder="Enter your Email"
            />
            <label className="font-bold">Message :</label>
            <textarea
              className="w-full md:w-[35rem] h-20 border p-2 rounded focus:outline-none focus:ring focus:ring-gray-300 hover:shadow-md"
              placeholder="Leave your Message"
            />
            <button
              type="submit"
              className="w-full md:w-[35rem] h-8 rounded-full bg-black text-white font-bold hover:bg-red-600 hover:text-black transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <img
            src={cntimg}
            alt="Contact"
            className="h-[80%] object-contain "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
