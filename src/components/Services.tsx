
import { Sparkles, Users, Calendar, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Traditional Weddings',
      description: 'Authentic Ghanaian wedding ceremonies blending rich traditions with modern elegance, honoring your cultural heritage.',
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional business events, conferences, and corporate celebrations that reflect Ghana\'s business excellence.',
    },
    {
      icon: Sparkles,
      title: 'Cultural Celebrations',
      description: 'Traditional festivals, naming ceremonies, and cultural events that showcase the beauty of Ghanaian heritage.',
    },
    {
      icon: Calendar,
      title: 'Event Coordination',
      description: 'Complete event management from planning to execution, ensuring every detail is perfectly orchestrated.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Specializing in authentic Ghanaian celebrations and modern events that honor tradition while embracing innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="border-stone-200 hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-stone-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-stone-600 font-inter leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
