import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronDown, Github, Sparkles } from 'lucide-react';
import { profile } from '../data/site';
import AutomationDemo from '../components/AutomationDemo';

const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

// Desktop always shows the demo; on mobile it sits behind a toggle so the hero stays short.
const Demo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center lg:items-end gap-4">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="lg:hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-zinc-200 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <Sparkles size={16} className="text-fuchsia-400" />
        {open ? 'Hide demo' : 'See it in action'}
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`${open ? 'flex' : 'hidden'} lg:flex w-full justify-center lg:justify-end`}>
        {/* remount on open so the entrance animation plays */}
        <AutomationDemo key={open ? 'open' : 'closed'} />
      </div>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
    {/* Colour blobs */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-violet-600/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 w-[26rem] h-[26rem] rounded-full bg-amber-400/15 blur-3xl"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-zinc-950" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
      <div>
      {profile.available && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to new projects
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-6xl sm:text-8xl font-extrabold tracking-tight leading-none"
      >
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
          {profile.name}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mt-6 text-2xl sm:text-3xl font-semibold text-white"
      >
        {profile.role}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-4 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <button
          onClick={() => goTo('projects')}
          className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-fuchsia-500/30 flex items-center gap-2"
        >
          See my work <ArrowDown size={18} />
        </button>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Github size={18} /> GitHub
        </a>
        <button
          onClick={() => goTo('contact')}
          className="hidden sm:block px-8 py-4 rounded-full font-semibold text-zinc-300 hover:text-white transition-colors"
        >
          Contact
        </button>
      </motion.div>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 grid grid-cols-3 max-w-xl gap-6"
      >
        {profile.stats.map((s) => (
          <div key={s.label}>
            <dt className="text-3xl sm:text-4xl font-bold text-white">{s.value}</dt>
            <dd className="text-sm text-zinc-400 mt-1">{s.label}</dd>
          </div>
        ))}
      </motion.dl>
      </div>

      <Demo />
    </div>
  </section>
);

export default Hero;
