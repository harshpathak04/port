import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // Python Projects
    {
      id: 1,
      title: "Send Email Using Python",
      description: "Automated email sending solution with SMTP integration",
      tech: ["Python", "SMTP", "Email"],
      category: "python",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Send SMS Using Python",
      description: "SMS gateway integration for automated messaging",
      tech: ["Python", "Twilio", "SMS"],
      category: "python",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Menu-Driven Python Automation Tool",
      description: "Comprehensive automation suite with interactive menu",
      tech: ["Python", "CLI", "Automation"],
      category: "python",
      github: "#",
      demo: "#"
    },
    
    // Linux Projects
    {
      id: 4,
      title: "Companies Using Linux Benefits Blog",
      description: "Comprehensive analysis of Linux adoption in enterprise",
      tech: ["Linux", "Research", "Blog"],
      category: "linux",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Linux GUI Programs Analysis",
      description: "Deep dive into GUI programs and their CLI counterparts",
      tech: ["Linux", "GUI", "CLI"],
      category: "linux",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Linux Terminal Messaging",
      description: "Send messages via Linux terminal integration",
      tech: ["Linux", "Terminal", "Messaging"],
      category: "linux",
      github: "#",
      demo: "#"
    },
    
    // Docker Projects
    {
      id: 7,
      title: "Docker Real-World Case Study",
      description: "Comprehensive analysis of Docker implementation in companies",
      tech: ["Docker", "Case Study", "Analysis"],
      category: "docker",
      github: "#",
      demo: "#"
    },
    {
      id: 8,
      title: "Run Any Software in Docker",
      description: "Universal containerization solution for any application",
      tech: ["Docker", "Containerization", "DevOps"],
      category: "docker",
      github: "#",
      demo: "#"
    },
    {
      id: 9,
      title: "Docker Inside Docker (DIND)",
      description: "Advanced Docker configuration for nested containers",
      tech: ["Docker", "DIND", "Advanced"],
      category: "docker",
      github: "#",
      demo: "#"
    },
    
    // Git Projects
    {
      id: 10,
      title: "Git Repository Management",
      description: "Complete Git workflow from init to production",
      tech: ["Git", "GitHub", "Version Control"],
      category: "git",
      github: "#",
      demo: "#"
    },
    {
      id: 11,
      title: "Feature Branch Workflow",
      description: "Advanced Git branching and merging strategies",
      tech: ["Git", "Branching", "Merging"],
      category: "git",
      github: "#",
      demo: "#"
    },
    
    // JavaScript Projects
    {
      id: 12,
      title: "JavaScript Photo Capture",
      description: "Web-based photo capture with email integration",
      tech: ["JavaScript", "WebRTC", "Email"],
      category: "javascript",
      github: "#",
      demo: "#"
    },
    {
      id: 13,
      title: "JavaScript WhatsApp Integration",
      description: "Automated WhatsApp messaging via JavaScript",
      tech: ["JavaScript", "WhatsApp", "API"],
      category: "javascript",
      github: "#",
      demo: "#"
    },
    {
      id: 14,
      title: "Gmail API Integration",
      description: "Fetch and manage Gmail data through API",
      tech: ["JavaScript", "Gmail API", "OAuth"],
      category: "javascript",
      github: "#",
      demo: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'python', label: 'Python', count: projects.filter(p => p.category === 'python').length },
    { id: 'linux', label: 'Linux', count: projects.filter(p => p.category === 'linux').length },
    { id: 'docker', label: 'Docker', count: projects.filter(p => p.category === 'docker').length },
    { id: 'git', label: 'Git', count: projects.filter(p => p.category === 'git').length },
    { id: 'javascript', label: 'JavaScript', count: projects.filter(p => p.category === 'javascript').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my latest work in DevOps, automation, and cloud technologies
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                {category.label}
                <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      project.category === 'python' ? 'bg-yellow-400' :
                      project.category === 'linux' ? 'bg-green-400' :
                      project.category === 'docker' ? 'bg-blue-400' :
                      project.category === 'git' ? 'bg-orange-400' :
                      'bg-purple-400'
                    }`}></div>
                    <span className="text-sm text-gray-400 capitalize">{project.category}</span>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;