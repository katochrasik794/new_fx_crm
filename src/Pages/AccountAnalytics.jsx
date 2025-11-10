import React, { useState } from 'react';

const AccountAnalytics = () => {
  const [activeTab, setActiveTab] = useState('net');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Page Header */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Trade Performance
          </h1>
          <p className="text-gray-300 text-lg">View your closed and active trades with detailed insights</p>
        </div>

        {/* Enhanced Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-6 md:mb-8">
          {[
            { icon: 'wallet', label: 'Balance', value: '0.00 USD' },
            { icon: 'chart-pie', label: 'Equity', value: '0.00 USD' },
            { icon: 'percentage', label: 'Margin', value: '0.00' },
            { icon: 'lock-open', label: 'Free Margin', value: '0.00' },
            { icon: 'currency-dollar', label: 'Total PNL', value: '0.00 USD', success: true }
          ].map((card, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="p-4 md:p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      {card.icon === 'wallet' && <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>}
                      {card.icon === 'chart-pie' && <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/>}
                      {card.icon === 'percentage' && <path fillRule="evenodd" d="M17.778 17.778a1 1 0 01-1.414 0L12 13.414l-4.364 4.364a1 1 0 01-1.414-1.414l4.364-4.364-4.364-4.364a1 1 0 011.414-1.414L12 10.586l4.364-4.364a1 1 0 011.414 1.414L13.414 12l4.364 4.364a1 1 0 010 1.414z" clipRule="evenodd"/>}
                      {card.icon === 'lock-open' && <path d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 14a2 2 0 100-4 2 2 0 000 4z"/>}
                      {card.icon === 'currency-dollar' && <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>}
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{card.label}</p>
                <h3 className={`text-xl md:text-2xl font-bold ${card.success ? 'text-green-600' : 'text-gray-900'}`}>
                  {card.value}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-6">
          {/* Orders by Symbol (Donut) */}
          <div className="xl:col-span-5">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] h-full">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                  <h3 className="text-lg md:text-xl font-semibold">Orders by Symbol</h3>
                  <div className="flex gap-2">
                    <select className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-white/50">
                      <option value="30">30d</option>
                      <option value="90" selected>90d</option>
                      <option value="180">180d</option>
                      <option value="365">365d</option>
                    </select>
                    <select className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-white/50">
                      <option value="">All Accounts</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6 flex flex-col min-h-[300px]">
                <div className="flex-grow-1 flex items-center justify-center py-8">
                  <div className="text-center">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-gray-900 font-semibold mb-1">No trading data available</p>
                    <p className="text-gray-600 text-sm">Try a different time range</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm text-center mt-4">Share by traded volume (lots).</p>
              </div>
            </div>
          </div>

          {/* Trading Performance */}
          <div className="xl:col-span-7">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] h-full">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                  <h3 className="text-lg md:text-xl font-semibold">Trading Performance — Gain% vs Drawdown%</h3>
                  <span className="bg-black/20 text-white px-3 py-1 rounded-full text-sm font-medium">0</span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex justify-end gap-2 mb-4">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="90">90d</option>
                    <option value="180" selected>180d</option>
                    <option value="365">365d</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">All Accounts</option>
                  </select>
                </div>
                <div className="min-h-[280px] flex items-center justify-center py-8">
                  <div className="text-center">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-gray-900 font-semibold mb-1">No performance data available</p>
                    <p className="text-gray-600 text-sm">Try a different time range</p>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap mt-4">
                  <span className="bg-green-100 text-green-800 border border-green-200 px-3 py-1 rounded-full text-sm font-medium">Gain% (cumulative)</span>
                  <span className="bg-red-100 text-red-800 border border-red-200 px-3 py-1 rounded-full text-sm font-medium">Drawdown% (from peak)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Performance KPIs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] mb-6">
          <div className="p-6">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Account:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="all" selected>All accounts</option>
                </select>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Range:</span>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="180">Last 180 days</option>
                  <option value="365" selected>Last 365 days</option>
                </select>
              </div>
            </div>

            {/* KPIs Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                { title: 'Net profit', value: '0.00 USD', sub: [{ label: 'Total Trades', value: '0' }, { label: 'Total Volume', value: '0.00 lots' }] },
                { title: 'Closed orders', value: '0', sub: [{ label: 'Profitable', value: '0' }, { label: 'Unprofitable', value: '0' }] },
                { title: 'Trading volume', value: '0 lots', sub: [{ label: 'Lifetime', value: '0 lots' }] },
                { title: 'Equity', value: '0.00 USD', sub: [{ label: 'Current', value: '0.00 USD' }] }
              ].map((kpi, index) => (
                <div key={index} className="text-center">
                  <div className="text-gray-600 text-sm mb-2 flex items-center justify-center gap-1">
                    {kpi.title}
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{kpi.value}</div>
                  <div className="space-y-1">
                    {kpi.sub.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.label}:</span>
                        <span className="text-blue-600 font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}

            {/* Additional KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Profit', value: '+0.00 USD', color: 'text-green-600' },
                { title: 'Loss', value: '0.00 USD', color: 'text-red-600' },
                { title: 'Unrealized', value: '0.00 USD', color: 'text-gray-900' }
              ].map((kpi, index) => (
                <div key={index} className="text-center">
                  <div className="text-gray-600 text-sm mb-2 flex items-center justify-center gap-1">
                    {kpi.title}
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold ${kpi.color}`}>{kpi.value}</div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h4 className="text-xl font-bold text-purple-600 mb-2 md:mb-0">Charts</h4>
                <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                  {[
                    { id: 'net', label: 'Net profit' },
                    { id: 'orders', label: 'Closed orders' },
                    { id: 'volume', label: 'Trading volume' },
                    { id: 'equity', label: 'Equity' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-white text-purple-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="min-h-[355px] bg-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-center py-8">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-gray-600">Chart data will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closed Trade History Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <h3 className="text-lg md:text-xl font-semibold">Closed Trade History</h3>
              <div className="flex gap-2">
                <select className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="">All Accounts</option>
                </select>
                <select className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option className='text-blue-600' value="today" selected>Today</option>
                  <option className='text-blue-600' value="7">Last 7 Days</option>
                  <option className='text-blue-600' value="30">Last 30 Days</option>
                  <option className='text-blue-600' value="90">Last 90 Days</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-center">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">#</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Date</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Order ID</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Symbol</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Action</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Volume</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Opened Price</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Closed Price</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="9" className="px-4 py-8 text-center text-gray-500">
                      No closed trades found
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="9" className="px-4 py-3 text-right text-gray-500 text-sm">
                      Showing 0 of 0 closed trades
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAnalytics;