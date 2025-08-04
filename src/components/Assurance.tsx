import React from 'react';
import { 
  Users, 
  MessageCircle, 
  Star, 
  Hammer, 
  Calendar, 
  Shield, 
  Eye,
  CheckCircle,
  Award,
  Clock
} from 'lucide-react';

const Assurance: React.FC = () => {
  const pillars = [
    {
      icon: Users, 
      title: 'Proficiency',
      description: 'Skilled professionals delivering bespoke, high-end services. We empower clients with expert knowledge and guidance throughout the journey.'
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Clear, consistent communication with same-day responses to calls and emails. You\'ll always be in the loop.'
    },
    {
      icon: Award,
      title: 'Reputation & Reliability',
      description: '28+ years of combined experience from two trusted family businesses. Our foundation is built on trust, reliability, and consistent delivery.'
    },
    {
      icon: Hammer,
      title: 'Craftsmanship',
      description: 'Excellence is how we honour your investment. We raise the bar and deliver enduring results tailored to your vision.'
    },
    {
      icon: Calendar,
      title: 'Timelines & Budget',
      description: 'Streamlined planning, proactive management, and swift problem-solving to keep your project on track.'
    },
    {
      icon: Eye,
      title: 'Discretion You Can Trust',
      description: 'We work with high-net-worth clients. Photography is limited to protect client confidentiality. Portfolio available by private consultation.'
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gold-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gold-100 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-gold-200 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r from-gold-100 to-gold-200 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Why Work With Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                
                <p className="font-sans text-gray-700 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Assurance;