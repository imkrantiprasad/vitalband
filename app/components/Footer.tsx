'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
    legal: [
        { name: 'Privacy Policy', href: '/legal#privacy' },
        { name: 'Terms of Service', href: '/legal#terms' },
        { name: 'Shipping Information', href: '/legal#shipping' },
        { name: 'Returns & Refunds', href: '/legal#returns' },
        { name: 'Warranty', href: '/legal#warranty' }
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
    ],
    support: [
        { name: 'Help Center', href: '/faq' },
        { name: 'Contact Support', href: '/contact' }
    ]
};

const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' }
];

const contactInfo = [
    { text: '+1 (800) VITAL-BAND', href: 'tel:+18008482526' },
    { text: 'support@vitalband.com', href: 'mailto:support@vitalband.com' },
    { text: 'Bangalore, India', href: '#' }
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/">
                            <Image
                                src="/images/Logo rectangle.jpg"
                                alt="Vitalband Logo"
                                width={160}
                                height={64}
                                className="rounded-lg"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Empowering seniors with smart health monitoring and instant emergency response.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {/* Add social icons here */}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
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
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((info) => (
                                <li key={info.text}>
                                    <Link
                                        href={info.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {info.text}
                                    </Link>
                                </li>
                            ))}
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