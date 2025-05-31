"use client"

import { motion } from "framer-motion"
import { MapPin, Users, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Users,
    title: "Unlocking Local Talent",
    description:
      "Thousands of skilled graduates emerge from these states each year, yet many must leave home to find opportunities. By building AI CoEs locally, we aim to retain and nurture this talent in-region.",
  },
  {
    icon: Building2,
    title: "Bridging Infrastructure Gaps",
    description:
      "Our Centers of Excellence (CoEs) address the needs of colleges that lack advanced AI capabilities or industry exposure by delivering world-class AI resources directly to campuses.",
  },
  {
    icon: MapPin,
    title: "Sparking Regional Innovation",
    description:
      "Students in regional colleges intimately understand their region's challenges. By applying AI and innovation to local problems, they build sustainable tech ecosystems.",
  },
]

export function BuildingFrontier() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Building Bharat's Next Tech Frontier</h2>
          <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-6">Bridging the AI Divide in emerging India</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            India's tech growth has predominantly flourished in a handful of metro cities. We're working to transform
            underserved regions into emerging hubs of AI innovation. Through active collaborations with colleges in
            states like Bihar, Chhattisgarh, and Madhya Pradesh, we aim to broaden our reach, empowering talent in
            regions where access to tech opportunities remains limited.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Students working on AI projects in regional colleges"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Empowering Regional Innovation</h3>
                <p className="text-lg opacity-90 max-w-2xl">
                  Transforming underserved regions into emerging hubs of AI innovation across India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            "In emerging regions, we're not just equipping students—we're sparking a transformation. By empowering local
            talent with AI skills, we aim to foster grassroot innovation"
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
