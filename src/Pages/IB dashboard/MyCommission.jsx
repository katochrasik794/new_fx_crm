import React from 'react';

const MyCommission = () => {
  const commissionData = [
    {
      client: 'OXO Trading tw',
      email: 'trading123@gmail.com',
      ibStatus: 'Non-IB',
      mt5Account: '369012',
      accountGroup: 'Standard',
      tradingPair: 'XAUUSD.E',
      pipRate: 1.00,
      volume: 0.10,
      commission: 1.00,
      percentage: 47.6
    },
    {
      client: 'OXO MARKET TRADING',
      email: 'tradings@gmail.com',
      ibStatus: 'Non-IB',
      mt5Account: '4294967295',
      accountGroup: 'Plus',
      tradingPair: 'ETHUSD.FFX',
      pipRate: 0.50,
      volume: 0.10,
      commission: 0.50,
      percentage: 23.8
    },
    {
      client: 'OXO MARKET TRADING',
      email: 'tradings@gmail.com',
      ibStatus: 'Non-IB',
      mt5Account: '4294967295',
      accountGroup: 'Plus',
      tradingPair: 'EURUSD.R',
      pipRate: 0.50,
      volume: 0.10,
      commission: 0.50,
      percentage: 23.8
    },
    {
      client: 'OXO Trading tw',
      email: 'trading123@gmail.com',
      ibStatus: 'Non-IB',
      mt5Account: '369012',
      accountGroup: 'Standard',
      tradingPair: 'BTCUSD.FFX',
      pipRate: 1.00,
      volume: 0.10,
      commission: 0.10,
      percentage: 4.8
    }
  ];

  const commissionHistory = [
    { date: '2025-11-07', symbol: 'BTCUSD.ffx', volume: 0.10, commission: 0.10, type: 'Referral Trade' },
    { date: '2025-11-07', symbol: 'XAUUSD.e', volume: 0.10, commission: 1.00, type: 'Referral Trade' },
    { date: '2025-11-06', symbol: 'ETHUSD.ffx', volume: 0.10, commission: 0.50, type: 'Referral Trade' },
    { date: '2025-11-06', symbol: 'EURUSD.r', volume: 0.10, commission: 0.50, type: 'Referral Trade' }
  ];

  const topSymbols = [
    { symbol: 'XAUUSD.e', trades: 1, lots: 0.10, commission: 1.00, percentage: 47.6 },
    { symbol: 'ETHUSD.ffx', trades: 1, lots: 0.10, commission: 0.50, percentage: 23.8 },
    { symbol: 'EURUSD.r', trades: 1, lots: 0.10, commission: 0.50, percentage: 23.8 },
    { symbol: 'BTCUSD.ffx', trades: 1, lots: 0.10, commission: 0.10, percentage: 4.8 }
  ];

  const totalVolume = commissionData.reduce((sum, item) => sum + item.volume, 0);
  const totalCommission = commissionData.reduce((sum, item) => sum + item.commission, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 p-4 md:p-6">
      <div className="max-w-[400px] sm:max-w-7xl mx-auto space-y-6">

        {/* Page Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mr-2 md:mr-3 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            My Commission
          </h1>
          <p className="text-gray-600 text-base md:text-lg">Your personal trading commission analytics</p>
        </div>

        {/* Main User Pip Rate */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 md:p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold text-blue-900 text-sm md:text-base">My Pip Rate Per Lot:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">PRO: 1.00</span>
              <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">STANDARD: 1.50</span>
              <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">PLUS: 2.00</span>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">$2.10</h3>
              <p className="text-blue-100 text-sm mb-2">Total Commission</p>
              <p className="text-blue-200 text-xs">From your trades + referrals</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">$0.00</h3>
              <p className="text-green-100 text-sm mb-2">My Commission</p>
              <p className="text-green-200 text-xs">0.00 lots from my trades</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-teal-600 text-white rounded-2xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">$2.10</h3>
              <p className="text-cyan-100 text-sm mb-2">Clients Commission</p>
              <p className="text-cyan-200 text-xs">Total volume: 0.40 lots</p>
              <p className="text-yellow-200 text-xs mt-1" style={{opacity: 0.9}}>Commission from approved IB clients only</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">$2.10</h3>
              <p className="text-yellow-100 text-sm mb-2">This Month</p>
              <p className="text-yellow-200 text-xs">Avg: $0.21/day</p>
            </div>
          </div>
        </div>

        {/* This Month Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">$0.00</h3>
              <p className="text-gray-600 text-sm mb-2">This Month - My Commission</p>
              <p className="text-gray-500 text-xs">From your own trades</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-cyan-600 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">$2.10</h3>
              <p className="text-gray-600 text-sm mb-2">This Month - Clients Commission</p>
              <p className="text-gray-500 text-xs">From all clients (IB + non-IB)</p>
            </div>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-green-600 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">$2.10</h3>
              <p className="text-gray-600 text-sm mb-2">Available Balance</p>
              <p className="text-gray-500 text-xs">Ready for withdrawal</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 text-yellow-600 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">$0.00</h3>
              <p className="text-gray-600 text-sm mb-2">Pending Balance</p>
              <p className="text-gray-500 text-xs">Awaiting approval</p>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">

          {/* Monthly Commission Chart */}
          <div className="xl:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Monthly Commission Trend
            </h3>
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <p className="text-gray-600 text-sm md:text-base">Chart visualization would be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">Monthly commission data over time</p>
            </div>
          </div>

          {/* Top Symbols */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              Top Trading Symbols
            </h3>
            <div className="space-y-3 md:space-y-4">
              {topSymbols.map((symbol, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors gap-2">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">{symbol.symbol}</p>
                    <p className="text-xs md:text-sm text-gray-600">{symbol.trades} trades, {symbol.lots} lots</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-bold text-green-600 text-sm md:text-base">${symbol.commission.toFixed(2)}</p>
                    <p className="text-xs md:text-sm text-gray-500">{symbol.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commission by Client */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 md:mb-6 gap-3">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 flex items-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Commission by Client
            </h3>
            <p className="text-xs md:text-sm text-blue-600">
              <svg className="w-3 h-3 md:w-4 md:h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Shows all referral clients (all levels) that generate commission from trades
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[120px]">Client</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[80px]">IB Status</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[100px]">MT5 Account</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[100px]">Account Group</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[100px]">Trading Pair</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[80px]">Pip Rate</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[70px]">Volume</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[90px]">Commission</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm min-w-[80px]">% of Total</th>
                </tr>
              </thead>
              <tbody>
                {commissionData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <div className="font-semibold text-gray-900 text-sm">{item.client}</div>
                      <div className="text-xs md:text-sm text-gray-600">{item.email}</div>
                      <span className="inline-flex items-center px-1 md:px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                        Referral
                      </span>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <span className="inline-flex items-center px-1 md:px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <svg className="w-2 h-2 md:w-3 md:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                        {item.ibStatus}
                      </span>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                        </svg>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{item.mt5Account}</div>
                          <div className="text-xs text-gray-500">MT5 ID</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div>
                          <div className={`font-semibold text-sm ${item.accountGroup === 'Standard' ? 'text-green-600' : 'text-blue-600'}`}>
                            {item.accountGroup}
                          </div>
                          <div className="text-xs text-gray-500">Type</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-yellow-600 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                        <div>
                          <div className="font-semibold text-yellow-600 text-sm">{item.tradingPair}</div>
                          <div className="text-xs text-gray-500">Pair</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-blue-600 mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <div>
                          <div className="font-semibold text-blue-600 text-sm">{item.pipRate.toFixed(2)}</div>
                          <div className="text-xs text-gray-500">@ $10/pip</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700 text-sm">{item.volume.toFixed(2)}</td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <div className="font-bold text-green-600 text-sm">${item.commission.toFixed(2)}</div>
                      <div className="text-xs text-gray-500">Commission</div>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <span className="inline-flex items-center px-1 md:px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.percentage}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-blue-50 border-t-2 border-blue-200">
                  <td colSpan="9" className="py-2 md:py-3 px-2 md:px-4 text-center md:text-right font-semibold text-gray-900 text-sm">
                    Subtotal (Breakdown from ib_commissions table):
                    <br className="hidden md:block" />
                    <small className="text-gray-600 text-xs">
                      <svg className="w-2 h-2 md:w-3 md:h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      Breakdown sum: $2.10 | ib_commissions table: $2.10 | Summary table: $2.10
                    </small>
                  </td>
                </tr>
                <tr className="bg-blue-100 border-t border-blue-200">
                  <th colSpan="6" className="py-2 md:py-3 px-2 md:px-4 text-center md:text-right font-bold text-gray-900 text-sm">
                    Total Commission:
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 font-bold text-gray-900 text-sm">{totalVolume.toFixed(2)}</th>
                  <th className="py-2 md:py-3 px-2 md:px-4 font-bold text-green-600 text-sm">${totalCommission.toFixed(2)}</th>
                  <th className="py-2 md:py-3 px-2 md:px-4">
                    <span className="inline-flex items-center px-1 md:px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      100%
                    </span>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Commission History Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            Recent Commission History
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Date</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Symbol</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Volume</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Commission</th>
                  <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Type</th>
                </tr>
              </thead>
              <tbody>
                {commissionHistory.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                    <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700 text-sm">{item.date}</td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <span className="inline-flex items-center px-1 md:px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {item.symbol}
                      </span>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700 text-sm">{item.volume.toFixed(2)}</td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <span className="font-bold text-green-600 text-sm">${item.commission.toFixed(2)}</span>
                    </td>
                    <td className="py-2 md:py-3 px-2 md:px-4">
                      <span className="inline-flex items-center px-1 md:px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center text-xs md:text-sm text-gray-500">
            Showing 1 to 4 of 4 trades
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCommission;