import React from 'react';

const IbOverview = () => {
  return (
    <div className="w-full max-w-full p-4 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen overflow-x-hidden">
      {/* Title */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">📊 IB Management Dashboard</h1>
        <p className="text-gray-600 text-sm md:text-lg">Overview of the group-based commission system</p>
      </div>

      {/* System Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-blue-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">👥</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">98</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total IBs</p>
            <div className="text-xs text-gray-500 mt-2">
              <span className="text-green-600 font-semibold">91 approved</span> | <span className="text-amber-600 font-semibold">1 pending</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-amber-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">⏰</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">1</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Pending Requests</p>
            <div className="text-xs text-gray-500 mt-2">Awaiting approval</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-green-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">💰</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">$1,518.60</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Commissions</p>
            <div className="text-xs text-gray-500 mt-2">From 447.33 lots</div>
            <div className="text-xs text-gray-500">Across 91 IBs</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-cyan-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">📈</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">22</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Referrals</p>
            <div className="text-xs text-gray-500 mt-2">Network growth</div>
          </div>
        </div>
      </div>

      {/* Group-wise Commission Breakdown */}
      <div className="mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-purple-50 to-blue-50">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">📊 Commission by Account Group</h2>
          </div>
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-purple-700 font-semibold mb-3 text-base md:text-lg">Plus</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">$1,073.61</h2>
                <p className="text-sm text-purple-600 font-medium">70.7% of total</p>
                <div className="text-xs md:text-sm text-cyan-600 mt-2">412.28 lots</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-blue-700 font-semibold mb-3 text-base md:text-lg">Standard</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">$418.44</h2>
                <p className="text-sm text-blue-600 font-medium">27.6% of total</p>
                <div className="text-xs md:text-sm text-cyan-600 mt-2">28.42 lots</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border-2 border-indigo-200 p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-indigo-700 font-semibold mb-3 text-base md:text-lg">Pro</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">$26.51</h2>
                <p className="text-sm text-indigo-600 font-medium">1.7% of total</p>
                <div className="text-xs md:text-sm text-cyan-600 mt-2">3.26 lots</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-green-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">✅</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">91</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Approved IBs</p>
            <div className="text-xs text-gray-500 mt-2">Active partners</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-cyan-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">📊</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">447.3</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Volume (Lots)</p>
            <div className="text-xs text-gray-500 mt-2">All IB trading</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-amber-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">🧾</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">1,608</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Total Trades</p>
            <div className="text-xs text-gray-500 mt-2">All IB activity</div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-blue-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">📈</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">$3.39</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Avg Commission/Lot</p>
            <div className="text-xs text-gray-500 mt-2">Per lot average</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 md:p-6 text-center border border-gray-200 hover:scale-105">
          <div className="text-5xl md:text-6xl mb-4">📈</div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Symbol Management</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">Configure pip values and categories</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300">
            Manage Symbols
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 md:p-6 text-center border border-gray-200 hover:scale-105">
          <div className="text-5xl md:text-6xl mb-4">👥</div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">IB Management</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">Manage entitlements and allocations</p>
          <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-cyan-700 shadow-md transition-all duration-300">
            Manage IBs
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 md:p-6 text-center border border-gray-200 hover:scale-105">
          <div className="text-5xl md:text-6xl mb-4">📄</div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Commission Ledger</h3>
          <p className="text-xs md:text-sm text-gray-600 mb-4">View detailed commission records</p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 shadow-md transition-all duration-300">
            View Ledger
          </button>
        </div>
      </div>

      {/* Recent Activity Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-orange-50 to-amber-50 flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Recent IB Requests</h2>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300">
              View All
            </button>
          </div>
          <div className="p-3 md:p-6">
            <div className="overflow-x-auto -mx-3 md:mx-0">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700">Rate</th>
                    <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Ravindra Pophale', email: 'ravindrapophale13@gmail.com', rate: '0.83 pip/lot', groups: '3 groups', status: 'Approved', date: 'Nov 12, 2025' },
                    { name: 'Ehsan Ali', email: 'ehsanali005@gmail.com', rate: '1.20 pip/lot', groups: '3 groups', status: 'Approved', date: 'Nov 12, 2025' },
                    { name: 'Ram Jawari', email: 'ram13august@gmail.com', rate: 'Not configured', groups: '', status: 'Approved', date: 'Nov 11, 2025' },
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-3 md:py-4 px-2">
                        <div className="font-semibold text-xs md:text-sm text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.email}</div>
                      </td>
                      <td className="py-3 md:py-4 px-2">
                        <span className={`${item.rate === 'Not configured' ? 'bg-gray-500' : 'bg-cyan-500'} text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap`}>
                          {item.rate}
                        </span>
                        {item.groups && <div className="text-xs text-gray-500 mt-1">{item.groups}</div>}
                      </td>
                      <td className="py-3 md:py-4 px-2">
                        <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">{item.status}</span>
                      </td>
                      <td className="py-3 md:py-4 px-2 text-xs text-gray-500 whitespace-nowrap">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-emerald-50 to-green-50">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Top Commission Earners</h2>
          </div>
          <div className="p-3 md:p-6">
            <div className="overflow-x-auto -mx-3 md:mx-0">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700">IB Name</th>
                    <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700">Commission</th>
                    <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Pramod Kirdat', email: 'kirdatpramod4@gmail.com', referrals: '0 referral', commission: '$521.43', volume: '40.11 lots' },
                    { name: 'Ajay Thengil', email: 'ajaythengil@gmail.com', referrals: '1 referral', commission: '$228.90', volume: '15.26 lots' },
                    { name: 'Finstep India', email: 'finstepindia@gmail.com', referrals: '1 referral', commission: '$110.31', volume: '7.38 lots' },
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-3 md:py-4 px-2">
                        <div className="font-semibold text-xs md:text-sm text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.email}</div>
                        <div className="text-xs text-cyan-600 mt-1">{item.referrals}</div>
                      </td>
                      <td className="py-3 md:py-4 px-2">
                        <span className="text-green-600 font-bold text-xs md:text-sm whitespace-nowrap">{item.commission}</span>
                      </td>
                      <td className="py-3 md:py-4 px-2">
                        <span className="text-cyan-600 text-xs md:text-sm whitespace-nowrap">{item.volume}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* System Summary */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">System Summary</h2>
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div>
              <h3 className="text-base md:text-lg font-bold text-blue-600 mb-3 flex items-center">
                <span className="mr-2">👥</span> IB Statistics
              </h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><span className="font-semibold">Total IBs:</span> 98</li>
                <li><span className="font-semibold">Approved:</span> <span className="text-green-600">91</span></li>
                <li><span className="font-semibold">Pending:</span> <span className="text-amber-600">1</span></li>
                <li><span className="font-semibold">Rejected:</span> <span className="text-red-600">6</span></li>
                <li><span className="font-semibold">Approval Rate:</span> 92.9%</li>
                <li><span className="font-semibold">IBs Earning:</span> <span className="text-green-600">24</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-green-600 mb-3 flex items-center">
                <span className="mr-2">📊</span> Trading Statistics
              </h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><span className="font-semibold">Total Volume:</span> 447.33 lots</li>
                <li><span className="font-semibold">Total Trades:</span> 1,608</li>
                <li><span className="font-semibold">Avg Volume/Trade:</span> 0.28 lots</li>
                <li><span className="font-semibold">Total Referrals:</span> 22</li>
                <li><span className="font-semibold">Total Clients:</span> 22</li>
                <li><span className="font-semibold">IBs with Referrals:</span> 16</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-amber-600 mb-3 flex items-center">
                <span className="mr-2">💵</span> Commission Statistics
              </h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><span className="font-semibold">Total Commission:</span> <span className="text-green-600 font-bold">$1,518.60</span></li>
                <li><span className="font-semibold">Avg Commission/Lot:</span> $3.39</li>
                <li><span className="font-semibold">Commission/Trade:</span> $0.94</li>
                <li><span className="font-semibold">IBs Earning:</span> 24 / 91</li>
                <li><span className="font-semibold">Avg per Earning IB:</span> $63.28</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-cyan-600 mb-3 flex items-center">
                <span className="mr-2">📈</span> Performance Metrics
              </h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><span className="font-semibold">Active IBs:</span> 91</li>
                <li><span className="font-semibold">Volume per IB:</span> 4.92 lots</li>
                <li><span className="font-semibold">Commission per IB:</span> $16.69</li>
                <li><span className="font-semibold">Referrals per IB:</span> 0.2</li>
                <li><span className="font-semibold">Avg Referrals (Active):</span> 1.4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IbOverview;
