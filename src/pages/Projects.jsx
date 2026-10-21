import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects, archive, accents } from '../data/site';

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Work" title="Things I've built">
        Each one started as a repetitive problem someone was tired of.
      </SectionHeading>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          const a = accents[p.accent] ?? accents.violet;
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`group flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:shadow-2xl ${a.ring} ${a.glow}`}
            >
              <div className={`h-2 bg-gradient-to-r ${a.grad}`} />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-4 min-h-7">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${a.text}`}>{p.kind}</span>
                  {p.status === 'live' && (
                    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                    </span>
                  )}
                  {p.status === 'wip' && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300">
                      In progress
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-5">{p.description}</p>

                {p.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap gap-3">
                  {p.links.map((l) => {
                    const isCode = l.label.toLowerCase() === 'code';
                    const Icon = isCode ? Github : ExternalLink;
                    return (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          isCode
                            ? 'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-white/10 hover:bg-white/15 transition-colors'
                            : `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${a.grad} hover:brightness-110 transition`
                        }
                      >
                        <Icon size={15} /> {l.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {archive.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold text-white">Archive</h3>
          <p className="text-sm text-zinc-500 mt-1 mb-6">Earlier experiments and retired projects, kept for the record.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {archive.map((p) => (
              <div key={p.title} className="p-5 rounded-xl border border-dashed border-white/10 bg-white/[0.015]">
                <h4 className="font-semibold text-zinc-300">{p.title}</h4>
                <p className="text-sm text-zinc-500 mt-1">{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  </section>
);

export default Projects;
