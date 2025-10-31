"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Database, Wrench, BookOpen } from "lucide-react"

const skillCategories = [
  {
    category: "Languages",
    icon: Code,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-500/10",
    skills: ["Java", "SQL", "NoSQL", "C", "Python"],
  },
  {
    category: "Frontend",
    icon: Code,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-500/10",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend & Libraries",
    icon: Server,
    iconColor: "text-green-600",
    iconBg: "bg-green-500/10",
    skills: ["Node.js", "NumPy", "Pandas", "Matplotlib", "Seaborn", "TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-500/10",
    skills: ["MySQL"],
  },
  {
    category: "API & Architecture",
    icon: Server,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-500/10",
    skills: ["REST API", "Clean Architecture"],
  },
  {
    category: "Tools",
    icon: Wrench,
    iconColor: "text-red-600",
    iconBg: "bg-red-500/10",
    skills: ["Git", "GitHub Actions", "VS Code", "Tableau", "Jupyter Notebook", "GenAI", "MS Office"],
  },
  {
    category: "Coursework",
    icon: BookOpen,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-500/10",
    skills: ["Computer Architecture", "Computer Network", "DBMS", "OOPS", "Data Structures and Algorithms", "Operating System"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${category.iconBg} rounded-lg`}>
                        <IconComponent className={`h-5 w-5 ${category.iconColor}`} />
                      </div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}