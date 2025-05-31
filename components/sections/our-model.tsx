"use client"

import { motion } from "framer-motion"
import { Search, Building, FileText, BookOpen, Users, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Identify & Partner",
    description: "We identify & partner with institutions with a vision for AI and innovation.",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: Building,
    title: "Establish AI CoE",
    description: "Centre or Excellence (CoE) or Hub on campus with a modern lab assisted by the institution.",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    icon: FileText,
    title: "Source Problem Statements",
    description:
      "Engage with local administrations, industries, and civil organizations to obtain problem statements & relevant data.",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: BookOpen,
    title: "Curriculum & Training",
    description:
      "An industry-aligned AI curriculum; workshops with hands-on experience with AI tools for both students and faculties.",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    icon: Users,
    title: "Mentorship & Projects",
    description:
      "Each CoE is connected to a network of AI & industry experts. Students work on local problems, fostering an innovation mindset.",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/30",
  },
  {
    icon: Rocket,
    title: "Community & Incubation",
    description:
      "Hackathons, talks, and an annual AI Innovation Summit for our CoEs. Promising ideas get incubation and R&D support.",
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/30",
  },
]

export function OurModel() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Model</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A structured program with industry-aligned curriculum, hands-on projects addressing local challenges,
            mentorship from leading AI professionals, and incubation support to foster student-led startups.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group">
                <div
                  className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-muted to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We empower colleges with in-house AI innovation hubs, cultivating a sustainable culture of problem-solving
            while expanding India's base tech talent across diverse educational ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
