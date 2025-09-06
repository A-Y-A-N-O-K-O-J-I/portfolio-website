import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Server, Brain, Bot, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      items: ['JavaScript', 'Python', 'SQL', 'C++'],
      icon: Code,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      category: 'Frontend',
      items: ['React', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion'],
      icon: Globe,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Flask', 'WebRTC'],
      icon: Server,
      color: 'from-green-400 to-emerald-500'
    },
    {
      category: 'AI/ML',
      items: ['Transformers', 'PyTorch', 'TensorFlow', 'Hugging Face'],
      icon: Brain,
      color: 'from-purple-400 to-pink-500'
    },
    {
      category: 'APIs',
      items: ['OpenAI', 'Gemini', 'Claude', 'WhatsApp Baileys'],
      icon: Bot,
      color: 'from-sky-400 to-blue-500'
    },
    {
      category: 'Deployment',
      items: ['Heroku', 'Railway', 'Render', 'HF Spaces'],
      icon: Database,
      color: 'from-red-400 to-rose-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My toolkit for building intelligent, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-sky-400/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} mr-4`}>
                  <skillGroup.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
              </div>

              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? `bg-gradient-to-r ${skillGroup.color}` : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Beautiful Soup', 'Selenium', 'Requests', 'SQLite3', 'Telegraf',
              'WebRTC', 'Pterodactyl Panel', 'Git', 'Linux', 'Docker'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-full text-sm font-medium hover:from-sky-500/20 hover:to-blue-500/20 hover:text-sky-300 transition-all duration-300 border border-gray-600 hover:border-sky-400/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;