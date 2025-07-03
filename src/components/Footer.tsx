import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/yourusername' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', href: 'https://twitter.com/yourusername' },
    { name: 'Dribbble', href: 'https://dribbble.com/yourusername' }
  ]

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right text-muted-foreground"
          >
            <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
            <p className="text-sm mt-1">Made with ❤️ and React</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}