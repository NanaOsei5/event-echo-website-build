
import { ExternalLink, Calendar, Users, MapPin } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Royal Kente Wedding',
      category: 'Traditional Wedding',
      description: 'Magnificent Ghanaian heritage celebration',
      details: { guests: '350+', location: 'Accra', duration: '3 Days' },
      featured: true
    },
    {
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80',
      title: 'Ghana Business Summit',
      category: 'Corporate',
      description: 'International business conference showcase',
      details: { guests: '500+', location: 'Kumasi', duration: '2 Days' },
      featured: false
    },
    {
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4752&q=80',
      title: 'Homowo Festival',
      category: 'Cultural Event',
      description: 'Vibrant celebration of traditions',
      details: { guests: '1000+', location: 'Greater Accra', duration: '1 Day' },
      featured: true
    },
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Sacred Naming Ceremony',
      category: 'Traditional Ceremony',
      description: 'Sacred naming ceremony with blessings',
      details: { guests: '150+', location: 'Cape Coast', duration: '1 Day' },
      featured: false
    },
    {
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Modern Celebration',
      category: 'Contemporary Event',
      description: 'Elegant modern celebration',
      details: { guests: '200+', location: 'Takoradi', duration: '2 Days' },
      featured: false
    },
    {
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Beach Wedding',
      category: 'Destination Wedding',
      description: 'Romantic beachside ceremony',
      details: { guests: '120+', location: 'Cape Coast', duration: '1 Day' },
      featured: false
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce delay-500" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 animate-fade-in">
            Our Work
          </h2>
        </div>

        {/* Enhanced masonry grid layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 break-inside-avoid animate-scale-in ${
                item.featured ? 'md:col-span-2' : ''
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`relative overflow-hidden ${
                index % 3 === 0 ? 'aspect-[4/5]' : 
                index % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[5/6]'
              }`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2 brightness-105 contrast-105 saturate-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-125"
                />
                
                {/* Multiple overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]" />
                
                {/* Animated content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium animate-fade-in">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-playfair font-bold mb-2 transform translate-x-4 group-hover:translate-x-0 transition-all duration-400">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-gray-200 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-200 transform translate-y-4 group-hover:translate-y-0">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform translate-y-6 group-hover:translate-y-0">
                      <div className="flex items-center animate-slide-in">
                        <Users className="w-3 h-3 mr-1" />
                        {item.details.guests}
                      </div>
                      <div className="flex items-center animate-slide-in delay-100">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.details.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated view button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 rotate-180 group-hover:rotate-0">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-black transition-all duration-300 animate-bounce">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-500 transform scale-105 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Minimal CTA */}
        <div className="text-center mt-12">
          <button className="group bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none">
            View More
            <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
