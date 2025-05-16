
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Sponsorship = () => {
  const benefits = [
    "Direct access to decision-making product leaders",
    "Honest feedback on product-market fit and messaging",
    "Build authentic relationships in an intimate setting",
    "Demonstrate thought leadership to a targeted audience",
    "Get insights on product development challenges and priorities"
  ];

  return (
    <section id="sponsor" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden h-full">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')", 
                  minHeight: "400px"
                }}
              >
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cpo-charcoal">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg text-cpo-light-charcoal mb-6">
              Connect with influential product leaders in an authentic environment where meaningful relationships are formed. This isn't just another networking event—it's a chance to become part of the conversation.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-cpo-charcoal">Benefits for Sponsors:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-cpo-orange/10 p-1 rounded-full">
                      <ArrowRight className="h-4 w-4 text-cpo-orange" />
                    </div>
                    <span className="text-cpo-light-charcoal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-cpo-off-white p-6 rounded-lg mb-8">
              <p className="text-cpo-charcoal font-medium">
                "Sponsoring CPO Lunches gave us more valuable product feedback in one afternoon than we got from months of traditional market research."
              </p>
              <p className="mt-2 text-cpo-light-charcoal">
                - Enterprise SaaS Vendor
              </p>
            </div>
            
            <Button className="bg-cpo-orange hover:bg-cpo-light-orange text-white px-8 py-6 text-lg rounded-md font-medium transition-all flex items-center gap-2">
              Sponsor a Lunch
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
