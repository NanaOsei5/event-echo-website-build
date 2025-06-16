
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Rafanelli Events
            </h3>
            <p className="text-stone-300 font-inter leading-relaxed mb-4">
              Creating extraordinary moments through meticulous planning and unparalleled attention to detail. Your dream event awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-stone-300 hover:text-white transition-colors font-inter">Home</a></li>
              <li><a href="#services" className="text-stone-300 hover:text-white transition-colors font-inter">Services</a></li>
              <li><a href="#portfolio" className="text-stone-300 hover:text-white transition-colors font-inter">Portfolio</a></li>
              <li><a href="#about" className="text-stone-300 hover:text-white transition-colors font-inter">About</a></li>
              <li><a href="#contact" className="text-stone-300 hover:text-white transition-colors font-inter">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-stone-300 font-inter">Wedding Planning</li>
              <li className="text-stone-300 font-inter">Corporate Events</li>
              <li className="text-stone-300 font-inter">Social Celebrations</li>
              <li className="text-stone-300 font-inter">Event Coordination</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 font-inter text-sm">
            © 2024 Rafanelli Events. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-stone-400 font-inter text-sm">Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span className="text-stone-400 font-inter text-sm">for unforgettable moments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
