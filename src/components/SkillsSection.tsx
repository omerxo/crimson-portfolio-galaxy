
import React from 'react';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Testing",
      skills: [
        { name: "Manual Testing", level: 95 },
        { name: "Test Automation", level: 90 },
        { name: "Performance Testing", level: 85 },
        { name: "Security Testing", level: 80 },
        { name: "Usability Testing", level: 85 }
      ]
    },
    {
      name: "Tools & Frameworks",
      skills: [
        { name: "Selenium", level: 90 },
        { name: "Cypress", level: 85 },
        { name: "JMeter", level: 80 },
        { name: "Postman", level: 95 },
        { name: "TestRail", level: 90 }
      ]
    },
    {
      name: "Programming",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 90 },
        { name: "Shell Scripting", level: 75 }
      ]
    },
    {
      name: "Methodologies",
      skills: [
        { name: "Agile/Scrum", level: 95 },
        { name: "CI/CD", level: 90 },
        { name: "TDD", level: 85 },
        { name: "BDD", level: 80 },
        { name: "DevOps", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-theme-black to-theme-black/95"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-theme-red mb-2 load-hidden opacity-0 animate-fade-in">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 load-hidden opacity-0 animate-fade-in animate-delay-100">My Skills</h3>
          <p className="max-w-2xl mx-auto text-theme-light-gray/70 load-hidden opacity-0 animate-fade-in animate-delay-200">
            A comprehensive overview of my technical skills and areas of expertise in quality assurance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name} 
              className="glass-card p-8 rounded-lg load-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${(categoryIndex + 2) * 100}ms` }}
            >
              <h4 className="text-xl font-semibold mb-6 text-theme-red">{category.name}</h4>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-theme-light-gray">{skill.name}</span>
                      <span className="text-theme-light-gray/70">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-theme-dark-gray/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-theme-red rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          transition: 'width 1s ease-in-out',
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6 load-hidden opacity-0 animate-fade-in animate-delay-500">
          <div className="glass-card px-5 py-3 rounded-lg flex items-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-theme-red">8+</span>
              <p className="text-sm text-theme-light-gray/70">Years Experience</p>
            </div>
          </div>
          <div className="glass-card px-5 py-3 rounded-lg flex items-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-theme-red">50+</span>
              <p className="text-sm text-theme-light-gray/70">Projects Completed</p>
            </div>
          </div>
          <div className="glass-card px-5 py-3 rounded-lg flex items-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-theme-red">5+</span>
              <p className="text-sm text-theme-light-gray/70">Certifications</p>
            </div>
          </div>
          <div className="glass-card px-5 py-3 rounded-lg flex items-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-theme-red">15+</span>
              <p className="text-sm text-theme-light-gray/70">Tools Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
