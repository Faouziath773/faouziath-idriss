import { motion } from 'framer-motion'
import { ArrowDownRight, Download, Mail, Sparkles } from 'lucide-react'
import Button from '../components/Button'

function Hero() {
  return (
    <section id="hero" className="pt-6">
      <div className="relative overflow-hidden rounded-3xl bg-white/70 p-8 shadow-xl ring-1 ring-slate-200/70 dark:bg-slate-900/60 dark:ring-white/10 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(92,120,245,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(45,59,153,0.25),transparent_25%)]" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-brand-700 ring-1 ring-brand-200 shadow-sm dark:bg-white/10 dark:text-brand-200 dark:ring-white/10"
            >
              <Sparkles size={16} />
              Disponible pour des collaborations
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-display text-4xl leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            >
              Faouziath IDRISSOU GADO
              <span className="block text-2xl font-semibold text-brand-600 dark:text-brand-300 sm:text-3xl">
                Full Stack Developer & Software Engineer
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="max-w-2xl text-lg text-slate-600 dark:text-slate-300"
            >
              Je conçois des applications modernes, fiables et élégantes qui résolvent des
              problèmes concrets. J’aime transformer des idées ambitieuses en expériences
              digitales fluides et percutantes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Button as="a" href="/cv.pdf" variant="primary">
                <Download size={16} />
                Télécharger le CV
              </Button>
              <Button as="a" href="#contact" variant="ghost">
                <Mail size={16} />
                Me contacter
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute -left-10 -top-12 h-28 w-28 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -right-6 -bottom-12 h-28 w-28 rounded-full bg-brand-700/30 blur-3xl" />
            <div className="relative w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl ring-2 ring-brand-200/70 transition hover:-translate-y-1 hover:ring-brand-300 dark:ring-white/10">
              <img
                src="/photo-faouziath.jpg"
                alt="Faouziath IDRISSOU GADO"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold text-slate-900 ring-1 ring-white/60 backdrop-blur dark:bg-white/10 dark:text-white dark:ring-white/10">
                <span>Disponible · Remote / Hybrid</span>
                <ArrowDownRight size={16} className="text-brand-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

