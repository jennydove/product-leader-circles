
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cpo-charcoal via-cpo-light-charcoal to-cpo-orange/50 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cpo-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading drop-shadow-md">
          Ready to Meet Your People?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-body">
          Apply for an upcoming lunch or try the Back Room for free. It's time to connect with the leaders who get it.
        </p>
        <div className="flex justify-center">
          <Button className="bg-white hover:bg-cpo-off-white text-cpo-orange hover:text-cpo-light-orange border-2 border-transparent hover:border-white/20 px-8 py-6 text-lg rounded-md font-medium transition-all font-body shadow-xl hover:shadow-white/20">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
