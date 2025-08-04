import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToPage = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/Screenshot_2025-08-04_at_02.49.14-removebg-preview.png" 
              alt="Mason Vale" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigateToPage('/')}
              className="font-sans text-white hover:text-gold-400 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => navigateToPage('/about')}
              className="font-sans text-white hover:text-gold-400 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => navigateToPage('/services')}
              className="font-sans text-white hover:text-gold-400 transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => navigateToPage('/contact')}
              className="font-sans text-white hover:text-gold-400 transition-colors duration-300"
            >
              Contact
            </button>
            <a 
              href="tel:07767812992"
              className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-black font-sans font-semibold px-4 py-2 rounded-full transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gold-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 py-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => navigateToPage('/')}
                className="font-sans text-white hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => navigateToPage('/about')}
                className="font-sans text-white hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => navigateToPage('/services')}
                className="font-sans text-white hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
              >
                Services
              </button>
              <button 
                onClick={() => navigateToPage('/contact')}
                className="font-sans text-white hover:text-gold-400 transition-colors duration-300 px-4 py-2 text-left"
              >
                Contact
              </button>
              <a 
                href="tel:07767812992"
                className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-black font-sans font-semibold px-4 py-2 rounded-full transition-colors duration-300 mx-4 w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;