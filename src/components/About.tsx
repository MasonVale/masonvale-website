import React from 'react';
import { Shield, Award, Clock, Leaf, CheckCircle, Users, MapPin, Phone, Mail, Star } from 'lucide-react';

const About: React.FC = () => {
  const commitments = [
    {
      icon: Shield,
      title: 'Health & Safety',
      text: 'Ensuring Compliance with Regulations',
      benefit: 'Your project meets all safety standards and legal requirements'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality', 
      text: 'Premium materials and expert craftsmanship',
      benefit: 'Your investment appreciates in value over time'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      text: 'Reliable project completion on schedule',
      benefit: 'You can plan your life around our dependable timelines'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      text: 'Eco-friendly solutions and renewable technologies',
      benefit: 'Reduce your environmental impact while saving on energy costs'
    },
  ];

  const teamMembers = [
    {
      name: 'Mason Vale',
      role: 'Founder & Lead Craftsman',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With over 15 years of experience in luxury renovations and bespoke construction.'
    },
    {
      name: 'Design Team',
      role: 'Interior & Architectural Design',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert designers creating stunning, functional spaces that exceed expectations.'
    },
    {
      name: 'Craftsmanship Team',
      role: 'Skilled Artisans',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dedicated craftspeople delivering exceptional quality in every detail.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-10 w-40 h-40 border border-gold-200 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gold-100 rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Mason Vale
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming spaces with precision, passion, and unparalleled craftsmanship
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury Renovation Project"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">15+</div>
                  <div className="text-sm text-black">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
              We specialise in prime renovations and remodelling across a wide spectrum of property types from Period and Luxury homes to Contemporary spaces and Bespoke New Builds. Our strength lies in strategic collaborations with leading brands and a network of highly dedicated, skilled craftspeople, architects, designers, and engineers.
            </p>
            
            <p className="font-sans text-lg leading-relaxed text-gray-700 mb-8">
              These dedicated, skilled personnel enable us to deliver comprehensive, end-to-end services. In all aspects of construction, including new builds, alterations, extensions, refurbishments, swimming pools, bespoke outdoor creations, plus Smart home technologies and renewable solutions tailored to each client's needs.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-gold-500 fill-current" />
                <Star className="w-5 h-5 text-gold-500 fill-current" />
                <Star className="w-5 h-5 text-gold-500 fill-current" />
                <Star className="w-5 h-5 text-gold-500 fill-current" />
                <Star className="w-5 h-5 text-gold-500 fill-current" />
              </div>
              <span className="font-sans text-gray-600">Rated 5.0 by our clients</span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-bold text-gold-500 mb-2">{stat.number}</div>
              <div className="font-sans text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-4">
              Meet Our Team
            </h3>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of experts brings together decades of experience in luxury construction and design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-serif text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <p className="font-sans text-gold-600 font-medium mb-3">{member.role}</p>
                  <p className="font-sans text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-in-left">
            <h3 className="font-serif text-3xl font-semibold text-gray-900 mb-8">
              Our Commitments
            </h3>
            
            <div className="space-y-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <commitment.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-gray-900 mb-2">
                      {commitment.title}
                    </h4>
                    <p className="font-sans text-gray-600 mb-2">
                      {commitment.text}
                    </p>
                    <p className="font-sans text-sm text-gold-600 font-medium">
                      {commitment.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gray-900 p-8 rounded-2xl text-white">
              <blockquote className="font-serif text-xl italic text-white mb-6">
                "Every detail matters and every project reflects the highest standards of craftsmanship and care."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="font-sans font-semibold">Mason Vale Team</div>
                  <div className="font-sans text-sm text-gray-300">Dedicated to Excellence</div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <span className="font-sans text-gray-700">07767812992</span>
              </div>
                              <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-500" />
                  <span className="font-sans text-gray-700">jake@mason-vale.com</span>
                </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gold-500" />
                <span className="font-sans text-gray-700">Serving the UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;