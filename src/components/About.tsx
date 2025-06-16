
import { Button } from '@/components/ui/button';
import { Award, Users, Calendar, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, number: '300+', label: 'Events Planned' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: Star, number: '50+', label: '5-Star Reviews' },
  ];

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6">
              Celebrating Ghana's Rich
              <span className="text-accent block">Cultural Heritage</span>
            </h2>
            
            <p className="text-lg text-stone-600 font-inter leading-relaxed mb-6">
              SKO Consultancy has been Ghana's trusted partner for exceptional event planning for over eight years. We specialize in creating authentic experiences that honor our rich cultural traditions while meeting modern expectations.
            </p>
            
            <p className="text-lg text-stone-600 font-inter leading-relaxed mb-8">
              From traditional Akan ceremonies to contemporary corporate events, we understand the nuances of Ghanaian culture and bring unmatched expertise to every celebration. Our team combines local knowledge with international standards.
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
