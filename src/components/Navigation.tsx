import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Blogs', href: '#blogs' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

interface NavigationProps {
  currentSection?: string
}

export default function Navigation({ currentSection = 'home' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    if (href === '') {
      // For home, clear hash
      window.location.hash = ''
    } else {
      // For all other sections, use hash navigation
      window.location.hash = href
    }
  }

  const getActiveState = (item: typeof navItems[0]) => {
    if (item.href === '' && currentSection === 'home') return true
    if (item.href === '#about' && currentSection === 'about') return true
    if (item.href === '#work' && currentSection === 'work') return true
    if (item.href === '#blogs' && currentSection === 'blogs') return true
    if (item.href === '#projects' && currentSection === 'projects') return true
    if (item.href === '#contact' && currentSection === 'contact') return true
    return false
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => handleClick('')}
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
          >
            <strong>Sai</strong> Katari
          </motion.button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleClick(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  getActiveState(item)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {getActiveState(item) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-secondary rounded-md -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}