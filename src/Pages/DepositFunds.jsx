import React, { useState } from 'react';

const DepositFunds = () => {
  const [activeTab, setActiveTab] = useState('exclusive');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [accountBalance, setAccountBalance] = useState('0.00 USD');
  const [upiAmount, setUpiAmount] = useState('');
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [showUpiModal, setShowUpiModal] = useState(false);
  const [showCryptoModal, setShowCryptoModal] = useState(false);

  const handleAccountChange = (e) => {
    const value = e.target.value;
    setSelectedAccount(value);
    // In a real app, this would fetch the actual balance
    setAccountBalance('0.00 USD');
  };

  const handleUpiAmountChange = (e) => {
    const inrValue = e.target.value;
    setUpiAmount(inrValue);
  };

  const usdEquivalent = upiAmount ? (parseFloat(upiAmount) / 94).toFixed(2) : '0.00';

  const showUnavailableAlert = () => {
    alert('This deposit method is currently not available. Please choose other methods.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Deposit Funds
          </h1>
          <p className="text-gray-600 text-lg">Deposit your funds securely into your Trading account.</p>
        </div>

        {/* Account Selector + KPIs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] mb-6 md:mb-8">
          <div className="p-4 md:p-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="min-w-0 flex-1 lg:flex-initial lg:min-w-[260px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose an Account or Wallet to deposit into</label>
                <select
                  className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedAccount}
                  onChange={handleAccountChange}
                >
                  <option value="" disabled>No accounts available</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 min-w-0 flex-1 lg:flex-initial">
                <div className="flex items-center gap-4 min-w-0 flex-1 lg:min-w-[240px]">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Available Balance</label>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900">{accountBalance}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-4 min-w-0 flex-1 lg:min-w-[240px]">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Secure</label>
                    <p className="text-sm text-gray-600">Your secure transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z"/>
                  </svg>
                  Payment Methods
                </h3>
                <div className="space-y-2">
                  {[
                    { id: 'exclusive', label: 'OXO Payment Gateway', icon: '💳', desc: 'Credit Cards & E-Wallets' },
                    { id: 'crypto', label: 'Cryptocurrency', icon: '₿', desc: 'USDT & Other Crypto' },
                    { id: 'wire', label: 'Wire Transfer', icon: '🏦', desc: 'Bank Wire Transfer' },
                    { id: 'upi', label: 'UPI / UPI QR', icon: '📱', desc: 'UPI Payment' },
                    { id: 'local', label: 'Local Depositor', icon: '🏪', desc: 'Local Payment Methods' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                          : 'bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <span className="text-2xl flex-shrink-0">{tab.icon}</span>
                      <div className="min-w-0 flex-1">
                        <div className={`font-semibold text-sm ${activeTab === tab.id ? 'text-white' : 'text-gray-900'}`}>
                          {tab.label}
                        </div>
                        <div className={`text-xs mt-1 ${activeTab === tab.id ? 'text-purple-100' : 'text-gray-600'}`}>
                          {tab.desc}
                        </div>
                      </div>
                      {activeTab === tab.id && (
                        <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
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
          <div className="lg:col-span-2">
            <div className="w-full">
              {/* OXO Payment Gateway */}
              {activeTab === 'exclusive' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <span className="text-xl font-semibold text-gray-900">OXO Payment Gateway</span>
                  <div className="text-right text-sm">
                    <div><strong>Processing Time:</strong> Instant</div>
                    <div><strong>Minimum Deposit:</strong> Unlimited</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center mb-6">
                  <div className="flex justify-center items-center gap-2 mb-3">
                    <img src="https://portal.oxomarkets.com/client/assets/images/icons/visa-dark-icon.svg" alt="Visa" className="h-5" />
                    <img src="https://portal.oxomarkets.com/client/assets/images/icons/mastercard-dark-icon.svg" alt="Mastercard" className="h-5" />
                    {/* <img src="https://portal.oxomarkets.com/client/assets/images/icons/mastercard-dark-icon.svg" alt="Skrill" className="h-5" /> */}
                    <img src="https://portal.oxomarkets.com/client/assets/images/icons/skrill-dark-icon.svg" alt="Neteller" className="h-5" />
                    <img src="https://portal.oxomarkets.com/client/assets/images/icons/neteller-dark-icon.svg" alt="Bank Wire" className="h-5" />
                  </div>
                  <p className="text-gray-600 text-sm mb-0">and many more...</p>
                </div>
                <div className="text-center mb-4">
                  <button
                    onClick={showUnavailableAlert}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Proceed to Deposit
                  </button>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Important:</strong> OXO Payment Gateway has several payment options such as Credit Card, E-Wallets and Wire Transfer.
                </p>
              </div>
            </div>
          )}

          {/* Cryptocurrency */}
          {activeTab === 'crypto' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <span className="text-xl font-semibold text-gray-900">USDT TRC20</span>
                  <div className="text-right text-sm">
                    <div><strong>Processing Time:</strong> 10–30 minutes</div>
                    <div><strong>Min Deposit:</strong> $10</div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setShowCryptoModal(true)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Proceed with USDT TRC20
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Wire Transfer */}
          {activeTab === 'wire' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="p-8 text-center">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <p className="text-gray-900 font-semibold mb-1">No methods found for this method.</p>
              </div>
            </div>
          )}

          {/* UPI / UPI QR */}
          {activeTab === 'upi' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <span className="text-xl font-semibold text-gray-900">UPI PAYMENT</span>
                  <div className="text-right text-sm">
                    <div><strong>Processing Time:</strong> Instant</div>
                    <div><strong>Min Deposit:</strong> $10</div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => setShowUpiModal(true)}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Pay via UPI
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Local Depositor */}
          {activeTab === 'local' && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
              <div className="p-8 text-center">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <p className="text-gray-900 font-semibold mb-1">No methods found for this method.</p>
              </div>
            </div>
          )}
            </div>
          </div>
        </div>

        {/* Modals */}
        {showUpiModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">UPI Payment</h3>
                  <button
                    onClick={() => setShowUpiModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Only deposit to the details mentioned below. Any other transfer may result in loss of funds.
                  </p>
                  <img
                    src="../uploads/qr/1761040685_f1821453-de9d-464d-8239-2e3bb90d20ba.jpeg"
                    alt="QR Code"
                    className="w-48 h-48 mx-auto mb-4 object-contain"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">UPI PAYMENT</h4>
                  <p className="text-lg font-medium text-gray-700">RAM ENTERPRISE</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select MT5 Account</label>
                    <select className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="" disabled selected>Choose your MT5 account</option>
                    </select>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Balance:</strong> <span>Please select an account</span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount (INR)</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-xl">₹</span>
                      <input
                        type="number"
                        step="0.01"
                        value={upiAmount}
                        onChange={handleUpiAmountChange}
                        className="flex-1 border border-gray-300 rounded-r-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter amount in INR"
                      />
                      <span className="inline-flex items-center px-3 py-3 border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-r-xl">≈ ${usdEquivalent} USD</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">1 USD ≈ 94 INR | Minimum: ₹940 INR</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transaction ID / UTR</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter transaction ID or UTR number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Deposit Proof</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Submit Deposit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowUpiModal(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Crypto Modal */}
        {showCryptoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">USDT TRC20 Payment</h3>
                  <button
                    onClick={() => setShowCryptoModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Only deposit to the details mentioned below. Any other transfer may result in loss of funds.
                  </p>
                  <img
                    src="../uploads/qr/1761040436_db6cca84-7a11-4519-b032-93de1824ec18.jpeg"
                    alt="QR Code"
                    className="w-48 h-48 mx-auto mb-4 object-contain"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">USDT TRC20</h4>
                  <p className="text-sm font-mono bg-gray-100 p-3 rounded-lg break-all">TM7H2dPMJQBmLXGAZjiybdF3NYSYfe962N</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select MT5 Account</label>
                    <select className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="" disabled selected>Choose your MT5 account</option>
                    </select>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Balance:</strong> <span>Please select an account</span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-xl">$</span>
                      <input
                        type="number"
                        step="0.01"
                        value={cryptoAmount}
                        onChange={(e) => setCryptoAmount(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-r-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter amount in USD"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transaction ID / UTR</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter transaction ID or UTR number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Deposit Proof</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Submit Deposit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCryptoModal(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositFunds;