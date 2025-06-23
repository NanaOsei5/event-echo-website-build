
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Multiple layered backgrounds with animations */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-gray-900/90 animate-pulse"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4752&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'slowZoom 20s ease-in-out infinite alternate'
          }}
        />
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 animate-fade-in" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] animate-pulse" />
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-2xl animate-bounce delay-500" />
      <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-white/8 rounded-full blur-3xl animate-pulse delay-700" />
      
      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className="mb-8 animate-slide-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6 animate-glow">
            <span className="text-white text-sm font-medium">SKO Consultancy</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 leading-tight">
          <span className="block animate-fade-in transform hover:scale-105 transition-transform duration-300">Premium</span>
          <span className="block text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in delay-300 transform hover:scale-105 transition-transform duration-300">
            Events
          </span>
          <span className="block text-3xl md:text-4xl font-light mt-4 animate-fade-in delay-500">Ghana's Finest</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in delay-700">
          <Button 
            size="lg" 
            className="group bg-white text-black hover:bg-gray-100 font-inter px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
          >
            Our Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-white/50 text-white hover:bg-white hover:text-black font-inter px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-500 transform hover:scale-110 hover:-translate-y-2"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
            Watch
          </Button>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with animation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative animate-pulse">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
