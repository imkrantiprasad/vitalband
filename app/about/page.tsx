'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <Header />

            <main className="container mx-auto px-4 py-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold text-white mb-6">About VitalBand</h1>
                        <p className="text-xl text-gray-300">Empowering seniors with independence and families with peace of mind.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
                            <p className="text-gray-300">
                                By 2030, more than 194 million Indians will be over sixty, yet most will continue to live in their own homes - often in cities far from their adult children. VitalBand was born from this reality, combining innovative technology with compassionate care.
                            </p>
                            <p className="text-gray-300">
                                We believe that technology should enhance independence, not complicate it. That's why we've created a solution that's both powerful and simple to use.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <Image
                                src="/images/Old woman wearing band 1.png"
                                alt="Senior using VitalBand"
                                width={500}
                                height={500}
                                className="rounded-lg"
                            />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-800/50 p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">Senior-First Design</h3>
                            <p className="text-gray-300">Comfortable, screenless device that seniors actually want to wear, with week-long battery life.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-800/50 p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">Family Connection</h3>
                            <p className="text-gray-300">Multi-caregiver support with WhatsApp alerts and updates in the languages families use.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-800/50 p-6 rounded-lg"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">Peace of Mind</h3>
                            <p className="text-gray-300">24/7 monitoring with instant emergency response and real-time health insights.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-6">Our Commitment</h2>
                        <p className="text-gray-300">
                            We're committed to providing reliable, accessible technology that helps families stay connected and seniors stay independent. With VitalBand, you're not just getting a device - you're gaining a partner in care.
                        </p>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
