'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen md:min-h-[90vh] flex items-center pt-8 md:pt-0">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 md:space-y-8 text-center lg:text-left"
                    >
                        <Image
                            src="/images/Logo rectangle.jpg"
                            alt="Vitalband Logo"
                            width={160}
                            height={64}
                            className="mb-4 md:mb-8 rounded-lg mx-auto lg:mx-0"
                        />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                            Vitalband—Stay Connected. Stay Safe.
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            24/7 health tracking with instant SOS and location sharing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30 w-full sm:w-auto"
                            >
                                Shop Vitalband
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-indigo-500 text-indigo-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-500/10 transition-colors w-full sm:w-auto"
                            >
                                See how it works
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative mt-8 lg:mt-0"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-75"></div>
                        <Image
                            src="/images/Band preview 1.png"
                            alt="Vitalband Preview"
                            width={600}
                            height={600}
                            className="rounded-2xl shadow-2xl relative w-full max-w-lg mx-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
