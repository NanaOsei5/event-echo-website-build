
import { ExternalLink, Calendar, Users, MapPin } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Royal Kente Wedding',
      category: 'Traditional Wedding',
      description: 'A magnificent ceremony celebrating Ghanaian heritage with vibrant kente colors and traditional blessings',
      details: { guests: '350+', location: 'Accra', duration: '3 Days' },
      featured: true
    },
    {
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80',
      title: 'Ghana Business Summit',
      category: 'Corporate',
      description: 'International business conference showcasing Ghana\'s economic growth and opportunities',
      details: { guests: '500+', location: 'Kumasi', duration: '2 Days' },
      featured: false
    },
    {
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4752&q=80',
      title: 'Homowo Festival',
      category: 'Cultural Event',
      description: 'Vibrant celebration of Ghanaian traditions featuring traditional dances, music, and authentic cuisine',
      details: { guests: '1000+', location: 'Greater Accra', duration: '1 Day' },
      featured: true
    },
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Sacred Naming Ceremony',
      category: 'Traditional Ceremony',
      description: 'Sacred naming ceremony honoring new life with traditional blessings and family celebrations',
      details: { guests: '150+', location: 'Cape Coast', duration: '1 Day' },
      featured: false
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-black/10 rounded-full mb-6">
            <span className="text-black font-medium">Our Masterpieces</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-black mb-8">
            Celebrated
            <span className="block text-black">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Showcasing our finest celebrations across Ghana - from traditional ceremonies to modern corporate events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                item.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`aspect-[16/10] overflow-hidden ${item.featured ? 'lg:aspect-[21/9]' : ''}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-105 contrast-105 saturate-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="ml-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-playfair font-bold mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-200 font-inter mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {item.details.guests}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.details.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.details.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* View project button */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white hover:text-black transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all projects button */}
        <div className="text-center mt-16">
          <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            View All Projects
            <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
