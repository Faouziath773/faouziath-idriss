import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import Button from './Button'

const links = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

function Navbar({ theme, onToggleTheme }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-30 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
            FI
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
              Portfolio
            </span>
            <span className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              Faouziath IDRISSOU GADO
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-2 py-1 text-sm font-medium shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} className="hidden sm:inline-flex" />
          <Button
            as="a"
            href="#projects"
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            Voir mes projets
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

Navbar.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
}

export default Navbar

