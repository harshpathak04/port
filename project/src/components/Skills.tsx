import React from 'react';
import { Code, Cloud, Database, Cpu, Brain, Zap, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "JavaScript", "TypeScript", "Bash", "Go", "Java", "C++"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <GitBranch className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["React", "Node.js", "Flask", "Django", "Express", "FastAPI", "Spring Boot"]
    },
    {
      title: "Tools & Platforms",
      icon: <Monitor className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "Ansible", "Prometheus"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["AWS", "Azure", "GCP", "OpenShift", "Helm", "ArgoCD", "Istio"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "InfluxDB", "Cassandra"]
    },
    {
      title: "AI/MLOps",
      icon: <Brain className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      skills: ["MLflow", "Kubeflow", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter", "Apache Airflow"]
    },
    {
      title: "Data Analytics",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-teal-500 to-blue-500",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Apache Spark", "Tableau", "Power BI"]
    },
    {
      title: "Generative AI",
      icon: <Zap className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
      skills: ["OpenAI API", "LangChain", "Hugging Face", "Prompt Engineering", "RAG", "Fine-tuning", "Vector DBs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expertise across modern technologies, cloud platforms, and emerging AI/ML tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-gray-300 text-sm">{skill}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < (4 + Math.random()) 
                                ? `bg-gradient-to-r ${category.color}` 
                                : 'bg-gray-700'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;