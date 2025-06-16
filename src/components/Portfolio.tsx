
const Portfolio = () => {
  const portfolioItems = [
    {
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Traditional Kente Wedding',
      category: 'Traditional Wedding',
      description: 'A beautiful ceremony celebrating Ghanaian heritage with vibrant kente colors'
    },
    {
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80',
      title: 'Corporate Summit',
      category: 'Corporate',
      description: 'Professional business conference showcasing Ghana\'s economic growth'
    },
    {
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4752&q=80',
      title: 'Cultural Festival',
      category: 'Cultural Event',
      description: 'Vibrant celebration of Ghanaian traditions and cultural heritage'
    },
    {
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
      title: 'Naming Ceremony',
      category: 'Traditional Ceremony',
      description: 'Sacred naming ceremony honoring new life with traditional blessings'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Showcasing our finest celebrations across Ghana - from traditional ceremonies to modern events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-inter text-accent mb-2 tracking-wide">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-200 font-inter">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
