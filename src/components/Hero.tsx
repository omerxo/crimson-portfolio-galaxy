
import React from 'react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10 pt-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h2 className="text-xl text-theme-red uppercase tracking-widest font-light">
              Quality Assurance Professional
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block">Ensuring</span>
              <span className="text-theme-red block mt-2">Excellence</span>
            </h1>
            <p className="text-xl text-theme-light-gray/70 max-w-md">
              Passionate about delivering high-quality software through meticulous testing and comprehensive quality assurance processes.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-theme-red text-white rounded-md hover:bg-red-700 transition-colors duration-300 font-medium"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-theme-light-gray/30 text-theme-light-gray rounded-md hover:border-theme-red hover:text-theme-red transition-colors duration-300 font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="hidden md:block relative opacity-0 animate-fade-in animate-delay-300">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-theme-red/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-theme-red/20 rounded-full blur-3xl"></div>
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-theme-red/20 to-transparent opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-4">QA Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-theme-red mr-2">►</span>
                    <span>Manual & Automated Testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-red mr-2">►</span>
                    <span>Test Planning & Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-red mr-2">►</span>
                    <span>CI/CD Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-red mr-2">►</span>
                    <span>Performance Testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-theme-red mr-2">►</span>
                    <span>Security Testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-theme-light-gray/50 hover:text-theme-red transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
