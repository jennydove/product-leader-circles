
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/692d3cb2-8c96-4543-94c3-8f5f0f8c5a93.png')", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cpo-charcoal/90 via-cpo-light-charcoal/85 to-cpo-orange/30"></div>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-cpo-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cpo-light-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 
          className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Find Your Circle of <span className="text-cpo-light-orange">Product Leaders</span>
        </h1>
        <p 
          className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Join a global community of CPOs who trade insights, solve real problems, and build lasting, high-trust relationships.
        </p>
        <div className={`flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button className="bg-gradient-to-r from-cpo-orange to-cpo-light-orange hover:from-cpo-light-orange hover:to-cpo-orange text-white px-8 py-6 text-lg rounded-md font-medium transition-all shadow-lg hover:shadow-cpo-orange/30 hover:shadow-xl hover:-translate-y-1">
            Join the Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
