import React, { useState } from 'react';

const WithdrawFunds = () => {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [accountBalance, setAccountBalance] = useState('0 USD');
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawForm, setWithdrawForm] = useState({
    mt5_id: '',
    amount: '',
    wallet_address: '',
    transaction_id: ''
  });

  const handleAccountChange = (e) => {
    const value = e.target.value;
    setSelectedAccount(value);
    // In a real app, this would fetch the actual balance
    setAccountBalance('0 USD');
  };

  const handleWithdrawChange = (e) => {
    setWithdrawForm({
      ...withdrawForm,
      [e.target.name]: e.target.value
    });
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    // Handle withdrawal form submission
    console.log('Withdrawal form submitted:', withdrawForm);
    setShowWithdrawModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Withdraw Funds
          </h1>
          <p className="text-gray-300 text-lg">Withdraw your funds securely from your Trading account.</p>
        </div>

        {/* Account Selection */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] mb-6 md:mb-8">
          <div className="p-4 md:p-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="min-w-0 flex-1 lg:flex-initial lg:min-w-[280px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose an Account or Wallet to Withdraw</label>
                <select
                  className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedAccount}
                  onChange={handleAccountChange}
                >
                  <option value="" disabled>No accounts available</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 min-w-0 flex-1 lg:flex-initial">
                <div className="flex items-center gap-4 min-w-0 flex-1 lg:min-w-[220px]">
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

                <div className="flex items-center gap-4 min-w-0 flex-1 lg:min-w-[220px]">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Secure</label>
                    <p className="text-sm text-gray-600">Your Secure Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-1 bg-gray-100 rounded-xl p-1">
              <button className="px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-white text-purple-600 shadow-sm">
                Crypto
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <span className="text-xl font-semibold text-gray-900">Withdrawal to Crypto Wallet</span>
              <div className="text-right text-sm">
                <div><strong>Processing Time:</strong> Up to 24hrs</div>
                <div><strong>Minimum Withdrawal:</strong> $100.00</div>
              </div>
            </div>

            <div className="text-center py-6">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-gray-600 text-sm mb-4">USDT — TRC20 Network</div>
              <button
                onClick={() => setShowWithdrawModal(true)}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Proceed to Withdrawal
              </button>
            </div>
          </div>
        </div>

        {/* Withdrawal Modal */}
        {showWithdrawModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Crypto Wallet Withdrawal</h3>
                  <button
                    onClick={() => setShowWithdrawModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">USDT TRC20 Withdrawal</h4>
                  <p className="text-sm text-gray-600">Withdraw funds to your crypto wallet</p>
                </div>

                <form onSubmit={handleWithdrawSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select MT5 Account</label>
                    <select
                      name="mt5_id"
                      className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={withdrawForm.mt5_id}
                      onChange={handleWithdrawChange}
                      required
                    >
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
                        name="amount"
                        className="flex-1 border border-gray-300 rounded-r-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter amount in USD"
                        value={withdrawForm.amount}
                        onChange={handleWithdrawChange}
                        required
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Minimum withdrawal: $100.00</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Wallet Address</label>
                    <input
                      type="text"
                      name="wallet_address"
                      className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your USDT TRC20 wallet address"
                      value={withdrawForm.wallet_address}
                      onChange={handleWithdrawChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transaction ID (Optional)</label>
                    <input
                      type="text"
                      name="transaction_id"
                      className="w-full border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter transaction ID if available"
                      value={withdrawForm.transaction_id}
                      onChange={handleWithdrawChange}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Submit Withdrawal
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowWithdrawModal(false)}
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

export default WithdrawFunds;