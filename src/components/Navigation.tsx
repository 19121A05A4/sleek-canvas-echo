import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    // Close mobile menu when item is clicked
    setIsMobileMenuOpen(false)
  }

  const getActiveState = (item: typeof navItems[0]) => {
    if (item.href === '' && currentSection === 'home') return true
    if (item.href === '#about' && currentSection === 'about') return true
    if (item.href === '#skills' && currentSection === 'skills') return true
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

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border mt-4 pt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => handleClick(item.href)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      getActiveState(item)
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}