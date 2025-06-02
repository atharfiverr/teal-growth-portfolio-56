
import { Award, Brain, Target, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: TrendingUp, title: "SEO Strategy", description: "Advanced keyword research, technical SEO, and content optimization" },
    { icon: Target, title: "Performance Marketing", description: "Meta Ads, Google Ads, and conversion optimization" },
    { icon: Brain, title: "App Growth", description: "ASO, user acquisition, and retention strategies" },
    { icon: Award, title: "Analytics", description: "Data analysis, reporting, and ROI optimization" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            A passionate digital marketer with a proven track record of delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="glass-card rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 2 years of hands-on experience in digital marketing, I specialize in performance marketing, 
                SEO, and app growth strategies. My data-driven approach has helped businesses achieve remarkable growth 
                and ROI improvements.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm passionate about staying ahead of industry trends and leveraging the latest tools and techniques 
                to deliver exceptional results for my clients.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Google Ads Certified
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Meta Blueprint
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  SEO Expert
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <skill.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-card rounded-3xl p-8 shadow-xl animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Timeline</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary w-4 h-4 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="font-semibold text-gray-900">Senior Performance Marketing Specialist</h4>
                  <span className="text-primary font-medium">2023 - Present</span>
                </div>
                <p className="text-gray-600 mt-1">Leading performance marketing campaigns with 300%+ ROI improvements</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/60 w-4 h-4 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="font-semibold text-gray-900">Digital Marketing Specialist</h4>
                  <span className="text-primary font-medium">2022 - 2023</span>
                </div>
                <p className="text-gray-600 mt-1">Focused on SEO and app growth strategies, achieving top rankings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
