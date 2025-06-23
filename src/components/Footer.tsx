import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              SKO Consultancy
            </h3>
            <p className="text-gray-300 font-inter leading-relaxed mb-4">
              Ghana's premier event consultancy firm, celebrating our rich cultural heritage while creating extraordinary moments for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors font-inter">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors font-inter">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors font-inter">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors font-inter">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors font-inter">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semib old mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 font-inter">Traditional Weddings</li>
              <li className="text-gray-300 font-inter">Corporate Events</li>
              <li className="text-gray-300 font-inter">Cultural Celebrations</li>
              <li className="text-gray-300 font-inter">Event Coordination</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-inter text-sm">
            © 2024 SKO Consultancy. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 font-inter text-sm">Made with</span>
            <Heart className="h-4 w-4 text-white fill-current" />
            <span className="text-gray-400 font-inter text-sm">for Ghana's celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
