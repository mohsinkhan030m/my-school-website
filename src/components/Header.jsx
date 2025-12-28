import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Vision', path: '/vision' },
        { name: 'Techniques', path: '/techniques' },
        { name: 'Teachers', path: '/teachers' },
        { name: 'Admission', path: '/admission' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Modern School Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full" />
                    <span className={`text-xl md:text-2xl font-bold ${isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}`}>
                        Modern School
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium transition-colors hover:text-blue-400 ${isScrolled || location.pathname !== '/' ? 'text-gray-600' : 'text-gray-200'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                        Contact Us
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-100"
                >
                    <nav className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-600 font-medium hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
