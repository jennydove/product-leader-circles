
import { Users, MessageSquare, Handshake } from "lucide-react";

const Experience = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-cpo-orange" />,
      title: "Curated Small Groups",
      description: "Carefully selected groups of 6-8 senior product leaders who can relate to your specific challenges."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-cpo-orange" />,
      title: "Facilitated Discussions",
      description: "Guided conversations that ensure everyone contributes and the discussions remain valuable."
    },
    {
      icon: <Handshake className="h-10 w-10 text-cpo-orange" />,
      title: "Personal Introductions",
      description: "Thoughtful connections to other members with complementary experiences and challenges."
    }
  ];
  
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cpo-charcoal">
              The Experience
            </h2>
            <p className="text-lg text-cpo-light-charcoal mb-8">
              CPO Lunches creates a unique environment where senior product leaders can speak candidly about their challenges, share insights, and build meaningful connections.
            </p>
            <p className="text-lg text-cpo-light-charcoal mb-8">
              Unlike typical networking events, our gatherings are intentionally small and focus on creating an atmosphere of trust and authenticity. We believe the best professional growth happens when people can be honest about their struggles and successes.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-1 w-16 bg-cpo-orange"></div>
              <p className="text-lg font-medium text-cpo-orange">No scripts. No pretense. Just real talk.</p>
            </div>
          </div>
          
          {/* Right content - Features */}
          <div className="md:w-1/2">
            <div className="bg-cpo-off-white p-8 rounded-lg">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-start gap-4 ${index !== 0 ? 'mt-8' : ''}`}>
                  <div className="mt-1 bg-white p-3 rounded-md shadow-sm">
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
