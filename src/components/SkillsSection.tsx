import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Database, BarChart3, Settings, Code } from 'lucide-react'

const skillsData = [
  {
    title: "Data Engineer",
    icon: Database,
    skills: [
      "ETL/ELT pipeline development",
      "Azure Data Factory, Azure Synapse, Databricks", 
      "Apache Spark, Python, SQL",
      "Big data processing & data lakes",
      "Cloud storage architecture (Azure Blob, AWS S3)"
    ]
  },
  {
    title: "Data Analyst", 
    icon: BarChart3,
    skills: [
      "Data visualization: Power BI, Excel",
      "Google Data Analytics tools",
      "Exploratory data analysis (EDA)",
      "Dashboard creation, KPI tracking",
      "A/B testing, performance metrics, reporting"
    ]
  },
  {
    title: "Database Administrator",
    icon: Settings,
    skills: [
      "Azure SQL, PostgreSQL, MySQL",
      "Backup, recovery & replication strategies", 
      "Query tuning & performance optimization",
      "User roles, access control & security",
      "Monitoring & high availability configurations"
    ]
  },
  {
    title: "Software Engineer",
    icon: Code,
    skills: [
      "Full-stack development: HTML, CSS, JavaScript, React, Node.js",
      "RESTful API design & integration", 
      "Scalable architecture design",
      "Git, GitHub",
      "Debugging, testing, and deployment best practices"
    ]
  }
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.15) + (skillIndex * 0.1) }}
                    className="flex items-center gap-3 p-3 bg-secondary/30 border border-border rounded-lg hover:border-primary/50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}