"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone, FileText } from "lucide-react";

const socialLinks = [
{
  name: "Email",
  icon: Mail,
  href: "mailto:shivamsingha001@gmail.com",
  color: "hover:text-red-500",
  iconColor: "text-red-500",
  bgColor: "bg-red-500/10"
},
{
  name: "LinkedIn",
  icon: Linkedin,
  href: "https://www.linkedin.com/in/shivam-singha-roni-289787226/",
  color: "hover:text-blue-600",
  iconColor: "text-blue-600",
  bgColor: "bg-blue-600/10"
},
{
  name: "GitHub",
  icon: Github,
  href: "https://github.com/Shivamsingha001",
  color: "hover:text-purple-600",
  iconColor: "text-purple-600",
  bgColor: "bg-purple-600/10"
}];


export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 shadow-lg border mb-8">

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Mail className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:shivamsingha001@gmail.com" className="text-muted-foreground hover:text-red-500">shivamsingha001@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Phone className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground !whitespace-pre-line">+91 9476357303</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {socialLinks.map((link, index) =>
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block">

                    <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-lg border border-border transition-colors ${link.color} ${link.bgColor}`}>

                      <link.icon className={`h-6 w-6 ${link.iconColor}`} />
                      <span className="text-xs font-medium">{link.name}</span>
                    </motion.div>
                  </a>
                )}
              </div>
              <Button size="lg" className="w-full" asChild>
                <a href="mailto:shivamsingha001@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="#">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center pt-8 border-t border-border">

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Computer Science Student. Built with Next.js and Tailwind CSS.
          </p>
        </motion.footer>
      </div>
    </section>);

}