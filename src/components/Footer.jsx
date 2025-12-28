import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Modern School</h3>
                        <p className="text-sm leading-relaxed">
                            Empowering the next generation with modern education, innovation, and values.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Admissions</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Academics</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-blue-500" />
                                <span>123 Education Lane, Future City</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500" />
                                <span>info@modernschool.edu</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Modern School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
