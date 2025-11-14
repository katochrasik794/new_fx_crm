import React from 'react';

const CommissionAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Page Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
            Commission Analytics
          </h1>
          <p className="text-gray-600 text-lg">Performance insights and breakdowns for your IB commissions</p>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-green-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 rounded-2xl p-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Commission</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">$2.10</h3>
                <p className="text-xs text-gray-500">
                  <span className="text-green-600 font-medium">My: $0.00</span> |
                  <span className="text-blue-600 font-medium">Clients: $2.10</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 rounded-2xl p-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">This Month</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">$2.10</h3>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-100 rounded-2xl p-4">
                <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Daily</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">$0.21</h3>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 rounded-2xl p-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Clients</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">3</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Monthly Commission Trend</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Live Data</span>
            </div>
            <div className="h-80 flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-dashed border-orange-200">
              <div className="text-center">
                <svg className="w-16 h-16 text-orange-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <p className="text-gray-600 font-medium">Monthly Commission Trend Chart</p>
                <p className="text-sm text-gray-500 mt-1">Interactive chart showing commission trends over time</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Commission by Category</h3>
            <div className="h-80 flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-dashed border-amber-200">
              <div className="text-center">
                <svg className="w-16 h-16 text-amber-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
                <p className="text-gray-600 font-medium">Commission by Category</p>
                <p className="text-sm text-gray-500 mt-1">Pie chart showing commission distribution</p>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Forex: 100.0%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Top Symbols Table */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Top Symbols</h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span>Last 30 days</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Symbol</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Pips</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Commission</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Trades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">XAUUSD</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Forex</span>
                    </td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$1.00</td>
                    <td className="py-3 px-4">1</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">EURUSD</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Forex</span>
                    </td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$0.50</td>
                    <td className="py-3 px-4">1</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">ETHUSD</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Forex</span>
                    </td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$0.50</td>
                    <td className="py-3 px-4">1</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-900">BTCUSD</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Forex</span>
                    </td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$0.10</td>
                    <td className="py-3 px-4">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Commission Ledger */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Recent Commission Ledger</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Export
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Client</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Symbol</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Lots</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-amber-50 transition-colors">
                    <td className="py-3 px-4">Nov 7, 2025</td>
                    <td className="py-3 px-4">FINCRM Trading tw</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">BTCUSD.ffx</td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$0.10</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-amber-50 transition-colors">
                    <td className="py-3 px-4">Nov 7, 2025</td>
                    <td className="py-3 px-4">FINCRM Trading tw</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">XAUUSD.e</td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$1.00</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-amber-50 transition-colors">
                    <td className="py-3 px-4">Nov 6, 2025</td>
                    <td className="py-3 px-4">FINCRM MARKET TRADING</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">ETHUSD.ffx</td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$0.50</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition-colors">
                    <td className="py-3 px-4">Nov 6, 2025</td>
                    <td className="py-3 px-4">FINCRM MARKET TRADING</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">EURUSD.r</td>
                    <td className="py-3 px-4">0.10</td>
                    <td className="py-3 px-4 font-semibold text-green-600">$0.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionAnalytics;