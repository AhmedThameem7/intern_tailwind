import React from "react";
import Banner from "./Banner";
import { motion } from "framer-motion";
import slide from "./images/slide.webp";
import veggies from "./images/veggies.jpg";
import meat from "./images/meat.png";
import bread from "./images/bread.jpg";
function Main() {
  return (
    <div className="overflow-x-hidden">
      <motion.h2
        className="h11 text-center font-mono text-[#8686ac] text-2xl mt-24 mb-5"
        initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        FEEL THE TASTE IN EVERY BITE!
      </motion.h2>

      <Banner />

      <h2 className="text-center font-mono text-xl text-[#8686ac] mt-12 mb-5">
        CLASSIC INGREDIENTS
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto my-12"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Meat */}
        <div className="relative w-full h-[150px] rounded-lg border border-gray-400 overflow-hidden group hover:bg-pink-300">
          <img
            src={meat}
            alt="Meat"
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <h4 className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-sans text-gray-800">
            Quality <br /> Meats
          </h4>
        </div>

        {/* Bread */}
        <div className="relative w-full h-[150px] rounded-lg border border-gray-400 overflow-hidden group hover:bg-pink-300">
          <img
            src={bread}
            alt="Bread"
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <h4 className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-sans text-gray-800">
            Fresh <br /> Breads
          </h4>
        </div>

        {/* Vegetables */}
        <div className="relative w-full h-[150px] rounded-lg border border-gray-400 overflow-hidden group hover:bg-pink-300">
          <img
            src={veggies}
            alt="Vegetables"
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <h4 className="hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center  font-sans text-gray-800">
            Fresh <br /> Vegetables
          </h4>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_2fr] bg-green-200  mx-auto rounded-md overflow-hidden">
        <motion.img
          className="h-[500px] rounded-lg mx-6 max-w-full m-auto"
          src={slide}
          alt="Slide"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        />
        <div className="p-4 md:p-8 ">
          <h3 className="mt-8 mb-4 text-xl font-semibold">
            Discover Our Menus
          </h3>
          <p className="mb-4 text-justify font-sans leading-7">
            At the heart of our kitchen is a passion for creating unforgettable
            dining experiences. Our menus are designed to celebrate fresh,
            locally sourced ingredients and bold, satisfying flavors. Whether
            you’re stopping by for a casual bite or planning a special night
            out, you'll find a variety of options to suit your taste.
          </p>

          <h3 className="mt-8 mb-4 text-xl font-semibold">
            Something for Everyone
          </h3>
          <p className="mb-4 text-justify font-sans leading-7">
            We believe great food brings people together. That's why our menus
            include a wide range of dishes, from comforting classics to inspired
            seasonal creations. Vegetarian, vegan, and gluten-free options are
            always available, so everyone at your table can find something
            delicious to enjoy.
          </p>

          <h3 className="mt-8 mb-4 text-xl font-semibold">Crafted With Care</h3>
          <p className="mb-4 text-justify font-sans leading-7">
            Every item on our menu is thoughtfully prepared by our team of
            talented chefs, who blend creativity with tradition to bring you
            meals that are as visually stunning as they are flavorful. From our
            carefully curated starters to our handcrafted desserts, quality and
            care are the foundation of everything we serve.
          </p>
        </div>
      </div>

      <h2 className="text-center font-mono text-xl text-[#8686ac] mt-24 mb-8">
        QUALITY FOODS IN AFFORDABLE PRICES
      </h2>
    </div>
  );
}

export default Main;
