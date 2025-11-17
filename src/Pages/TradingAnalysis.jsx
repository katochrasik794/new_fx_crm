import React, { useState } from 'react';

const TradingAnalysis = () => {
  const [selectedPair, setSelectedPair] = useState('EURUSD');

  const analysisData = [
    { pair: 'EURUSD', trend: 'Bullish', support: '1.0850', resistance: '1.0920', signal: 'Buy', strength: 'Strong' },
    { pair: 'GBPUSD', trend: 'Bearish', support: '1.2650', resistance: '1.2750', signal: 'Sell', strength: 'Moderate' },
    { pair: 'USDJPY', trend: 'Bullish', support: '148.20', resistance: '149.80', signal: 'Buy', strength: 'Strong' },
    { pair: 'AUDUSD', trend: 'Neutral', support: '0.6520', resistance: '0.6580', signal: 'Hold', strength: 'Weak' },
    { pair: 'USDCAD', trend: 'Bearish', support: '1.3420', resistance: '1.3520', signal: 'Sell', strength: 'Moderate' }
  ];

  const priceData = [
    { time: '09:00', price: 1.0865 },
    { time: '10:00', price: 1.0872 },
    { time: '11:00', price: 1.0868 },
    { time: '12:00', price: 1.0885 },
    { time: '13:00', price: 1.0892 },
    { time: '14:00', price: 1.0888 },
    { time: '15:00', price: 1.0905 }
  ];

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto">
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

        {/* Price Chart */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
            <h3 className="text-xl font-semibold">Live Price Chart - {selectedPair}</h3>
          </div>
          <div className="p-6">
            <div className="flex gap-2 mb-4">
              {['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD'].map(pair => (
                <button key={pair} onClick={() => setSelectedPair(pair)} className={`px-4 py-2 rounded-lg ${selectedPair === pair ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>
                  {pair}
                </button>
              ))}
            </div>
            <div className="h-64 flex items-end justify-around gap-2 border-b border-l border-gray-300 pb-2 pl-2">
              {priceData.map((data, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t" style={{height: `${(data.price - 1.086) * 5000}px`}}></div>
                  <span className="text-xs text-gray-600 mt-2">{data.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Analysis Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
            <h3 className="text-xl font-semibold">Technical Analysis Overview</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Currency Pair</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trend</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Support</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Resistance</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Signal</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Strength</th>
                </tr>
              </thead>
              <tbody>
                {analysisData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.pair}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${item.trend === 'Bullish' ? 'bg-green-100 text-green-700' : item.trend === 'Bearish' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                        {item.trend}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{item.support}</td>
                    <td className="px-6 py-4 text-gray-700">{item.resistance}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.signal === 'Buy' ? 'bg-blue-100 text-blue-700' : item.signal === 'Sell' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {item.signal}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{item.strength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { title: "Technical Analysis", description: "Chart patterns, indicators, and price action insights", icon: "📈", color: "from-blue-500 to-blue-600" },
            { title: "Fundamental Analysis", description: "Economic data, news impact, and market sentiment", icon: "📰", color: "from-green-500 to-green-600" },
            { title: "Market Outlook", description: "Weekly and monthly market forecasts and trends", icon: "🔮", color: "from-purple-500 to-purple-600" }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
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