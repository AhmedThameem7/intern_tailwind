import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from './CartContext';
import wrap from "./images/wrap.jpg";
import nuggets from "./images/nuggets.jpg";
import burger from "./images/burger.jpg";
import fried from "./images/fried.jpg";
import fries from "./images/fries.jpg";
import hotdog from "./images/hotdog.jpg";
import chia from "./images/chia oatmeal.jpg";
import macarons from "./images/macarons.jpg";
import icecream from "./images/ice cream.jpg";

function Prodbanner() {
  const { addToCart } = useContext(CartContext);

  const product = [
    { id: 1, src: burger, price: "Rs.98/-", des: 'Burger' },
    { id: 2, src: nuggets, price: "Rs.109/-", des: 'Nuggets' },
    { id: 3, src: wrap, price: "Rs.87/-", des: 'Chicken Wrap' },
    { id: 4, src: fries, price: "Rs.99/-", des: 'Fries' },
    { id: 5, src: fried, price: "Rs.209/-", des: 'Fried Chicken' },
    { id: 6, src: hotdog, price: "Rs.99/-", des: 'Hotdog' },
    { id: 7, src: chia, price: "Rs.109/-", des: 'Chia Oatmeal' },
    { id: 8, src: macarons, price: "Rs.99/-", des: 'Macarons' },
    { id: 9, src: icecream, price: "Rs.49/-", des: 'Ice Cream' }
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 m-12"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      {product.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded-lg flex flex-col hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src={item.src}
            alt={item.des}
            className="rounded-t-lg w-full h-64 object-cover"
          />
          <h3 className="text-center text-lg font-semibold text-black mt-4">{item.des}</h3>
          <h5 className="text-center text-red-600 font-medium mb-2">{item.price}</h5>
          <button
            className="bg-pink-300 hover:bg-purple-500 text-black font-semibold py-1 px-3 rounded-md w-fit mx-auto mb-4 transition"
            onClick={() => addToCart(item)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </motion.div>
  );
}

export default Prodbanner;
