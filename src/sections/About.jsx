import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="À propos"
            title="Construire des expériences digitales durables"
            subtitle="Allier esthétique, performance et robustesse pour livrer des produits dont les utilisateurs se souviennent."
          />
          <div className="space-y-4 text-slate-700 dark:text-slate-200">
            <p>
              Ingénieur full stack, je crée des applications de bout en bout en orchestrant
              interfaces raffinées, API solides et bases de données fiables. J’itère vite, je teste,
              et je livre avec une exigence élevée de qualité.
            </p>
            <p>
              Mon approche est centrée sur l’impact : comprendre le besoin, prototyper, mesurer et
              optimiser. J’apprécie particulièrement les animations fines, les micro-interactions et
              la cohérence visuelle d’un produit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            {[
              { label: 'Projets livrés', value: '30+' },
              { label: 'Clients satisfaits', value: '98%' },
              { label: 'Pays couverts', value: '6' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/80 p-4 text-center ring-1 ring-slate-100 shadow-sm dark:bg-white/5 dark:ring-white/10"
              >
                <div className="text-lg font-semibold text-brand-600 dark:text-brand-200">
                  {item.value}
                </div>
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-brand-800/30 p-[2px] shadow-xl ring-1 ring-brand-200/60 dark:ring-white/10"
        >
          <div className="glass-card relative rounded-[22px] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
              <span className="font-semibold text-brand-600 dark:text-brand-200">Profil</span>
              <span className="rounded-full bg-brand-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 ring-1 ring-brand-200 dark:bg-white/5 dark:text-white dark:ring-white/10">
                Premium
              </span>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-200">
              <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10">
                <span>Qualité de code</span>
                <span className="font-semibold text-brand-600 dark:text-brand-200">Tests, lint</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10">
                <span>Stack</span>
                <span className="font-semibold text-brand-600 dark:text-brand-200">
                  React, Laravel, SQL
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/10">
                <span>Design system</span>
                <span className="font-semibold text-brand-600 dark:text-brand-200">Tailwind, UX</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

