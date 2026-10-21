import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send, Copy, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/site';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-fuchsia-500/10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading eyebrow="Contact" title="Let's build something">
          Got a bot, a web app or an AI idea? Send me a message and I'll get back to you.
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          <a
            href={`mailto:${profile.email}?subject=Project inquiry`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-fuchsia-500/30"
          >
            <Send size={18} /> {profile.email}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
          >
            {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
            {copied ? 'Copied' : 'Copy email'}
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white transition-colors">
            <Mail size={18} />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
