'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    PhoneIcon,
    MailIcon,
    MapPinIcon
} from 'lucide-react';

const footerLinks = {
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Shipping Information', href: '#' },
        { name: 'Returns & Refunds', href: '#' },
        { name: 'Warranty', href: '#' }
    ],
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Blog', href: '#' }
    ],
    support: [
        { name: 'Help Center', href: '#' },
        { name: 'User Guide', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Track Order', href: '#' },
        { name: 'Contact Support', href: '#' }
    ]
};

const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: '#' }
];

const contactInfo = [
    { icon: PhoneIcon, text: '+1 (800) VITAL-BAND', href: '#' },
    { icon: MailIcon, text: 'support@vitalband.com', href: '#' },
    { icon: MapPinIcon, text: 'Bangalore, India', href: '#' }
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Image
                            src="/images/Logo rectangle.jpg"
                            alt="Vitalband Logo"
                            width={160}
                            height={64}
                            className="rounded-lg"
                        />
                        <p className="text-gray-400 text-sm">
                            Empowering seniors with smart health monitoring and instant emergency response.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.button
                                        key={social.name}
                                        className="text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <button
                                        className="text-gray-400 hover:text-white text-sm transition-colors text-left"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <button
                                        className="text-gray-400 hover:text-white text-sm transition-colors text-left"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            {contactInfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <li key={info.text}>
                                        <button
                                            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {info.text}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Vitalband. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {footerLinks.support.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
