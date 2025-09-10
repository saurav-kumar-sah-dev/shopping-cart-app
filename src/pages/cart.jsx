import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartTial } from "../components/cart-tile";

export const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);

  // Select only the cart slice
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {cart && cart.length ? (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white shadow-xl rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-5 text-gray-800 flex items-center gap-2">
              🛒 Your Cart
            </h2>

            <div className="space-y-6">
              {cart.map((cartItem, index) => (
                <CartTial key={index} cartTial={cartItem} />
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 bg-white shadow-xl rounded-xl p-6 border border-gray-200 h-fit sticky top-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              Cart Summary 🧾
            </h1>

            <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-3">
              <span className="text-gray-700 text-lg font-medium">Total Items:</span>
              <span className="text-gray-900 font-semibold text-lg">{cart.length}</span>
            </div>

            <div className="flex justify-between items-center border-b border-gray-300 pb-3">
              <span className="text-gray-700 text-lg font-medium">Total Amount:</span>
              <span className="text-green-600 font-bold text-2xl">
                ${totalCart.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="Empty Cart"
            className="w-52 mb-6 opacity-80"
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            🛍️ Your cart is empty
          </h1>
          <p className="text-gray-500 mb-6">
            Looks like you haven’t added anything yet.
          </p>
          <NavLink to="/">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};
