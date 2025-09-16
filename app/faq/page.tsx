'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
    {
        category: "Product",
        questions: [
            {
                q: "What makes VitalBand different from other health monitors?",
                a: "VitalBand is specifically designed for seniors with a screenless, comfortable design that lasts 7 days on a single charge. It features multi-language support, caregiver alerts via WhatsApp, and can work without a smartphone using our Care Hub."
            },
            {
                q: "Does VitalBand need to be connected to a phone?",
                a: "No, VitalBand can work independently with our optional Care Hub, which provides cellular connectivity. However, connecting to a smartphone enables additional features through our app."
            },
            {
                q: "Is VitalBand water-resistant?",
                a: "Yes, VitalBand is IP67 water-resistant, meaning it can withstand splashes, rain, and brief immersion in water up to 1 meter for 30 minutes."
            }
        ]
    },
    {
        category: "Features & Usage",
        questions: [
            {
                q: "How does the emergency SOS feature work?",
                a: "Press the SOS button for 3 seconds to activate emergency mode. This immediately alerts all designated caregivers via WhatsApp, SMS, and phone calls, sharing the wearer's location and vital signs."
            },
            {
                q: "How accurate is the fall detection?",
                a: "Our fall detection uses advanced algorithms to minimize false alarms. When a fall is detected, the band vibrates to check if the wearer is responsive before alerting caregivers."
            },
            {
                q: "What health metrics does VitalBand track?",
                a: "VitalBand monitors heart rate, SpO2 (blood oxygen), skin temperature, sleep patterns, and activity levels. Premium subscriptions provide additional insights and trends."
            }
        ]
    },
    {
        category: "Subscription & Support",
        questions: [
            {
                q: "What's included in the subscription?",
                a: "Basic subscription includes alerts for up to 3 caregivers, medication reminders, and WhatsApp notifications. Plus and Pro plans add more caregivers, IVR calls, regional language support, and professional monitoring."
            },
            {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, you can cancel your subscription at any time. Refunds are prorated based on usage for annual plans."
            },
            {
                q: "What kind of support do you provide?",
                a: "We offer 24/7 emergency support, regular customer service (9AM-6PM IST), and comprehensive online resources. Plus and Pro subscribers get priority support access."
            }
        ]
    },
    {
        category: "Technical",
        questions: [
            {
                q: "How long does the battery last?",
                a: "VitalBand typically lasts 7 days on a single charge with normal use. Battery life may vary based on feature usage and settings."
            },
            {
                q: "What's the range of the Care Hub?",
                a: "The Care Hub provides coverage throughout a typical home (up to 50 meters indoor range). Outdoor coverage is provided via cellular connectivity."
            },
            {
                q: "Is my health data secure?",
                a: "Yes, all data is encrypted and stored in compliance with DPDP Act 2023. We never share your personal health information with third parties."
            }
        ]
    }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={false}
            className="border-b border-slate-700/50"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex items-center justify-between text-left"
            >
                <span className="text-gray-200 font-medium">{question}</span>
                <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-gray-400">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <Header />

            <main className="container mx-auto px-4 py-24">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl text-gray-300">Find answers to common questions about VitalBand.</p>
                    </motion.div>

                    <div className="space-y-12">
                        {faqs.map((category) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <h2 className="text-2xl font-semibold text-white mb-6">{category.category}</h2>
                                <div className="bg-slate-800/50 rounded-lg p-4">
                                    {category.questions.map((faq) => (
                                        <FAQItem
                                            key={faq.q}
                                            question={faq.q}
                                            answer={faq.a}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-16 text-center bg-slate-800/50 rounded-lg p-8"
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">Still have questions?</h2>
                        <p className="text-gray-300 mb-6">Our support team is here to help you with any other questions.</p>
                        <a
                            href="/contact"
                            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Contact Support
                        </a>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
