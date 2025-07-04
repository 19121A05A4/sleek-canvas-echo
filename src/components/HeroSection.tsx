import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ThreeBackground from './ThreeBackground'

export default function HeroSection() {
  const scrollToNext = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80 z-10" />
      
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <div className="flex flex-col items-center space-y-4">
              <span 
                className="block text-6xl md:text-8xl font-black hero-mask-text"
                style={{
                  background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23grid)" /%3E%3C/svg%3E"), linear-gradient(135deg, hsl(260 100% 65%), hsl(280 100% 70%))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 0 40px rgba(138, 43, 226, 0.4)',
                  filter: 'drop-shadow(0 0 20px rgba(138, 43, 226, 0.3))'
                }}
              >
                OPTIMIZE the
              </span>
              <span 
                className="block text-6xl md:text-8xl font-black hero-mask-text"
                style={{
                  background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="10" cy="10" r="2" fill="%23ffffff" opacity="0.4"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23dots)" /%3E%3C/svg%3E"), linear-gradient(135deg, hsl(280 100% 70%), hsl(260 100% 65%))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 0 40px rgba(138, 43, 226, 0.6)',
                  filter: 'drop-shadow(0 0 20px rgba(138, 43, 226, 0.4))'
                }}
              >
                WORLD
              </span>
              <span 
                className="block text-6xl md:text-8xl font-black hero-mask-text"
                style={{
                  background: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="lines" width="15" height="15" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 0 15 L 15 0" stroke="%23ffffff" stroke-width="1" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100" height="100" fill="url(%23lines)" /%3E%3C/svg%3E"), linear-gradient(135deg, hsl(260 100% 65%), hsl(300 100% 75%))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 0 40px rgba(138, 43, 226, 0.4)',
                  filter: 'drop-shadow(0 0 20px rgba(138, 43, 226, 0.3))'
                }}
              >
                through Data
              </span>
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <button className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-medium hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-all duration-300">
              Download Resume
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}