import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {

  return (
    <div className="min-h-screen w-full pt-20 bg-luxury-800">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gold-400 font-light max-w-3xl mx-auto animate-fade-in-up">
            Ready to transform your vision into reality? Let's discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href="tel:07767812992" 
                      className="font-sans text-gray-600 hover:text-gold-600 transition-colors duration-300"
                    >
                      07767812992
                    </a>
                    <p className="font-sans text-sm text-gray-500 mt-1">
                      Available Monday - Friday, 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:jake@mason-vale.com" 
                      className="font-sans text-gray-600 hover:text-gold-600 transition-colors duration-300"
                    >
                      jake@mason-vale.com
                    </a>
                    <p className="font-sans text-sm text-gray-500 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="font-sans text-gray-600">
                      167–169 Great Portland Street<br />
                      London W1
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <div className="font-sans text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Facebook className="w-5 h-5 text-gray-600 group-hover:text-black" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-black" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gray-100 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;