
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-cpo-orange' : 'text-white'} font-heading`}>CPO Lunches</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why" className={`${isScrolled ? 'text-cpo-charcoal' : 'text-white'} hover:text-cpo-orange transition-colors`}>Why Join</a>
          <a href="#experience" className={`${isScrolled ? 'text-cpo-charcoal' : 'text-white'} hover:text-cpo-orange transition-colors`}>The Experience</a>
          <a href="#rules" className={`${isScrolled ? 'text-cpo-charcoal' : 'text-white'} hover:text-cpo-orange transition-colors`}>Community Rules</a>
          <a href="#membership" className={`${isScrolled ? 'text-cpo-charcoal' : 'text-white'} hover:text-cpo-orange transition-colors`}>Membership</a>
          <a href="#sponsor" className={`${isScrolled ? 'text-cpo-charcoal' : 'text-white'} hover:text-cpo-orange transition-colors`}>Sponsorship</a>
          <Button className="btn-cpo">Join Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-cpo-charcoal' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            <a href="#why" className="text-cpo-charcoal hover:text-cpo-orange transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Why Join</a>
            <a href="#experience" className="text-cpo-charcoal hover:text-cpo-orange transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>The Experience</a>
            <a href="#rules" className="text-cpo-charcoal hover:text-cpo-orange transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Community Rules</a>
            <a href="#membership" className="text-cpo-charcoal hover:text-cpo-orange transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Membership</a>
            <a href="#sponsor" className="text-cpo-charcoal hover:text-cpo-orange transition-colors px-4 py-2" onClick={() => setIsMenuOpen(false)}>Sponsorship</a>
            <div className="px-4 pt-2">
              <Button className="btn-cpo w-full" onClick={() => setIsMenuOpen(false)}>Join Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
