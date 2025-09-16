'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function LegalPage() {
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
                        <h1 className="text-4xl font-bold text-white mb-6">Legal Information</h1>
                        <p className="text-xl text-gray-300">Important policies and terms regarding VitalBand usage.</p>
                    </motion.div>

                    {/* Privacy Policy */}
                    <section id="privacy" className="mb-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Privacy Policy
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <p>At VitalBand, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Data Collection</h3>
                            <ul>
                                <li>Health monitoring data (heart rate, SpO2, temperature)</li>
                                <li>Emergency contact information</li>
                                <li>Device usage statistics</li>
                                <li>App interaction data</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Data Usage</h3>
                            <p>Your data is used solely for providing health monitoring services, emergency response, and improving our services. We never sell your personal information to third parties.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Data Protection</h3>
                            <p>We employ industry-standard encryption and security measures to protect your data. All health data is stored in compliance with DPDP Act 2023.</p>
                        </div>
                    </section>

                    {/* Terms of Service */}
                    <section id="terms" className="mb-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Terms of Service
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <p>By using VitalBand, you agree to these terms of service.</p>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Service Usage</h3>
                            <ul>
                                <li>VitalBand is a wellness monitoring device, not a medical device</li>
                                <li>Emergency services are provided on a best-effort basis</li>
                                <li>Users must maintain an active subscription for full functionality</li>
                                <li>Users are responsible for keeping emergency contact information updated</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Account Management</h3>
                            <p>You are responsible for maintaining the confidentiality of your account and password. Contact us immediately if you suspect unauthorized access.</p>
                        </div>
                    </section>

                    {/* Shipping Information */}
                    <section id="shipping" className="mb-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Shipping Information
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Delivery</h3>
                            <ul>
                                <li>Free shipping across India</li>
                                <li>Standard delivery: 3-5 business days</li>
                                <li>Express delivery: 1-2 business days (additional charges apply)</li>
                                <li>Order tracking provided via email and SMS</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Shipping Partners</h3>
                            <p>We use reliable courier partners like BlueDart and Delhivery for all deliveries.</p>
                        </div>
                    </section>

                    {/* Returns & Refunds */}
                    <section id="returns" className="mb-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Returns & Refunds
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Return Policy</h3>
                            <ul>
                                <li>7-day return window from delivery date</li>
                                <li>Product must be unused with original packaging</li>
                                <li>Free return shipping</li>
                                <li>Full refund processed within 5-7 business days</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Subscription Cancellation</h3>
                            <p>Monthly subscriptions can be cancelled anytime. Refunds are prorated based on usage.</p>
                        </div>
                    </section>

                    {/* Warranty */}
                    <section id="warranty" className="mb-16">
                        <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            Warranty
                        </h2>
                        <div className="space-y-6 text-gray-300">
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Coverage</h3>
                            <ul>
                                <li>1-year manufacturer warranty</li>
                                <li>Covers manufacturing defects and hardware malfunctions</li>
                                <li>Battery replacement if capacity falls below 50%</li>
                                <li>Free repairs or replacement</li>
                            </ul>
                            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Exclusions</h3>
                            <p>Warranty does not cover physical damage, water damage beyond IP67 rating, or unauthorized modifications.</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
