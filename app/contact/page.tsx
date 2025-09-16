'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would normally process the form
        alert('Thank you for your message. We will get back to you soon!');
    };

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
                        <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
                        <p className="text-xl text-gray-300">We're here to help. Reach out to us for any questions or support.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <PhoneIcon className="w-6 h-6" />
                                        <div>
                                            <p className="font-medium">Phone Support</p>
                                            <p>+1 (800) VITAL-BAND</p>
                                            <p className="text-sm text-gray-400">Mon-Sat 9AM to 6PM IST</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <EnvelopeIcon className="w-6 h-6" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p>support@vitalband.com</p>
                                            <p className="text-sm text-gray-400">24/7 response time</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-300">
                                        <MapPinIcon className="w-6 h-6" />
                                        <div>
                                            <p className="font-medium">Office</p>
                                            <p>Bangalore, India</p>
                                            <p className="text-sm text-gray-400">By appointment only</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-white mb-4">Emergency Support</h3>
                                <p className="text-gray-300">
                                    For urgent device or service issues, please call our 24/7 emergency support line:
                                </p>
                                <p className="text-xl font-semibold text-indigo-400 mt-2">
                                    1800-VITAL-911
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
