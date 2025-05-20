
import { MessageCircle, Users, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const WhySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      title: "Real Conversations",
      description: "Cut through the noise with candid, off-the-record discussions that address the challenges you actually face.",
      icon: <MessageCircle className="h-12 w-12 text-white mb-4" />,
      delay: "0"
    },
    {
      title: "Meaningful Connections",
      description: "Build real relationships with people who understand your challenges and can provide relevant support.",
      icon: <Users className="h-12 w-12 text-white mb-4" />,
      delay: "150"
    },
    {
      title: "Practical Insights",
      description: "Walk away with actionable takeaways and new ideas to drive your team forward and enhance your leadership.",
      icon: <Lightbulb className="h-12 w-12 text-white mb-4" />,
      delay: "300"
    }
  ];

  return (
    <section id="why" className="section-padding bg-gradient-to-r from-cpo-off-white to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cpo-orange/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-12 left-12 w-32 h-32 bg-cpo-light-orange/10 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading text-center">Why CPO Lunches?</h2>
        <p className="section-subheading text-center">
          A community designed specifically for the unique challenges of product leadership
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`group bg-gradient-to-br from-cpo-orange to-cpo-light-orange p-1 rounded-lg shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${parseInt(benefit.delay) + (index * 150)}ms`
              }}
            >
              <div className="bg-white h-full p-8 rounded-[5px] flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-cpo-orange to-cpo-light-orange p-4 rounded-full shadow-md mb-6 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-cpo-charcoal">{benefit.title}</h3>
                <p className="text-cpo-light-charcoal">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-cpo-light-charcoal italic">
              "CPO Lunches created a space where I could finally be honest about my challenges. 
              It's the only professional group where I feel truly understood."
            </p>
            <p className="mt-4 font-semibold text-cpo-orange">- Sarah K., CPO at TechVenture</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
