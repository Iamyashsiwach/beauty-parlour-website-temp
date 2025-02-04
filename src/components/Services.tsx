import React from 'react';
import { Sparkles } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Luxury Haircut & Styling',
    description: 'Personalized haircut and styling by our expert stylists',
    price: 'from $85',
    icon: Sparkles,
  },
  {
    id: 2,
    name: 'Facial Treatments',
    description: 'Rejuvenating facials customized for your skin type',
    price: 'from $120',
    icon: Sparkles,
  },
  {
    id: 3,
    name: 'Bridal Makeup',
    description: 'Complete bridal makeup packages for your special day',
    price: 'from $250',
    icon: Sparkles,
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in our premium beauty services designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md
                         transition-shadow duration-200"
            >
              <service.icon className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-rose-600 font-medium">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block border-2 border-rose-600 text-rose-600
                     px-8 py-3 rounded-full hover:bg-rose-600 hover:text-white
                     transition-colors duration-200"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;