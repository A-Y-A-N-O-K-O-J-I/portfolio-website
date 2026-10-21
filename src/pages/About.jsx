import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { about } from '../data/site';

const About = () => (
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="About" title="Less repetition, more living" />

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-5 text-lg text-zinc-300 leading-relaxed"
        >
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </motion.div>

        <div className="lg:col-span-2 space-y-4">
          {about.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 border-l-4 border-l-fuchsia-500"
            >
              <h3 className="font-semibold text-white">{h.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
