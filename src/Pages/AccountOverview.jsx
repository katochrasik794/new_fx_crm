import React from 'react'

function AccountOverview() {
  return (
    <div className="bg-violet-100 p-4 md:p-6">
      <div className="w-[370px] pr-2 sm:w-[700px] md:w-full mx-auto space-y-6 md:space-y-8">

        {/* Page Header */}
        <div className="bg-linear-to-r from-violet-900 via-purple-900 to-indigo-900 text-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl">
          <div className="flex items-center justify-center text-center">
            <div>
              <h4 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 flex items-center justify-center flex-wrap">
                <svg className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 flex-shrink:0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                <span className="overflow-wrap: break-word;">OXO MARKETS Account Types</span>
              </h4>
              <p className="text-sm md:text-lg text-purple-100">Explore various account types to suit your trading needs.</p>
            </div>
          </div>
        </div>

        {/* Account Types Comparison Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] md:min-w-[800px]">
              <thead>
                <tr className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
                  <th className="py-3 px-2 md:py-4 md:px-3 lg:py-6 lg:px-6 text-left font-bold text-sm md:text-lg lg:text-xl border-r border-gray-700">Account Types</th>
                  <th className="py-3 px-2 md:py-4 md:px-3 lg:py-6 lg:px-6 text-center font-bold text-xs md:text-sm lg:text-lg border-r border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 md:mr-2 lg:mr-3 mb-1 md:mb-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0V7z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-xs md:text-sm">Standard</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 md:py-4 md:px-3 lg:py-6 lg:px-6 text-center font-bold text-xs md:text-sm lg:text-lg border-r border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 md:mr-2 lg:mr-3 mb-1 md:mb-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-xs md:text-sm">PRO</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 md:py-4 md:px-3 lg:py-6 lg:px-6 text-center font-bold text-xs md:text-sm lg:text-lg border-r border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 md:mr-2 lg:mr-3 mb-1 md:mb-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-xs md:text-sm">ECN</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 md:py-4 md:px-3 lg:py-6 lg:px-6 text-center font-bold text-xs md:text-sm lg:text-lg">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 md:mr-2 lg:mr-3 mb-1 md:mb-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-xs md:text-sm">START-UP</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  { label: "Base Currency", values: ["USD", "USD", "USD", "USD"] },
                  { label: "Minimum Deposit (FTD)", values: ["$25", "$100", "$500", "$100"] },
                  { label: "Min Recurring Deposit", values: ["$25", "$100", "$100", "$100"] },
                  { label: "Min Internal Transfer", values: ["$1", "$1", "$1", "$1"] },
                  { label: "Minimum Spread", values: ["from 1.8", "from 1.2", "from 0.3", "from 1.8"] },
                  { label: "Commission (Round turn lot)", values: ["N/A", "N/A", "10 USD", "N/A"] },
                  { label: "Margin Call", values: ["50%", "50%", "50%", "50%"] },
                  { label: "Stop Out", values: ["20%", "20%", "20%", "20%"] },
                  { label: "Leverage", values: ["Up to 400", "Up to 200", "Up to 100", "Up to 400"] },
                  { label: "Asset Classes", values: ["Forex, Indices, Metals, Energies, Stocks CFD, Cryptos, Futures", "Forex, Indices, Metals, Energies, Stocks CFD, Cryptos, Futures", "Forex, Indices, Metals, Energies, Stocks CFD, Cryptos, Futures", "Forex, Indices, Metals, Energies, Stocks CFD, Cryptos, Futures"], longText: true },
                  { label: "Max Open Positions + Pending Order", values: ["100 Positions", "100 Positions", "100 Positions", "100 Positions"] },
                  { label: "Max Lot Size", values: ["100", "100", "100", "100"] },
                  { label: "Min Lot Size", values: ["0.01", "0.01", "0.01", "0.01"] },
                  { label: "Negative Balance Protection", values: ["Yes", "Yes", "Yes", "Yes"] }
                ].map((row, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                    <td className="py-2 px-2 md:py-3 md:px-3 lg:py-4 lg:px-6 font-semibold text-gray-900 border-r border-gray-200 text-xs md:text-sm lg:text-base">{row.label}</td>
                    {row.values.map((value, idx) => (
                      <td key={idx} className={`py-2 px-2 md:py-3 md:px-3 lg:py-4 lg:px-6 text-center text-gray-700 border-r border-gray-200 last:border-r-0 text-xs md:text-sm ${row.longText ? 'max-w-[100px] md:max-w-[120px] lg:max-w-none' : ''}`}>
                        <span className={row.longText ? 'block truncate md:whitespace-normal lg:text-left' : ''} title={row.longText ? value : ''}>
                          {value}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountOverview