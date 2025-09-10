import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/cartSlice";

export const ProductTile = ({ products }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); // ✅ fixed

  function handleAddtoCart() {
    dispatch(addToCart(products));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(products.id));
  }

  const inCart = cart.some((item) => item.id === products.id);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center border border-gray-200 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      {/* Product Image */}
      <div className="flex justify-center items-center w-full mb-4">
        <img
          src={products?.image}
          alt={products?.title}
          className="w-36 h-36 object-contain drop-shadow-md"
        />
      </div>

      {/* Product Title */}
      <h1 className="text-gray-900 font-semibold text-center text-sm md:text-base mb-3 line-clamp-2">
        {products?.title}
      </h1>

      {/* Price */}
      <p className="text-green-600 font-bold text-lg mb-3">${products?.price}</p>

      {/* Add / Remove Cart Button */}
      <button
        onClick={inCart ? handleRemoveFromCart : handleAddtoCart}
        className={`w-full px-4 py-2 rounded-md font-medium transition duration-300 ease-in-out shadow-md ${
          inCart
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};
