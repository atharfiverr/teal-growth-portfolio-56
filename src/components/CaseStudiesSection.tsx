
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "E-commerce SEO Transformation",
      client: "Fashion Retailer",
      problem: "Poor organic visibility and declining website traffic despite having quality products.",
      strategy: "Comprehensive SEO audit, technical fixes, content optimization, and strategic link building campaign.",
      results: [
        { icon: TrendingUp, metric: "320%", description: "Increase in organic traffic" },
        { icon: Users, metric: "150%", description: "Growth in keyword rankings" },
        { icon: DollarSign, metric: "280%", description: "Boost in organic revenue" }
      ],
      image: "photo-1498050108023-c5249f4df085",
      duration: "6 months"
    },
    {
      title: "Mobile App Growth Campaign",
      client: "Fitness App Startup",
      problem: "Low app downloads and poor user acquisition despite significant ad spend.",
      strategy: "ASO optimization, targeted UA campaigns, and retention marketing to improve LTV.",
      results: [
        { icon: Users, metric: "450%", description: "Increase in app downloads" },
        { icon: DollarSign, metric: "65%", description: "Reduction in CAC" },
        { icon: TrendingUp, metric: "200%", description: "Improvement in retention" }
      ],
      image: "photo-1581091226825-a6a2a5aee158",
      duration: "4 months"
    },
    {
      title: "Performance Marketing Optimization",
      client: "SaaS Platform",
      problem: "High cost per acquisition and low conversion rates from paid advertising campaigns.",
      strategy: "Campaign restructuring, audience refinement, and conversion funnel optimization.",
      results: [
        { icon: DollarSign, metric: "55%", description: "Reduction in CPA" },
        { icon: TrendingUp, metric: "180%", description: "Increase in conversions" },
        { icon: Users, metric: "220%", description: "Growth in qualified leads" }
      ],
      image: "photo-1461749280684-dccba630e2f6",
      duration: "3 months"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Case <span className="text-primary">Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            Real results from real campaigns that drove exceptional growth
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
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                    <ExternalLink className="text-primary cursor-pointer hover:scale-110 transition-transform" size={20} />
                  </div>
                  
                  <p className="text-primary font-semibold mb-6">{study.client} • {study.duration}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p className="text-gray-600">{study.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Strategy</h4>
                      <p className="text-gray-600">{study.strategy}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div 
                            key={resultIndex}
                            className="bg-white/50 rounded-2xl p-4 text-center hover:bg-white/80 transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default CaseStudiesSection;
