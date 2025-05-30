import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Lightbulb } from 'lucide-react';

const ValueProps: React.FC = () => {
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

  return (
    <section id="value-props" className="section bg-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Value Propositions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           We don't just do AI enablement - we build an entire ecosystem around it. Here's how our model creates sustainable AI innovation hubs in colleges.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Industry-aligned Courses</h3>
            <p className="text-gray-600 mb-4">Workshops, hands-on activities and certifications</p>
            <p className="text-gray-600">Assist in setting up State-of-the-art infrastructure for hands-on learning</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Skills, Local Context</h3>
            <p className="text-gray-600 mb-4">Foster regional problem solving through frontier tech innovation</p>
            <p className="text-gray-600">Tailoring world-class AI education to address local challenges and opportunities</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-14 h-14 bg-success/10 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-3">Innovation Ecosystem</h3>
            <p className="text-gray-600 mb-4">Creating self-sustaining innovation hubs on college campuses</p>
            <p className="text-gray-600">Connecting students with industry mentors and opportunities for real-world impact</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProps;