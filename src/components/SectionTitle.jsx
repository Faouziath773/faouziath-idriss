import PropTypes from 'prop-types'
import { cn } from '../utils/cn'

function SectionTitle({ eyebrow, title, subtitle, align = 'left', className }) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 ring-1 ring-brand-200 dark:bg-white/10 dark:text-white dark:ring-white/10">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="text-base text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </div>
  )
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
  className: PropTypes.string,
}

export default SectionTitle

