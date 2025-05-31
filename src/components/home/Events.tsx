import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Loader2 } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  featured: boolean;
  past: boolean;
}

const Events: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simulate data fetching
  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data
        const mockEvents = [
          {
            title: "AI Yatra 2025 – Eastern India Roadshow",
            date: "Jan 10-20, 2025",
            location: "5 cities in Bihar & Jharkhand",
            description: "Our team will travel to 5 cities in Bihar & Jharkhand conducting free AI bootcamps for students.",
            featured: true,
            past: false,
          },
          {
            title: "Faculty AI Training Workshop",
            date: "Feb 15, 2025",
            location: "Patna, Bihar",
            description: "A hands-on workshop for 30 faculty members to help them integrate AI concepts into their teaching.",
            featured: false,
            past: false,
          },
          {
            title: "Annual AI CoE Summit",
            date: "July 2025",
            location: "Ranchi, Jharkhand",
            description: "Students from all our CoEs showcase projects and connect with industry leaders.",
            featured: false,
            past: false,
          },
          {
            title: "AI in Agriculture Hackathon",
            date: "Nov 2024",
            location: "Patna, Bihar",
            description: "We ran an 'AI in Agriculture' hackathon with 100+ student participants – resulting in 5 promising project ideas now being incubated.",
            featured: false,
            past: true,
          },
        ];
        
        setEvents(mockEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

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

  // Loading skeleton component
  const EventSkeleton = () => (
    <div className="bg-white p-6 rounded-lg shadow-card animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <section id="events" className="section bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto animate-pulse"></div>
          </div>
          
          <div className="space-y-8">
            {/* Featured Event Skeleton */}
            <div className="bg-gray-200 p-8 rounded-lg animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>

            {/* Upcoming Events Skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EventSkeleton />
              <EventSkeleton />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Workshops</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Learning and innovation happen beyond the classroom. We regularly host and participate in events to inspire, skill, and connect our community.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Featured Event */}
          {events.filter(event => event.featured).map((event, index) => (
            <motion.div 
              key={`featured-${index}`}
              variants={itemVariants}
              className="bg-gradient-primary text-white p-6 md:p-8 rounded-lg shadow-lg"
            >
              <div className="md:flex items-start">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-2">
                    Featured Event
                  </div>
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mb-6">{event.description}</p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfjMgk1TI1GO-in922U9HcOCrYQKqwRrR8ZPRoViwGeKcCetQ/viewform?usp=header"
                    className="bg-white text-primary hover:bg-gray-100 transition-colors px-6 py-2 rounded-lg font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          <h3 className="text-xl font-bold mt-8 mb-4">Upcoming Events</h3>
          
          {/* Upcoming Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.filter(event => !event.featured && !event.past).map((event, index) => (
              <motion.div 
                key={`upcoming-${index}`}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h4 className="text-lg font-bold mb-2">{event.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </div>
                <button className="text-primary hover:text-primary-dark transition-colors font-medium text-sm mt-auto">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Past Event Highlights</h3>
          
          {/* Past Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.filter(event => event.past).map((event, index) => (
              <motion.div 
                key={`past-${index}`}
                variants={itemVariants}
                className="bg-white/60 p-6 rounded-lg border border-gray-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">{event.title}</h4>
                  <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    Past Event
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>100+ attendees</span>
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Stay tuned for more events or invite us to your campus – we're on a mission to bring AI excitement everywhere!
          </p>
          <a 
            href="#contact" 
            className="btn-outline inline-flex items-center"
          >
            Get In Touch
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;