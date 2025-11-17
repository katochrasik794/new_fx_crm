import React from 'react';

const AccountOverview = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 p-4 md:p-6">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto space-y-6">

        {/* Page Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
            </svg>
            Account Overview
          </h1>
          <p className="text-gray-600 text-lg">Your trading accounts grouped by type</p>
        </div>

        {/* Account Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">0</h3>
              <p className="text-indigo-100 text-sm">Total Accounts</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">$0.00</h3>
              <p className="text-green-100 text-sm">Total Balance</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">$0.00</h3>
              <p className="text-blue-100 text-sm">Total Equity</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">IB Approved</h3>
              <p className="text-yellow-100 text-sm">Account Status</p>
            </div>
          </div>
        </div>

        {/* Commission Summary (IB Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">$0.00</h3>
              <p className="text-green-100 text-sm">My Commission</p>
              <p className="text-green-200 text-xs mt-2">0.00 lots</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">$2.10</h3>
              <p className="text-blue-100 text-sm">Client Commission</p>
              <p className="text-blue-200 text-xs mt-2">Total volume: 0.40 lots</p>
              <p className="text-yellow-200 text-xs mt-1" style={{opacity: 0.9}}>From approved IB clients only</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">$2.10</h3>
              <p className="text-indigo-100 text-sm">Total Commission</p>
              <p className="text-indigo-200 text-xs mt-2">0.40 lots</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-500 to-slate-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-2">0</h3>
              <p className="text-gray-100 text-sm">Direct Referrals</p>
              <p className="text-gray-200 text-xs mt-2">Total clients: 2 (all levels)</p>
              <p className="text-gray-200 text-xs mt-1">Updated: Nov 10, 14:47</p>
            </div>
          </div>
        </div>

        {/* No Accounts Message */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-8">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Trading Accounts Found</h3>
            <p className="text-gray-600 mb-4">You don't have any trading accounts yet. Create your first account to start trading.</p>
            <a href="/my-account/open-trading-account" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
              Open Trading Account
            </a>
          </div>
        </div>

        {/* IB Information */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            IB Commission Information
          </h3>

          {/* Commission Summary from Database */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Commission Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="p-4 border border-green-200 rounded-xl bg-green-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">My Trades Commission</p>
                    <h4 className="text-2xl font-bold text-green-600 mb-1">$0.00</h4>
                    <p className="text-sm text-gray-500">0.00 lots traded</p>
                  </div>
                  <svg className="w-12 h-12 text-green-500 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className="p-4 border border-blue-200 rounded-xl bg-blue-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Referral Clients Commission</p>
                    <h4 className="text-2xl font-bold text-blue-600 mb-1">$2.10</h4>
                    <p className="text-sm text-gray-500">Total volume: 0.40 lots (all clients)</p>
                    <p className="text-sm text-yellow-600 mt-1">Commission from approved IB clients only</p>
                  </div>
                  <svg className="w-12 h-12 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-indigo-100 text-sm mb-1">Total Commission Earned</p>
                  <h3 className="text-3xl font-bold mb-1">$2.10</h3>
                  <p className="text-indigo-200 text-sm">From 0 direct referrals (2 total clients)</p>
                  <p className="text-yellow-200 text-sm mt-1" style={{opacity: 0.9}}>Commission only from approved IB clients</p>
                </div>
                <svg className="w-16 h-16 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="text-blue-800 font-medium mb-1">Commission Information</p>
                <p className="text-blue-700 text-sm">
                  Commission is calculated based on your <strong>approved IB clients'</strong> trading activity on each account type.
                  Total volume shown includes all clients (IB + non-IB), but commission is only earned from approved IB clients.
                  Data is updated every minute.
                </p>
                <p className="text-blue-600 text-sm mt-2">
                  Last updated: Nov 10, 2025 pm30 14:47
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;