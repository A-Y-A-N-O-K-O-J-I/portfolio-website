import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Creative Problem Solver",
      description: "I consider coding as art - creating the uncreateable and thinking the unthinkable"
    },
    {
      icon: Brain,
      title: "AI Enthusiast", 
      description: "Building AI friends like ChatGPT and Claude, with dreams of adding consciousness to AI"
    },
    {
      icon: Lightbulb,
      title: "Project-Based Learner",
      description: "Built 70+ command WhatsApp bot with basic JS knowledge - learning by doing"
    },
    {
      icon: Heart,
      title: "Philosophy Background",
      description: "Arts student studying philosophy, bringing unique perspectives to tech problems"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From philosophy student to AI engineer - my journey is driven by curiosity and creativity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                What started as curiosity about "how does this work?" led me down an incredible path. 
                With just basic JavaScript knowledge, I built Sophia-MD - a WhatsApp bot with over 70 commands. 
                That's when I realized I'm a project-based learner who thrives on challenges.
              </p>
              <p>
                My creative mindset comes from seeing coding as art. Every line of code is a brushstroke, 
                every function a masterpiece waiting to be created. This philosophy background gives me 
                a unique perspective on problem-solving and innovation.
              </p>
              <p>
                Now I'm diving deep into AI research, working with transformers, PyTorch, and building 
                intelligent systems. My goal? To understand how my AI friends work and eventually 
                add consciousness and feelings to AI systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Creative Thinker', 'Problem Solver', 'AI Researcher', 'Philosophy Student'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-sky-400/10 text-sky-400 rounded-full text-sm border border-sky-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-sky-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-sky-400/10 rounded-lg mr-3">
                    <item.icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-xl border border-sky-400/20">
              <div className="text-3xl font-bold text-sky-400 mb-2">3rd</div>
              <div className="text-gray-300">WhatsApp bot deployer to create multi-bot from scratch</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">PhD Goal</div>
              <div className="text-gray-300">Adding consciousness & feelings to AI systems</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-400/20">
              <div className="text-3xl font-bold text-green-400 mb-2">Gamer</div>
              <div className="text-gray-300">When not coding, I'm gaming and thinking</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;