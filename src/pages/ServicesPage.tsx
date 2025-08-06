import React from 'react';
import { Home, Palette, TreePine, Zap, CheckCircle, Star, Award } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Development & Renovations',
      description: 'Comprehensive construction services from concept to completion',
      image: '/masonvale-website/project-images/12c63aa5-6ee6-4f2f-a405-ce4b1dd9383c.JPG',
      features: [
        'New Build Construction',
        'Period Property Restoration',
        'Contemporary Extensions',
        'Structural Alterations',
        'Basement Conversions',
        'Loft Conversions',
        'Kitchen & Bathroom Renovations',
        'Full Property Refurbishments'
      ],
      process: [
        'Initial Consultation & Site Survey',
        'Design Development & Planning',
        'Permits & Regulatory Approval',
        'Construction & Project Management',
        'Quality Assurance & Handover'
      ]
    },
    {
      icon: Palette,
      title: 'Tailored Interiors',
      description: 'Bespoke interior design solutions for luxury living spaces',
      image: '/masonvale-website/project-images/ec980f00-8f94-4829-ae1e-724f1189b70d.JPG',
      features: [
        'Luxury Interior Design',
        'Custom Furniture & Joinery',
        'High-End Material Selection',
        'Lighting Design & Installation',
        'Art & Accessory Curation',
        'Color Consultation',
        'Space Planning & Optimization',
        'Bespoke Storage Solutions'
      ],
      process: [
        'Lifestyle & Needs Assessment',
        'Concept Development & Mood Boards',
        '3D Visualization & Presentations',
        'Material & Furniture Procurement',
        'Installation & Styling'
      ]
    },
    {
      icon: TreePine,
      title: 'Outdoor Lifestyle',
      description: 'Creating stunning outdoor spaces and landscape designs',
      image: '/masonvale-website/project-images/12f23b25-8db0-4b38-bb5d-1ea0908be0ea.JPG',
      features: [
        'Luxury Swimming Pool Design',
        'Outdoor Kitchen & Dining Areas',
        'Landscape Architecture',
        'Garden Design & Planting',
        'Outdoor Lighting Systems',
        'Water Features & Fountains',
        'Pergolas & Outdoor Structures',
        'Sustainable Landscaping'
      ],
      process: [
        'Site Analysis & Soil Testing',
        'Landscape Design & Planning',
        'Hardscape Construction',
        'Planting & Softscape Installation',
        'Maintenance Planning'
      ]
    },
    {
      icon: Zap,
      title: 'Renewable Systems & Smart Technologies',
      description: 'Cutting-edge sustainable and smart home solutions',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      features: [
        'Solar Panel Installation',
        'Smart Home Automation',
        'Energy Management Systems',
        'Electric Vehicle Charging',
        'Heat Pump Systems',
        'Smart Security & CCTV',
        'Integrated Audio/Visual',
        'Climate Control Systems'
      ],
      process: [
        'Energy Audit & Assessment',
        'System Design & Integration',
        'Technology Installation',
        'System Configuration & Testing',
        'Training & Ongoing Support'
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full pt-20 bg-luxury-800">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up">
            Our Services
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gold-400 font-light max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive luxury construction and renovation services tailored to your vision
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-luxury-50' : 'bg-luxury-100'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-in-left`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-6 left-6 w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-slide-in-right`}>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                
                <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                    What We Offer
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                        <span className="font-sans text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                    Our Process
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                          {stepIndex + 1}
                        </div>
                        <span className="font-sans text-gray-700 pt-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-luxury-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 animate-fade-in-up">
            Why Choose Mason Vale
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">28+ Years Experience</h3>
              <p className="font-sans text-gray-300">
                Combined expertise from two trusted family businesses with a proven track record.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className="font-sans text-gray-300">
                Uncompromising standards and attention to detail in every project we undertake.
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Complete Service</h3>
              <p className="font-sans text-gray-300">
                End-to-end solutions from initial concept to final execution and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;