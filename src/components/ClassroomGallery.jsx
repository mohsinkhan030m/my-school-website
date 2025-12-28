import React from 'react';
import { motion } from 'framer-motion';
import classroom1 from '../assets/classroom1.png';
import canteen from '../assets/canteen.png';
import playground from '../assets/playground.png';
import projects from '../assets/projects.png';

const ClassroomGallery = () => {
    const classrooms = [
        {
            id: 1,
            title: "Collaborative Learning Spaces",
            description: "Our classrooms are designed to foster collaboration and creativity. With modular furniture and ample natural light, students can work together effectively in a comfortable environment.",
            image: classroom1
        },
        {
            id: 2,
            title: "Modern Cafeteria",
            description: "A hygienic and vibrant space where nutrition meets socialization. Our modern cafeteria offers healthy meal options in a bright, welcoming atmosphere.",
            image: canteen
        },
        {
            id: 3,
            title: "Adventure Playground",
            description: "Safe and engaging outdoor play areas equipped with modern structures that encourage physical activity, social interaction, and fun.",
            image: playground
        },
        {
            id: 4,
            title: "Creative Project Labs",
            description: "Hands-on makerspaces where theoretical knowledge transforms into tangible innovations. Students engage in project-based learning with state-of-the-art tools.",
            image: projects
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Modern <span className="text-blue-600">Campus & Facilities</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore our world-class environment designed to nurture every aspect of student life, from advanced learning to recreation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {classrooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative h-[400px] md:h-[500px] overflow-hidden group">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <p className="text-white text-lg font-medium">State-of-the-Art Facilities</p>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{room.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {room.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 italic">More facility photos coming soon...</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ClassroomGallery;
