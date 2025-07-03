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
            <span className="block text-foreground">OPTIMIZE the</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              WORLD
            </span>
            <span className="block text-foreground">through Data</span>
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
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 animate-float"
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}