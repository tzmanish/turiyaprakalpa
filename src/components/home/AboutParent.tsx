import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AboutParent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="bg-white rounded-lg shadow-card p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-4">About Parent Institution - Pataliputra Prakalpa</h3>
          
          <p className="text-gray-700 mb-4">
            Pataliputra Praklapa: A project to accelerate regional development through mass frontier technology adoption and strategic ecosystem building. Turiya Prakalpa is a long-term initiative dedicated to fostering visionary entrepreneurs and thought leaders in underserved regions of India—particularly the Purvanchal region. By cultivating a thriving innovation ecosystem, we accelerate growth, shape policy, and align with the region's civilizational aspirations.
          </p>
          
          <button
            onClick={toggleExpand}
            className="flex items-center text-primary font-medium mb-4 focus:outline-none"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="ml-1 w-5 h-5" />
              </>
            ) : (
              <>
                <span>Learn More</span>
                <ChevronDown className="ml-1 w-5 h-5" />
              </>
            )}
          </button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t pt-4">
                  <h4 className="text-xl font-bold mb-3">Pataliputra Prakalpa: Strategic Plan & Roadmap</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-lg font-semibold mb-2">1. The Opportunity & Our Vision</h5>
                      <p className="mb-4 italic">
                        "To forge a dynamic innovation ecosystem in India's large vast latent potential  in emerging regions. We bridge local talent and ventures with global opportunities, creating an entrepreneur-led hub for technology, entrepreneurship, and accelerated development."
                      </p>
                      
                      <h6 className="font-semibold mb-2">Why Now? The Imperative for Action:</h6>
                      <ul className="space-y-4 text-gray-700">
                        <li>
                          <strong>The 'Rising East' Opportunity:</strong> Beyond Bihar, the contiguous region including Jharkhand, Odisha, West Bengal, and Eastern Uttar Pradesh represents a massive demographic powerhouse. This "Rising East" corridor is home to a combined population estimated between 400-450 million people, signifying an enormous, aspirational market and talent pool poised for growth. Pataliputra Prakalpa aims to be a key enabler for this regional transformation, starting from Bihar.
                        </li>
                        <li>
                          <strong>Untapped Demographic Dividend:</strong> Bihar itself has one of India's youngest populations (over 50% under 25). This immense human potential requires robust pathways to modern skills and meaningful employment, pathways that are currently insufficient, reflected in challenges like lower Gross Enrollment Ratios in higher education compared to national averages.
                        </li>
                        <li>
                          <strong>Nascent Startup Ecosystem:</strong> While India booms, the region's startup ecosystem is embryonic, representing a tiny fraction (&lt;1%) of recognized startups and receiving negligible venture funding. There is a clear need and opportunity to build the foundational support structures for innovation to flourish.
                        </li>
                        <li>
                          <strong>Global Diaspora Connection:</strong> A significant, multi-million strong Bihari diaspora exists globally, including deep historical roots in Girmitiya countries (Fiji, Mauritius, South Africa, Caribbean) and modern hubs worldwide. This network represents a largely untapped resource for investment, mentorship, market access, and global ambassadorship, waiting to be engaged.
                        </li>
                        <li>
                          <strong>Indian East to Asian East - Cultural & Tourism Potential:</strong> Bihar, as the cradle of Buddhism and Jainism, shares deep cultural roots with Southeast and East Asia. This offers a unique platform for cultural exchange and commerce. International tourism, despite rebounding to over 500,000 foreign arrivals in 2023, remains a vastly under-realized opportunity. To illustrate the scale of potential, neighbouring Uttar Pradesh, with its own rich heritage sites, attracted over 1.6 million foreign tourists in 2023. As the heartland of Buddhism and Jainism, and with focused development, Bihar possesses the assets to significantly grow its international visitor base, potentially reaching similar levels and becoming a key destination on the global Buddhist circuit and beyond.
                        </li>
                        <li>
                          <strong>Economic Transformation & Brain Drain:</strong> Over-reliance on agriculture and underdeveloped secondary/tertiary sectors contribute to significant outward migration of talent. Creating local opportunities is crucial for balanced growth and reversing the brain drain.
                        </li>
                        <li>
                          <strong>AI as an Inflection Point:</strong> Artificial Intelligence presents a unique chance to leapfrog traditional development stages. By proactively building an AI-ready generation through targeted guidance, mentorship, and skill-building, we can create a high-value workforce. Furthermore, there's immense potential to apply AI to solve region-specific challenges, such as in Agritech (leveraging fertile river basins), Flood Management & Monitoring, water resource studies, disaster response, and optimizing logistics. Catching this AI wave is critical.
                        </li>
                      </ul>
                      <p className="mt-4">
                        Turiya Prakalpa is conceived to directly address these challenges and opportunities, building the necessary infrastructure – skills, support, networks, and dialogue – to catalyze growth and empower a generation.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold mb-2">2. Turiya Prakalpa: Mission & Approach</h5>
                      <p className="mb-4">
                        Our core mission is to create a self-sustaining, transformative ecosystem that accelerates progress, starting in Bihar and radiating through the "Rising East". We will achieve this through three synergistic pillars:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h6 className="font-semibold mb-2">AI & Career Empowerment for Students</h6>
                          <p>
                            Cultivating a generation of tech-aware, globally competitive individuals. This involves organizing cutting-edge AI awareness programs; partnering with institutions to co-create market-relevant AI curricula; conducting hands-on workshops and mentorship programs focused on AI and other career-essential domains; and aspiring to establish targeted AI Centers of Excellence in collaboration with leading tech companies. We aim for scale primarily through B2B partnerships with educational institutions, leveraging virtual platforms.
                          </p>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h6 className="font-semibold mb-2">Startup & MSME Acceleration (Local to Global Connect)</h6>
                          <p>
                            Providing a vital support system for local entrepreneurs, startups, and MSMEs. We connect them to global ecosystems (starting with Bengaluru) through curated facilitation programs, mentorship, training, network access, and exposure, enabling them to scale their ventures. Revenue models, including program fees, facilitation charges, and potential equity sharing in accelerated startups, are designed to ensure the long-term sustainability and scalability of our support programs.
                          </p>
                        </div>
                        
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h6 className="font-semibold mb-2">Regional Development Dialogue & Advocacy</h6>
                          <p>
                            Fostering focused, action-oriented discourse on regional development. This involves organizing impactful events (like the proposed 'Patliputra Samvad' series, funded via sponsorships), developing communication platforms, and publishing insightful reports and quarterly whitepapers on specific opportunities (e.g., Tourism Potential, Agritech AI Applications) to shape optimistic and data-driven development strategies and attract investment.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h6 className="font-semibold mb-2">Other initiatives:</h6>
                        <p>
                          "Patliputra Samvad is a dynamic platform designed to foster strategic regional dialogue on challenges and opportunities—bringing together leaders, policymakers, and innovators to drive transformative change. <a href="https://patliputrasamvad.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">website: https://patliputrasamvad.com/</a>"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutParent;