
import { ExternalLink, TrendingUp, Users, DollarSign, Target, Search } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "E-commerce SEO Transformation",
      client: "Premium Fashion Retailer",
      problem: "Organic traffic declined 60% after Google algorithm update, losing $50K monthly revenue.",
      strategy: "Complete technical SEO overhaul, content optimization, and strategic link building campaign with competitor analysis.",
      results: [
        { icon: TrendingUp, metric: "850%", description: "Organic traffic increase" },
        { icon: Search, metric: "450", description: "New keyword rankings" },
        { icon: DollarSign, metric: "$180K", description: "Monthly organic revenue" }
      ],
      image: "photo-1498050108023-c5249f4df085",
      duration: "8 months",
      roas: "12:1"
    },
    {
      title: "Google Ads ROAS Optimization",
      client: "SaaS Platform Startup",
      problem: "High cost per acquisition ($450) and low conversion rates (1.2%) from Google Ads campaigns.",
      strategy: "Campaign restructuring, audience refinement, landing page optimization, and smart bidding implementation.",
      results: [
        { icon: DollarSign, metric: "680%", description: "ROAS improvement" },
        { icon: Target, metric: "75%", description: "Reduction in CPA" },
        { icon: TrendingUp, metric: "340%", description: "Conversion rate increase" }
      ],
      image: "photo-1461749280684-dccba630e2f6",
      duration: "4 months",
      roas: "6.8:1"
    },
    {
      title: "Meta Ads E-commerce Success",
      client: "Health & Wellness Brand",
      problem: "Struggling with Facebook ad fatigue and declining performance across Instagram campaigns.",
      strategy: "Creative refresh strategy, audience expansion, and retargeting funnel optimization with video content.",
      results: [
        { icon: Users, metric: "920%", description: "Reach expansion" },
        { icon: DollarSign, metric: "280%", description: "Revenue growth" },
        { icon: TrendingUp, metric: "65%", description: "Lower cost per sale" }
      ],
      image: "photo-1581091226825-a6a2a5aee158",
      duration: "6 months",
      roas: "5.2:1"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Proven <span className="text-primary">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Real case studies showcasing measurable growth and exceptional ROI for diverse businesses
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="glass-card rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      ROAS: {study.roas}
                    </div>
                  </div>
                  
                  <p className="text-primary font-semibold mb-6">{study.client} • {study.duration}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        Challenge
                      </h4>
                      <p className="text-gray-600">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        Strategy
                      </h4>
                      <p className="text-gray-600">{study.strategy}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        Results
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div 
                            key={resultIndex}
                            className="bg-white/50 rounded-2xl p-4 text-center hover:bg-white/80 transition-colors duration-300 border border-primary/10"
                          >
                            <result.icon className="text-primary mx-auto mb-2" size={24} />
                            <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                            <div className="text-gray-600 text-sm">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="glass-card rounded-3xl p-4 shadow-xl">
                  <img 
                    src={`https://images.unsplash.com/${study.image}?w=600&h=400&fit=crop`}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Similar Results?</h3>
            <p className="text-gray-600 mb-6">
              These are just a few examples of the transformative results I deliver. Let's discuss how I can help your business achieve similar growth.
            </p>
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              View Packages & Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
