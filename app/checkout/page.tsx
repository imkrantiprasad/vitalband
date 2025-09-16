'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/Header';

const hardwareVariants = {
    essential: {
        name: 'VitalBand Essential',
        price: 5499,
        description: 'Screenless band with health monitoring and SOS'
    },
    bundle: {
        name: 'VitalBand + Care Hub Bundle',
        price: 7999,
        description: 'Essential band with Care Hub for phone-free operation'
    }
};

const softwareSubscriptions = {
    basic: {
        name: 'Basic Care',
        price: 149,
        annualPrice: 1490,
        description: 'Up to 3 caregivers, alerts & reminders'
    },
    plus: {
        name: 'Plus Care',
        price: 199,
        annualPrice: 1990,
        description: 'Up to 8 caregivers, IVR calls, multilingual support'
    },
    pro: {
        name: 'Pro Care',
        price: 299,
        annualPrice: 2990,
        description: 'Professional monitoring with premium support'
    }
};

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const hw = searchParams.get('hw') as keyof typeof hardwareVariants;
    const sw = searchParams.get('sw') as keyof typeof softwareSubscriptions;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: ''
    });

    const hardware = hardwareVariants[hw];
    const software = softwareSubscriptions[sw];
    const total = hardware.price + software.price;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would normally process payment
        alert('Order placed successfully! This is a demo, no payment was processed.');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <Header />
            <div className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Order Summary */}
                        <div className="space-y-6">
                            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                                <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-gray-300">
                                        <div>
                                            <span className="block">{hardware.name}</span>
                                            <span className="text-sm text-gray-500">{hardware.description}</span>
                                        </div>
                                        <span className="font-medium">₹{hardware.price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <div>
                                            <span className="block">{software.name}</span>
                                            <span className="text-sm text-gray-500">{software.description}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block font-medium">₹{software.price}/month</span>
                                            <span className="text-sm text-gray-500">or ₹{software.annualPrice}/year</span>
                                        </div>
                                    </div>
                                    <div className="border-t border-slate-700 pt-4">
                                        <div className="flex justify-between text-white font-semibold">
                                            <span>Total Due Today</span>
                                            <div className="text-right">
                                                <span className="block text-xl">₹{(hardware.price + software.price).toLocaleString()}</span>
                                                <span className="text-sm text-gray-400">
                                                    Hardware: ₹{hardware.price.toLocaleString()}<br />
                                                    Subscription: ₹{software.price}/month
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-800/50 rounded-lg p-4 text-sm text-gray-400">
                                        <p>• Hardware is a one-time purchase</p>
                                        <p>• Subscription is billed monthly, cancel anytime</p>
                                        <p>• Free shipping and 7-day returns</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Full Name</label>
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
                                <label className="block text-gray-300 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Delivery Address</label>
                                <textarea
                                    required
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                    rows={3}
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">City</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">PIN Code</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white"
                                        value={formData.pincode}
                                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-semibold text-lg transition-colors mt-8"
                            >
                                Place Order
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
