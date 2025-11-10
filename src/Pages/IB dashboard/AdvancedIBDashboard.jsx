
import React, { useState } from 'react';

const AdvancedIBDashboard = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [withdrawalNotes, setWithdrawalNotes] = useState('');
  const [groupRates, setGroupRates] = useState({
    PLUS: '',
    PRO: '',
    STANDARD: ''
  });
  const [linkRates, setLinkRates] = useState({
    PLUS: '0.00',
    PRO: '0.00',
    STANDARD: '0.00'
  });

  const handleGroupRateChange = (group, value) => {
    setGroupRates(prev => ({ ...prev, [group]: value }));
  };

  const handleLinkRateChange = (group, value) => {
    setLinkRates(prev => ({ ...prev, [group]: value }));
  };

  const saveGroupRates = () => {
    // Handle saving group rates
    console.log('Saving group rates:', groupRates);
  };

  const handleWithdrawal = (e) => {
    e.preventDefault();
    // Handle withdrawal logic
    console.log('Processing withdrawal:', {
      amount: withdrawalAmount,
      method: paymentMethod,
      details: paymentDetails,
      notes: withdrawalNotes
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Page Title */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            IB Dashboard
          </h1>
          <p className="text-gray-600 text-lg mb-4">Real-time commission tracking • <strong>Commission = Trade Lots × Pip Rate × $10</strong></p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">PLUS -- 2.00 pip/lot</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">PRO -- 1.00 pip/lot</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">STANDARD -- 1.50 pip/lot</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Available: $0.00</span>
          </div>
        </div>

        {/* Enhanced KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-12 h-12 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">$0.00</h3>
            <p className="text-emerald-100 text-sm">Total Commission</p>
            <p className="text-emerald-200 text-xs mt-2">From your trades + referrals</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-12 h-12 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">$0.00</h3>
            <p className="text-green-100 text-sm">My Commission</p>
            <p className="text-green-200 text-xs mt-2">0.00 lots from my trades</p>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-12 h-12 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">$0.00</h3>
            <p className="text-teal-100 text-sm">Clients Commission</p>
            <p className="text-teal-200 text-xs mt-2">Total volume: 0.40 lots</p>
            <p className="text-yellow-200 text-xs mt-1">Commission from approved IB clients only</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-12 h-12 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-1">$0.00</h3>
            <p className="text-cyan-100 text-sm">Available Balance</p>
            <p className="text-cyan-200 text-xs mt-2">Ready for withdrawal</p>
          </div>
        </div>

        {/* Additional KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-600 mb-1">0.40</h3>
              <p className="text-gray-600 text-sm mb-2">Total Volume</p>
              <div className="text-xs text-gray-500">My: 0.00 | Team: 0.40</div>
              <div className="text-xs text-yellow-600 mt-1">Team volume includes all clients</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-teal-600 mb-1">1.00</h3>
              <p className="text-gray-600 text-sm mb-2">Residual Rate</p>
              <div className="text-xs text-gray-500">You keep: 1.00 pip/lot</div>
              <div className="text-xs text-gray-500">Downline gets: 0.00 pip/lot</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-cyan-600 mb-1">0</h3>
              <p className="text-gray-600 text-sm mb-2">Distributions</p>
              <div className="text-xs text-gray-500">Total distributions received</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-red-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-600 mb-1">$0.00</h3>
              <p className="text-gray-600 text-sm mb-2">Pending Balance</p>
              <div className="text-xs text-gray-500">Awaiting approval</div>
              <div className="text-xs text-gray-500">Available: $0.00</div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Withdraw + Referral Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Withdraw Commission */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              Withdraw Commission
            </h3>

            <form onSubmit={handleWithdrawal} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount (USD)</label>
                <input
                  type="number"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter amount"
                  min="0.01"
                  step="0.01"
                  max="0"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Available: $0.00</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Withdrawal Method</label>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="font-medium text-yellow-800">No payment method found!</p>
                      <p className="text-yellow-700 text-sm">Please add your payment method first.</p>
                      <a href="/payment-details" className="inline-flex items-center mt-2 px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700 transition-colors">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                        </svg>
                        Click here to update
                      </a>
                    </div>
                  </div>
                </div>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                  disabled
                >
                  <option value="">No payment methods available</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Details</label>
                <textarea
                  value={paymentDetails}
                  onChange={(e) => setPaymentDetails(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  rows="3"
                  placeholder="Enter your payment details (account number, wallet address, etc.)"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Notes (Optional)</label>
                <textarea
                  value={withdrawalNotes}
                  onChange={(e) => setWithdrawalNotes(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  rows="2"
                  placeholder="Any additional notes for this withdrawal request"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Request Withdrawal
              </button>
            </form>
          </div>

          {/* Referral Links */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
              </svg>
              Referral Links
            </h3>

            {/* Pip Rates per Group */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Pip Rates per Group:</h4>
              <p className="text-sm text-gray-600 mb-4">Set downline commission rates for each trading group</p>

              {[
                { group: 'PLUS', rate: '2.00', color: 'emerald' },
                { group: 'PRO', rate: '1.00', color: 'teal' },
                { group: 'STANDARD', rate: '1.50', color: 'cyan' }
              ].map(({ group, rate, color }) => (
                <div key={group} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">{group}</label>
                  <div className="flex">
                    <input
                      type="number"
                      value={groupRates[group]}
                      onChange={(e) => handleGroupRateChange(group, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      step="0.01"
                      min="0"
                      max={rate}
                      placeholder="Enter pip rate"
                    />
                    <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-xl px-4 py-2 text-gray-600">pip</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Your rate: {rate} pip/lot • Residual you keep: <span className={`text-${color}-600 font-medium`}>{(parseFloat(rate) - parseFloat(groupRates[group] || 0)).toFixed(2)}</span> pip/lot
                  </p>
                </div>
              ))}

              <button
                onClick={saveGroupRates}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Save
              </button>
            </div>

            {/* Trader Link */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Trader Link</label>
              <div className="flex">
                <input
                  type="text"
                  value="https://portal.oxomarkets.com/register.php?ref=OXO151753"
                  className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2 text-sm bg-gray-50"
                  readOnly
                />
                <button
                  onClick={() => navigator.clipboard.writeText('https://portal.oxomarkets.com/register.php?ref=OXO151753')}
                  className="bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-xl px-3 py-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">For traders (no sub-IB commission)</p>
            </div>

            {/* IB Link */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">IB Link (with All Group Rates)</label>
              <div className="flex">
                <input
                  type="text"
                  value="https://portal.oxomarkets.com/register.php?ref=OXO151753"
                  className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2 text-sm bg-gray-50"
                  readOnly
                />
                <button
                  onClick={() => navigator.clipboard.writeText('https://portal.oxomarkets.com/register.php?ref=OXO151753')}
                  className="bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-xl px-3 py-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">For sub-IBs - includes all saved group rates above. Updates after clicking "Save".</p>
            </div>

            {/* Group-Specific Referral Links */}
            <hr className="my-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Group-Specific Referral Links</h4>
            <p className="text-sm text-gray-600 mb-4">Create custom referral links with specific pip rates for each group</p>

            {[
              { group: 'PLUS', rate: '2.00', color: 'emerald' },
              { group: 'PRO', rate: '1.00', color: 'teal' },
              { group: 'STANDARD', rate: '1.50', color: 'cyan' }
            ].map(({ group, rate, color }) => (
              <div key={group} className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h5 className="font-medium text-gray-900 mb-3">{group}</h5>

                {/* Pip Rate Input */}
                <div className="mb-3">
                  <label className="block text-sm text-gray-700 mb-1">Downline Pip Rate</label>
                  <div className="flex">
                    <input
                      type="number"
                      value={linkRates[group]}
                      onChange={(e) => handleLinkRateChange(group, e.target.value)}
                      className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      step="0.01"
                      min="0"
                      max={rate}
                    />
                    <span className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg px-3 py-2 text-gray-600 text-sm">pip</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Your rate: {rate} pip/lot • Residual you keep: <span className={`text-${color}-600 font-medium`}>{(parseFloat(rate) - parseFloat(linkRates[group] || 0)).toFixed(2)}</span> pip/lot
                  </p>
                </div>

                {/* Referral Link */}
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Referral Link</label>
                  <div className="flex">
                    <input
                      type="text"
                      value={`https://portal.oxomarkets.com/register.php?ref=OXO151753&data=${group.toLowerCase()}_link`}
                      className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm bg-gray-50"
                      readOnly
                    />
                    <button
                      onClick={() => navigator.clipboard.writeText(`https://portal.oxomarkets.com/register.php?ref=OXO151753&data=${group.toLowerCase()}_link`)}
                      className="bg-gray-100 hover:bg-gray-200 border border-l-0 border-gray-300 rounded-r-lg px-3 py-2 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Downline earns <span className={`text-${color}-600 font-medium`}>{linkRates[group]}</span> pip/lot</p>
                </div>
              </div>
            ))}

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="font-medium text-blue-800">Quick Link Generator:</p>
                  <p className="text-blue-700 text-sm">Enter pip rates and copy the links instantly. These are for temporary use and don't save to your account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Trades Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
            </svg>
            Recent Trades
          </h3>

          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 01-1-1V7l-7-5z" clipRule="evenodd"/>
            </svg>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Trades Yet</h4>
            <p className="text-gray-600">Your recent trades will appear here once you start trading.</p>
          </div>
        </div>

        {/* Comprehensive Statistics */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
            Complete Trading Statistics
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-emerald-600 mb-4">Your Trading Performance</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Total Lots Traded:</span> 0.00 lots</p>
                <p><span className="font-medium">Commission Earned:</span> $0.00</p>
                <p><span className="font-medium">Your IB Rates (Group-based):</span></p>
                <ul className="ml-4 space-y-1 text-xs">
                  <li>• PLUS -- 2.00 pip/lot</li>
                  <li>• PRO -- 1.00 pip/lot</li>
                  <li>• STANDARD -- 1.50 pip/lot</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-4">Team Performance</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Total Clients:</span> 2 clients (all levels)</p>
                <p><span className="font-medium">Direct Referrals:</span> 0 clients</p>
                <p><span className="font-medium">Team Total Volume:</span> 0.40 lots (all clients)</p>
                <p><span className="font-medium">Team Commission:</span> $0.00 <span className="text-yellow-600">(from approved IB clients only)</span></p>
                <p><span className="font-medium">Downline Rate:</span> 0.00 pip/lot</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-600 mb-4">Financial Summary</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Total Earnings:</span> $0.00</p>
                <p><span className="font-medium">Available Balance:</span> $0.00</p>
                <p><span className="font-medium">Pending Balance:</span> $0.00</p>
                <p><span className="font-medium">Distributions:</span> 0 times</p>
              </div>
            </div>
          </div>

          {/* Rate Breakdown */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Rate Structure Breakdown</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { group: 'PLUS', rate: '2.00', color: 'emerald' },
                { group: 'PRO', rate: '1.00', color: 'teal' },
                { group: 'STANDARD', rate: '1.50', color: 'cyan' }
              ].map(({ group, rate, color }) => (
                <div key={group} className={`bg-gradient-to-br from-${color}-50 to-${color}-100 border border-${color}-200 rounded-xl p-4 text-center`}>
                  <h5 className={`text-xl font-bold text-${color}-600 mb-2`}>{group}</h5>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{rate} pip/lot</p>
                  <p className="text-sm text-gray-600">Your IB rate for this group</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Withdrawal Requests History */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            Withdrawal Requests
          </h3>

          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Withdrawal Requests</h4>
            <p className="text-gray-600">Your withdrawal requests will appear here once you submit them.</p>
          </div>
        </div>

        {/* Complete IB Overview */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
            </svg>
            Complete IB Overview
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-emerald-600 mb-4">Personal Information</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Name:</span> OXO MARKET IB</p>
                <p><span className="font-medium">Email:</span> OXOMARKETIB@GMAIL.COM</p>
                <p><span className="font-medium">Status:</span> <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">IB Approved</span></p>
                <p><span className="font-medium">Referral Code:</span> OXO151753</p>
              </div>

              <h4 className="text-lg font-semibold text-teal-600 mb-4 mt-6">Account Pip Rates</h4>
              <ul className="space-y-1 text-sm">
                <li><span className="font-medium">PLUS:</span> 2.00 pip</li>
                <li><span className="font-medium">PRO:</span> 1.00 pip</li>
                <li><span className="font-medium">STANDARD:</span> 1.50 pip</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-cyan-600 mb-4">Performance Summary</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Total Network:</span> 2 people (all levels)</p>
                <p><span className="font-medium">Direct Referrals:</span> 0 clients</p>
                <p><span className="font-medium">Total Volume:</span> 0.40 lots <span className="text-yellow-600">(all clients)</span></p>
                <p><span className="font-medium">Total Earnings:</span> $0.00</p>
                <p><span className="font-medium">Available Balance:</span> $0.00</p>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats Grid</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'My Lots', value: '0.0', color: 'emerald' },
                { label: 'Team Lots', value: '0.4', color: 'green', subtext: 'All clients' },
                { label: 'Referrals', value: '0', color: 'yellow' },
                { label: 'Earnings', value: '$0', color: 'info' },
                { label: 'Residual', value: '1.0', color: 'danger' },
                { label: 'Distributions', value: '0', color: 'dark' }
              ].map(({ label, value, color, subtext }) => (
                <div key={label} className={`bg-gradient-to-br from-${color}-500 to-${color}-600 text-white rounded-xl p-3 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  <p className="text-lg font-bold mb-1">{value}</p>
                  <p className="text-xs opacity-80">{label}</p>
                  {subtext && <p className="text-xs opacity-60 mt-1">{subtext}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedIBDashboard;