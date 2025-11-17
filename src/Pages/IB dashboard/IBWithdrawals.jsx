import React from 'react';

const IBWithdrawals = () => {
  const commissionSummary = {
    totalCommission: 2.10,
    availableBalance: 2.10,
    pendingWithdrawals: 0.00,
    totalWithdrawn: 0.00
  };

  const withdrawalHistory = []; // Empty array for no history

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 p-4 md:p-6">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto space-y-6">

        {/* Page Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            IB Withdrawals
          </h1>
          <p className="text-gray-600 text-lg">Manage your commission withdrawals</p>
        </div>

        {/* Commission Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-2xl shadow-xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">${commissionSummary.totalCommission.toFixed(2)}</h3>
              <p className="text-rose-100 text-sm mb-2">Total Commission</p>
              <p className="text-rose-200 text-xs">From your trades + referrals</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-green-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-2">${commissionSummary.availableBalance.toFixed(2)}</h3>
              <p className="text-gray-600 text-sm mb-2">Available Balance</p>
              <p className="text-gray-500 text-xs">Ready for withdrawal</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">${commissionSummary.pendingWithdrawals.toFixed(2)}</h3>
              <p className="text-gray-600 text-sm mb-2">Pending Withdrawals</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">${commissionSummary.totalWithdrawn.toFixed(2)}</h3>
              <p className="text-gray-600 text-sm mb-2">Total Withdrawn</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

          {/* Withdrawal Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 p-4 md:p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
              Request Withdrawal
            </h3>

            {/* No Payment Methods Available */}
            <div className="text-center py-8 md:py-12">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No Payment Methods Available</h4>
              <p className="text-gray-600 text-sm md:text-base mb-6">Please add and get approval for a payment method to withdraw funds.</p>
              <a
                href="/payment-details"
                className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
                Add Payment Method
              </a>
            </div>
          </div>

          {/* Withdrawal History */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 p-4 md:p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              Withdrawal History
            </h3>

            {withdrawalHistory.length === 0 ? (
              <div className="text-center py-8 md:py-12">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No withdrawal history found.</h4>
                <p className="text-gray-600 text-sm md:text-base">Your withdrawal requests will appear here once you submit them.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Date</th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Amount</th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Method</th>
                      <th className="text-left py-2 md:py-3 px-2 md:px-4 font-semibold text-gray-900 text-xs md:text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withdrawalHistory.map((withdrawal, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                        <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700 text-sm">{withdrawal.date}</td>
                        <td className="py-2 md:py-3 px-2 md:px-4 font-semibold text-green-600 text-sm">${withdrawal.amount}</td>
                        <td className="py-2 md:py-3 px-2 md:px-4 text-gray-700 text-sm">{withdrawal.method}</td>
                        <td className="py-2 md:py-3 px-2 md:px-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            withdrawal.status === 'completed' ? 'bg-green-100 text-green-800' :
                            withdrawal.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {withdrawal.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IBWithdrawals;