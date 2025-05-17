import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  affiliation?: string;
  linkedin: string;
  type: 'team' | 'advisor' | 'expert';
  image: string;
}

const AboutPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const people: TeamMember[] = [
    {
      name: "Kumar Harsh",
      role: "CEO and Founder",
      expertise: "Marketing, Branding, Program management, Strategy, Social entrepreneurship",
      affiliation: "IIT Roorkee",
      linkedin: "https://www.linkedin.com/in/krhharsh/",
      type: "team",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Manish Kushwaha",
      role: "CTO and Co-Founder",
      expertise: "Architecting efficient data solutions with Java, Spark, and Hadoop on Azure. Optimising data processing & full-stack development",
      affiliation: "IIT Roorkee",
      linkedin: "https://www.linkedin.com/in/tzman/",
      type: "team",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Divyanshu Verma",
      role: "Co-founder & CEO of Redinent Innovations",
      expertise: "Over 21 years in cybersecurity, IoT security, business strategy. Leadership at Intel, Broadcom, Ericsson, Dell.",
      affiliation: "IIM Bangalore, IIT Delhi, BHU",
      linkedin: "https://www.linkedin.com/in/divyanshu-verma-6b05732/",
      type: "advisor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sandeep Agarwal",
      role: "Global CTO at Visionet Systems Inc. and MD of Visionet India",
      expertise: "Thought leader in digital innovation, strategy, technology leadership. Author of P.R.I.D.E. Recipient of Indian Achiever's Award.",
      linkedin: "https://www.linkedin.com/in/sandeepbagarwal/",
      type: "advisor",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Gaurav Aggarwal",
      role: "VP & Chief AI Scientist at Reliance Jio",
      expertise: "Computer vision and machine learning, AI research/product innovation at Yahoo Labs, Ola Cabs, Snapdeal.",
      affiliation: "BTech from IIT Madras, PhD from University of Maryland",
      linkedin: "https://www.linkedin.com/in/gauagg/",
      type: "expert",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Ashish Kaushik",
      role: "CredFlow - MSME lending and growth strategies",
      expertise: "Business strategy, product management, financial modelling. Co-founder experience (Lifepay, Mooofarm).",
      affiliation: "IIT Roorkee",
      linkedin: "https://www.linkedin.com/in/ashish-kaushik/",
      type: "expert",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const TeamSection = ({ title, type }: { title: string, type: 'team' | 'advisor' | 'expert' }) => {
    const filteredPeople = people.filter(person => person.type === type);
    
    return (
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPeople.map((person, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="h-64 relative">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{person.name}</h3>
                  <p className="text-white/90">{person.role}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Expertise:</h4>
                  <p className="text-gray-600 text-sm">{person.expertise}</p>
                </div>
                
                {person.affiliation && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Affiliation:</h4>
                    <p className="text-gray-600 text-sm">{person.affiliation}</p>
                  </div>
                )}
                
                <a 
                  href={person.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team and Advisors</h1>
              <p className="text-xl mb-6">
                Meet the passionate individuals driving Turiya Prakalpa's mission to democratize AI education across India.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20">
          <div className="container">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-16"
            >
              <TeamSection title="Core Team" type="team" />
              <TeamSection title="Key Advisors" type="advisor" />
              <TeamSection title="Expert Network" type="expert" />
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Vision</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-xl italic mb-6">
                  "We envision an India where a student's ambition in AI is not limited by their PIN code."
                </p>
                <p className="text-gray-600">
                  At Turiya Prakalpa, we believe in the democratization of technology education. Our mission is to build AI Centers of Excellence in underserved regions, empowering the next generation of innovators from every corner of India. We're committed to bridging the opportunity gap and unleashing the incredible talent that exists across the entire country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-gradient-primary text-white text-center">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl mb-8">
                We're always looking for passionate individuals and organizations who share our vision. Whether you're an educator, technologist, mentor, or potential partner, there's a place for you in our ecosystem.
              </p>
              <a 
                href="#contact" 
                className="btn bg-white text-primary hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;