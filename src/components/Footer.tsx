
import { Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cpo-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-cpo-orange">CPO Lunches</span>
            </div>
            <p className="text-white/70 max-w-xs">
              An invitation-only community for Chief Product Officers and senior product leaders to connect, share insights, and grow together.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Our Team</a></li>
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
              <ul className="space-y-2">
                <li><a href="#membership" className="text-white/70 hover:text-cpo-orange transition-colors">Membership</a></li>
                <li><a href="#rules" className="text-white/70 hover:text-cpo-orange transition-colors">Guidelines</a></li>
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Events</a></li>
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CPO Lunches. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-white/70 hover:text-cpo-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
