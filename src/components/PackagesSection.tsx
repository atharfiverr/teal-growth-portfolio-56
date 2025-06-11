
import { Check, ArrowRight, Star, Zap } from 'lucide-react';

const PackagesSection = () => {
  const packages = [
    {
      name: "SEO Audit & Strategy",
      price: "$297",
      duration: "One-time",
      popular: false,
      description: "Comprehensive website analysis with actionable SEO roadmap",
      features: [
        "Complete technical SEO audit",
        "Keyword research & analysis",
        "Competitor analysis",
        "Content optimization strategy",
        "Link building recommendations",
        "Detailed action plan",
        "30-day email support"
      ],
      cta: "Order Now",
      ctaUrl: "#"
    },
    {
      name: "Monthly SEO Package",
      price: "$897",
      duration: "/month",
      popular: true,
      description: "Ongoing SEO optimization with monthly reporting and strategy updates",
      features: [
        "Monthly keyword tracking",
        "Content creation & optimization",
        "Technical SEO improvements",
        "Link building campaigns",
        "Google Analytics setup",
        "Monthly performance reports",
        "Weekly strategy calls",
        "Priority support"
      ],
      cta: "Start Now",
      ctaUrl: "#"
    },
    {
      name: "Paid Ads Management",
      price: "$1,497",
      duration: "/month",
      popular: false,
      description: "Complete Google Ads, Meta Ads & TikTok Ads management with optimization",
      features: [
        "Campaign setup & optimization",
        "Google Ads management",
        "Meta Ads (Facebook/Instagram)",
        "TikTok Ads campaigns",
        "Landing page optimization",
        "Conversion tracking setup",
        "Bi-weekly performance reports",
        "24/7 campaign monitoring"
      ],
      cta: "Get Started",
      ctaUrl: "#"
    },
    {
      name: "Full Marketing Strategy",
      price: "$2,497",
      duration: "/month",
      popular: false,
      description: "Complete digital marketing solution combining SEO, paid ads, and strategy",
      features: [
        "Everything in SEO Package",
        "Everything in Paid Ads Package",
        "Social media strategy",
        "Content marketing plan",
        "Email marketing setup",
        "Marketing automation",
        "Weekly strategy sessions",
        "Dedicated account manager"
      ],
      cta: "Book Call",
      ctaUrl: "#"
    }
  ];

  const handleCTAClick = (packageName: string) => {
    // Here you can integrate with Stripe, PayPal, Calendly, or custom form
    console.log(`CTA clicked for: ${packageName}`);
    // Example: window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Marketing <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Choose the perfect package to accelerate your business growth with proven strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`glass-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up relative ${
                pkg.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star size={16} className="fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-gray-600 ml-1">{pkg.duration}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-primary" size={14} />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleCTAClick(pkg.name)}
                className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                  pkg.popular 
                    ? 'bg-primary text-white hover:bg-teal-600 shadow-lg' 
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {pkg.cta}
                {pkg.popular ? <Zap size={20} /> : <ArrowRight size={20} />}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
