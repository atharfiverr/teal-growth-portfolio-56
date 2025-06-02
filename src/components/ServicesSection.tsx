
import { Search, Target, Smartphone, BarChart3, Globe, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Strategy",
      description: "Comprehensive SEO audits, keyword research, technical optimization, and content strategy to boost organic rankings and traffic.",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"]
    },
    {
      icon: Target,
      title: "Paid Ads / Performance Marketing",
      description: "Data-driven advertising campaigns across Google Ads, Meta, and other platforms to maximize ROI and conversions.",
      features: ["Google Ads", "Meta Advertising", "PPC Management", "Conversion Optimization"]
    },
    {
      icon: Smartphone,
      title: "App Marketing / Growth Strategy",
      description: "Complete app marketing solutions including ASO, user acquisition, retention campaigns, and growth optimization.",
      features: ["App Store Optimization", "User Acquisition", "Retention Campaigns", "In-App Analytics"]
    }
  ];

  const additionalServices = [
    { icon: BarChart3, title: "Analytics & Reporting", description: "Comprehensive performance tracking and insights" },
    { icon: Globe, title: "Content Marketing", description: "Strategic content creation and distribution" },
    { icon: Users, title: "Social Media Marketing", description: "Engaging social campaigns and community building" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive digital marketing solutions to accelerate your business growth
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="glass-card rounded-3xl p-8 shadow-xl animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={service.title}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
