import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-14 max-w-2xl"
  >
    <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400 mb-3">{eyebrow}</p>
    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
      <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    {children && <p className="mt-4 text-lg text-zinc-400 leading-relaxed">{children}</p>}
  </motion.div>
);

export default SectionHeading;
