
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('load-hidden');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1
    });
    
    // Observe all elements with load-hidden class
    document.querySelectorAll('.load-hidden').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      // Cleanup
      document.querySelectorAll('.load-hidden').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-theme-black text-theme-light-gray overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      
      {/* Scroll to top button */}
      <a 
        href="#home" 
        className="fixed bottom-6 right-6 w-12 h-12 bg-theme-red/90 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-theme-red transition-colors z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
