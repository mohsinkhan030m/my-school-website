import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Heart } from 'lucide-react';

const Vision = () => {
    const features = [
        {
            icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
            title: "Innovation",
            description: "Fostering a culture of creativity and forward-thinking to solve tomorrow's challenges."
        },
        {
            icon: <Target className="w-8 h-8 text-red-500" />,
            title: "Excellence",
            description: "Striving for the highest standards in academic and personal growth for every student."
        },
        {
            icon: <Heart className="w-8 h-8 text-pink-500" />,
            title: "Community",
            description: "Building a supportive and inclusive environment where every child feels valued."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Vision</h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        To inspire and empower the next generation of leaders through a holistic and modern educational approach.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Vision;
