"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TestTube, Cloud, BarChart } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Website Testing",
    description: "Tested key modules like login, product search, and checkout for functionality and usability. Created and executed manual test cases, reported bugs using Jira. Automated regression tests using Cypress and validated APIs with Postman. Ensured application reliability through detailed test documentation and analysis.",
    icon: TestTube,
    iconColor: "text-green-600",
    iconBg: "bg-green-500/10",
    tags: ["Cypress", "Jira", "Postman", "Manual Testing"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
  },
  {
    title: "Weather Forecasting Website",
    description: "A Weather Forecasting Website allows users to get real-time weather updates for any location around the world. Built using HTML, CSS, and JavaScript, it leverages an API to fetch live weather data.",
    icon: Cloud,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-500/10",
    tags: ["HTML", "CSS", "JavaScript", "REST API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
  },
  {
    title: "Exploratory Data Analysis on Homelessness Data",
    description: "Performed data cleaning, visualization, and exploratory data analysis on U.S. homelessness statistics using Python. Utilized Pandas, Matplotlib, and Seaborn to uncover regional trends, compare state-wise homelessness figures, and generate insightful visual summaries.",
    icon: BarChart,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-500/10",
    tags: ["Python", "Google Colab", "Pandas", "Seaborn", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
]

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects and contributions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 ${project.iconBg} rounded-lg`}>
                          <IconComponent className={`h-5 w-5 ${project.iconColor}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer flex-shrink-0" />
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}