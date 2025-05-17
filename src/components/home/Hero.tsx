import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden" 
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI Innovation, Everywhere
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Building AI Centres of Excellence in underserved regions to empower the next generation of innovators
          </p>
          
          <div className="mb-10 max-w-2xl">
            <p className="text-gray-200">
              Turiya Prakalpa is on a mission to democratize AI education and innovation. We establish on-campus AI Centres of Excellence that provide curated hands-on workshops, industry exposure, and assist in setting cutting-edge AI labs in regions with low AI enablement or tech integration. Our vision is to nurture talent in every region, unlocking the potential for grassroots problem-solving and innovation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/program" className="btn-primary">
              Learn More
            </Link>
            <a href="#contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              Partner with Us
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a 
            href="#value-props" 
            className="flex flex-col items-center text-white"
            aria-label="Scroll down"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;