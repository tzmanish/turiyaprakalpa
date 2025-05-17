import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
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

  // Placeholder partner logos using Pexels stock photos of corporate buildings/logos
  const partnerLogos = [
    { 
      name: "Patna Women's College", 
      type: "Academic", 
      image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
    },
    { 
      name: "Tech Company", 
      type: "Industry", 
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
    },
    { 
      name: "Government Dept", 
      type: "Strategic", 
      image: "https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
    },
    { 
      name: "Tech Startup", 
      type: "Industry", 
      image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
    },
    { 
      name: "Research Foundation", 
      type: "Strategic", 
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
    },
    { 
      name: "Local University", 
      type: "Academic", 
      image: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
    },
  ];

  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners & Supporters</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            It takes a village to build innovation ecosystems. We are proud to collaborate with forward-thinking institutions and organizations:
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="h-24 w-full mb-3 bg-gray-100 rounded-lg p-4 filter grayscale hover:grayscale-0 transition-all flex items-center justify-center">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">{partner.name}</span>
              <span className="text-xs text-gray-500">{partner.type} Partner</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Interested in partnering with us to expand AI innovation in your region?
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center"
          >
            Contact Us
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;