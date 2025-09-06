import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Primary Email',
      value: 'segunjegede23@gmail.com',
      href: 'mailto:segunjegede23@gmail.com',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Alternative Email', 
      value: 'ayanokojix2306@gmail.com',
      href: 'mailto:ayanokojix2306@gmail.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@ayanokojix-1',
      href: 'https://github.com/ayanokojix-1',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: 'Available on request',
      href: 'mailto:segunjegede23@gmail.com?subject=Phone Contact Request',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const quickLinks = [
    { name: 'Sophia-MD Bot', url: 'https://github.com/ayanokojix-1/sophia-md' },
    { name: 'Sophia Assistant', url: 'https://sophia-assistant.zone.id' },
    { name: 'Koji Hosting Bot', url: 'https://t.me/@koji_hosting_bot' },
    { name: 'OyoCam Platform', url: 'https://oyocam.org' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-blue-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Got a project in mind? Looking for an AI-powered solution? Let's turn your ideas into reality!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently freelancing and always excited to work on interesting projects. 
                Whether you need a WhatsApp bot, AI integration, full-stack web app, or just 
                want to chat about consciousness in AI - I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-sky-400/30 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {method.title}
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center p-4 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-400/20"
            >
              <div className="p-3 rounded-lg bg-sky-400/20 mr-4">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="font-semibold text-white">Location</div>
                <div className="text-sky-400">Ibadan, Nigeria</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Access & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* CTA Card */}
            <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project and see how we can bring your ideas to life with cutting-edge AI and full-stack solutions.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:segunjegede23@gmail.com?subject=Project Inquiry"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
                >
                  <Send size={20} />
                  <span>Send Email</span>
                </motion.a>
                
                <motion.a
                  href="https://sophia-assistant.zone.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 w-full bg-gray-700 hover:bg-gray-600 text-white py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  <span>Try Sophia Assistant</span>
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="text-sky-400 group-hover:text-sky-300 transition-colors"
                    >
                      <Send size={16} className="rotate-45" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20 text-center"
            >
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-purple-400 font-semibold mb-1">Also Known As</div>
              <div className="text-gray-300">Ayanokoji Kiyotaka</div>
              <div className="text-sm text-gray-400 mt-2">Strategic thinker, just like the character!</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 mb-4">
            "Coding is art - creating the uncreateable, thinking the unthinkable"
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/ayanokojix-1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#38bdf8' }}
              className="text-gray-500 hover:text-sky-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:segunjegede23@gmail.com"
              whileHover={{ scale: 1.2, color: '#38bdf8' }}
              className="text-gray-500 hover:text-sky-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            © 2024 Jegede Oluwasegun David. Built with React, Tailwind & Framer Motion
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;