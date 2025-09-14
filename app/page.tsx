'use client';

import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductCarousel from './components/ProductCarousel';
import PaymentMethods from './components/PaymentMethods';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Promo Ribbon */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-indigo-600 text-white text-center py-2 md:py-3 text-xs md:text-sm font-medium tracking-wide"
      >
        <span className="hidden sm:inline">Free shipping | 7-day returns | 1-year warranty</span>
        <span className="sm:hidden">Free shipping & returns</span>
      </motion.div>

      <Hero />

      {/* Trust Signals */}
      <section className="py-12 bg-slate-900/50 border-t border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-gray-300 font-medium text-center">Accepted Payment Methods</h3>
            <PaymentMethods />
          </motion.div>
        </div>
      </section>

      <ProductCarousel />
      <Benefits />
      <Testimonial />
      <Footer />
    </div>
  );
}