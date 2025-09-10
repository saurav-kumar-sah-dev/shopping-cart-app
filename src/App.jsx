import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-inner mt-10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          {/* Left Side - CopyRight */}
          <p className="text-white text-sm sm:text-base font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Shopping Cart</span>. All rights reserved.
          </p>

          {/* Right Side - Author */}
          <p className="text-white text-sm sm:text-base mt-3 sm:mt-0">
            Made with <span className="text-red-300">❤️</span> by{" "}
            <span className="font-semibold text-yellow-300 hover:text-yellow-200 transition-colors duration-300 cursor-pointer">
              Saurav
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
