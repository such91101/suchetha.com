import React from 'react';
import { Star, Heart, Mail, Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-blue via-white to-pastel-pink">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="font-pixel text-6xl mb-4 bg-gradient-to-r from-pastel-pink to-pastel-blue bg-clip-text text-transparent">
              Hello World!
            </h1>
            <p className="text-gray-600 text-xl">Welcome to my digital space ✨</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Me */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-pastel-yellow mr-2" />
              <h2 className="font-pixel text-2xl">About Me</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate developer who loves creating beautiful and functional websites.
              When I'm not coding, you can find me exploring new technologies or enjoying a cup of coffee.
            </p>
          </div>

          {/* Projects */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-pastel-pink mr-2" />
              <h2 className="font-pixel text-2xl">Projects</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-pastel-purple" />
                <a href="#" className="text-gray-700 hover:text-pastel-purple transition-colors">
                  Project 1
                </a>
              </li>
              <li className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-pastel-purple" />
                <a href="#" className="text-gray-700 hover:text-pastel-purple transition-colors">
                  Project 2
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6">
            <a href="mailto:your@email.com" className="text-gray-600 hover:text-pastel-pink transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com" className="text-gray-600 hover:text-pastel-blue transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Made with 💖 in 2025
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;