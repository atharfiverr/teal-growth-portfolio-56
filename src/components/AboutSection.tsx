
import { Award, Brain, Target, TrendingUp, Star, Users } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: TrendingUp, title: "SEO Strategy", description: "Advanced keyword research, technical SEO, and content optimization" },
    { icon: Target, title: "Google Ads", description: "Search, Display, Shopping, and YouTube advertising campaigns" },
    { icon: Brain, title: "Meta Ads", description: "Facebook and Instagram advertising with advanced targeting" },
    { icon: Award, title: "TikTok Ads", description: "Creative video campaigns and viral marketing strategies" }
  ];

  const credentials = [
    { title: "Digital Marketing Strategist", company: "Innovista", year: "2024", type: "Current Role" },
    { title: "Top Rated Freelancer", company: "Fiverr", year: "Since 2019", type: "Platform Recognition" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            About Your <span className="text-primary">Digital Marketing Expert</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            6+ years of proven expertise in driving exceptional growth for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <div className="glass-card rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Expertise</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 6 years of hands-on experience in digital marketing, I specialize in creating 
                data-driven strategies that deliver measurable results. My expertise spans across SEO, 
                Google Ads, Meta Ads, and TikTok Ads, helping businesses achieve unprecedented growth.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I've successfully completed 500+ projects and helped top-tier websites increase their 
                visibility by over 1000%. As a Top Rated Freelancer on Fiverr since 2019 and currently 
                working as a Digital Marketing Strategist at Innovista, I bring proven expertise to every project.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3">Professional Experience</h4>
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-primary/5 rounded-xl">
                    <div>
                      <h5 className="font-semibold text-gray-900">{credential.title}</h5>
                      <p className="text-primary font-medium">{credential.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{credential.type}</p>
                      <p className="font-semibold text-primary">{credential.year}</p>
                    </div>
                  </div>
                ))}
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

        {/* Achievement Stats */}
        <div className="glass-card rounded-3xl p-8 shadow-xl animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">1000%+</div>
              <div className="text-gray-600">Visibility Increase</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-primary" size={28} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Top Rated</div>
              <div className="text-gray-600">Fiverr Since 2019</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={28} />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
