import React from 'react';
import { motion } from 'framer-motion';
import founder1 from '../assets/Mohsin.jpg';
import founder2 from '../assets/Aqib.jpeg';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Modern School Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            </div>

            <div className="container mx-auto px-4 z-10 relative text-white">
                {/* Coming Soon Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="inline-block py-4 px-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] text-white text-2xl md:text-4xl font-extrabold tracking-widest uppercase mb-8 shadow-2xl border-2 border-white/20 backdrop-blur-md"
                    >
                        Coming Soon
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        The Future of Learning
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
                        A modern educational experience for Class 1-8. Redefining excellence with innovation and care.
                    </p>
                </motion.div>

                {/* Founders Section */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Founder 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shrink-0">
                                <img src={founder1} alt="Mohsin Khan" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-1">Mohsin Khan</h3>
                                <p className="text-blue-300 font-medium mb-2">Co-Founder & Principal</p>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    "Our vision is to empower every child with the tools to build a better tomorrow through modern education."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shrink-0">
                                <img src={founder2} alt="Aaqib Ali" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold mb-1">Aaqib Ali</h3>
                                <p className="text-purple-300 font-medium mb-2">Co-Founder & Director</p>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    "We believe in nurturing creativity and critical thinking, preparing students for a rapidly evolving world."
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
