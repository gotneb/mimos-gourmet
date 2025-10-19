import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-[#f8f6f0] px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/images/logo.png" 
            alt="Mimos Gourmet Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-gray-800">Mimos Gourmet</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/menu" className="text-gray-700 hover:text-[#ffabf2] transition-colors">
            Cardápio
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#ffabf2] transition-colors">
            Sobre
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#ffabf2] transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
