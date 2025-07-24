import React from "react";
import cartabt from "./images/cartabt.webp";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="overflow-x-hidden">
      <h1 className="text-rebeccapurple ml-5 mt-24 text-3xl font-bold">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto mt-8 gap-6 px-4">
        <div className="md:mr-5 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="mt-8 ml-7 text-[#272757] text-2xl font-semibold">Welcome to The Spicy Meal!</h2>
            <p className="m-12 flex justify-center text-justify text-base leading-8 indent-8">
              At The Spicy Meal, we’re all about bringing you mouth-watering flavors that make your taste buds dance. We’re a small, local food cart on a big mission: to create delicious, made-from-scratch meals that you can enjoy on the go. From fresh ingredients to bold spices, every dish we serve is crafted with love, passion, and a whole lot of care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <h2 className="mt-8 ml-7 text-[#272757] text-2xl font-semibold">Our Story</h2>
            <p className="m-12 flex flex-wrap justify-center text-justify text-base leading-8 indent-8 md:indent-8">
              What started as a dream to share our love for specific cuisine or type of food you serve with the world, has now become a community favorite. Whether you’re stopping by for a quick bite during lunch or grabbing dinner after a long day, we want to make sure you leave with a smile on your face and a full stomach. Our food cart is all about local ingredients, unique recipes, friendly service, eco-conscious practices, etc. We believe in the power of food to bring people together.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <img src={cartabt} alt="Food Cart About" className="w-3/5 mt-14 md:w-full h-5/6 " />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
