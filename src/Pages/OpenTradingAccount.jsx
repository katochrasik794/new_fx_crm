import React, { useState } from 'react'

function OpenTradingAccount() {
  const [activeTab, setActiveTab] = useState('live')
  const [formData, setFormData] = useState({
    account_type: '',
    currency: 'USD',
    leverage: '1:50',
    password: '',
    confirm_password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-violet-100 p-2 md:p-4 min-h-screen">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white p-8 rounded-3xl shadow-2xl">
          <div className="flex items-center justify-center text-center">
            <div>
              <h4 className="text-3xl font-bold mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Open Trading Accounts
              </h4>
              <p className="text-lg text-purple-100">Open Live and Demo accounts here</p>
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
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0V7z"/>
                </svg>
                Open Trading Account
              </h4>
              <p className="text-gray-600 text-lg">Create Live and Demo trading accounts in simple steps.</p>
            </div>

            {/* Custom Tabs */}
            <div className="mb-8">
              <div className="flex bg-gray-100 rounded-2xl p-2">
                <button
                  onClick={() => setActiveTab('live')}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center ${
                    activeTab === 'live'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                  Open Live Account
                </button>
                <button
                  onClick={() => setActiveTab('demo')}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center ${
                    activeTab === 'demo'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-white'
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Open Demo Account
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">

              {/* Live Account Form */}
              {activeTab === 'live' && (
                <div className="animate-fade-in">
                  {/* Alert Container */}
                  <div id="alert-container" className="mb-6 hidden">
                    {/* Alert messages would go here */}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Account Type */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Account Type</label>
                      <select
                        name="account_type"
                        value={formData.account_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-gray-300"
                        required
                      >
                        <option value="" disabled>Select Account Type</option>
                        <option value="PLUS">PLUS</option>
                        <option value="PRO">PRO</option>
                        <option value="STANDARD">STANDARD</option>
                      </select>
                    </div>

                    {/* Currency and Leverage Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
                        <select
                          name="currency"
                          value={formData.currency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-gray-300"
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Leverage</label>
                        <select
                          name="leverage"
                          value={formData.leverage}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-gray-300"
                        >
                          <option value="1:50">1:50</option>
                          <option value="1:100">1:100</option>
                          <option value="1:200">1:200</option>
                          <option value="1:400">1:400</option>
                        </select>
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-gray-300"
                          placeholder="Password"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Password must be at least 8 characters with uppercase, lowercase, number, and special character.
                        </p>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                        <input
                          type="password"
                          name="confirm_password"
                          value={formData.confirm_password}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white hover:border-gray-300"
                          placeholder="Confirm Password"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 transform flex items-center justify-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Open Live Account</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </form>
                </div>
              )}

              {/* Demo Account Form */}
              {activeTab === 'demo' && (
                <div className="animate-fade-in space-y-6">
                  <form className="space-y-6">
                    {/* Account Type and Deposit Amount Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Account Type</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white hover:border-gray-300">
                          <option disabled selected>Select Demo Type</option>
                          <option value="demo-standard">Demo Standard</option>
                          <option value="demo-ecn">Demo ECN</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Deposit Amount</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white hover:border-gray-300">
                          <option>USD 10,000</option>
                          <option>USD 50,000</option>
                          <option>USD 100,000</option>
                        </select>
                      </div>
                    </div>

                    {/* Currency and Leverage Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white hover:border-gray-300">
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Leverage</label>
                        <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white hover:border-gray-300">
                          <option value="1:100">1:100</option>
                          <option value="1:200">1:200</option>
                          <option value="1:500">1:500</option>
                        </select>
                      </div>
                    </div>

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white hover:border-gray-300"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white hover:border-gray-300"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 transform flex items-center justify-center group border-2 border-transparent hover:border-white"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Open Demo Account</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenTradingAccount