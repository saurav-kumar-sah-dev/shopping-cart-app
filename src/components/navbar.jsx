import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Navbar = () => {
  // Select only the cart slice from the Redux store
  const cart = useSelector((state) => state.cart);

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/">
            <h1 className="text-2xl font-extrabold text-white tracking-wide hover:scale-105 transform transition-all duration-300 cursor-pointer">
              🛍️ Shopping Cart
            </h1>
          </NavLink>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8 sm:gap-12 text-white font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                      : "hover:text-yellow-300"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="relative">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition duration-300 ${
                    isActive
                      ? "text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-1"
                      : "hover:text-yellow-300"
                  }`
                }
              >
                <FaShoppingCart size={22} />
                Cart
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md border border-white">
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
