import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="text-center py-20 px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Sell Unused Software Licenses Easily
      </motion.h2>
      <p className="text-lg mb-6">
        Turn unused software into money in just a few clicks.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition rounded-full">
        Get a Quote
      </button>
    </section>
  );
};

export default HeroSection;

