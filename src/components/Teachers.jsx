import React from 'react';
import { motion } from 'framer-motion';
import teacher1 from '../assets/Mohsin.jpg';
import teacher2 from '../assets/Aqib.jpeg';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Teachers = () => {
    const teachers = [
        {
            name: "Mohsin Khan",
            role: "Information Technology",
            image: teacher1,
            bio: "Passionate about making complex concepts accessible and fun for young minds."
        },
        {
            name: "Aaqib Ali",
            role: "Science & Mathematics",
            image: teacher2,
            bio: "Believes in the power of creativity to unlock a child's full potential."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Educators</h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Experienced, dedicated, and inspiring mentors guiding your child's journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {teachers.map((teacher, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                        >
                            <div className="relative overflow-hidden h-80">
                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex gap-4 text-white">
                                        <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
                                        <a href="#" className="hover:text-blue-300 transition-colors"><Twitter size={20} /></a>
                                        <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                                        <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                                <p className="text-purple-600 font-medium mb-4">{teacher.role}</p>
                                <p className="text-gray-600 italic">
                                    "{teacher.bio}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teachers;
