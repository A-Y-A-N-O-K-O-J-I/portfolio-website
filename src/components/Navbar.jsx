import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';
import { profile } from '../data/site';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
          >
            {profile.name}
          </a>

          <nav aria-label="Main" className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="ml-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden text-zinc-300 hover:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-zinc-900 z-50 md:hidden p-6 border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="text-zinc-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      activeSection === item.id ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
