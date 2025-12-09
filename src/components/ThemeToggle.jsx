import PropTypes from 'prop-types'
import { MoonStar, SunMedium } from 'lucide-react'
import { cn } from '../utils/cn'

function ThemeToggle({ theme, onToggle, className }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20 dark:border-white/10 dark:bg-white/5',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
        className,
      )}
      aria-label="Basculer le thème clair/sombre"
    >
    {isDark ? <SunMedium size={16} /> : <MoonStar size={16} />}
    <span>{isDark ? 'Mode clair' : 'Mode sombre'}</span>
  </button>
  )
}

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default ThemeToggle

