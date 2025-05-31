"use client"

import { motion } from "framer-motion"
import { ExternalLink, Users, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const coreTeam = [
  {
    name: "Kumar Harsh",
    role: "CEO and Founder",
    expertise: "Marketing, Branding, Program management, Strategy, Social entrepreneurship",
    affiliation: "IIT Roorkee",
  },
  {
    name: "Manish Kushwaha",
    role: "CTO and Co-Founder",
    expertise:
      "Architecting efficient data solutions with Java, Spark, and Hadoop on Azure. Optimising data processing & full-stack development",
    affiliation: "IIT Roorkee",
  },
]

const advisors = [
  {
    name: "Sandeep Agarwal",
    role: "Global CTO at Visionet Systems Inc. and MD of Visionet India",
    expertise:
      "Thought leader in digital innovation, strategy, technology leadership. Author of P.R.I.D.E. Recipient of Indian Achiever's Award.",
  },
  {
    name: "Amritendu Mukherjee",
    role: "Co-Founder and CTO of NeuroPixel.AI Labs",
    expertise:
      "PhD (Engineering) from Indian Institute of Science, Bangalore with primary research interest in application of advanced Machine Learning/Deep Learning algorithms, Statistical Learning Theory in Image Processing and Computer Vision.",
  },
]

const expertNetwork = [
  {
    name: "Divyanshu Verma",
    role: "Co-founder & CEO of Redinent Innovations",
    expertise:
      "Over 21 years in cybersecurity, IoT security, business strategy. Leadership at Intel, Broadcom, Ericsson, Dell.",
    affiliation: "IIM Bangalore, IIT Delhi, BHU",
  },
  {
    name: "Gaurav Aggarwal",
    role: "VP & Chief AI Scientist at Reliance Jio",
    expertise:
      "Computer vision and machine learning, AI research/product innovation at Yahoo Labs, Ola Cabs, Snapdeal.",
    affiliation: "BTech from IIT Madras, PhD from University of Maryland",
  },
  {
    name: "Ashish Kaushik",
    role: "CredFlow - MSME lending and growth strategies",
    expertise: "Business strategy, product management, financial modelling. Co-founder experience (Lifepay, Mooofarm).",
    affiliation: "IIT Roorkee",
  },
]

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Team and Advisors</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals driving Turiya Prakalpa's mission to democratize AI education and expand
            India's innovation base.
          </p>
        </motion.div>

        {/* Core Team */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold">Core Team</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreTeam.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{member.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                      <p className="text-sm text-muted-foreground">{member.expertise}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Affiliation:</h4>
                      <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Key Advisors */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6 text-purple-600" />
            <h3 className="text-2xl font-bold">Key Advisors</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    {advisor.name}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {advisor.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                      <p className="text-sm text-muted-foreground">{advisor.expertise}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Expert Network */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold">Expert Network</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {expertNetwork.map((expert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">{expert.name}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {expert.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                      <p className="text-xs text-muted-foreground">{expert.expertise}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Affiliation:</h4>
                      <p className="text-xs text-muted-foreground">{expert.affiliation}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
          <blockquote className="text-xl italic text-muted-foreground mb-6 max-w-3xl mx-auto">
            "We envision an India where a student's ambition in AI is not limited by their PIN code."
          </blockquote>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Turiya Prakalpa, we believe in the democratization of technology education. Our mission is to build AI
            Centers of Excellence in underserved regions, empowering the next generation of innovators from every corner
            of India. We're committed to bridging the opportunity gap and unleashing the incredible talent that exists
            across the entire country.
          </p>
        </motion.div>

        {/* Join Our Mission */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            We're always looking for passionate individuals and organizations who share our vision. Whether you're an
            educator, technologist, mentor, or potential partner, there's a place for you in our ecosystem.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
