import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800  text-gray-800">
      <h3 className="text-2xl font-semibold text-center mb-8 hover:text-red-500">What Our Clients Say</h3>
      <div className="grid md:grid-cols-2 gap-6">

       <div className="bg-white dark:bg-gray-700  p-6 rounded shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
            <p className="italic">SoftSell helped us turn shelfware into revenue instantly.</p>   
            <p className="mt-4 font-medium">Abhimanyu Ray, CTO @ Google</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <p className="italic">The process was seamless and incredibly fast.</p>
              <p className="mt-4 font-medium">Rahul Sharma, Founder @ CodeCraft</p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;




