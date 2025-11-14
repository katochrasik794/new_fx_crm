import React, { useState } from 'react';

const PaymentDetails = () => {
  const [bankForm, setBankForm] = useState({
    bank_name: '',
    account_type: 'Savings',
    account_number: '',
    confirm_account_number: '',
    ifsc_code: '',
    bank_address: ''
  });

  const [cryptoForm, setCryptoForm] = useState({
    wallet_address: ''
  });

  const handleBankChange = (e) => {
    setBankForm({
      ...bankForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCryptoChange = (e) => {
    setCryptoForm({
      ...cryptoForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBankSubmit = (e) => {
    e.preventDefault();
    // Handle bank form submission
    console.log('Bank form submitted:', bankForm);
  };

  const handleCryptoSubmit = (e) => {
    e.preventDefault();
    // Handle crypto form submission
    console.log('Crypto form submitted:', cryptoForm);
  };

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* HERO SECTION */}
        {/* <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] mb-6 md:mb-8">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  Payment Details
                </h1>
                <p className="text-gray-300 text-sm md:text-base">
                  Add or manage your payout methods. Changes are reviewed by our team for security.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 border border-green-200 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  No bank verifications pending
                </span>
                <span className="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  You can store up to <strong>3</strong> bank accounts
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="w-full max-w-md bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full transition-all duration-300" style={{ width: '0%' }}></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">0/3 bank profiles used</p>
            </div>

            <div className="bg-blue-100 border border-blue-200 rounded-xl p-4 mt-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <div>
                  <strong className="text-blue-900">Important:</strong>
                  <span className="text-blue-800 ml-1">Account holder name must match your profile (abc cde). Transfers from a different name will be refunded within 15 working days.</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* FORMS ROW */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Add Bank Account */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="text-lg md:text-xl font-semibold flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  Add Bank Account
                </h2>
                <span className="bg-green-100 text-green-800 border border-green-200 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Ready to add
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <form onSubmit={handleBankSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value="abc cde"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="bank_name"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g. HDFC Bank"
                      value={bankForm.bank_name}
                      onChange={handleBankChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <select
                      name="account_type"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                      value={bankForm.account_type}
                      onChange={handleBankChange}
                    >
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 14a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="account_number"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter account number"
                      value={bankForm.account_number}
                      onChange={handleBankChange}
                      inputMode="numeric"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Account Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 14a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="confirm_account_number"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Re-enter account number"
                      value={bankForm.confirm_account_number}
                      onChange={handleBankChange}
                      inputMode="numeric"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="ifsc_code"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g. HDFC0001234"
                      maxLength="11"
                      value={bankForm.ifsc_code}
                      onChange={handleBankChange}
                      required
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branch / Bank Address <span className="text-gray-500">(optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="bank_address"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g. Andheri West, Mumbai"
                      value={bankForm.bank_address}
                      onChange={handleBankChange}
                    />
                  </div>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    Submit for Review
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Add Crypto Wallet */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-4 md:p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="text-lg md:text-xl font-semibold flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                  </svg>
                  Add Crypto Wallet
                </h2>
                <span className="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Check network & address
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <form onSubmit={handleCryptoSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wallet Currency</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900"
                      value="USDT"
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Network Type</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900"
                      value="TRC-20"
                      readOnly
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wallet Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="wallet_address"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter wallet address"
                      value={cryptoForm.wallet_address}
                      onChange={handleCryptoChange}
                      required
                    />
                  </div>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                    Submit for Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* TABLES ROW */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 mt-6 md:mt-8">
          {/* Saved Bank Profiles */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold flex items-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
                Saved Bank Profiles
              </h2>
            </div>
            <div className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">#</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Account Name</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Bank</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">IFSC</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Account No.</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Country</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Status</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Copy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="9" className="px-4 py-8 text-center text-gray-500">
                        No bank profile added
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600 text-sm">Note: Only one pending bank verification allowed at a time.</p>
              </div>
            </div>
          </div>

          {/* Saved Crypto Wallets */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
            <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold flex items-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
                Saved Crypto Wallets
              </h2>
            </div>
            <div className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">#</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Currency</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Network</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Address</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Status</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900">Copy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                        No wallet added
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600 text-sm">Tip: Always test with a small amount before large transfers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;