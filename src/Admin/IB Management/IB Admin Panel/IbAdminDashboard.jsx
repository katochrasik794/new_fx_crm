
import React from 'react';

const Dashboard = () => {
  return (
    <div className="w-full max-w-full p-3 sm:p-4 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen overflow-x-hidden">
      {/* Title */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">📊 IB Portal Admin Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">Advanced Pip-wise Commission Management System</p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 md:p-5 border border-blue-100 hover:scale-105">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2 sm:p-3 shadow-md flex-shrink-0">
              <span className="text-white text-xl sm:text-2xl">👥</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide truncate">Total Users</p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">118</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border border-green-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 shadow-md">
              <span className="text-white text-2xl">✅</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Active IBs</p>
              <h3 className="text-2xl font-bold text-gray-800">90</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border border-amber-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3 shadow-md">
              <span className="text-white text-2xl">👤</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Active Users (30 days)</p>
              <h3 className="text-2xl font-bold text-gray-800">118</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border border-cyan-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl p-3 shadow-md">
              <span className="text-white text-2xl">💼</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Trading Accounts</p>
              <h3 className="text-2xl font-bold text-gray-800">93</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 border border-emerald-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3 shadow-md">
              <span className="text-white text-2xl">💰</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Total Commission</p>
              <h3 className="text-2xl font-bold text-gray-800">$1,035.58</h3>
              <p className="text-xs text-gray-400 mt-1">From 24 IBs (aggregated)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Group-wise Commission Breakdown */}
      <div className="mb-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="px-6 py-5 border-b bg-gradient-to-r from-purple-50 to-blue-50">
            <h2 className="text-xl font-bold text-gray-800">📊 Commission by Account Group</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-purple-700 font-semibold mb-3 text-lg">Plus</h3>
                <h2 className="text-3xl font-bold text-purple-600 mb-2">$701.31</h2>
                <p className="text-sm text-purple-600 font-medium">67.7% of total</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-blue-700 font-semibold mb-3 text-lg">Standard</h3>
                <h2 className="text-3xl font-bold text-blue-600 mb-2">$307.76</h2>
                <p className="text-sm text-blue-600 font-medium">29.7% of total</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border-2 border-indigo-200 p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-indigo-700 font-semibold mb-3 text-lg">Pro</h3>
                <h2 className="text-3xl font-bold text-indigo-600 mb-2">$26.51</h2>
                <p className="text-sm text-indigo-600 font-medium">2.6% of total</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="px-6 py-5 border-b bg-gradient-to-r from-green-50 to-emerald-50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Commission Processed (Last 12 months)</h2>
              <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">Preview</span>
            </div>
            <div className="p-6">
              <div className="h-72 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300">
                <p className="text-gray-500 font-medium">Commission Processed Chart (Responsive)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="px-6 py-5 border-b bg-gradient-to-r from-blue-50 to-cyan-50">
              <h2 className="text-xl font-bold text-gray-800">Commission by Category</h2>
            </div>
            <div className="p-6">
              <div className="h-72 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300">
                <p className="text-gray-500 font-medium">Commission by Category Chart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b bg-gradient-to-r from-orange-50 to-amber-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">Recent IB Requests</h2>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300 hover:scale-105 w-full sm:w-auto">Manage</button>
            </div>
            <div className="p-3 sm:p-4 md:p-6">
              <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Applicant</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Rate</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Type</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Applied</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-3 sm:py-4 px-2">
                        <div className="font-semibold text-xs sm:text-sm text-gray-800 truncate max-w-[150px]">Abdul Rehman</div>
                        <div className="text-xs text-gray-500 truncate max-w-[150px]">mani3130882929@gmail.com</div>
                      </td>
                      <td className="py-3 sm:py-4 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">$1.00</td>
                      <td className="py-3 sm:py-4 px-2"><span className="bg-blue-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">normal</span></td>
                      <td className="py-3 sm:py-4 px-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">2025-11-04 15:13</td>
                      <td className="py-3 sm:py-4 px-2"><span className="bg-amber-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="px-4 sm:px-6 py-4 sm:py-5 border-b bg-gradient-to-r from-emerald-50 to-green-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">Recent Commission Ledger</h2>
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-emerald-600 hover:to-emerald-700 shadow-md transition-all duration-300 hover:scale-105 w-full sm:w-auto">Open Ledger</button>
            </div>
            <div className="p-3 sm:p-4 md:p-6">
              <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Date</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">IB</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Symbol</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Group</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Lots</th>
                      <th className="text-left py-3 px-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '2025-11-12 20:33', ib: 'Ramesh Babar', symbol: 'XAUUSD', group: 'Standard', lots: '0.01', commission: '$0.13' },
                      { date: '2025-11-12 20:33', ib: 'Ramesh Babar', symbol: 'XAUUSD', group: 'Standard', lots: '0.01', commission: '$0.13' },
                      { date: '2025-11-12 13:18', ib: 'Ramesh Babar', symbol: 'XAUUSD', group: 'Standard', lots: '0.01', commission: '$0.13' },
                      { date: '2025-11-12 12:09', ib: 'Suyog Datrange', symbol: 'XAUUSD', group: 'Standard', lots: '0.01', commission: '$0.13' },
                      { date: '2025-11-12 11:56', ib: 'Ramesh Babar', symbol: 'XAUUSD', group: 'Standard', lots: '0.01', commission: '$0.13' }
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-3 sm:py-4 px-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">{row.date}</td>
                        <td className="py-3 sm:py-4 px-2 text-xs sm:text-sm font-medium text-gray-800 whitespace-nowrap">{row.ib}</td>
                        <td className="py-3 sm:py-4 px-2"><span className="bg-cyan-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">{row.symbol}</span></td>
                        <td className="py-3 sm:py-4 px-2"><span className="bg-purple-500 text-white text-xs font-medium px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">{row.group}</span></td>
                        <td className="py-3 sm:py-4 px-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">{row.lots}</td>
                        <td className="py-3 sm:py-4 px-2 text-xs sm:text-sm font-bold text-emerald-600 whitespace-nowrap">{row.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;