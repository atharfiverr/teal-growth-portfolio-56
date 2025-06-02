
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechFlow Solutions",
      content: "Working with this marketing expert transformed our business. Our organic traffic increased by 320% in just 6 months, and our ROI has never been better. Highly recommend!",
      rating: 5,
      avatar: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthApp",
      content: "The app marketing strategies implemented were game-changing. We saw a 450% increase in downloads and significantly improved user retention. Exceptional work!",
      rating: 5,
      avatar: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, E-Shop Plus",
      content: "The performance marketing optimization reduced our customer acquisition cost by 55% while doubling our conversion rate. Simply outstanding results!",
      rating: 5,
      avatar: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={`https://images.unsplash.com/${testimonial.avatar}?w=80&h=80&fit=crop&crop=face`}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
