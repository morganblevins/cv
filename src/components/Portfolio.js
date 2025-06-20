"use client";

import React from 'react';
import { Menu, X, Github, FileText, Mail } from 'lucide-react';

export default function ResearchPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name on left */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Your Name</h1>
            </div>

            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</a>
              <a href="#research" className="text-base font-medium text-gray-500 hover:text-gray-900">Research</a>
              <a href="#publications" className="text-base font-medium text-gray-500 hover:text-gray-900">Publications</a>
              <a href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          {isMenuOpen && (
            <div className="md:hidden py-2 space-y-1">
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">About</a>
              <a href="#research" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">Research</a>
              <a href="#publications" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">Publications</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">Contact</a>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Your Name</h2>
              <h3 className="text-2xl text-gray-600">PhD Candidate at University Name</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Brief introduction about your research focus and interests. Make it engaging and accessible 
                to both technical and non-technical audiences.
              </p>
              {/* Social Links */}
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="group flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-6 h-6 mr-2" />
                  <span className="text-base font-medium">GitHub</span>
                </a>
                <a 
                  href="#" 
                  className="group flex items-center text-gray-600 hover:text-gray-900"
                >
                  <FileText className="w-6 h-6 mr-2" />
                  <span className="text-base font-medium">CV</span>
                </a>
                <a 
                  href="mailto:your@email.com" 
                  className="group flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Mail className="w-6 h-6 mr-2" />
                  <span className="text-base font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/api/placeholder/800/800"
                alt="Your profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Rest of your sections... */}
      </main>
    </div>
  );
}