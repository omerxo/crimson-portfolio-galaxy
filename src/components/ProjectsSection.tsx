
import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tools: string[];
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform Testing",
      description: "Comprehensive testing strategy for a major e-commerce platform including automation framework setup and CI/CD integration.",
      category: "Automation",
      tools: ["Selenium", "TestNG", "Jenkins", "Jira"],
      image: "https://placehold.co/600x400/111111/E50914?text=E-commerce+Testing"
    },
    {
      id: 2,
      title: "Mobile Banking App QA",
      description: "End-to-end testing of a secure banking application with focus on security testing and compliance requirements.",
      category: "Mobile",
      tools: ["Appium", "Postman", "TestRail", "OWASP ZAP"],
      image: "https://placehold.co/600x400/111111/E50914?text=Banking+App+QA"
    },
    {
      id: 3,
      title: "Healthcare System Integration",
      description: "Testing integration points between multiple healthcare systems, ensuring data integrity and HIPAA compliance.",
      category: "Integration",
      tools: ["SoapUI", "Gatling", "SQL", "Cucumber"],
      image: "https://placehold.co/600x400/111111/E50914?text=Healthcare+Integration"
    },
    {
      id: 4,
      title: "Cloud Migration Validation",
      description: "Validation strategy for migrating legacy systems to cloud infrastructure, ensuring business continuity.",
      category: "Cloud",
      tools: ["AWS", "Docker", "Terraform", "Cypress"],
      image: "https://placehold.co/600x400/111111/E50914?text=Cloud+Migration"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-theme-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-theme-red/5 to-transparent"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-theme-red mb-2 load-hidden opacity-0 animate-fade-in">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 load-hidden opacity-0 animate-fade-in animate-delay-100">Featured Projects</h3>
          <p className="max-w-2xl mx-auto text-theme-light-gray/70 load-hidden opacity-0 animate-fade-in animate-delay-200">
            A showcase of my quality assurance work across different industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card h-full group transform transition-all duration-300 hover:-translate-y-2 load-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-theme-black to-transparent opacity-60"></div>
                <span className="absolute top-4 right-4 bg-theme-red/90 text-white px-3 py-1 text-xs rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 group-hover:text-theme-red transition-colors">
                  {project.title}
                </h4>
                <p className="text-theme-light-gray/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-theme-dark-gray/50 text-theme-light-gray/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-theme-red hover:underline group"
          >
            View All Projects
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
