import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="space-y-8">
        <SectionTitle
          eyebrow="Compétences"
          title="Un socle technique complet"
          subtitle="Front, back, base de données et collaboration : tout ce qu’il faut pour livrer vite et bien."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group flex items-center gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:ring-brand-200 dark:bg-white/5 dark:ring-white/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200 transition group-hover:scale-105 group-hover:bg-brand-100 dark:bg-white/10 dark:text-brand-100 dark:ring-white/10">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{skill.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Expert confirmé</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

