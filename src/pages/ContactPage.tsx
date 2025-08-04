import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form logic would go here
    console.log('Contact form submission:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gray-900 text-white">
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
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Start Your Project
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="font-sans text-green-700">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="development">Development & Renovations</option>
                        <option value="interiors">Tailored Interiors</option>
                        <option value="outdoor">Outdoor Lifestyle</option>
                        <option value="smart">Smart Technologies</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                      Project Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="50k-100k">£50,000 - £100,000</option>
                      <option value="100k-250k">£100,000 - £250,000</option>
                      <option value="250k-500k">£250,000 - £500,000</option>
                      <option value="500k-1m">£500,000 - £1,000,000</option>
                      <option value="1m+">£1,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-vertical"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-black font-sans font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

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