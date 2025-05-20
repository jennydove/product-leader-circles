
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
    <section id="sponsor" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-cpo-off-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cpo-orange/5 rounded-full blur-xl"></div>
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-cpo-light-orange/10 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden h-full shadow-2xl">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('/lovable-uploads/692d3cb2-8c96-4543-94c3-8f5f0f8c5a93.png')", 
                  minHeight: "400px"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cpo-charcoal/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cpo-charcoal font-heading">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg text-cpo-light-charcoal mb-6">
              Connect with influential product leaders in an authentic environment where meaningful relationships are formed. This isn't just another networking event—it's a chance to become part of the conversation.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-cpo-charcoal">Benefits for Sponsors:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 hover:translate-x-1 transition-all duration-200">
                    <div className="bg-gradient-to-r from-cpo-orange to-cpo-light-orange p-1 rounded-full">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-cpo-light-charcoal">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg mb-8 shadow-lg border border-gray-100">
              <p className="text-cpo-charcoal font-medium italic">
                "Sponsoring CPO Lunches gave us more valuable product feedback in one afternoon than we got from months of traditional market research."
              </p>
              <p className="mt-2 text-cpo-light-orange font-medium">
                - Enterprise SaaS Vendor
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-cpo-orange to-cpo-light-orange hover:from-cpo-light-orange hover:to-cpo-orange text-white px-8 py-6 text-lg rounded-md font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
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
