'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonial() {
    return (
        <section className="py-12 md:py-16 bg-slate-900/50 border-t border-b border-slate-700/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center px-4"
                >
                    <div className="relative inline-block mb-6 md:mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75"></div>
                        <Image
                            src="/images/Old woman wearing band other checking phone app.png"
                            alt="Customer Testimonial"
                            width={160}
                            height={160}
                            className="rounded-full relative w-32 h-32 md:w-40 md:h-40 object-cover"
                        />
                    </div>
                    <p className="text-xl md:text-2xl font-medium italic mb-3 md:mb-4 text-white leading-relaxed">
                        "Vitalband gave me peace of mind for my parents. The SOS just works."
                    </p>
                    <p className="text-base md:text-lg text-indigo-300">— Anita S.</p>
                </motion.div>
            </div>
        </section>
    );
}
