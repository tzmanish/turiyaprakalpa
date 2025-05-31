"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const centers = [
  {
    name: "Indian Institute of Business Management (IIBM)",
    location: "Patna, Bihar",
    date: "April 2025",
    status: "MoU Signed",
    description:
      "The integration of courses and student registration is currently in progress, with workshops scheduled to launch in the first week of July.",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    name: "Dr. Zakir Husain Institute (ZHI)",
    location: "Patna, Bihar",
    date: "2025",
    status: "MoU Signed",
    description:
      "The integration of courses and student registration is currently in progress, with workshops scheduled to launch in the first week of July.",
    statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  },
]

export function CentersOfExcellence() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our AI Centers of Excellence</h2>
          <h3 className="text-xl text-blue-600 dark:text-blue-400 mb-6">
            Innovation Hubs Empowering Students Across India
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Each CoE we build is a fully-equipped innovation hub on campus. From state-of-the-art AI labs to expert
            mentors, our CoEs offer everything needed to spur AI research, learning, and startup ideas within the
            college.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {centers.map((center, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        {center.name}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        {center.location}
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {center.date}
                      </div>
                    </div>
                    <Badge className={center.statusColor}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {center.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{center.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
