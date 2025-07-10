import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

export default function WorkSection() {
  const workExperience = [
    {
      id: 1,
      company: "Everest Liquors",
      position: "Freelance Web Developer & Data Analyst",
      period: "Project",
      description: "Developed a responsive business website for Everest Liquors and conducted sales data analysis to uncover trends, customer behavior, and product performance. Delivered real-time insights to support their business strategy. This project gave me hands-on experience in data analytics, real-time problem solving, and working with a real business client.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Excel", "SQL"]
    }
  ]

  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in data science and optimization
          </p>
        </motion.div>

        <div className="space-y-8">
          {workExperience.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {work.position}
                      </h3>
                      <p className="text-xl text-primary font-medium">
                        {work.company}
                      </p>
                    </div>
                    <span className="text-muted-foreground font-medium mt-2 md:mt-0">
                      {work.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {work.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}