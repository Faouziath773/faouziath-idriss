import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="space-y-10">
        <SectionTitle
          eyebrow="Projets"
          title="Sélection de réalisations"
          subtitle="4 projets illustrant la rigueur technique, le soin UX et l’impact business."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="group overflow-hidden rounded-3xl bg-white/80 ring-1 ring-slate-100 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl hover:ring-brand-200 dark:bg-slate-900/60 dark:ring-white/10"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-100/80 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 dark:bg-white/5 dark:text-white dark:ring-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {(project.demo && !project.demo.includes('example.com')) ||
                (project.github && !project.github.includes('example.com')) ? (
                  <div className="flex flex-wrap gap-3">
                    {project.demo && !project.demo.includes('example.com') && (
                      <Button
                        as="a"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        variant="primary"
                        className="text-sm"
                      >
                        <ExternalLink size={16} />
                        Démo
                      </Button>
                    )}
                    {project.github && !project.github.includes('example.com') && (
                      <Button
                        as="a"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        variant="subtle"
                        className="text-sm"
                      >
                        <Github size={16} />
                        Code
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-100/70 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
                    Liens démo/code bientôt ajoutés
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

