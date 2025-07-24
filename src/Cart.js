import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import cart from './images/cart.png';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      const num = parseInt(item.price.slice(3, -2)); // e.g., Rs.98/- -> 98
      total += num;
    });
    return total;
  };

  return (
    <div className="min-h-[80vh] mt-[100px]">
      <h1 className="text-center text-gray-700 text-2xl font-semibold">
        YOUR CART <img src={cart} alt="Cart Icon" className="inline h-20 ml-2" />
      </h1>

      {cartItems.length === 0 ? (
        <h3 className="text-center text-lg mt-8">Cart is empty</h3>
      ) : (
        <div className="m-8 bg-green-300 rounded-lg p-8">
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-12 mb-8 items-center">
              <img src={item.src} alt={item.des} className="w-24 h-auto" />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">{item.des}</h3>
                <p className="text-lg">{item.price}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-600 text-white w-28 py-1 rounded hover:bg-green-500 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2 className="text-xl font-semibold">Total: Rs.{getTotal()}/-</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
