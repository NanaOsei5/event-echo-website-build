
import { Button } from '@/components/ui/button';
import { Award, Users, Calendar, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, number: '500+', label: 'Events Planned' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Star, number: '100+', label: '5-Star Reviews' },
  ];

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6">
              Crafting Unforgettable
              <span className="text-accent block">Experiences</span>
            </h2>
            
            <p className="text-lg text-stone-600 font-inter leading-relaxed mb-6">
              For over fifteen years, we have been the trusted choice for discerning clients who demand nothing less than perfection. Our team of seasoned professionals brings together creativity, precision, and an unwavering commitment to excellence.
            </p>
            
            <p className="text-lg text-stone-600 font-inter leading-relaxed mb-8">
              From intimate gatherings to grand celebrations, we understand that every detail matters. Our approach is deeply personal, ensuring that each event reflects the unique vision and style of our clients.
            </p>

            <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white font-inter px-8">
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-playfair font-bold text-stone-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-stone-600 font-inter text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
