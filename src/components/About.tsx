import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Star, label: 'Years of Experience', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '10,000+' },
    { icon: Award, label: 'Expert Stylists', value: '25+' },
    { icon: Clock, label: 'Services Completed', value: '50,000+' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2008, Elegance Beauty Parlour has been at the forefront of beauty and wellness,
              providing exceptional services to our valued clients. Our journey began with a simple
              mission: to help every individual discover and enhance their natural beauty.
            </p>
            <p className="text-gray-600 mb-8">
              Today, we're proud to be one of the most trusted names in the beauty industry, known for
              our innovative treatments, skilled professionals, and commitment to excellence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-rose-50 rounded-lg">
                  <stat.icon className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Salon interior"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-xl font-serif text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower individuals through beauty, confidence, and self-expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;