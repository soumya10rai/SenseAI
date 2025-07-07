import React from 'react';
import { 
  Scan, 
  Eye, 
  Zap, 
  Download, 
  Globe, 
  Shield, 
  BarChart, 
  Code, 
  Accessibility,
  CheckCircle,
  AlertTriangle,
  Users
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: Scan,
      title: 'AI-Powered Scanning',
      description: 'Advanced machine learning algorithms analyze your website structure, content, and user interactions to identify accessibility barriers.',
      benefits: ['Detects complex accessibility issues', 'Faster than manual testing', 'Continuous learning improves accuracy'],
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Zap,
      title: 'Instant Fixes',
      description: 'Get automatically generated solutions with enhanced HTML, CSS, and JavaScript code ready for implementation.',
      benefits: ['Auto-generated accessible code', 'WCAG 2.1 AA compliance', 'Production-ready solutions'],
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Eye,
      title: 'Visual Preview',
      description: 'Side-by-side comparison of your original website and the AI-enhanced accessible version.',
      benefits: ['Before/after visualization', 'Interactive preview mode', 'Real-time accessibility testing'],
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: BarChart,
      title: 'Detailed Analytics',
      description: 'Comprehensive reports showing accessibility scores, issue breakdown, and improvement suggestions.',
      benefits: ['Accessibility score tracking', 'Issue severity classification', 'Progress monitoring'],
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Users,
      title: 'User-Centric Analysis',
      description: 'Specific recommendations for different user types including visual, auditory, motor, and cognitive impairments.',
      benefits: ['Personalized accessibility insights', 'User journey optimization', 'Inclusive design principles'],
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: Download,
      title: 'Export & Integration',
      description: 'Download fixed HTML/CSS files or integrate accessibility overlays directly into your existing website.',
      benefits: ['Multiple export formats', 'Easy integration', 'Minimal code changes required'],
      color: 'bg-red-100 text-red-600',
    },
  ];

  const accessibilityStandards = [
    {
      standard: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines Level AA compliance',
      icon: Shield,
    },
    {
      standard: 'Section 508',
      description: 'US Federal accessibility requirements',
      icon: Globe,
    },
    {
      standard: 'ADA',
      description: 'Americans with Disabilities Act compliance',
      icon: Accessibility,
    },
    {
      standard: 'EN 301 549',
      description: 'European accessibility standard',
      icon: CheckCircle,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Powerful Features for Web Accessibility
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how APAE's advanced AI technology makes it easier than ever to create 
          accessible, inclusive websites that work for everyone.
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-start mb-6">
              <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mr-6 flex-shrink-0`}>
                <feature.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
            <div className="space-y-2">
              {feature.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Accessibility Standards */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Compliance Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessibilityStandards.map((standard, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <standard.icon className="w-8 h-8 text-gray-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.standard}</h3>
              <p className="text-gray-600 text-sm">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scan Your Website</h3>
            <p className="text-gray-600 leading-relaxed">
              Enter your website URL or upload HTML/CSS files. Our AI begins analyzing your content 
              structure and identifying potential accessibility barriers.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced machine learning algorithms evaluate your website against accessibility 
              standards and generate intelligent recommendations for improvements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Results</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive detailed reports with auto-generated fixes, download enhanced code, 
              and implement accessibility improvements with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose APAE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save Time & Resources</h3>
                <p className="text-gray-600">
                  Automated accessibility testing is 10x faster than manual audits, freeing up 
                  your team to focus on other priorities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Legal Risk</h3>
                <p className="text-gray-600">
                  Ensure compliance with accessibility laws and reduce the risk of costly 
                  lawsuits and penalties.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Users className="w-6 h-6 text-purple-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expand Your Audience</h3>
                <p className="text-gray-600">
                  Make your website accessible to the 1+ billion people worldwide who have 
                  disabilities, expanding your potential market.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Code className="w-6 h-6 text-orange-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve SEO</h3>
                <p className="text-gray-600">
                  Accessible websites often rank better in search engines, as many accessibility 
                  features align with SEO best practices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <BarChart className="w-6 h-6 text-red-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Better User Experience</h3>
                <p className="text-gray-600">
                  Accessible design principles create better experiences for all users, 
                  not just those with disabilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Zap className="w-6 h-6 text-indigo-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                <p className="text-gray-600">
                  Our AI learns from every scan, continuously improving its ability to 
                  detect and fix accessibility issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Make Your Website Accessible?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of developers and organizations who trust APAE to create 
          inclusive digital experiences.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
        >
          Start Your Free Scan
        </a>
      </div>
    </main>
  );
};

export default FeaturesPage;