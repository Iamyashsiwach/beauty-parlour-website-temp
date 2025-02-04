import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'haircut', name: 'Haircut & Styling', duration: '60 min', price: '$85' },
    { id: 'facial', name: 'Facial Treatment', duration: '90 min', price: '$120' },
    { id: 'makeup', name: 'Makeup Session', duration: '60 min', price: '$95' },
    { id: 'manicure', name: 'Manicure & Pedicure', duration: '90 min', price: '$75' },
    { id: 'bridal', name: 'Bridal Package', duration: '180 min', price: '$250' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM',
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Book an Appointment</h2>
          <p className="text-gray-600">
            Choose your service, select a date and time, and we'll take care of the rest
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-8">
            <h3 className="text-xl font-serif text-gray-900 mb-4">Select Service</h3>
            <div className="grid gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200
                    ${selectedService === service.id
                      ? 'border-rose-600 bg-rose-50'
                      : 'border-gray-200 hover:border-rose-600'
                    }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <p className="text-rose-600 font-semibold">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-gray-900 mb-4">Select Date</h3>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-gray-900 mb-4">Select Time</h3>
            <div className="grid grid-cols-3 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`p-2 text-center rounded-md transition-colors duration-200
                    ${selectedTime === time
                      ? 'bg-rose-600 text-white'
                      : 'bg-gray-100 hover:bg-rose-100 text-gray-700'
                    }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            className="w-full bg-rose-600 text-white px-6 py-3 rounded-md hover:bg-rose-700
                     transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
            disabled={!selectedService || !selectedDate || !selectedTime}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;