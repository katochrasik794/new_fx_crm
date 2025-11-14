import React, { useState } from 'react';

const SymbolsPipValues = () => {
  const [showModal, setShowModal] = useState(false);

  const symbols = [
    { id: 735, symbol: 'AAPL.sp', pair: '-', group: 'Stocks', category: 'Stocks', pipLot: '1.00', pipValue: 'USD10.00', commission: 'USD10.00', currency: 'USD', status: 'Active' },
    { id: 736, symbol: 'ABNB.sp', pair: '-', group: 'Stocks', category: 'Stocks', pipLot: '1.00', pipValue: 'USD10.00', commission: 'USD10.00', currency: 'USD', status: 'Active' },
    { id: 1165, symbol: 'ADAUSD.>', pair: '-', group: 'Crypto', category: 'Cryptocurrencies', pipLot: '1.00', pipValue: 'USD1.00', commission: 'USD1.00', currency: 'USD', status: 'Active' },
    { id: 1166, symbol: 'ADAUSD.ecn', pair: 'ADA / USD', group: 'Crypto', category: 'Cryptocurrencies', pipLot: '1.00', pipValue: 'USD1.00', commission: 'USD1.00', currency: 'USD', status: 'Active' },
    { id: 4, symbol: 'AUDCAD', pair: 'AUD / CAD', group: 'FX Minor', category: 'Forex', pipLot: '1.00', pipValue: 'USD7.50', commission: 'USD7.50', currency: 'USD', status: 'Active' },
  ];

  return (
    <div className="w-full max-w-full p-4 md:p-6 bg-violet-100 min-h-screen overflow-x-hidden">
      {/* Title */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">📈 Symbols & Pip Values</h1>
            <p className="text-gray-600 text-sm md:text-lg">Configure symbols, categories, and pip values (1303 symbols loaded)</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-green-700 shadow-md transition-all duration-300 hover:scale-105">
              🔄 Sync
            </button>
            <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300 hover:scale-105">
              ➕ Add
            </button>
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border border-blue-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2 md:p-3 shadow-md">
              <span className="text-white text-xl md:text-2xl">📈</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Total Symbols</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">1,303</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border border-green-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-2 md:p-3 shadow-md">
              <span className="text-white text-xl md:text-2xl">💵</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Configured Pip/Lot</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">1,303.00</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border border-amber-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-2 md:p-3 shadow-md">
              <span className="text-white text-xl md:text-2xl">⚠️</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Overrides</p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">0</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border border-purple-100 hover:scale-105">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-2 md:p-3 shadow-md">
              <span className="text-white text-xl md:text-2xl">📂</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Categories</p>
              <h3 className="text-xs md:text-sm font-bold text-gray-800">Stocks, Crypto, Forex, Indices, Commodities</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-3 md:p-4 mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Categories</option>
              <option>Commodities</option>
              <option>Cryptocurrencies</option>
              <option>Forex</option>
              <option>Indices</option>
              <option>Stocks</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Groups</option>
              <option>FX Major</option>
              <option>FX Minor</option>
              <option>Crypto</option>
              <option>Stocks</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Search..." className="flex-1 md:w-48 lg:w-64 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300 whitespace-nowrap">
              ➕ Add
            </button>
          </div>
        </div>
      </div>

      {/* Symbols Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-4 md:mb-6">
        <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Symbols (1303)</h2>
          <span className="bg-blue-500 text-white text-xs font-semibold px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-md">Preview</span>
        </div>
        <div className="p-3 md:p-6">
          <div className="overflow-x-auto -mx-3 md:mx-0">
            <table className="w-full min-w-max">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Symbol</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Pair</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Group</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Category</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Pip/Lot</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Pip Value</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Commission</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Currency</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Status</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {symbols.map((symbol) => (
                  <tr key={symbol.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 md:py-4 px-2 font-semibold text-xs md:text-sm text-gray-800 whitespace-nowrap">{symbol.symbol}</td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm text-gray-600 whitespace-nowrap">{symbol.pair}</td>
                    <td className="py-3 md:py-4 px-2"><span className="bg-gray-500 text-white text-xs font-medium px-2 md:px-3 py-1 rounded-full whitespace-nowrap">{symbol.group}</span></td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm text-gray-600 whitespace-nowrap">{symbol.category}</td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm text-gray-600 whitespace-nowrap">{symbol.pipLot} pip</td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm font-semibold text-green-600 whitespace-nowrap">{symbol.pipValue}</td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm font-semibold text-amber-600 whitespace-nowrap">{symbol.commission}</td>
                    <td className="py-3 md:py-4 px-2"><span className="bg-cyan-500 text-white text-xs font-medium px-2 md:px-3 py-1 rounded-full whitespace-nowrap">{symbol.currency}</span></td>
                    <td className="py-3 md:py-4 px-2"><span className="bg-green-500 text-white text-xs font-medium px-2 md:px-3 py-1 rounded-full whitespace-nowrap">{symbol.status}</span></td>
                    <td className="py-3 md:py-4 px-2">
                      <div className="flex gap-1">
                        <button className="bg-blue-50 text-blue-600 p-1.5 md:p-2 rounded-lg hover:bg-blue-100 transition-colors text-sm">✏️</button>
                        <button className="bg-red-50 text-red-600 p-1.5 md:p-2 rounded-lg hover:bg-red-100 transition-colors text-sm">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4">
            <p className="text-xs md:text-sm text-gray-600">Showing 1 to 5 of 1,303</p>
            <div className="flex gap-1">
              <button className="px-2 md:px-3 py-1 border border-gray-300 rounded-lg text-xs md:text-sm hover:bg-gray-50">Prev</button>
              <button className="px-2 md:px-3 py-1 bg-blue-500 text-white rounded-lg text-xs md:text-sm">1</button>
              <button className="px-2 md:px-3 py-1 border border-gray-300 rounded-lg text-xs md:text-sm hover:bg-gray-50">2</button>
              <button className="px-2 md:px-3 py-1 border border-gray-300 rounded-lg text-xs md:text-sm hover:bg-gray-50">3</button>
              <button className="px-2 md:px-3 py-1 border border-gray-300 rounded-lg text-xs md:text-sm hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Summary */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-purple-50 to-pink-50">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Symbols by Category</h2>
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">46</h3>
              <p className="text-xs md:text-sm text-blue-700 font-medium">Stocks</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">141</h3>
              <p className="text-xs md:text-sm text-purple-700 font-medium">Crypto</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-1">730</h3>
              <p className="text-xs md:text-sm text-green-700 font-medium">Forex</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200 p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">209</h3>
              <p className="text-xs md:text-sm text-orange-700 font-medium">Indices</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border-2 border-amber-200 p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">175</h3>
              <p className="text-xs md:text-sm text-amber-700 font-medium">Commodities</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 p-3 md:p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-600 mb-1">2</h3>
              <p className="text-xs md:text-sm text-gray-700 font-medium">Other</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
            <div className="px-4 md:px-6 py-3 md:py-4 border-b flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">Add Symbol</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Symbol</label>
                  <input type="text" placeholder="e.g. EURUSD" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Forex</option>
                    <option>Stocks</option>
                    <option>Cryptocurrencies</option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Pip/Lot</label>
                  <input type="number" placeholder="10.00" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Symbol Rate</label>
                  <input type="number" placeholder="10.00" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
            </div>
            <div className="px-4 md:px-6 py-3 md:py-4 border-t flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-50">Close</button>
              <button className="px-3 md:px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-xs md:text-sm font-semibold hover:from-blue-600 hover:to-blue-700">💾 Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymbolsPipValues;
