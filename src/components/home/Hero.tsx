import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<THREE.Points | null>(null);

useEffect(() => {
  if (!mountRef.current) return;

  // Check if mobile
  const isMobile = window.innerWidth < 768;
  const isLowPerformance = navigator.hardwareConcurrency < 4;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a0a);

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ 
    antialias: !isMobile, // Disable antialiasing on mobile
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
  mountRef.current.appendChild(renderer.domElement);

  // Particle system with reduced count for mobile
  const particleCount = isMobile ? 300 : (isLowPerformance ? 500 : 1000);
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
    
    // Mix of primary and secondary colors
    const color = Math.random() > 0.5 
      ? new THREE.Color(0x3d31fb) 
      : new THREE.Color(0xd129a4);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.08 : 0.05,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.8
  });

  const particles = new THREE.Points(geometry, material);
  particlesRef.current = particles;
  scene.add(particles);

  // Skip lines on mobile for performance
  if (!isMobile) {
    // Connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(200 * 6);
    const lineColors = new Float32Array(200 * 6);
    
    for (let i = 0; i < 200 * 6; i += 6) {
      linePositions[i] = (Math.random() - 0.5) * 10;
      linePositions[i + 1] = (Math.random() - 0.5) * 10;
      linePositions[i + 2] = (Math.random() - 0.5) * 10;
      linePositions[i + 3] = (Math.random() - 0.5) * 10;
      linePositions[i + 4] = (Math.random() - 0.5) * 10;
      linePositions[i + 5] = (Math.random() - 0.5) * 10;
      
      const color = new THREE.Color(0x3d31fb);
      lineColors[i] = color.r * 0.3;
      lineColors[i + 1] = color.g * 0.3;
      lineColors[i + 2] = color.b * 0.3;
      lineColors[i + 3] = color.r * 0.3;
      lineColors[i + 4] = color.g * 0.3;
      lineColors[i + 5] = color.b * 0.3;
    }
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.3
    });
    
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
  }

  // Mouse tracking - disable on mobile
  const handleMouseMove = (event: MouseEvent) => {
    if (!isMobile) {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
  };

  window.addEventListener('mousemove', handleMouseMove);

  // Animation loop with reduced speed on mobile
  let animationId: number;
  const animate = () => {
    animationId = requestAnimationFrame(animate);

    // Idle rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.x += isMobile ? 0.0002 : 0.0005;
      particlesRef.current.rotation.y += isMobile ? 0.0001 : 0.0003;
    }

    // Subtle mouse response
    if (!isMobile && particlesRef.current) {
      particlesRef.current.rotation.x += mouseRef.current.y * 0.001;
      particlesRef.current.rotation.y += mouseRef.current.x * 0.001;
    }

    renderer.render(scene, camera);
  };

  animate();

  // Handle resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    mountRef.current?.removeChild(renderer.domElement);
    renderer.dispose();
    geometry.dispose();
    material.dispose();
  };
}, []);

  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      
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