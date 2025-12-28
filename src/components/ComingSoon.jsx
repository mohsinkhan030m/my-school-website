import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Coming Soon
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    We are working hard to bring you this page. Stay tuned!
                </p>
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
