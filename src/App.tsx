import React from 'react';
import { Star, Mail, Github } from 'lucide-react';
import { BubbleScene } from './components/BubbleScene';

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
        <div className="grid grid-cols-1 gap-8">
          {/* Fragments Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-pastel-yellow mr-2" />
              <h2 className="font-pixel text-2xl">Fragments of My Mind</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="font-pixel text-lg text-pastel-purple">⌨️ code whisperer</p>
              <p className="font-pixel text-lg text-pastel-blue">☕ caffeinated dreamer</p>
              <p className="font-pixel text-lg text-pastel-pink">✨ pixel perfectionist</p>
            </div>
          </div>

          {/* Bubbles Scene */}
          <div className="h-[600px]">
            <BubbleScene />
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