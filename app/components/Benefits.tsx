'use client';

import { motion } from 'framer-motion';
import { BoltIcon, HeartIcon, ShieldExclamationIcon, Battery100Icon } from '@heroicons/react/24/outline';

const benefits = [
    {
        title: 'Emergency SOS in a tap',
        description: 'Alerts family and shares live location instantly.',
        icon: ShieldExclamationIcon,
        color: 'from-red-500 to-orange-500'
    },
    {
        title: 'Real-time vitals',
        description: "Heart rate, steps, sleep insights you'll actually use.",
        icon: HeartIcon,
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Fall detection',
        description: 'Auto-detects a hard fall and notifies your emergency contacts.',
        icon: BoltIcon,
        color: 'from-blue-500 to-indigo-500'
    },
    {
        title: '7-day battery',
        description: 'Go a full week on a single charge.',
        icon: Battery100Icon,
        color: 'from-purple-500 to-pink-500'
    }
];

export default function Benefits() {
    return (
        <section className="py-12 md:py-20 bg-slate-900/50 border-t border-b border-slate-700/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text px-4"
                >
                    Why Choose Vitalband?
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all hover:transform hover:-translate-y-1"
                        >
                            <div className="relative mb-6">
                                <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.color} rounded-full blur opacity-75`}></div>
                                <div className="relative bg-slate-800 rounded-full p-3 md:p-4 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
                                    <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">{benefit.title}</h3>
                            <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
