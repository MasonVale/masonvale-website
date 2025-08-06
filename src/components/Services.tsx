import React from 'react';
import { Home, Palette, TreePine, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Development & Renovations',
      description: 'Comprehensive construction services from concept to completion',
    },
    {
      icon: Palette,
      title: 'Tailored Interiors',
      description: 'Bespoke interior design solutions for luxury living spaces',
    },
    {
      icon: TreePine,
      title: 'Outdoor Lifestyle',
      description: 'Creating stunning outdoor spaces and landscape designs',
    },
    {
      icon: Zap,
      title: 'Renewable Systems & Smart Technologies',
      description: 'Cutting-edge sustainable and smart home solutions',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-luxury-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-luxury-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-200 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-gold-600" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="font-sans text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;