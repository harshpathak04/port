import React from 'react';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        <div className="stars absolute inset-0"></div>
        <div className="stars2 absolute inset-0"></div>
        <div className="stars3 absolute inset-0"></div>
      </div>
      
      {/* Shooting Stars */}
      <div className="absolute inset-0">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25">
                <span className="text-xl font-bold text-white">HP</span>
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
            </div>

            {/* Name with Neon Effect */}
            <h1 className="mb-6 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              <span className="neon-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Harsh Pathak
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
              DevOps Engineer | Cloud-Native Architect | MLOps & AIOps Enthusiast
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>
              
              <div className="flex gap-3">
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110">
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110">
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110">
                  <Mail className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;