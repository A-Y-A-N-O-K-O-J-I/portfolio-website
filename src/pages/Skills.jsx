import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { coreSkills, skills, learning, accents } from '../data/site';

const List = ({ items, accent }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-3 text-zinc-300">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${accent.grad}`} />
        {item}
      </li>
    ))}
  </ul>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-white/[0.02]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Toolbox" title="What I work with">
        Two languages I know deeply, and the stack I've built around them.
      </SectionHeading>

      {/* Core */}
      <div className="grid md:grid-cols-3 gap-5 mb-5">
        {coreSkills.map((c, i) => {
          const a = accents[c.accent];
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden p-7 rounded-2xl bg-white/[0.04] border border-white/10"
            >
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${a.grad} opacity-20 blur-2xl`} />
              <div className="relative">
                <h3 className={`text-3xl font-extrabold bg-gradient-to-r ${a.grad} bg-clip-text text-transparent`}>{c.name}</h3>
                <p className="mt-3 mb-5 text-zinc-400 leading-relaxed">{c.text}</p>
                <List items={c.uses} accent={a} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Wider stack */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => {
          const a = accents[s.accent];
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${a.grad} mb-4`} />
              <h3 className={`font-semibold mb-4 ${a.text}`}>{s.group}</h3>
              <List items={s.items} accent={a} />
            </motion.div>
          );
        })}
      </div>

      {learning.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 p-5 rounded-2xl border border-dashed border-white/15"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Learning next</span>
          {learning.map((l) => (
            <span key={l} className="font-medium text-white">{l}</span>
          ))}
        </motion.div>
      )}
    </div>
  </section>
);

export default Skills;
