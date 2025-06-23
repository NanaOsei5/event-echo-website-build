
import { Button } from '@/components/ui/button';
import { Award, Users, Calendar, Star, Trophy, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, number: '500+', label: 'Events Planned', color: 'text-blue-500' },
    { icon: Users, number: '1000+', label: 'Happy Clients', color: 'text-green-500' },
    { icon: Award, number: '12+', label: 'Years Experience', color: 'text-purple-500' },
    { icon: Star, number: '150+', label: '5-Star Reviews', color: 'text-yellow-500' },
  ];

  const achievements = [
    { icon: Trophy, title: 'Best Event Planner 2023', subtitle: 'Ghana Tourism Awards' },
    { icon: Award, title: 'Cultural Excellence Award', subtitle: 'Ministry of Culture' },
    { icon: Heart, title: 'Community Impact Award', subtitle: 'Accra Chamber of Commerce' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-black/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-black/10 rounded-full mb-6">
              <span className="text-black font-medium">Our Story</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-black mb-8 leading-tight">
              Celebrating Ghana's
              <span className="block text-black bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Rich Heritage
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-stone-600 font-inter leading-relaxed">
              <p>
                <span className="font-semibold text-stone-800">SKO Consultancy</span> has been Ghana's trusted partner for exceptional event planning for over twelve years. We specialize in creating authentic experiences that honor our rich cultural traditions while meeting modern expectations.
              </p>
              
              <p>
                From traditional Akan ceremonies to contemporary corporate events, we understand the nuances of Ghanaian culture and bring unmatched expertise to every celebration. Our team combines local knowledge with international standards.
              </p>
              
              <p>
                Every event we create tells a story - your story - woven with the golden threads of Ghanaian heritage and the vibrant colors of modern celebration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-inter px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Our Full Story
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white font-inter px-8 rounded-full">
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-black/20 to-black/30 group-hover:from-black/30 group-hover:to-black/40 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-black" />
                  </div>
                </div>
                <div className="text-4xl font-playfair font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-inter text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-to-r from-black to-gray-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold mb-4">Recognition & Awards</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading organizations across Ghana
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-playfair font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {achievement.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
