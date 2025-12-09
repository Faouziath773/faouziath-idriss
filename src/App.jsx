import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
        <div className="bg-hero-gradient">
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
          <main className="mx-auto max-w-6xl space-y-24 px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:space-y-28">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
