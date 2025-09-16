'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        image: "/images/Old woman wearing band other checking phone app.png",
        quote: "Vitalband gave me peace of mind for my parents. The SOS just works.",
        name: "Anita S.",
        role: "Caregiver"
    },
    {
        id: 2,
        image: "/images/Old woman wearing band 1.png",
        quote: "The battery life is amazing, and I love how it monitors my health without needing a smartphone.",
        name: "Rajesh M.",
        role: "Active Senior"
    }
];

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-12 md:py-16 bg-slate-900/50 border-t border-b border-slate-700/50">
            <div className="container mx-auto px-4">
                <div className="relative">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{
                                scale: index === currentIndex ? 1 : 0.95,
                                opacity: index === currentIndex ? 1 : 0,
                                x: '0%'
                            }}
                            transition={{ duration: 0.5 }}
                            className={`max-w-3xl mx-auto text-center px-4 absolute top-0 left-0 right-0 ${index === currentIndex ? 'relative' : ''
                                }`}
                        >
                            <div className="relative inline-block mb-6 md:mb-8">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75"></div>
                                <Image
                                    src={testimonial.image}
                                    alt={`${testimonial.name}'s Testimonial`}
                                    width={160}
                                    height={160}
                                    className="rounded-full relative w-32 h-32 md:w-40 md:h-40 object-cover"
                                />
                            </div>
                            <p className="text-xl md:text-2xl font-medium italic mb-3 md:mb-4 text-white leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div className="space-y-1">
                                <p className="text-base md:text-lg text-indigo-300">— {testimonial.name}</p>
                                <p className="text-sm text-gray-400">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center items-center space-x-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-indigo-500 w-4'
                                : 'bg-slate-600 hover:bg-slate-500'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
