import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Users, BookOpen, Globe } from 'lucide-react';

const Techniques = () => {
    const techniques = [
        {
            icon: <Monitor className="w-6 h-6" />,
            title: "Digital Learning",
            description: "Smart classrooms equipped with the latest technology for interactive learning."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Collaborative Projects",
            description: "Group-based activities that foster teamwork and communication skills."
        },
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Experiential Learning",
            description: "Hands-on experiences and field trips to connect theory with the real world."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Perspective",
            description: "Curriculum designed to build awareness of global issues and cultures."
        }
    ];

    return (
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            Modern Teaching <br />
                            <span className="text-blue-400">Techniques</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We move beyond traditional rote learning. Our methodologies are designed to spark curiosity, encourage critical thinking, and adapt to individual learning styles.
                        </p>
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors shadow-lg shadow-blue-600/30">
                            Learn More
                        </button>
                    </div>

                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {techniques.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                                    {tech.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
                                <p className="text-sm text-gray-400">
                                    {tech.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Techniques;
