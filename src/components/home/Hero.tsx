import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cover from '../../Assets/Cover.png'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden bg-gradient-to-br from-gray-900 via-primary-dark to-secondary-dark">
      {/* Cover Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cover} 
          alt="AI Innovation Cover" 
          className="w-full h-full object-contain opacity-60 select-none pointer-events-none" 
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          draggable="false"
        />
      </div>
      {/* CSS Particle Background */}
      <div className="absolute inset-0 z-10">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        
        {/* Animated particles */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--x': Math.random(),
                '--y': Math.random(),
                '--duration': 15 + Math.random() * 20,
                '--delay': Math.random() * 20,
                '--size': 2 + Math.random() * 4,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Floating orbs for visual interest */}
        <div className="orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
      </div>
      
      <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Innovation, Everywhere
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Building AI Centres of Excellence in underserved regions to empower the next generation of innovators
            </p>
          
          {/* <div className="mb-10 max-w-2xl">
            <p className="text-gray-200">
              Turiya Prakalpa is on a mission to democratize AI education and innovation. We establish on-campus AI Centres of Excellence that provide curated hands-on workshops, industry exposure, and assist in setting cutting-edge AI labs in regions with low AI enablement or tech integration. Our vision is to nurture talent in every region, unlocking the potential for grassroots problem-solving and innovation.
            </p>
          </div> */}
            
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