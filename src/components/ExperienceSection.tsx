"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Calendar, Award } from "lucide-react"

const experiences = [
  {
    title: "Coding Club Member",
    organization: "University Computer Science Club",
    period: "2021 - Present",
    description: "Active member participating in collaborative development projects, code reviews, and knowledge sharing sessions. Contributed to multiple open-source initiatives and mentored junior members.",
    icon: Users,
    achievements: [
      "Mentored 15+ junior students",
      "Led 3 team projects",
      "Organized weekly coding sessions",
    ],
  },
  {
    title: "Competitive Programming",
    organization: "Various Platforms",
    period: "2022 - Present",
    description: "Actively participate in coding competitions on platforms like Codeforces, LeetCode, and HackerRank. Solved 500+ algorithmic problems and competed in regional contests.",
    icon: Trophy,
    achievements: [
      "Top 10% on LeetCode",
      "Solved 500+ problems",
      "Regional contest participant",
    ],
  },
  {
    title: "Tech Events & Hackathons",
    organization: "Multiple Venues",
    period: "2021 - Present",
    description: "Participated in various hackathons and tech events, including university tech fests and industry-sponsored competitions. Built innovative solutions under time constraints.",
    icon: Calendar,
    achievements: [
      "5+ hackathons attended",
      "2 finalist positions",
      "Best Innovation Award",
    ],
  },
  {
    title: "Project Presentations",
    organization: "Academic & Tech Events",
    period: "2022 - Present",
    description: "Presented machine learning and web development projects at university symposiums and tech conferences. Received recognition for innovative approaches and technical implementation.",
    icon: Award,
    achievements: [
      "3 conference presentations",
      "Best Project Award",
      "Positive peer reviews",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actively involved in coding communities, competitions, and tech events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <experience.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                      <CardDescription className="text-sm font-medium">
                        {experience.organization}
                      </CardDescription>
                      <p className="text-xs text-muted-foreground mt-1">{experience.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Highlights:</p>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
