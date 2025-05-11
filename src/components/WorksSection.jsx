import React from 'react';
import { motion } from 'framer-motion';

const WorksSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
        How It Works
      </h3>
      <div className="grid md:grid-cols-3 gap-8 text-center cursor-pointer">
        {[
          { step: "Upload License", icon: "📤" },
          { step: "Get Valuation", icon: "💰" },
          { step: "Get Paid", icon: "🏦" },
        ].map(({ step, icon }, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h4 className="text-xl font-medium">{step}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
