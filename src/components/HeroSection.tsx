"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMe = () => {
    window.location.href = "mailto:shivamsingha001@gmail.com?subject=Hire Request&body=Hello, I would like to discuss a potential opportunity with you.";
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>

          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}>

            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-07-01-at-00.27.00_541ac49c-1761924477907.jpg?width=8000&height=8000&resize=contain"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority />

            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>

            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent !whitespace-pre-line">Shivam Singha

            </span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}>

            4th Year Computer Science Student
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>

            A motivated and detail-oriented Computer Science student with a strong foundation in programming,
            data structures, algorithms, machine learning and frontend web development. Experienced in building projects
            using technologies like Python, Machine Learning, JavaScript and APIs. Passionate about learning emerging
            technologies such as AI and cloud computing, with a keen interest in solving real-world problems through
            innovative solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}>

            <Button
              size="lg"
              onClick={handleHireMe}
              className="w-full sm:w-auto gap-2">

              <Mail className="h-5 w-5" />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="w-full sm:w-auto">

              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto">

              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}>

          <button
            onClick={scrollToProjects}
            className="text-muted-foreground hover:text-foreground transition-colors">

            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>);

}