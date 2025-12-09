import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const contacts = [
  { label: 'Téléphone', value: '+229 01 91 18 15 75', icon: Phone, href: 'tel:+2290191181575' },
  { label: 'Email', value: 'gidrissougado@gmail.com', icon: Mail, href: 'mailto:gidrissougado@gmail.com' },
  { label: 'LinkedIn', value: '/in/faouziath-idriss-a982b5215', icon: Linkedin, href: 'https://www.linkedin.com/in/faouziath-idriss-a982b5215' },
  { label: 'GitHub', value: '@Faouziath773', icon: Github, href: 'https://github.com/Faouziath773' },
]

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Contact"
            title="Écrivons quelque chose de remarquable"
            subtitle="Parlez-moi de votre besoin, de vos objectifs et du délai. Je réponds rapidement avec une proposition claire."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:ring-brand-200 dark:bg-white/5 dark:ring-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200 dark:bg-white/10 dark:text-brand-100 dark:ring-white/10">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 rounded-3xl bg-white/80 p-6 ring-1 ring-slate-100 shadow-xl dark:bg-slate-900/60 dark:ring-white/10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Nom
              </label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="vous@domaine.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Parlez-moi de votre projet, objectifs, budget, délais..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Réponse sous 24h, confidentialité assurée.
            </p>
            <Button type="submit" variant="primary">
              Envoyer
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

