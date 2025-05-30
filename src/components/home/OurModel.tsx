import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Handshake, LayoutGrid, Blocks, Users, LightbulbIcon } from 'lucide-react';

const OurModel: React.FC = () => {
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

  const steps = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Identify & Partner',
      description: 'We identify & partner with institutions with a vision for AI and innovation.'
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: 'Establish AI CoE',
      description: 'Centre or Excellence (CoE) or Hub on campus with a modern lab assisted by the institution.'
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: 'Source Problem Statements',
      description: 'Engage with local administrations, industries, and civil organizations to gather problem statements and obtain relevant data.'
    },
    {
      icon: <Blocks className="w-8 h-8" />,
      title: 'Curriculum & Training',
      description: 'An industry-aligned AI curriculum; workshops with hands-on experience with AI tools and techniques for both students and faculties.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mentorship & Projects',
      description: 'Each CoE is connected to a network of AI experts and industry mentors. Students work on real projects addressing local problems, fostering an innovation mindset.'
    },
    {
      icon: <LightbulbIcon className="w-8 h-8" />,
      title: 'Community & Incubation',
      description: 'We host hackathons, talks, and an annual AI Innovation Summit for our CoEs. Promising ideas get incubation support and links to industry or research institutions.'
    }
  ];

  return (
    <section id="our-model" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           A structured program with industry-aligned curriculum, hands-on projects addressing local challenges, mentorship from leading AI professionals, and incubation support to foster student-led startups.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    index % 2 === 0 ? 'bg-primary text-white' : 'bg-secondary text-white'
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        {/* Mobile Steps */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div className="flex items-start">
                <div className={`flex-shrink-0 z-10 w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                  index % 2 === 0 ? 'bg-primary text-white' : 'bg-secondary text-white'
                }`}>
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 -z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 italic">
            We empower campuses with in-house AI innovation hubs, cultivating a sustainable culture of problem-solving while expanding India's base tech talent across diverse educational ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurModel;