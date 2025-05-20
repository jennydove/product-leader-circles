
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/lovable-uploads/f808272a-588b-4b3a-a943-1d4c26059863.png')", 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cpo-charcoal/90 to-cpo-charcoal/80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading">
          Find Your Circle of <span className="text-cpo-light-orange">Product Leaders</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-body">
          Join a global community of CPOs who trade insights, solve real problems, and build lasting, high-trust relationships.
        </p>
        <div className="flex justify-center">
          <Button className="bg-cpo-orange hover:bg-cpo-light-orange text-white px-8 py-6 text-lg rounded-md font-medium transition-all font-body">
            Join the Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
