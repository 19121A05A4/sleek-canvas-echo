import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Calendar, ArrowUpRight } from 'lucide-react'

export default function BlogsSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Machine Learning Pipelines for Production",
      excerpt: "Best practices for deploying and scaling ML models in production environments, focusing on performance optimization and monitoring.",
      date: "December 15, 2023",
      readTime: "8 min read",
      category: "Machine Learning",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Data-Driven Decision Making: A Comprehensive Guide",
      excerpt: "How to leverage data analytics to drive business decisions, featuring real-world case studies and practical frameworks.",
      date: "November 28, 2023",
      readTime: "12 min read",
      category: "Data Science",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The Future of Business Intelligence: Trends and Predictions",
      excerpt: "Exploring emerging trends in BI, from AI-powered analytics to real-time data processing and their impact on modern businesses.",
      date: "November 10, 2023",
      readTime: "6 min read",
      category: "Business Intelligence",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Building Scalable Data Infrastructure with Cloud Technologies",
      excerpt: "A deep dive into designing and implementing cloud-native data architectures that can scale with your business needs.",
      date: "October 22, 2023",
      readTime: "10 min read",
      category: "Data Engineering",
      image: "/placeholder.svg"
    }
  ]

  return (
    <section id="blogs" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on data science, optimization, and technology trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all duration-300 h-full">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-secondary rounded-t-lg flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-muted-foreground">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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