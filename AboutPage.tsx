import React from 'react';
import { Accessibility, Users, Zap, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About APAE
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're on a mission to make the web accessible to everyone. Our AI-powered platform 
          helps developers and organizations identify and fix accessibility barriers, creating 
          inclusive digital experiences for all users.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To eliminate digital barriers and ensure that everyone, regardless of ability, 
            can access and interact with web content effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Accessibility className="w-8 h-8 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusive Design</h3>
            <p className="text-gray-600">
              Building technology that works for everyone, regardless of their abilities or circumstances.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Equal Access</h3>
            <p className="text-gray-600">
              Ensuring that digital content is available and usable by people with diverse needs.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Leveraging cutting-edge AI to make accessibility testing faster and more effective.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance</h3>
            <p className="text-gray-600">
              Helping organizations meet and exceed accessibility standards and regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              APAE was founded by a team of accessibility advocates, AI researchers, and web developers 
              who recognized that while accessibility guidelines exist, implementing them consistently 
              across the web remains a significant challenge.
            </p>
            <p className="mb-6">
              We saw an opportunity to harness artificial intelligence to not just identify accessibility 
              barriers, but to provide intelligent solutions that make fixing these issues faster and 
              more effective than ever before.
            </p>
            <p>
              Today, we're proud to serve developers, designers, and organizations worldwide in their 
              journey toward creating truly inclusive digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Websites Scanned</div>
            <p className="text-gray-600">
              Helping organizations identify and fix accessibility issues across thousands of websites.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">250,000+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Issues Fixed</div>
            <p className="text-gray-600">
              Our AI has automatically resolved hundreds of thousands of accessibility barriers.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Users Impacted</div>
            <p className="text-gray-600">
              Making the web more accessible for millions of users with disabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Join Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you're a developer, designer, or organization leader, you can be part of 
          creating a more inclusive web. Start using APAE today and help us build a digital 
          world that works for everyone.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
        >
          Get Started Today
        </a>
      </div>
    </main>
  );
};

export default AboutPage;