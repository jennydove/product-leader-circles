
import { MessageCircle, Users, Lightbulb } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      title: "Real Conversations",
      description: "Cut through the noise with candid, off-the-record discussions that address the challenges you actually face.",
      icon: <MessageCircle className="h-12 w-12 text-cpo-orange/80 mb-4" />
    },
    {
      title: "Meaningful Connections",
      description: "Build real relationships with people who understand your challenges and can provide relevant support.",
      icon: <Users className="h-12 w-12 text-cpo-orange/80 mb-4" />
    },
    {
      title: "Practical Insights",
      description: "Walk away with actionable takeaways and new ideas to drive your team forward and enhance your leadership.",
      icon: <Lightbulb className="h-12 w-12 text-cpo-orange/80 mb-4" />
    }
  ];

  return (
    <section id="why" className="section-padding bg-cpo-off-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">Why CPO Lunches?</h2>
        <p className="section-subheading text-center">
          A community designed specifically for the unique challenges of product leadership
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-xl flex flex-col items-center text-center">
              {benefit.icon}
              <h3 className="text-2xl font-semibold mb-3 text-cpo-charcoal">{benefit.title}</h3>
              <p className="text-cpo-light-charcoal">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-cpo-light-charcoal max-w-2xl mx-auto">
            "CPO Lunches created a space where I could finally be honest about my challenges. 
            It's the only professional group where I feel truly understood."
          </p>
          <p className="mt-4 font-semibold text-cpo-charcoal">- Sarah K., CPO at TechVenture</p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
