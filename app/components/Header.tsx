'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-slate-900/20'
                : 'bg-slate-900/80 backdrop-blur-sm'
                } border-b border-slate-800/50`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <motion.div
                            className="relative w-32 h-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Image
                                src="/images/Logo rectangle.jpg"
                                alt="Vitalband Logo"
                                fill
                                className="object-contain rounded"
                                priority
                            />
                        </motion.div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="/product" className="text-gray-300 hover:text-white transition-colors">
                            Shop
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                            FAQ
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            Support
                        </Link>
                        <motion.a
                            href="tel:+1234567890"
                            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Emergency
                        </motion.a>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/product"
                                className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
                            >
                                Buy Now
                            </Link>
                        </motion.div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <motion.div
                    initial={false}
                    animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
                    className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'border-t border-slate-800/50' : ''}`}
                >
                    <nav className="py-4 space-y-2">
                        <Link href="/product" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
                            Shop
                        </Link>
                        <Link href="/about" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
                            About
                        </Link>
                        <Link href="/faq" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
                            FAQ
                        </Link>
                        <Link href="/contact" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors">
                            Contact
                        </Link>
                        <div className="pt-2 grid grid-cols-2 gap-2 px-4">
                            <Link href="/contact" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white bg-slate-800/50 rounded-lg py-2 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Support
                            </Link>
                            <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white bg-slate-800/50 rounded-lg py-2 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Emergency
                            </a>
                        </div>
                    </nav>
                </motion.div>
            </div>
        </header>
    );
}
