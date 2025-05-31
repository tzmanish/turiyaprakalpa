"use client"

import { motion } from "framer-motion"
import { GraduationCap, Globe, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const propositions = [
  {
    icon: GraduationCap,
    title: "Industry-aligned Courses",
    description:
      "Workshops, hands-on activities, and certifications, complemented by a state-of-the-art lab to enhance practical learning experiences.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Global Skills, Local Context",
    description:
      "Advancing regional problem-solving through frontier tech innovation while delivering tailored world-class AI enablement.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation Ecosystem",
    description:
      "Regional tech hubs on college campuses that foster collaboration with industry and real-world opportunities to drive impactful innovation.",
    gradient: "from-orange-500 to-red-500",
  },
]

export function ValuePropositions() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Value Propositions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just do AI enablement - we build an entire ecosystem around it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
