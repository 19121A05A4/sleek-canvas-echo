import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform built with React, Node.js, and Stripe integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'AI Dashboard',
    description: 'Interactive dashboard for AI model management with real-time analytics and visualizations.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Data Visualization'
  },
  {
    id: 3,
    title: '3D Portfolio Website',
    description: 'Immersive 3D portfolio showcasing WebGL capabilities and smooth animations.',
    tech: ['Three.js', 'React', 'GSAP', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    category: '3D/WebGL'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    tech: ['React Native', 'Firebase', 'Plaid API', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    category: 'Mobile'
  },
  {
    id: 5,
    title: 'Social Media Platform',
    description: 'Full-featured social media platform with real-time messaging and content sharing.',
    tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    category: 'Social'
  },
  {
    id: 6,
    title: 'IoT Dashboard',
    description: 'Real-time monitoring dashboard for IoT devices with predictive analytics.',
    tech: ['React', 'InfluxDB', 'MQTT', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    category: 'IoT'
  }
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and interactive experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-glow-primary"
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <motion.div
                    animate={{
                      rotate: hoveredProject === project.id ? 45 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowDown className="w-4 h-4 text-muted-foreground rotate-45" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary border border-border rounded text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0,
                  y: hoveredProject === project.id ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background to-transparent"
              >
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow-primary transition-all duration-300">
                    Live Demo
                  </button>
                  <button className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300">
                    View Code
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 border border-border text-foreground rounded-full font-medium hover:bg-secondary hover:border-primary transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}