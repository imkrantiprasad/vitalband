'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import Header from '../components/Header';
import { CheckIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';

const productImages = [
    { src: '/images/Band preview 1.png', alt: 'Vitalband Front View' },
    { src: '/images/Band preview 2.png', alt: 'Vitalband Side View' },
    { src: '/images/Band preview 3.png', alt: 'Vitalband Features' },
    { src: '/images/Band preview 4.png', alt: 'Vitalband Display' },
    { src: '/images/Band layers.png', alt: 'Vitalband Components' }
];

const hardwareVariants = [
    {
        id: 'essential',
        name: 'VitalBand Essential',
        price: 5499,
        features: [
            'Screenless, comfortable 24/7 design',
            'Heart rate & SpO2 monitoring',
            'Fall detection & SOS button',
            'Skin temperature sensor',
            '7-day battery life',
            'Bluetooth connectivity',
            'IP67 water resistance'
        ]
    },
    {
        id: 'bundle',
        name: 'VitalBand + Care Hub Bundle',
        price: 7999,
        features: [
            'All Essential features',
            'Care Hub for phone-free operation',
            'Cellular connectivity via Hub',
            'Extended range monitoring',
            'Ideal for seniors without smartphones',
            'Plug & play setup',
            'Backup battery support'
        ]
    }
];

const accessories = [
    {
        id: 'booster',
        name: 'Power Booster',
        price: 999,
        description: 'Clip-on battery pack for extended use'
    },
    {
        id: 'strap-regular',
        name: 'Classic Comfort Strap',
        price: 499,
        description: 'Breathable fabric strap'
    },
    {
        id: 'strap-premium',
        name: 'Premium Leather Strap',
        price: 699,
        description: 'Genuine leather, elegant design'
    }
];

const softwareSubscriptions = [
    {
        id: 'basic',
        name: 'Basic Care',
        price: 149,
        annualPrice: 1490,
        interval: 'month',
        features: [
            'Real-time health alerts',
            'Care Circle for up to 3 caregivers',
            'Medication reminders',
            'WhatsApp/SMS notifications',
            'Basic health insights',
            '24/7 emergency monitoring'
        ]
    },
    {
        id: 'plus',
        name: 'Plus Care',
        price: 199,
        annualPrice: 1990,
        interval: 'month',
        features: [
            'All Basic features',
            'Up to 8 caregivers in Care Circle',
            'IVR call escalation',
            'Hindi + Regional language support',
            'Advanced health trends',
            'Priority support access'
        ]
    },
    {
        id: 'pro',
        name: 'Pro Care',
        price: 299,
        annualPrice: 2990,
        interval: 'month',
        features: [
            'All Plus features',
            'Professional monitoring',
            'Personalized health insights',
            'Premium support 24/7',
            'Family health dashboard',
            'Wellness coach access'
        ]
    }
];

export default function ProductPage() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedHardware, setSelectedHardware] = useState(hardwareVariants[0]);
    const [selectedSoftware, setSelectedSoftware] = useState(softwareSubscriptions[0]);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', () => {
                setSelectedIndex(emblaApi.selectedScrollSnap());
            });
        }
    }, [emblaApi]);
    const router = useRouter();

    const totalPrice = selectedHardware.price + selectedSoftware.price;

    const handleBuyNow = () => {
        router.push(`/checkout?hw=${selectedHardware.id}&sw=${selectedSoftware.id}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            <Header />
            <div className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Images Carousel */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl" ref={emblaRef}>
                                <div className="flex">
                                    {productImages.map((image) => (
                                        <div key={image.src} className="flex-[0_0_100%] min-w-0 relative">
                                            <div className="relative aspect-square">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-75"></div>
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover rounded-2xl relative"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                                    <button
                                        onClick={() => emblaApi?.scrollPrev()}
                                        className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                                        aria-label="Previous image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => emblaApi?.scrollNext()}
                                        className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                                        aria-label="Next image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl font-bold text-white mb-4">VitalBand Smart Health Monitor</h1>
                                <div className="space-y-2">
                                    <p className="text-gray-300 text-lg">Peace of mind for your loved ones, independence for seniors.</p>
                                    <p className="text-gray-400">VitalBand combines 24/7 health monitoring with instant emergency response in a comfortable, screenless design that seniors actually want to wear. With multi-language support and our unique Care Circle feature, staying connected with your family's well-being has never been easier.</p>
                                </div>
                                <ul className="grid grid-cols-2 gap-4 mt-6">
                                    <li className="flex items-center gap-2 text-gray-300">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        7-day battery life
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-300">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        IP67 water resistant
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-300">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        Fall detection
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-300">
                                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                        Real-time alerts
                                    </li>
                                </ul>
                            </div>

                            {/* Hardware Selection */}
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">Select Hardware</h2>
                                <div className="grid gap-4">
                                    {hardwareVariants.map((variant) => (
                                        <button
                                            key={variant.id}
                                            onClick={() => setSelectedHardware(variant)}
                                            className={`p-4 rounded-xl border-2 transition-all ${selectedHardware.id === variant.id
                                                ? 'border-indigo-500 bg-indigo-500/10'
                                                : 'border-slate-700 hover:border-indigo-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-white font-semibold">{variant.name}</span>
                                                <span className="text-indigo-400">₹{variant.price}</span>
                                            </div>
                                            <ul className="text-sm text-gray-400">
                                                {variant.features.map((feature) => (
                                                    <li key={feature} className="flex items-center gap-2">
                                                        <CheckIcon className="w-4 h-4 text-indigo-500" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Software Selection */}
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">Select Software Plan</h2>
                                <div className="grid gap-4">
                                    {softwareSubscriptions.map((plan) => (
                                        <button
                                            key={plan.id}
                                            onClick={() => setSelectedSoftware(plan)}
                                            className={`p-4 rounded-xl border-2 transition-all ${selectedSoftware.id === plan.id
                                                ? 'border-indigo-500 bg-indigo-500/10'
                                                : 'border-slate-700 hover:border-indigo-500/50'
                                                }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-white font-semibold">{plan.name}</span>
                                                <span className="text-indigo-400">₹{plan.price}/{plan.interval}</span>
                                            </div>
                                            <ul className="text-sm text-gray-400">
                                                {plan.features.map((feature) => (
                                                    <li key={feature} className="flex items-center gap-2">
                                                        <CheckIcon className="w-4 h-4 text-indigo-500" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="grid grid-cols-3 gap-4 py-6">
                                <div className="flex items-center gap-2 text-gray-300">
                                    <TruckIcon className="w-6 h-6" />
                                    <span>Free Delivery</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <ShieldCheckIcon className="w-6 h-6" />
                                    <span>1 Year Warranty</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300">
                                    <CheckIcon className="w-6 h-6" />
                                    <span>7 Day Returns</span>
                                </div>
                            </div>

                            {/* Total and Buy Button */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-xl text-white">Total Price</span>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white">₹{totalPrice}</div>
                                        <div className="text-sm text-gray-400">
                                            (₹{selectedHardware.price} + ₹{selectedSoftware.price}/month)
                                        </div>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleBuyNow}
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                                >
                                    Buy Now
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
