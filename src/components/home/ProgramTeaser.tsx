import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProgramTeaser: React.FC = () => {
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

  const tiers = [
    {
      number: 1,
      title: 'AI Literate',
      description: 'Get AI-smart in 24 hours. Tools, ethics, awareness.',
      color: 'bg-blue-500',
    },
    {
      number: 2,
      title: 'AI Generalist',
      description: 'Apply AI to your field. Power-user projects.',
      color: 'bg-purple-500',
    },
    {
      number: 3,
      title: 'AI Implementor',
      description: 'Learn to code, train, and deploy ML models.',
      color: 'bg-pink-500',
    },
    {
      number: 4,
      title: 'AI Innovator',
      description: 'Push boundaries. Build research-grade solutions.',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <section id="program-teaser" className="section bg-gradient-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Program - AI for Everyone, differently!</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A flexible, multi-tier learning path from AI basics to innovation.{' '}
            <Link to="/program" className="inline-flex items-center font-medium hover:underline whitespace-nowrap">
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2, transition: { duration: 0.1 } }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20"
            >
              <div className={`w-12 h-12 ${tier.color} rounded-full flex items-center justify-center text-xl font-bold mb-4`}>
                {tier.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
              <p className="text-white/80">{tier.description}</p>
              <Link to={`/program#tier${tier.number}`} className="mt-4 inline-flex items-center text-sm font-medium hover:underline">
                Explore Tier {tier.number} <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramTeaser;