import React, { useState } from 'react';

const AdvancedIBDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Become a Partner
          </h1>
          <p className="text-gray-600 text-lg">Join forces with us and expand your own business as an Introducing Broker.</p>
        </div>

        {/* Banner Card */}
        <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] mb-6 md:mb-8">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                  Become an Introducing Broker & Expand<br className="hidden md:block" />Your Own Business
                </h2>
                <p className="text-lg md:text-xl text-purple-100">Opportunity to grow and earn more with us.</p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-24 h-24 md:w-28 md:h-28 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Partner Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] mb-6 md:mb-8">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 md:w-7 md:h-7 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              Why Partner with Us?
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-32 h-32 md:w-36 md:h-36 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Become an IB to earn additional income by referring clients to OXO MARKETS
                </h4>
                <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                  We offer our partners the ultimate transparency and seamless experience! Join us to access the most advanced trading tools and benefit from the highest levels of security and customer service.
                </p>

                <h5 className="text-lg font-semibold text-gray-900 mb-3">Advantages of our IB Programme</h5>
                <ul className="space-y-3 mb-6">
                  {[
                    "Zero sign-up fees and super simple set-up process",
                    "Lucrative and competitive commission payouts",
                    "Advanced dashboard and tools for close monitoring"
                  ].map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setShowModal(true)}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Steps */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-6 h-6 md:w-7 md:h-7 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
              </svg>
              Get Started Now in Few Steps
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-4xl">
              Being an Introducing Broker with us can be a lucrative opportunity for individuals or companies who have an existing network of potential clients in the financial industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  step: 1,
                  title: "Promote",
                  description: "Promote OXO MARKETS and attract traders.",
                  icon: "📢",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: 2,
                  title: "Introduce",
                  description: "Introduce your clients to OXO MARKETS.",
                  icon: "🤝",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  step: 3,
                  title: "Gain",
                  description: "Gain profit when your referral joins us.",
                  icon: "💰",
                  color: "from-green-500 to-green-600"
                },
                {
                  step: 4,
                  title: "Monitor",
                  description: "Use the partner portal for monitoring.",
                  icon: "📊",
                  color: "from-orange-500 to-orange-600"
                }
              ].map((step, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Become a Partner</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Join Our IB Program</h4>
                  <p className="text-gray-600 text-sm">Fill out the form below to start your journey as an Introducing Broker.</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="IN">India</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
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

export default AdvancedIBDashboard;