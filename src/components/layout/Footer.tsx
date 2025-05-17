import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Turiya Prakalpa</h3>
            <p className="text-gray-300 mb-4">
              Building AI Centres of Excellence in underserved regions to empower the next generation of innovators.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-gray-300 hover:text-primary transition-colors">
                  Our Program
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/program#tier1" className="text-gray-300 hover:text-primary transition-colors">
                  AI Literate
                </Link>
              </li>
              <li>
                <Link to="/program#tier2" className="text-gray-300 hover:text-primary transition-colors">
                  AI Generalist
                </Link>
              </li>
              <li>
                <Link to="/program#tier3" className="text-gray-300 hover:text-primary transition-colors">
                  AI Implementor
                </Link>
              </li>
              <li>
                <Link to="/program#tier4" className="text-gray-300 hover:text-primary transition-colors">
                  AI Innovator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div id="contact">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary mt-1" />
                <span className="text-gray-300">info@turiyaprakalpa.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary mt-1" />
                <span className="text-gray-300">+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="text-gray-300">
                  Patna, Bihar, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Turiya Prakalpa. All rights reserved.</p>
          <p className="mt-2 text-sm">
            A project of Pataliputra Prakalpa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;