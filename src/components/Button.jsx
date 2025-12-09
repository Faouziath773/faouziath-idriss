import PropTypes from 'prop-types'
import { cn } from '../utils/cn'

const baseStyles =
  'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 text-white shadow-glow hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-brand-500',
  ghost:
    'bg-white/70 text-brand-800 ring-1 ring-brand-200 hover:-translate-y-0.5 hover:ring-brand-400 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:ring-white/30 focus-visible:outline-brand-400',
  subtle:
    'bg-slate-100 text-slate-900 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-brand-300 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:ring-white/30 focus-visible:outline-brand-400',
}

function Button({ as = 'button', variant = 'primary', className, children, ...rest }) {
  const Component = as
  return (
    <Component className={cn(baseStyles, variants[variant], className)} {...rest}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  variant: PropTypes.oneOf(['primary', 'ghost', 'subtle']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button

