"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Vibe coding workshop",
    date: "May 9th, 2025",
    location: "Virtual",
    type: "Featured Event",
    description: "A hands-on workshop for 30 faculty members to help them integrate AI concepts into their teaching.",
    attendees: "30 faculty members",
    status: "upcoming",
    statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Innovation workshop",
    date: "May 2025",
    location: "Patna, Bihar",
    type: "Past Event",
    description:
      "Workshop on Innovation & Entrepreneurship. With 70+ students from BBA, BCA, and PGDM actively participating, we explored how local problems can be turned into startup ideas through Design Thinking, Lean Canvas, MVP building, and Bihar-focused innovation.",
    attendees: "70+ attendees",
    status: "past",
    statusColor: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
  },
  {
    title: "AI workshop",
    date: "May 2025",
    location: "Patna, Bihar",
    type: "Past Event",
    description:
      "With the enthusiastic participation of 40+ students from 6 colleges across Patna, the session focused on building not just AI tool awareness, but a deeper understanding of the AI mindset—a critical shift for the innovators and professionals of tomorrow.",
    attendees: "70+ attendees",
    status: "past",
    statusColor: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
  },
]

export function EventsWorkshops() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Events & Workshops</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learning and innovation happen beyond the classroom. We regularly host events to inspire, skill, and connect
            our community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full group hover:shadow-lg transition-all duration-300 ${
                  event.status === "upcoming" ? "ring-2 ring-blue-200 dark:ring-blue-800" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={event.statusColor}>{event.type}</Badge>
                    {event.status === "upcoming" && (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                      >
                        Upcoming
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-4 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </CardTitle>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                  <Button variant={event.status === "upcoming" ? "default" : "outline"} className="w-full group/btn">
                    {event.status === "upcoming" ? "Register Now" : "Learn More"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-6">
            "Stay tuned for more events or invite us to your campus – we're on a mission to bring AI excitement
            everywhere!"
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
