
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with multiple layers */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-gray-900/80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4752&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Black and white overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-white text-sm font-medium">Ghana's Premier Event Specialists</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 animate-fade-in leading-tight">
          <span className="block">Celebrating</span>
          <span className="block text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ghana's Heritage
          </span>
          <span className="block text-4xl md:text-5xl font-light mt-4">Through Exceptional Events</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter font-light mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in opacity-90">
          From traditional ceremonies to modern celebrations, we create unforgettable moments that honor our rich cultural traditions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="group bg-white text-black hover:bg-gray-100 font-inter px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-white/50 text-white hover:bg-white hover:text-black font-inter px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Our Story
          </Button>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs font-inter opacity-75">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
