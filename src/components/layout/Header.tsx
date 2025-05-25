import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/public/logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = `text-lg font-medium transition-colors hover:text-primary ${
    isScrolled ? 'text-gray-800' : 'text-white'
  }`;

  const activeLinkClasses = `text-lg font-medium ${
    isScrolled ? 'text-primary' : 'text-secondary-light'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className={`text-2xl font-extrabold tracking-wide font-heading ${isScrolled ? 'text-primary' : 'text-secondary-light'}`}>
            Turiya Prakalpa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={location.pathname === '/' ? activeLinkClasses : linkClasses}
          >
            Home
          </Link>
          <Link
            to="/program"
            className={location.pathname === '/program' ? activeLinkClasses : linkClasses}
          >
            Our Program
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? activeLinkClasses : linkClasses}
          >
            About
          </Link>
          <a 
            href="#contact" 
            className={`${linkClasses} px-4 py-2 border-2 rounded-md ${
              isScrolled ? 'border-primary hover:bg-primary hover:text-white' : 'border-white hover:bg-white hover:text-primary'
            }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Navigation with Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={closeMenu}
          />
        )}
        
        <div
          className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-40 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden shadow-xl`}
        >
          <div className="flex flex-col p-8 pt-20 space-y-6">
            <Link
              to="/"
              className={`text-xl font-medium ${location.pathname === '/' ? 'text-primary' : 'text-gray-800'}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/program"
              className={`text-xl font-medium ${location.pathname === '/program' ? 'text-primary' : 'text-gray-800'}`}
              onClick={closeMenu}
            >
              Our Program
            </Link>
            <Link
              to="/about"
              className={`text-xl font-medium ${location.pathname === '/about' ? 'text-primary' : 'text-gray-800'}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <a 
            href="#contact"
              className="text-xl font-medium text-white bg-primary py-3 px-6 rounded-md text-center"
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;