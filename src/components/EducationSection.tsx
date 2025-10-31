"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    institution: "Meghnad Saha Institute of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022-2026",
    score: "CGPA: 7.06 (till 6th sem)",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-600"
  },
  {
    institution: "Sainthia Town High School",
    degree: "Higher Secondary Education",
    period: "2022",
    score: "91.2%",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-600"
  },
  {
    institution: "Sainthia Town High School",
    degree: "Secondary Education",
    period: "2020",
    score: "89.6%",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-green-500/10 to-teal-500/10",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-600"
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow bg-white text-black">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className={`h-6 w-6 ${edu.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-black">{edu.institution}</CardTitle>
                      <CardDescription className="text-gray-600">{edu.degree}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    {edu.score}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}