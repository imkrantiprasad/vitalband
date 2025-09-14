'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const productImages = [
    { src: '/images/Band preview 1.png', alt: 'Vitalband Preview 1' },
    { src: '/images/Band preview 2.png', alt: 'Vitalband Preview 2' },
    { src: '/images/Old woman wearing band 1.png', alt: 'Vitalband Preview 5' },
    { src: '/images/Band preview 3.png', alt: 'Vitalband Preview 3' },
    { src: '/images/Band preview 4.png', alt: 'Vitalband Preview 4' },
    { src: '/images/Band layers.png', alt: 'Vitalband Layers' }
];

export default function ProductCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) {
                emblaApi.scrollTo(index);
            }
        },
        [emblaApi]
    );

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', () => {
                setSelectedIndex(emblaApi.selectedScrollSnap());
            });
        }
    }, [emblaApi]);

    return (
        <section className="py-12 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text px-4"
                >
                    Experience the Next Generation
                </motion.h2>
                <div className="max-w-5xl mx-auto">
                    <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
                        <div className="flex">
                            {productImages.map((image, index) => (
                                <motion.div
                                    key={image.src}
                                    className="flex-[0_0_100%] min-w-0 relative px-2 md:px-4"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: selectedIndex === index ? 1 : 0.3,
                                        scale: selectedIndex === index ? 1 : 0.8
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-75"></div>
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={800}
                                            height={800}
                                            className="rounded-2xl shadow-2xl relative mx-auto w-full max-w-2xl"
                                            priority={index === 0}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 mt-6 md:mt-8">
                        {productImages.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${selectedIndex === index ? 'bg-indigo-500' : 'bg-slate-600'
                                    }`}
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
