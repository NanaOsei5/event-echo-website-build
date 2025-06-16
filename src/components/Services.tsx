
import { Sparkles, Users, Calendar, Heart, Star, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Traditional Weddings',
      description: 'Authentic Ghanaian wedding ceremonies blending rich traditions with modern elegance, honoring your cultural heritage.',
      features: ['Custom Kente Integration', 'Traditional Music', 'Cultural Rituals'],
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional business events, conferences, and corporate celebrations that reflect Ghana\'s business excellence.',
      features: ['Executive Planning', 'Professional Catering', 'Brand Integration'],
      color: 'from-blue-500/20 to-indigo-500/20'
    },
    {
      icon: Sparkles,
      title: 'Cultural Celebrations',
      description: 'Traditional festivals, naming ceremonies, and cultural events that showcase the beauty of Ghanaian heritage.',
      features: ['Festival Coordination', 'Traditional Decor', 'Cultural Performances'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Calendar,
      title: 'Event Coordination',
      description: 'Complete event management from planning to execution, ensuring every detail is perfectly orchestrated.',
      features: ['Full-Service Planning', 'Vendor Management', '24/7 Support'],
      color: 'from-purple-500/20 to-violet-500/20'
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-stone-50 via-white to-stone-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-accent mr-2" />
            <span className="text-accent font-medium">Our Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-stone-900 mb-8">
            Premium Event
            <span className="block text-accent">Services</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Specializing in authentic Ghanaian celebrations and modern events that honor tradition while embracing innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8 relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/30 group-hover:from-accent/30 group-hover:to-accent/40 transition-all duration-300 mr-4">
                      <service.icon className="h-8 w-8 text-accent" />
                    </div>
                    <Award className="h-5 w-5 text-accent/60" />
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-semibold text-stone-900 mb-4 group-hover:text-stone-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-stone-600 font-inter leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-stone-500">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-playfair font-bold mb-4">Ready to Create Something Extraordinary?</h3>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and bring your dream event to life with authentic Ghanaian flair.
          </p>
          <button className="bg-accent text-stone-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors transform hover:scale-105">
            Start Planning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
