import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'


const stats = [
  { number: '3', label: 'Microsoft Certifications' },
  { number: '1', label: 'Google Certification' },
  { number: '2', label: 'University Degrees' },
  { number: '100%', label: 'Data-Driven Solutions' }
]

const education = [
  {
    degree: "Master's Degree in Computer Science",
    school: "University of Kansas, USA",
    type: "graduate"
  },
  {
    degree: "Bachelor's Degree in Computer Science", 
    school: "Sree Vidyanikethan Engineering College, India",
    type: "undergraduate"
  }
]

const certifications = [
  "Microsoft Certified: Azure Database Administrator Associate",
  "Microsoft Certified: Azure Data Engineer Associate", 
  "Google Data Analytics Certificate"
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-16 md:py-32 px-4 md:px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate about working with <span className="bg-gradient-primary bg-clip-text text-transparent">data</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm passionate about working with data — transforming raw numbers into actionable insights and building scalable systems that support data-driven decisions.
              </p>
              
              <p>
                Alongside my experience in full-stack development, I've developed strong skills in data engineering, data analytics, and database administration through real-world projects and professional certifications.
              </p>
              
              <p>
                I recently completed a freelance project where I built a full-featured website for Everest Liquors and analyzed their sales data to deliver valuable insights for their business strategy.
              </p>
            </div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🎓 Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="p-4 bg-secondary/50 border border-border rounded-lg hover:border-primary transition-colors duration-300"
                  >
                    <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🏅 Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 p-2 md:p-3 bg-secondary/30 border border-border rounded-lg hover:border-primary transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    <span className="text-foreground font-medium text-sm md:text-base">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-4 md:p-6 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                 <div className="text-muted-foreground mt-2 font-medium text-xs md:text-sm">
                   {stat.label}
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}