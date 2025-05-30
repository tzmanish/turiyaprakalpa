import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const WhyThisMatters: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="why-this-matters" 
      className="section bg-gradient-primary text-white"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Matters</h2>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Democratizing AI</h3>
              <p>
                AI is transforming industries worldwide, but AI opportunities remain concentrated in big cities, leaving out millions of aspiring innovators. We are committed to changing that.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Talent & Youth</h3>
              <p>
                India has one of the largest youth populations. Imagine the innovations that can emerge when a student in Patna or Raipur gets the same AI exposure as one in Bangalore. We believe the next AI leader could come from anywhere – if given the chance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Local Innovation, National Impact</h3>
              <p>
                Solutions developed in our CoEs address local problems – be it agriculture, healthcare, or education – which can scale to benefit all of India. By empowering local students, we're not just preparing them for jobs, we're enabling them to create solutions and jobs in their communities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Closing Tech Exposure Gaps</h3>
              <p>
                Currently, colleges in emerging cities students often lack access to advanced tech training, leading to a knowledge and opportunity gap. Initiatives like ours aim to close that gap, aligning with India's vision of inclusive growth and a digitally empowered society.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white">02</span>
                <span className="text-lg text-white/80 mt-1">CoEs</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white">150+</span>
                <span className="text-lg text-white/80 mt-1">Students Impacted</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white">05</span>
                <span className="text-lg text-white/80 mt-1">Colleges</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-white">02</span>
                <span className="text-lg text-white/80 mt-1">Workshops</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl italic">
              "Turiya Prakalpa envisions an India where a student's ambition in AI is not limited by their PIN code. We're building that future, one campus at a time."
            </p>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="btn bg-white text-primary hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Join the Movement
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;