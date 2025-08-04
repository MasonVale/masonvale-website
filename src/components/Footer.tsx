import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <img 
                src="/src/assets/Screenshot_2025-08-04_at_02.49.14-removebg-preview.png" 
                alt="Mason Vale" 
               className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-wrap space-x-6">
              <Link 
                to="/" 
                className="font-sans text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="font-sans text-gray-400 hover:text-white transition-colors duration-300"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="font-sans text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-sans text-gray-400 mb-2">
              Copyright © 2025 Mason Vale. All rights reserved.
            </p>
            <p className="font-sans text-gray-400 text-sm">
              Jake Amrit
            </p>
            <p className="font-sans text-gray-400 text-sm mt-1">
              Other Names
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;