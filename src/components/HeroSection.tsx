
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <TrendingUp size={60} className="text-primary" />
      </div>
      <div className="absolute top-40 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Target size={50} className="text-primary" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap size={40} className="text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Performance Marketing
              <span className="block text-primary">Expert</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Driving growth through data-driven SEO strategies, performance marketing, and app growth campaigns. 
              <span className="text-primary font-semibold">2+ years</span> of proven results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                Let's Work Together
                <ArrowRight size={20} />
              </button>
              
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Campaigns Managed</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <div className="text-gray-600">Avg. Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
