import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Phone } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 w-full  bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
            >
              JOD
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-sky-400 bg-sky-400/10'
                      : 'text-gray-300 hover:text-sky-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://github.com/ayanokojix-1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#38bdf8' }}
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="mailto:segunjegede23@gmail.com"
                whileHover={{ scale: 1.2, color: '#38bdf8' }}
                className="text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-gray-800 z-50 md:hidden shadow-xl"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    Jegede Oluwasegun David
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-400 hover:text-white"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        activeSection === item.id
                          ? 'text-sky-400 bg-sky-400/10'
                          : 'text-gray-300 hover:text-sky-400 hover:bg-gray-700'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Social Links - Mobile */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center space-x-6 mt-8 pt-8 border-t border-gray-700"
                >
                  <motion.a
                    href="https://github.com/ayanokojix-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="mailto:segunjegede23@gmail.com"
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;