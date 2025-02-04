import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Discover Your True Beauty
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience luxury beauty treatments tailored just for you
          </p>
          <a
            href="/booking"
            className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full
                     hover:bg-rose-700 transition-colors duration-200"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;