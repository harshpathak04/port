import React from 'react';
import { Code, Cloud, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate DevOps Engineer with expertise in cloud-native architectures, 
                automation, and AI-integrated infrastructure. I believe in building scalable, 
                efficient systems that drive innovation and operational excellence.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey spans across containerization, orchestration, CI/CD pipelines, 
                and emerging technologies like MLOps and AIOps. I'm dedicated to bridging 
                the gap between development and operations through intelligent automation.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently focused on implementing cutting-edge DevOps practices, 
                exploring generative AI applications in infrastructure, and mentoring 
                teams on cloud-native transformation.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <Code className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-semibold text-white">Innovation</h3>
                <p className="text-sm text-gray-400">Embracing cutting-edge technologies</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                <Cloud className="h-8 w-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white">Scalability</h3>
                <p className="text-sm text-gray-400">Building for growth and efficiency</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/20">
                <Brain className="h-8 w-8 text-pink-400 mb-2" />
                <h3 className="font-semibold text-white">Intelligence</h3>
                <p className="text-sm text-gray-400">AI-driven automation solutions</p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <Zap className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="font-semibold text-white">Performance</h3>
                <p className="text-sm text-gray-400">Optimizing for speed and reliability</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">HP</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-pulse">
                <Cloud className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;