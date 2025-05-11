import React from 'react';

const ChooseSection = () => {
  return (
    <section className="py-16 px-6">
      <h3 className="text-2xl font-semibold text-center mb-8 hover:text-orange-400">Why Choose Us</h3>
      <div className="grid md:grid-cols-4 gap-6">
        
        <div className="p-5 border rounded bg-gray-50 dark:bg-gray-800 text-gray-800 hover:text-orange-700">
            <h3 className="font-bold mb-2">Fast Payments</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Receive funds within 24 hours.</p>
        </div>
        <div className="p-5 border rounded bg-gray-50 dark:bg-gray-800 text-gray-800 hover:text-orange-600">
            <h3 className="font-bold mb-2">Secure Transfers</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">End-to-end encrypted processing.</p>
        </div>
        <div className="p-5 border rounded bg-gray-50 dark:bg-gray-800 text-gray-800 hover:text-orange-900">
            <h3 className="font-bold mb-2">Expert Support</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Get help from license specialists.</p>
        </div>
        <div className="p-5 border rounded bg-gray-50 dark:bg-gray-800 text-gray-800 hover:text-orange-300">
            <h3 className="font-bold mb-2">Best Prices</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">Maximize your license value.</p>
        </div>

      </div>
    </section>
  );
};

export default ChooseSection;





