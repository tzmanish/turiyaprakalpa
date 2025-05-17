import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Check, Clock, FileText } from 'lucide-react';

const OurCoEs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const coes = [
    {
      name: "Patna Women's College",
      location: "Bihar",
      status: "launched",
      date: "2025",
      description: "50+ students enrolled in CoE programs, working on AgriAI projects.",
      icon: <Check className="w-5 h-5" />,
      statusColor: "bg-green-500",
      statusText: "Launched"
    },
    {
      name: "Ranchi Institute of Technology",
      location: "Jharkhand",
      status: "launching",
      date: "Jan 2026",
      description: "Faculty training in progress, lab equipment installed.",
      icon: <Clock className="w-5 h-5" />,
      statusColor: "bg-yellow-500",
      statusText: "Launching Soon"
    },
    {
      name: "Bilaspur University",
      location: "Chhattisgarh",
      status: "planned",
      date: "2026",
      description: "CoE setup to begin, focusing on AI in healthcare.",
      icon: <FileText className="w-5 h-5" />,
      statusColor: "bg-blue-500",
      statusText: "MoU Signed"
    }
  ];

  return (
    <section id="our-coes" className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Centers of Excellence</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 mb-4">
            Innovation Hubs Empowering Students Across India
          </p>
          <p className="max-w-3xl mx-auto text-gray-600">
            Each CoE we build is a fully-equipped innovation hub on campus. From state-of-the-art AI hardware to expert mentors, our CoEs offer everything needed to spur AI research, learning, and startup ideas within the college.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coes.map((coe, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <img 
                  src={`https://images.pexels.com/photos/${3861958 + index}/pexels-photo-${3861958 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                  alt={`${coe.name} campus`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{coe.name}</h3>
                    <p className="text-gray-600">{coe.location}</p>
                  </div>
                  <div className={`${coe.statusColor} text-white text-xs px-3 py-1 rounded-full flex items-center`}>
                    {coe.icon}
                    <span className="ml-1">{coe.statusText}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{coe.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{coe.date}</span>
                  <button className="text-sm text-primary hover:text-primary-dark font-medium">Learn More</button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 bg-white p-6 md:p-8 rounded-lg shadow-card">
          <h3 className="text-xl font-bold mb-4">Common Facilities at Every CoE</h3>
          <p className="text-gray-600 mb-6">
            Each center features high-performance computers, AI software tools, internet connectivity, and curated learning resources. Students engage in peer learning, build projects solving local challenges, and connect with our broader network for internships and jobs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Technical Infrastructure</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>High-performance computing workstations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>AI and ML software and libraries</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>High-speed internet connectivity</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium mb-2">Community Activities</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span>Industry guest lectures and mentorship</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span>Innovation challenges and hackathons</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span>Student-led startup incubation</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-gray-700 italic">
            Our CoEs are where academia meets industry. They host guest lectures, innovation challenges, and even incubate student-led startups. In short, a CoE is a catalyst for a campus's AI ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCoEs;