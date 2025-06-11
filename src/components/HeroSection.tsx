
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, Globe, Users, Search } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <TrendingUp size={60} className="text-primary" />
      </div>
      <div className="absolute top-40 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Target size={50} className="text-primary" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap size={40} className="text-primary" />
      </div>
      <div className="absolute top-32 right-32 opacity-15 animate-float" style={{ animationDelay: '0.5s' }}>
        <BarChart3 size={45} className="text-primary" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
        <Globe size={35} className="text-primary" />
      </div>
      <div className="absolute top-60 left-32 opacity-15 animate-float" style={{ animationDelay: '2.5s' }}>
        <Search size={38} className="text-primary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-7xl mx-auto shadow-2xl animate-fade-in">
            
            {/* Credentials Banner */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Target size={16} />
                Top Rated on Fiverr
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <BarChart3 size={16} />
                Digital Marketing Strategist
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Search size={16} />
                SEO Specialist
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Marketing
              <span className="block text-primary">Strategist</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Specializing in <span className="text-primary font-semibold">Google Ads, Meta Ads, TikTok Ads & SEO</span>. 
              With <span className="text-primary font-semibold">6+ years</span> of experience and 
              <span className="text-primary font-semibold"> 500+ completed projects</span>, I help businesses 
              increase visibility by <span className="text-primary font-semibold">1000%+</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={scrollToPackages}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                View Packages
                <ArrowRight size={20} />
              </button>
              
              <button 
                onClick={scrollToContact}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Enhanced Stats with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="glass p-6 rounded-2xl group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="text-primary" size={20} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="glass p-6 rounded-2xl group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Target className="text-primary" size={20} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-2xl group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-primary/10 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BarChart3 className="text-primary" size={20} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">1000%+</div>
                <div className="text-gray-600">Visibility Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
