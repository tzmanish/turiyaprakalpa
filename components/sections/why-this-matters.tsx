"use client"

import { motion } from "framer-motion"
import { Heart, Users2, Lightbulb, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Heart,
    title: "Democratizing AI",
    description:
      "AI is transforming industries worldwide, but AI opportunities remain concentrated in big cities, leaving out millions of aspiring innovators. We are committed to changing that.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Users2,
    title: "Talent & Youth",
    description:
      "India has one of the largest youth populations. Imagine the innovations that can emerge when a student in Patna or Raipur gets the same AI exposure as one in Bengaluru. We believe the next AI leader could come from anywhere – if given the chance.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Local Innovation, National Impact",
    description:
      "Solutions developed in our CoEs address local problems – be it agriculture, healthcare, or education – which can scale to benefit all of India. By empowering local students, we're not just preparing them for jobs, we're enabling them to create solutions and jobs in their communities.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Closing Tech Exposure Gaps",
    description:
      "Currently, colleges in emerging cities students often lack access to advanced tech training, leading to a knowledge and opportunity gap. Initiatives like ours aim to close that gap, aligning with India's vision of inclusive growth and a digitally empowered society.",
    gradient: "from-green-500 to-emerald-500",
  },
]

export function WhyThisMatters() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why This Matters</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
