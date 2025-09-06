import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Bot, Brain, Server, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sophia-MD',
      description: '70+ command WhatsApp bot with media conversion, data purchase, auto-updates, and status management',
      longDescription: 'A multifunctional WhatsApp bot built with Baileys that can download videos, convert stickers to photos and vice versa, buy data, auto-update, and manage status downloads. Built when I had only basic JS knowledge - true project-based learning!',
      technologies: ['JavaScript', 'Node.js', 'Baileys', 'Axios', 'SQL'],
      github: 'https://github.com/ayanokojix-1/sophia-md',
      icon: Bot,
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Sophia Assistant',
      description: 'AI-powered WhatsApp bot with authentication, web interface, and tiered subscription plans',
      longDescription: 'An advanced AI version of Sophia-MD with full authentication system, modern web interface, and three subscription tiers (Lite, Basic, Premium). Features web scraping, AI conversations, and seamless WhatsApp integration.',
      technologies: ['JavaScript', 'Python', 'React', 'Tailwind', 'Framer Motion', 'Flask', 'Express', 'Gemini API'],
      demo: 'https://sophia-assistant.zone.id',
      icon: Brain,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Koji Hosting Bot',
      description: 'Telegram bot for deploying Node.js projects with file storage and process management',
      longDescription: 'Revolutionary Telegram bot that allows users to store files, deploy Node.js projects, and manage processes directly through Telegram. Supports npm commands, PM2 process management, and real-time project monitoring.',
      technologies: ['JavaScript', 'Telegraf', 'SQLite3', 'Node.js', 'PM2'],
      demo: 'https://t.me/@koji_hosting_bot',
      icon: Server,
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'OyoCam Education Platform',
      description: 'Full-stack education platform with video calling, PDF library, and student-teacher analytics',
      longDescription: 'Comprehensive education platform for Oduduwa College with WebRTC video calling, integrated PDF library, detailed teacher and student statistics, and complete learning management system.',
      technologies: ['React', 'Node.js', 'WebRTC', 'SQL', 'Express'],
      demo: 'https://oyocam.org',
      icon: Globe,
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From WhatsApp bots to AI assistants - building solutions that matter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-sky-400/30 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="h-2 bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-sky-400 group-hover:to-blue-500 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <h4 className="text-lg font-semibold text-sky-400 mb-2">JS Obfuscation Tool</h4>
              <p className="text-gray-400 text-sm">Advanced JavaScript code obfuscation tool with multiple protection layers</p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <h4 className="text-lg font-semibold text-sky-400 mb-2">NEPA Light Predictor</h4>
              <p className="text-gray-400 text-sm">ML model to predict electricity availability patterns in Nigeria (In Development)</p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <h4 className="text-lg font-semibold text-sky-400 mb-2">KingFix</h4>
              <p className="text-gray-400 text-sm">Business website with modern design and full functionality - <a href="https://kingfix.name.ng" className="text-sky-400 hover:underline">kingfix.name.ng</a></p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
              <h4 className="text-lg font-semibold text-sky-400 mb-2">BigaStores</h4>
              <p className="text-gray-400 text-sm">E-commerce platform with inventory management - <a href="https://bigastores.name.ng" className="text-sky-400 hover:underline">bigastores.name.ng</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;