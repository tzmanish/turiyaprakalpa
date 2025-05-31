"use client"

import { motion } from "framer-motion"
import { Clock, Users, Code, Rocket, Award, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    icon: Users,
    title: "AI Literate",
    duration: "24h",
    subtitle: "No coding. All streams welcome.",
    description: "AI awareness",
    learnings: [
      "Use AI tools, learn ethics, fundamentals",
      "Learn the basics of AI/ML concepts without coding",
      "Understand how to use AI tools for productivity",
      "Ethics and responsible AI usage",
      "Prepare foundation for Azure AI-900 certification",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    icon: Code,
    title: "AI Generalist",
    duration: "30h",
    subtitle: "Domain-specific AI applications (marketing, coding, ops).",
    description: "AI productivity, project experience. Optional: IBM, NASSCOM FutureSkills credentials.",
    learnings: [
      "Learn how to apply AI in specific domains",
      "Create domain-specific AI-powered projects",
      "Understand AI integration in existing workflows",
      "AI for business, marketing, operations and more",
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
  },
  {
    icon: Rocket,
    title: "AI Implementor",
    duration: "40h",
    subtitle: "Python, ML, cloud deployment, AI APIs.",
    description: "Build AI models + deploy apps. Optional: TensorFlow Developer, AWS ML-Specialty.",
    learnings: [
      "Learn Python programming for AI/ML",
      "Train and deploy basic machine learning models",
      "Work with cloud AI services and APIs",
      "End-to-end ML project implementation",
    ],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
  },
  {
    icon: Award,
    title: "AI Innovator",
    duration: "60h",
    subtitle: "Advanced AI (GANs, MLOps, fine-tuning), innovation projects.",
    description: "Research or startup-ready AI solutions.",
    learnings: [
      "Advanced AI concepts including GANs and transformers",
      "MLOps and production deployment strategies",
      "Fine-tuning models for specific applications",
      "Research-oriented AI projects with industry mentoring",
    ],
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
  },
]

const uniqueFeatures = [
  "Accessible to non-CS students",
  "Stackable, flexible tiers with exit points",
  "Aligned with NEP 2020 and national skilling frameworks",
  "Embedded hands-on projects and certifications",
  "From awareness to innovation – all on campus",
]

export function ProgramDetails() {
  return (
    <section id="program" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The 4-Tier AI Skilling Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI CoEs offer a structured learning path tailored to undergraduate students. The tiered model enables
            accessible entry and deep progression.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${tier.bgGradient}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tier.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{tier.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {tier.learnings.map((learning, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Outcome:</h4>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">What Makes It Unique</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join the next cohort at one of our AI Centers of Excellence and transform your career prospects.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Contact for More Information
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
