import Image from 'next/image';
import { motion } from 'framer-motion';

const paymentMethods = [
    {
        name: 'UPI',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg',
        width: 50
    },
    {
        name: 'Visa',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
        width: 60
    },
    {
        name: 'Mastercard',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
        width: 45
    },
    {
        name: 'RuPay',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1200px-Rupay-Logo.png',
        width: 60
    },
    {
        name: 'Net Banking',
        icon: 'https://cdn-icons-png.flaticon.com/512/6963/6963703.png',
        width: 35
    },
    {
        name: 'Wallets',
        icon: 'https://cdn-icons-png.flaticon.com/512/9553/9553091.png',
        width: 35
    },
    {
        name: 'EMI',
        icon: 'https://cdn-icons-png.flaticon.com/512/9841/9841570.png',
        width: 35
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function PaymentMethods() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 items-center"
        >
            {paymentMethods.map((method) => (
                <motion.div
                    key={method.name}
                    variants={item}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="bg-white rounded-lg p-3 hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
                        <div className="w-20 h-12 flex items-center justify-center">
                            <Image
                                src={method.icon}
                                alt={`${method.name} logo`}
                                width={method.width}
                                height={method.width}
                                className="w-auto h-full object-contain"
                            />
                        </div>
                    </div>
                    <span className="text-xs text-gray-300 font-medium">{method.name}</span>
                </motion.div>
            ))}
        </motion.div>
    );
}
