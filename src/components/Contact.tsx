import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['East Legon, Accra', 'Greater Accra Region, Ghana'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+233 24 123 4567', 'Mon-Fri 8AM-6PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@skoconsultancy.com', 'events@skoconsultancy.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8AM-6PM', 'Sat: 9AM-3PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-6">
            Let's Plan Your Next
            <span className="text-black block">Celebration Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Ready to create an unforgettable event that celebrates your unique story? We're here to make your vision come to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-playfair font-semibold text-black mb-6">
                Tell us about your event
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-stone-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-stone-300" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" className="border-stone-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                      Phone
                    </label>
                    <Input placeholder="+233 24 123 4567" className="border-stone-300" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                    Event Type
                  </label>
                  <Input placeholder="Traditional Wedding, Corporate Event, Cultural Celebration..." className="border-stone-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                    Tell us about your vision
                  </label>
                  <Textarea 
                    placeholder="Describe your dream event, preferred dates, guest count, cultural elements, and any special requirements..."
                    rows={5}
                    className="border-stone-300"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-inter">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-black/10 rounded-lg">
                  <info.icon className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-semibold text-black mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 font-inter">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
