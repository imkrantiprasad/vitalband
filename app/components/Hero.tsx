'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Language = 'en' | 'hi';

interface ContentType {
    heading: string;
    subheading: string;
    cta: string;
    stats: {
        users: string;
        cities: string;
        alerts: string;
    };
}

type ContentMap = Record<Language, ContentType>;

export default function Hero() {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

    const content: ContentMap = {
        en: {
            heading: "Vitalband—Stay Connected. Stay Safe.",
            subheading: "24/7 health tracking with instant SOS and location sharing.",
            cta: "Shop Vitalband",
            stats: {
                users: "10,000+ Active Users",
                cities: "25+ Cities",
                alerts: "99.9% Alert Accuracy"
            }
        },
        hi: {
            heading: "वाइटलबैंड—जुड़े रहें। सुरक्षित रहें।",
            subheading: "24/7 स्वास्थ्य ट्रैकिंग, तत्काल SOS और लोकेशन शेयरिंग।",
            cta: "वाइटलबैंड खरीदें",
            stats: {
                users: "10,000+ सक्रिय उपयोगकर्ता",
                cities: "25+ शहर",
                alerts: "99.9% अलर्ट सटीकता"
            }
        }
    };

    return (
        <section className="relative min-h-screen md:min-h-[90vh] flex items-center pt-8 md:pt-0">
            <div className="absolute top-4 right-4 z-10">
                <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value as Language)}
                    className="bg-white/10 text-white border border-gray-600 rounded-lg px-3 py-1"
                >
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                </select>
            </div>
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
                            priority
                        />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                            {content[selectedLanguage].heading}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            {content[selectedLanguage].subheading}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="/product"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/30 w-full sm:w-auto text-center"
                            >
                                {content[selectedLanguage].cta}
                            </motion.a>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                            {(Object.values(content[selectedLanguage].stats) as string[]).map((stat, index) => (
                                <div key={index} className="text-center">
                                    <p className="text-white font-semibold">{stat}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative mt-8 lg:mt-0"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-75"></div>
                        <div className="relative">
                            <Image
                                src="/images/Band preview 1.png"
                                alt="Vitalband Preview"
                                width={600}
                                height={600}
                                className="rounded-2xl shadow-2xl relative w-full max-w-lg mx-auto"
                                priority
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 text-white text-sm border border-white/20"
                            >
                                Real-time health monitoring
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
