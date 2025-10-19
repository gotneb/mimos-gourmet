import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-[#f8f6f0] px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">🍰</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Sweet Delights Bakery</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/menu" className="text-gray-700 hover:text-orange-500 transition-colors">
            Menu
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Cart Button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-600 transition-colors">
          <span>🛒</span>
          <span>Cart (0)</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
