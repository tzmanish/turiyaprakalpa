"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Code, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    icon: Brain,
    title: "AI Literate",
    subtitle: "Get AI-awareness. Tools, ethics, awareness.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    icon: Zap,
    title: "AI Generalist",
    subtitle: "Apply AI to your field. Power-user projects.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
  },
  {
    icon: Code,
    title: "AI Implementor",
    subtitle: "Learn to code, train, and deploy ML models.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
  },
  {
    icon: Rocket,
    title: "AI Innovator",
    subtitle: "Push boundaries. Build research-grade solutions.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
  },
]

export function ProgramTiers() {
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
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Program
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI for Everyone, differently!</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A flexible, multi-tier learning path from AI basics to innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${tier.bgGradient} hover:scale-105`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{tier.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{tier.subtitle}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
