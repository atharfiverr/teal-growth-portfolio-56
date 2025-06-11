
import { Star, Quote, Award } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "Working with this digital marketing expert completely transformed our business. Our organic traffic increased by 850% in just 8 months, and our ROI has never been better. The SEO strategy was methodical and data-driven. Highly recommend!",
      rating: 5,
      avatar: "photo-1649972904349-6e44c42644a7",
      results: "850% traffic increase",
      logo: "TF"
    },
    {
      name: "Michael Rodriguez",
      position: "Founder, HealthPlus Supplements",
      company: "HealthPlus Supplements",
      content: "The Meta Ads campaigns delivered exceptional results. We achieved a 5.2:1 ROAS and expanded our reach by 920%. The creative strategy and audience targeting were spot-on. Our monthly revenue grew from $50K to $190K.",
      rating: 5,
      avatar: "photo-1486312338219-ce68d2c6f44d",
      results: "5.2:1 ROAS achieved",
      logo: "HP"
    },
    {
      name: "Emily Thompson",
      position: "Marketing Director, FashionForward",
      company: "FashionForward",
      content: "The Google Ads optimization reduced our customer acquisition cost by 75% while increasing conversions by 340%. The landing page optimization and smart bidding implementation were game-changers. Outstanding expertise and results!",
      rating: 5,
      avatar: "photo-1581091226825-a6a2a5aee158",
      results: "75% CPA reduction",
      logo: "FF"
    },
    {
      name: "David Chen",
      position: "CMO, StartupGrow",
      company: "StartupGrow",
      content: "As a startup, we needed proven strategies that worked fast. The comprehensive digital marketing approach helped us scale from zero to $500K ARR in 12 months. The TikTok Ads campaigns alone brought us 200+ qualified leads monthly.",
      rating: 5,
      avatar: "photo-1507003211169-0a1dd7228f2d",
      results: "$500K ARR in 12 months",
      logo: "SG"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Client <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Real testimonials from satisfied clients who achieved exceptional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              
              {/* Company Logo */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.avatar}?w=80&h=80&fit=crop&crop=face`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-primary text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{testimonial.logo}</span>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic mb-6">
                "{testimonial.content}"
              </p>

              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <div className="flex items-center gap-2">
                  <Award className="text-primary" size={20} />
                  <span className="font-semibold text-primary">{testimonial.results}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join These Success Stories</h3>
            <p className="text-gray-600 mb-6">
              Ready to achieve similar results for your business? Let's discuss your goals and create a winning strategy.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
