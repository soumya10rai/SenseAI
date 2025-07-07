import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Eye, ArrowLeft, CheckCircle, AlertCircle, XCircle, ExternalLink } from 'lucide-react';

interface ResultsPageProps {
  results: any;
}

const ResultsPage = ({ results }: ResultsPageProps) => {
  const [activeTab, setActiveTab] = useState('summary');
  const navigate = useNavigate();

  if (!results) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">No Results Found</h1>
          <p className="text-gray-600 mb-8">Please scan a website first to see results.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Scanner
          </button>
        </div>
      </div>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'text-red-600 bg-red-100';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'Low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const userTypeData = [
    {
      id: 'visuallyImpaired',
      title: 'Visually Impaired',
      icon: Eye,
      data: results.userTypes.visuallyImpaired,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'hearingImpaired',
      title: 'Hearing Impaired',
      icon: Eye,
      data: results.userTypes.hearingImpaired,
      color: 'bg-green-100 text-green-600',
    },
    {
      id: 'cognitive',
      title: 'Cognitive',
      icon: Eye,
      data: results.userTypes.cognitive,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 'motor',
      title: 'Motor',
      icon: Eye,
      data: results.userTypes.motor,
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
        >
          <ArrowLeft className="w-5 h-5 mr-2" aria-hidden="true" />
          Back to Scanner
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Accessibility Scan Results</h1>
        <p className="text-gray-600">
          Results for: <span className="font-semibold">{results.url}</span>
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Issues</h3>
            <AlertCircle className="w-6 h-6 text-orange-500" aria-hidden="true" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{results.totalIssues}</p>
          <p className="text-sm text-gray-500">Found across all categories</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Auto-Fixed</h3>
            <CheckCircle className="w-6 h-6 text-green-500" aria-hidden="true" />
          </div>
          <p className="text-3xl font-bold text-green-600">{results.fixed}</p>
          <p className="text-sm text-gray-500">Ready for implementation</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Remaining</h3>
            <XCircle className="w-6 h-6 text-red-500" aria-hidden="true" />
          </div>
          <p className="text-3xl font-bold text-red-600">{results.totalIssues - results.fixed}</p>
          <p className="text-sm text-gray-500">Requires manual review</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'summary', label: 'Summary' },
              { id: 'userTypes', label: 'User Types' },
              { id: 'preview', label: 'Preview' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Summary Tab */}
          {activeTab === 'summary' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Detected Issues</h2>
              <div className="space-y-4">
                {results.issues.map((issue: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{issue.type}</h3>
                      <p className="text-sm text-gray-500">{issue.count} instances found</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(
                          issue.severity
                        )}`}
                      >
                        {issue.severity}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* User Types Tab */}
          {activeTab === 'userTypes' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Impact by User Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userTypeData.map((type) => (
                  <div
                    key={type.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center mr-4`}>
                        <type.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Issues Found:</span>
                        <span className="font-medium">{type.data.issues}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Auto-Fixed:</span>
                        <span className="font-medium text-green-600">{type.data.fixed}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(type.data.fixed / type.data.issues) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preview Tab */}
          {activeTab === 'preview' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Before vs After Preview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-4">Original Version</h3>
                  <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <ExternalLink className="w-12 h-12 text-gray-400 mx-auto mb-2" aria-hidden="true" />
                      <p className="text-gray-500">Original website preview</p>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-4">Enhanced Version</h3>
                  <div className="bg-green-50 h-96 rounded-lg flex items-center justify-center border-2 border-green-200">
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" aria-hidden="true" />
                      <p className="text-green-600">AI-enhanced accessible version</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Download Your Results</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Download className="w-5 h-5 mr-2" aria-hidden="true" />
            Download Fixed HTML
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            <Eye className="w-5 h-5 mr-2" aria-hidden="true" />
            Open Accessibility Overlay
          </button>
        </div>
      </div>
    </main>
  );
};

export default ResultsPage;