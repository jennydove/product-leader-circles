
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3')", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cpo-charcoal/90 to-cpo-charcoal/80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your Circle of <span className="text-cpo-light-orange">Product Leaders</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
          Join a global community of CPOs who trade insights, solve real problems, and build lasting, high-trust relationships.
        </p>
        <div className="flex justify-center">
          <Button className="bg-cpo-orange hover:bg-cpo-light-orange text-white px-8 py-6 text-lg rounded-md font-medium transition-all">
            Join the Conversation
          </Button>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-white opacity-70" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
