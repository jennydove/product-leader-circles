
import { Users, MessageSquare, Handshake } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Curated Small Groups",
      description: "Carefully selected groups of 6-8 senior product leaders who can relate to your specific challenges."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Facilitated Discussions",
      description: "Guided conversations that ensure everyone contributes and the discussions remain valuable."
    },
    {
      icon: <Handshake className="h-10 w-10 text-white" />,
      title: "Personal Introductions",
      description: "Thoughtful connections to other members with complementary experiences and challenges."
    }
  ];
  
  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-white to-cpo-off-white"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cpo-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cpo-light-orange/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left content */}
          <div className="md:w-1/2">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cpo-charcoal font-heading">
                The Experience
              </h2>
              <p className="text-lg text-cpo-light-charcoal mb-8">
                CPO Lunches creates a unique environment where senior product leaders can speak candidly about their challenges, share insights, and build meaningful connections.
              </p>
              <p className="text-lg text-cpo-light-charcoal mb-8">
                Unlike typical networking events, our gatherings are intentionally small and focus on creating an atmosphere of trust and authenticity. We believe the best professional growth happens when people can be honest about their struggles and successes.
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-gradient-to-r from-cpo-orange to-cpo-light-orange rounded-full"></div>
                <p className="text-lg font-medium text-cpo-orange">No scripts. No pretense. Just real talk.</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Features */}
          <div className="md:w-1/2">
            <div className={`bg-white p-8 rounded-lg shadow-xl border border-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 ${index !== 0 ? 'mt-8' : ''} transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="mt-1 bg-gradient-to-br from-cpo-orange to-cpo-light-orange p-3 rounded-lg shadow-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cpo-charcoal">{feature.title}</h3>
                    <p className="text-cpo-light-charcoal">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
