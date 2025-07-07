import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scan, Upload, Globe, Accessibility, Eye, Ear, Brain, Hand } from 'lucide-react';

interface HomePageProps {
  setScanResults: (results: any) => void;
}

const HomePage = ({ setScanResults }: HomePageProps) => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleScan = async () => {
    if (!url && !uploadedFile) return;

    setIsScanning(true);
    
    // Simulate AI scanning process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock results
    const mockResults = {
      url: url || uploadedFile?.name,
      totalIssues: 23,
      fixed: 18,
      issues: [
        { type: 'Missing Alt Text', count: 8, severity: 'High' },
        { type: 'Low Contrast', count: 5, severity: 'Medium' },
        { type: 'Complex Text', count: 3, severity: 'Low' },
        { type: 'Missing ARIA Labels', count: 4, severity: 'High' },
        { type: 'Poor Focus Management', count: 3, severity: 'Medium' },
      ],
      userTypes: {
        visuallyImpaired: { issues: 12, fixed: 10 },
        hearingImpaired: { issues: 3, fixed: 3 },
        cognitive: { issues: 5, fixed: 3 },
        motor: { issues: 3, fixed: 2 },
      },
    };

    setScanResults(mockResults);
    setIsScanning(false);
    navigate('/results');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setUrl('');
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI-Powered Accessibility Enhancer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Making the Web Inclusive for Everyone
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Automatically detect and fix accessibility issues in your website using advanced AI technology.
          Create inclusive experiences for all users.
        </p>
      </div>

      {/* Main Input Section */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Scan Your Website
          </h2>
          
          {/* URL Input */}
          <div className="mb-6">
            <label htmlFor="website-url" className="block text-sm font-medium text-gray-700 mb-2">
              Website URL
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
              <input
                id="website-url"
                type="url"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setUploadedFile(null);
                }}
                placeholder="https://example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                aria-describedby="url-help"
              />
            </div>
            <p id="url-help" className="mt-2 text-sm text-gray-500">
              Enter the full URL of the website you want to scan
            </p>
          </div>

          {/* File Upload */}
          <div className="mb-8">
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
              Or Upload HTML/CSS Files
            </label>
            <div className="relative">
              <input
                id="file-upload"
                type="file"
                accept=".html,.css,.htm"
                onChange={handleFileUpload}
                className="sr-only"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center w-full px-6 py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-colors duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              >
                <Upload className="w-6 h-6 text-gray-400 mr-3" aria-hidden="true" />
                <span className="text-gray-600">
                  {uploadedFile ? uploadedFile.name : 'Click to upload files'}
                </span>
              </label>
            </div>
          </div>

          {/* Scan Button */}
          <button
            onClick={handleScan}
            disabled={(!url && !uploadedFile) || isScanning}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-3"
            aria-describedby="scan-button-help"
          >
            {isScanning ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
                <span>Scanning Website...</span>
              </>
            ) : (
              <>
                <Scan className="w-5 h-5" aria-hidden="true" />
                <span>Scan My Website</span>
              </>
            )}
          </button>
          <p id="scan-button-help" className="mt-3 text-sm text-gray-500 text-center">
            Our AI will analyze your website and provide accessibility recommendations
          </p>
        </div>
      </div>

      {/* User Types Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Accessibility for Every User
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Eye,
              title: 'Visually Impaired',
              description: 'Screen reader compatibility, alt text, high contrast, and keyboard navigation',
              color: 'bg-blue-100 text-blue-600',
            },
            {
              icon: Ear,
              title: 'Hearing Impaired',
              description: 'Captions, transcripts, visual indicators, and sign language support',
              color: 'bg-green-100 text-green-600',
            },
            {
              icon: Brain,
              title: 'Cognitive',
              description: 'Simple language, clear navigation, consistent layout, and reduced distractions',
              color: 'bg-purple-100 text-purple-600',
            },
            {
              icon: Hand,
              title: 'Motor',
              description: 'Voice control, large click targets, simplified gestures, and timing adjustments',
              color: 'bg-orange-100 text-orange-600',
            },
          ].map((type) => (
            <div key={type.title} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className={`w-16 h-16 rounded-full ${type.color} flex items-center justify-center mx-auto mb-4`}>
                <type.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
              <p className="text-gray-600 leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Preview */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Powered by Advanced AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Accessibility className="w-8 h-8 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Detection</h3>
            <p className="text-gray-600">
              AI analyzes your website structure and content to identify accessibility barriers
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scan className="w-8 h-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Fixes</h3>
            <p className="text-gray-600">
              Automatically generates solutions and provides enhanced code for immediate implementation
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-purple-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WCAG Compliance</h3>
            <p className="text-gray-600">
              Ensures your website meets or exceeds Web Content Accessibility Guidelines standards
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;