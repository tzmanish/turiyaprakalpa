import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const RegionFocus: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="region-focus" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Region in Focus: Bharat's Next Tech Frontier</h2>
            <p className="text-xl text-gray-600 mb-6">Bridging the AI Divide in emerging India</p>
            
            <p className="mb-6">
              India's tech growth has largely centered in a few metro cities. We're changing that by turning underserved regions into the next hubs of AI innovation. We are currently collaborating with colleges in states such as Bihar, Chhattisgarh, and Madhya Pradesh, and are eager to expand into other regions that possess immense talent but have limited access to tech opportunities.
            </p>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>
                  <strong className="text-gray-800">Unlocking Local Talent:</strong> Thousands of skilled graduates emerge from these states each year, yet many must leave home to find opportunities in tech. By building AI CoEs locally, we aim to retain and nurture this talent in-region.
                </p>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>
                  <strong className="text-gray-800">Filling Infrastructure Gaps:</strong> Our CoEs fill the gap for colleges lacking in advanced AI cabilities or relevant indutry exposure by bringing world-class AI resources to campuses. 
                </p>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>
                  <strong className="text-gray-800">Sparking Regional Innovation:</strong> Students in regional colleges intimately understand their region's challenges. By applying AI and innovation to local problems, they don't just gain skills—they build sustainable tech ecosystems that empower communities and spark grassroots innovation.
                </p>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg border-l-4 border-primary">
              <p className="text-lg font-medium">
                "In emerging regions we're not just enabling students—we're igniting a movement. By empowering local talent with AI skills, we're building the next generation of innovators."
              </p>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students working in tech lab" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg md:max-w-xs">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-800">Focus States</h3>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>Bihar</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  <span>Jharkhand</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Chhattisgarh</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span>Eastern Uttar Pradesh</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegionFocus;