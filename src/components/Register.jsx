import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Register = () => {
    return (
        <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Future of Education</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Admissions open for Class 1 to 8. Secure your child's spot in a school designed for the modern world.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
                            Register Now <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                            Download Brochure
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Register;
