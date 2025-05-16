
import { Check, Star } from "lucide-react";
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
      highlighted: true
    }
  ];

  return (
    <section id="membership" className="section-padding bg-cpo-off-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">Membership Options</h2>
        <p className="section-subheading text-center">
          Join the tight-knit group of leaders who don't just talk about making an impact – they actually do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`
                rounded-xl overflow-hidden transition-all
                ${tier.highlighted 
                  ? 'shadow-xl border-2 border-cpo-orange bg-white transform md:scale-105 md:-translate-y-2' 
                  : 'shadow-lg border border-gray-200 bg-white'
                }
              `}
            >
              {tier.highlighted && (
                <div className="bg-cpo-orange py-2 px-4 flex items-center justify-center gap-2">
                  <Star className="h-4 w-4 text-white" fill="white" />
                  <span className="text-sm font-medium text-white">MOST POPULAR</span>
                </div>
              )}
              
              <div className="p-8">
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
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 bg-cpo-off-white p-1 rounded-full">
                        <Check className="h-4 w-4 text-cpo-orange" />
                      </div>
                      <span className="text-sm text-cpo-light-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={tier.highlighted ? "btn-cpo w-full" : "btn-cpo-secondary w-full"}
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
