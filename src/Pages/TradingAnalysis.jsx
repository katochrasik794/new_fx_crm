import React from 'react';

const TradingAnalysis = () => {
  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
            Market Analysis
          </h1>
          <p className="text-gray-300 text-lg">Explore detailed technical and fundamental analysis shared by our team</p>
        </div>

        {/* Analysis Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="p-8 md:p-12">
            {/* Empty State */}
            <div className="text-center py-12">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">No Analysis Available Yet</h3>
              <p className="text-gray-600 text-base md:text-lg mb-6 max-w-md mx-auto">
                Our expert analysts are currently preparing detailed market analysis. Check back soon for valuable insights and trading opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-yellow-600 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Future Content Preview
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Technical Analysis",
                  description: "Chart patterns, indicators, and price action insights",
                  icon: "📈",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Fundamental Analysis",
                  description: "Economic data, news impact, and market sentiment",
                  icon: "📰",
                  color: "from-green-500 to-green-600"
                },
                {
                  title: "Market Outlook",
                  description: "Weekly and monthly market forecasts and trends",
                  icon: "🔮",
                  color: "from-purple-500 to-purple-600"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 opacity-60 hover:opacity-80 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Newsletter Signup (Optional) */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Stay Updated</h3>
            <p className="text-gray-600 mb-6">Get notified when new market analysis is published</p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingAnalysis;