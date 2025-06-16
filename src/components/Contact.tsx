
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Elegant Avenue', 'Boston, MA 02116'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(617) 555-0123', 'Mon-Fri 9AM-6PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@rafanellievents.com', 'events@rafanellievents.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9AM-6PM', 'Sat: 10AM-4PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6">
            Let's Create Something
            <span className="text-accent block">Beautiful Together</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Ready to start planning your extraordinary event? We'd love to hear about your vision and bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-stone-50 rounded-lg p-8">
              <h3 className="text-2xl font-playfair font-semibold text-stone-900 mb-6">
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
                    <Input placeholder="(555) 123-4567" className="border-stone-300" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                    Event Type
                  </label>
                  <Input placeholder="Wedding, Corporate Event, Social Celebration..." className="border-stone-300" />
                </div>
                
                <div>
                  <label className="block text-sm font-inter font-medium text-stone-700 mb-2">
                    Tell us about your vision
                  </label>
                  <Textarea 
                    placeholder="Describe your dream event, preferred dates, guest count, and any special requirements..."
                    rows={5}
                    className="border-stone-300"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-stone-900 hover:bg-stone-800 text-white font-inter">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <info.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-playfair font-semibold text-stone-900 mb-2">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-stone-600 font-inter">
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
