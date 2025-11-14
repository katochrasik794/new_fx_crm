import React, { useState } from 'react';

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState('deposit');

  const tabs = [
    { id: 'deposit', label: 'Deposit History', icon: '📥' },
    { id: 'withdraw', label: 'Withdrawal History', icon: '📤' },
    { id: 'internal', label: 'Internal Transfers', icon: '🔄' }
  ];

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            Transaction History
          </h1>
          <p className="text-gray-600 text-lg">View all your transactions in one place</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Left Column - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  Transaction Types
                </h3>
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">{tab.icon}</span>
                      <span className={`font-semibold text-sm ${activeTab === tab.id ? 'text-white' : 'text-gray-900'}`}>
                        {tab.label}
                      </span>
                      {activeTab === tab.id && (
                        <svg className="w-5 h-5 flex-shrink-0 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Deposit History */}
              {activeTab === 'deposit' && (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
                  <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold flex items-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                      Deposit History
                    </h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 font-semibold text-gray-900">Sr No</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Method</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">To MT5</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Amount</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Status</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Proof</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                              No deposit history found
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <div className="flex gap-2">
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">1</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Withdrawal History */}
              {activeTab === 'withdraw' && (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
                  <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold flex items-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414-1.414z" clipRule="evenodd"/>
                      </svg>
                      Withdrawal History
                    </h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 font-semibold text-gray-900">Sr No</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Method</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">From MT5</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Amount</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Status</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Proof</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                              No withdrawal history found
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <div className="flex gap-2">
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">1</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Internal Transfers */}
              {activeTab === 'internal' && (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold flex items-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      Internal Transfers
                    </h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 font-semibold text-gray-900">Sr No</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">From MT5</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">To Target</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Amount</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Type</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Status</th>
                            <th className="px-4 py-3 font-semibold text-gray-900">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="7" className="px-4 py-8 text-center text-gray-500">
                              No internal transfer history found
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <div className="flex gap-2">
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">1</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;