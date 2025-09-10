import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";

export const CartTial = ({ cartTial }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartTial.id));
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6 border border-gray-200 hover:shadow-2xl transition-all duration-300 ease-in-out">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={cartTial?.image}
          alt={cartTial?.title}
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-lg bg-gray-50 p-2"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow w-full">
        {/* Product Title */}
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {cartTial?.title}
        </h1>

        {/* Price & Remove Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-5 gap-3 sm:gap-0">
          {/* Price */}
          <p className="text-lg sm:text-xl font-bold text-green-600">
            ${cartTial?.price.toFixed(2)}
          </p>

          {/* Remove Button */}
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
