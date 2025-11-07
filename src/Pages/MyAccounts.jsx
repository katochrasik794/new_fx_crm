import React, { useState } from 'react'

function MyAccounts() {
  const [activeTab, setActiveTab] = useState('live')

  // Sample account data - replace with actual data from API
  const liveAccounts = [
    {
      id: '12345678',
      accountType: 'PLUS',
      balance: '$2,450.00',
      equity: '$2,450.00',
      margin: '$0.00',
      marginLevel: '0.00%',
      status: 'Active',
      leverage: '1:50',
      currency: 'USD'
    },
    {
      id: '87654321',
      accountType: 'PRO',
      balance: '$1,200.00',
      equity: '$1,200.00',
      margin: '$0.00',
      marginLevel: '0.00%',
      status: 'Active',
      leverage: '1:100',
      currency: 'USD'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white p-8 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-center text-center">
            <div>
              <h4 className="text-3xl font-bold mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Manage Accounts
              </h4>
              <p className="text-lg text-purple-100">Manage Live and Demo accounts here</p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="p-8">

            {/* Card Header */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-7 h-7 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                Manage Trading Accounts
              </h4>
              <p className="text-gray-600 text-lg">Let's have a detailed look at your Trading Accounts.</p>
            </div>

            {/* Custom Tabs */}
            <div className="mb-8">
              <div className="flex bg-gray-100 rounded-2xl p-2 w-fit">
                <button
                  onClick={() => setActiveTab('live')}
                  className={`py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center ${
                    activeTab === 'live'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  MT5 Live Accounts
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">

              {/* Live Accounts Tab */}
              {activeTab === 'live' && (
                <div className="animate-fade-in">
                  {liveAccounts.length > 0 ? (
                    <div className="space-y-6">
                      {liveAccounts.map((account) => (
                        <div key={account.id} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:scale-[1.01] transition-all duration-500 transform">
                          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                            {/* Account Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                                  </svg>
                                </div>
                                <div>
                                  <h5 className="text-xl font-bold text-gray-900">MT5 Account #{account.id}</h5>
                                  <p className="text-gray-600">{account.accountType} Account • {account.leverage} Leverage</p>
                                </div>
                              </div>

                              {/* Account Stats */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600 mb-1">Balance</p>
                                  <p className="font-bold text-lg text-green-600">{account.balance}</p>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600 mb-1">Equity</p>
                                  <p className="font-bold text-lg text-blue-600">{account.equity}</p>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600 mb-1">Margin</p>
                                  <p className="font-bold text-lg text-orange-600">{account.margin}</p>
                                </div>
                                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                                  <p className="text-sm text-gray-600 mb-1">Margin Level</p>
                                  <p className="font-bold text-lg text-purple-600">{account.marginLevel}</p>
                                </div>
                              </div>
                            </div>

                            {/* Account Actions */}
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${account.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <span className={`text-sm font-semibold ${account.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                                  {account.status}
                                </span>
                              </div>

                              <div className="flex gap-2">
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 transform text-sm font-semibold">
                                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                  </svg>
                                  View
                                </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 transform text-sm font-semibold">
                                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                  </svg>
                                  Deposit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h5 className="text-xl font-semibold text-gray-900 mb-2">No Trading Accounts Found</h5>
                      <p className="text-gray-600 mb-6">You haven't opened any trading accounts yet.</p>
                      <a href="/my-account/open-trading-account" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 transform font-semibold">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                        </svg>
                        Open Your First Account
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccounts