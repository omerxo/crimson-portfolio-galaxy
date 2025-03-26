
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-theme-black/90 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-theme-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-theme-red/5 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 load-hidden opacity-0 animate-fade-in-left">
            <h2 className="text-sm uppercase tracking-widest text-theme-red mb-2">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              Quality Assurance <span className="text-theme-red">Professional</span>
            </h3>
            <p className="text-theme-light-gray/80">
              With over 8 years of experience in software quality assurance, I've helped companies deliver exceptional products by implementing robust testing strategies and quality processes.
            </p>
            <p className="text-theme-light-gray/80">
              My approach combines technical expertise with a deep understanding of business requirements to ensure software not only functions correctly but delivers value to users and stakeholders.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <ul className="space-y-2">
                  <li className="text-theme-light-gray/70">
                    <span className="text-theme-red font-medium">BS in Computer Science</span>
                    <p className="text-sm">University of Technology, 2014</p>
                  </li>
                  <li className="text-theme-light-gray/70">
                    <span className="text-theme-red font-medium">ISTQB Certified Tester</span>
                    <p className="text-sm">Advanced Level, 2016</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Experience</h4>
                <ul className="space-y-2">
                  <li className="text-theme-light-gray/70">
                    <span className="text-theme-red font-medium">Senior QA Engineer</span>
                    <p className="text-sm">Tech Solutions Inc., 2019-Present</p>
                  </li>
                  <li className="text-theme-light-gray/70">
                    <span className="text-theme-red font-medium">QA Specialist</span>
                    <p className="text-sm">Global Systems, 2015-2019</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-theme-red text-white rounded-md hover:bg-red-700 transition-colors duration-300 font-medium"
              >
                Contact Me
              </a>
              <a 
                href="#" 
                className="px-6 py-3 border border-theme-light-gray/30 text-theme-light-gray rounded-md hover:border-theme-red hover:text-theme-red transition-colors duration-300 font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden load-hidden opacity-0 animate-fade-in-right animate-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-theme-red/20 to-transparent opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-6 text-center">My Approach</h3>
              
              <div className="space-y-6">
                <div className="bg-theme-black/50 p-4 rounded-lg border border-theme-dark-gray/30">
                  <h4 className="text-lg font-medium text-theme-red mb-2">Quality Planning</h4>
                  <p className="text-sm text-theme-light-gray/70">
                    Developing comprehensive test strategies aligned with business objectives and project requirements.
                  </p>
                </div>
                
                <div className="bg-theme-black/50 p-4 rounded-lg border border-theme-dark-gray/30">
                  <h4 className="text-lg font-medium text-theme-red mb-2">Automation First</h4>
                  <p className="text-sm text-theme-light-gray/70">
                    Implementing scalable test automation frameworks to increase coverage and accelerate feedback cycles.
                  </p>
                </div>
                
                <div className="bg-theme-black/50 p-4 rounded-lg border border-theme-dark-gray/30">
                  <h4 className="text-lg font-medium text-theme-red mb-2">Continuous Improvement</h4>
                  <p className="text-sm text-theme-light-gray/70">
                    Constantly evolving QA processes and tools to adapt to new technologies and methodologies.
                  </p>
                </div>
                
                <div className="bg-theme-black/50 p-4 rounded-lg border border-theme-dark-gray/30">
                  <h4 className="text-lg font-medium text-theme-red mb-2">Security Focus</h4>
                  <p className="text-sm text-theme-light-gray/70">
                    Integrating security testing into the QA process to identify vulnerabilities early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
