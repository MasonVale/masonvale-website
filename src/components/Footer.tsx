import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = '/';
      return;
    }
    // If already on home page, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    // Check if we're on the contact page
    if (window.location.pathname !== '/contact') {
      // If not on contact page, navigate to contact first
      window.location.href = '/contact';
      return;
    }
    // If already on contact page, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServices = () => {
    // Check if we're on the services page
    if (window.location.pathname !== '/services') {
      // If not on services page, navigate to services first
      window.location.href = '/services';
      return;
    }
    // If already on services page, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <button 
                onClick={scrollToTop}
                className="font-sans text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={scrollToServices}
                className="font-sans text-gray-400 hover:text-white transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={scrollToContact}
                className="font-sans text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </button>
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