
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Membership = () => {
  const tiers = [
    {
      name: "Email Community",
      price: "Free",
      description: "Stay connected with product thought leadership",
      features: [
        "Weekly product insights newsletter",
        "Community updates",
        "Event announcements",
        "Product leadership content"
      ],
      cta: "Join Free",
      highlighted: false
    },
    {
      name: "The Back Room",
      price: "$99",
      period: "/month",
      description: "For product leaders seeking deeper connections",
      features: [
        "Everything in Email Community",
        "Monthly facilitated virtual lunches",
        "Private Slack community access",
        "1:1 matching with other CPOs",
        "Early access to exclusive events",
        "Personalized introductions"
      ],
      cta: "Try Free for 30 Days",
      highlighted: false
    }
  ];

  return (
    <section id="membership" className="section-padding bg-gradient-to-b from-cpo-off-white to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-64 -right-64 w-[30rem] h-[30rem] rounded-full bg-cpo-orange/5 blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-[30rem] h-[30rem] rounded-full bg-cpo-light-orange/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="section-heading text-center">Membership Options</h2>
        <p className="section-subheading text-center">
          Join the tight-knit group of leaders who don't just talk about making an impact – they actually do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`
                rounded-xl overflow-hidden transition-all flex flex-col hover:-translate-y-2 duration-300 
                ${tier.highlighted 
                  ? 'shadow-xl border-2 border-cpo-orange bg-white transform md:scale-105 md:-translate-y-2' 
                  : 'shadow-xl border border-gray-200 bg-white hover:shadow-2xl hover:border-cpo-orange/30'
                }
              `}
            >
              <div className="p-8 flex flex-col flex-grow bg-gradient-to-br from-white via-white to-cpo-off-white/30">
                <h3 className="text-2xl font-bold text-cpo-charcoal mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-cpo-orange">{tier.price}</span>
                  {tier.period && (
                    <span className="text-cpo-light-charcoal ml-1">{tier.period}</span>
                  )}
                </div>
                <p className="text-cpo-light-charcoal mb-6">
                  {tier.description}
                </p>
                
                <div className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-cpo-orange/10 p-1 rounded-full">
                        <Check className="h-4 w-4 text-cpo-orange" />
                      </div>
                      <span className="text-sm text-cpo-light-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`bg-gradient-to-r from-cpo-orange to-cpo-light-orange hover:from-cpo-light-orange hover:to-cpo-orange text-white px-8 py-6 text-lg rounded-md font-medium transition-all w-full mt-auto shadow-lg hover:shadow-cpo-orange/30`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
