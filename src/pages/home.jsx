import { Circles } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { ProductTile } from "../components/product-tile";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 tracking-wide">
        🛍️ Explore Our Products
      </h1>

      {loading ? (
        // Loading State
        <div className="flex justify-center items-center h-80">
          <Circles
            height="120"
            width="120"
            color="rgb(59,130,246)" // Tailwind blue-500
            visible={true}
          />
        </div>
      ) : (
        <>
          {products && products.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((productItem) => (
                <ProductTile key={productItem.id} products={productItem} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-6">
              😕 No products available. Please try again later.
            </p>
          )}
        </>
      )}
    </div>
  );
};
