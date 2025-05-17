import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ProgramPage: React.FC = () => {
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

  const tiers = [
    {
      id: "tier1",
      number: 1,
      title: "AI Literate",
      duration: "24h",
      desc: "No coding. All streams welcome.",
      points: [
        "Use AI tools, learn ethics, fundamentals.",
        "Learn the basics of AI/ML concepts without coding",
        "Understand how to use AI tools for productivity",
        "Ethics and responsible AI usage"
      ],
      outcome: "AI awareness + optional Azure AI-900 readiness.",
      color: "border-blue-500"
    },
    {
      id: "tier2",
      number: 2,
      title: "AI Generalist",
      duration: "30h",
      desc: "Domain-specific AI applications (marketing, coding, ops).",
      points: [
        "Learn how to apply AI in specific domains",
        "Create domain-specific AI-powered projects",
        "Understand AI integration in existing workflows",
        "AI for business, marketing, operations and more"
      ],
      outcome: "AI productivity, project experience. Optional: IBM, NASSCOM FutureSkills credentials.",
      color: "border-purple-500"
    },
    {
      id: "tier3",
      number: 3,
      title: "AI Implementor",
      duration: "40h",
      desc: "Python, ML, cloud deployment, AI APIs.",
      points: [
        "Learn Python programming for AI/ML",
        "Train and deploy basic machine learning models",
        "Work with cloud AI services and APIs",
        "End-to-end ML project implementation"
      ],
      outcome: "Build AI models + deploy apps. Optional: TensorFlow Developer, AWS ML-Specialty.",
      color: "border-pink-500"
    },
    {
      id: "tier4",
      number: 4,
      title: "AI Innovator",
      duration: "60h",
      desc: "Advanced AI (GANs, MLOps, fine-tuning), innovation projects.",
      points: [
        "Advanced AI concepts including GANs and transformers",
        "MLOps and production deployment strategies",
        "Fine-tuning models for specific applications",
        "Research-oriented AI projects with industry mentoring"
      ],
      outcome: "Research or startup-ready AI solutions.",
      color: "border-indigo-500"
    }
  ];

  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-primary text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The 4-Tier AI Skilling Journey</h1>
              <p className="text-xl mb-8">
                Our AI CoEs offer a structured learning path tailored to Indian undergraduate students. The tiered model enables accessible entry and deep progression.
              </p>
              <div className="flex justify-center">
                <a href="#tier1" className="btn bg-white text-primary hover:bg-gray-100 transition-colors">
                  Explore Our Program
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Program Tiers */}
        <section className="py-20">
          <div className="container">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-16"
            >
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  id={tier.id}
                  variants={itemVariants}
                  className={`scroll-mt-24 p-8 rounded-lg shadow-card ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-l-4 ${tier.color}`}
                >
                  <div className="lg:flex">
                    <div className="lg:w-1/3 mb-6 lg:mb-0">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 ${tier.color.replace('border-', 'bg-')}`}>
                          {tier.number}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">Tier {tier.number}: {tier.title}</h2>
                          <p className="text-gray-600">Duration: {tier.duration}</p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-700 mb-4">{tier.desc}</p>
                    </div>
                    
                    <div className="lg:w-2/3 lg:pl-8">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4">What You'll Learn</h3>
                        <ul className="space-y-3">
                          {tier.points.map((point, i) => (
                            <li key={i} className="flex">
                              <div className={`flex-shrink-0 w-5 h-5 rounded-full ${tier.color.replace('border-', 'bg-')} flex items-center justify-center mr-3 mt-1`}>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 3L4 7L2 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                        <p className="text-gray-700">{tier.outcome}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Makes It Unique */}
        <section className="py-16 bg-gray-100">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Makes It Unique</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-card">
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-4 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Accessible to non-CS students</h3>
                      <p className="text-gray-600">
                        Our program is designed to be inclusive, allowing students from all academic backgrounds to participate and learn AI skills relevant to their fields.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-4 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Stackable, flexible tiers with exit points</h3>
                      <p className="text-gray-600">
                        Students can choose to stop at any tier based on their interests and career goals, with each tier providing valuable, standalone skills.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-4 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Aligned with NEP 2020 and national skilling frameworks</h3>
                      <p className="text-gray-600">
                        Our curriculum is designed in accordance with India's National Education Policy 2020 and aligns with national skill development initiatives.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-4 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Embedded hands-on projects and certifications</h3>
                      <p className="text-gray-600">
                        Practical learning is at the core of our approach, with real-world projects and industry-recognized certifications integrated throughout the program.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-4 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">From awareness to innovation – all on campus</h3>
                      <p className="text-gray-600">
                        Our programs are delivered directly on college campuses, making advanced AI education accessible without the need for students to travel to tech hubs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white text-center">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
              <p className="text-xl mb-8">
                Join the next cohort at one of our AI Centers of Excellence and transform your career prospects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn bg-white text-primary hover:bg-gray-100 transition-colors">
                  Join the Next Cohort
                </button>
                <a href="#contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary">
                  Contact for More Information
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramPage;