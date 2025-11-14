import React from 'react';

const MyIBClients = () => {
  const level1Clients = [
    {
      id: 351,
      name: 'FINCRM SUB IB TWO',
      email: 'FINCRMsubib2@gmail.com',
      joinDate: '2025-11-07',
      accounts: 0,
      balance: 0.00,
      volume: 0.00,
      pipRates: [
        { plan: 'PLUS', rate: 1.00 },
        { plan: 'PRO', rate: 0.80 },
        { plan: 'STANDARD', rate: 0.50 }
      ],
      commission: 0.00,
      type: 'IB'
    },
    {
      id: 347,
      name: 'ksm init',
      email: 'ksmin@gmail.com',
      joinDate: '2025-11-06',
      accounts: 0,
      balance: 0.00,
      volume: 0.00,
      pipRates: [
        { plan: 'PLUS', rate: 1.40 }
      ],
      commission: 0.00,
      type: 'IB'
    },
    {
      id: 339,
      name: 'FINCRM MARKET SUB IB',
      email: 'fincrmmarketsubib@gmail.com',
      joinDate: '2025-11-06',
      accounts: 0,
      balance: 0.00,
      volume: 0.00,
      pipRates: [
        { plan: 'PLUS', rate: 1.50 },
        { plan: 'PRO', rate: 0.80 },
        { plan: 'STANDARD', rate: 1.20 }
      ],
      commission: 0.00,
      type: 'IB'
    }
  ];

  const level2Clients = [
    {
      id: 352,
      name: 'FINCRM Trading tw',
      email: 'trading123@gmail.com',
      joinDate: '2025-11-07',
      accounts: 1,
      balance: 967.77,
      volume: 0.20,
      pipRates: [
        { plan: 'STANDARD', rate: 1.00 }
      ],
      commission: 1.10,
      commissionBreakdown: { Standard: 1.10 },
      type: 'Client'
    },
    {
      id: 340,
      name: 'FINCRM MARKET TRADING',
      email: 'tradings@gmail.com',
      joinDate: '2025-11-06',
      accounts: 3,
      balance: 999.43,
      volume: 0.20,
      pipRates: [
        { plan: 'PLUS', rate: 0.50 }
      ],
      commission: 1.00,
      commissionBreakdown: { Plus: 1.00 },
      type: 'Client'
    }
  ];

  const level1Stats = {
    clients: level1Clients.length,
    volume: level1Clients.reduce((sum, client) => sum + client.volume, 0),
    commission: level1Clients.reduce((sum, client) => sum + client.commission, 0)
  };

  const level2Stats = {
    clients: level2Clients.length,
    volume: level2Clients.reduce((sum, client) => sum + client.volume, 0),
    commission: level2Clients.reduce((sum, client) => sum + client.commission, 0)
  };

  const totalStats = {
    clients: level1Stats.clients + level2Stats.clients,
    volume: level1Stats.volume + level2Stats.volume,
    commission: level1Stats.commission + level2Stats.commission,
    activeTraders: level2Clients.filter(client => client.accounts > 0).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto space-y-6">

        {/* Page Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            My IB Clients
          </h1>
        </div>

        {/* Client Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-12 h-12 text-cyan-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{totalStats.clients}</h3>
              <p className="text-gray-600 text-sm">Total Clients</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-green-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{totalStats.volume.toFixed(2)}</h3>
              <p className="text-gray-600 text-sm">Total Volume (Lots)</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-12 h-12 text-yellow-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">${totalStats.commission.toFixed(2)}</h3>
              <p className="text-gray-600 text-sm">Total Commission</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{totalStats.activeTraders}</h3>
              <p className="text-gray-600 text-sm">Active Traders</p>
            </div>
          </div>
        </div>

        {/* Clients Tables */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-100 p-6">

          {/* Level 1 Clients */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-0">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Level 1</span>
                <span className="text-gray-600 text-sm">
                  {level1Stats.clients} client(s) • Volume: {level1Stats.volume.toFixed(2)} lots • Commission: ${level1Stats.commission.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Client Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Join Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Accounts</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Balance</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Volume (Lots)</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Pip Rate</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Commission</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {level1Clients.map((client) => (
                    <tr key={client.id} className="border-b border-gray-100 hover:bg-cyan-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-500">(ID: {client.id})</div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{client.email}</td>
                      <td className="py-3 px-4 text-gray-700">{client.joinDate}</td>
                      <td className="py-3 px-4 text-gray-700">{client.accounts}</td>
                      <td className="py-3 px-4 text-gray-700">${client.balance.toFixed(2)}</td>
                      <td className="py-3 px-4 text-gray-700">{client.volume.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {client.pipRates.map((rate, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                              {rate.plan}: {rate.rate.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-green-600">${client.commission.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                          {client.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Level 2 Clients */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-0">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">Level 2</span>
                <span className="text-gray-600 text-sm">
                  {level2Stats.clients} client(s) • Volume: {level2Stats.volume.toFixed(2)} lots • Commission: ${level2Stats.commission.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Client Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Join Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Accounts</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Balance</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Volume (Lots)</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Pip Rate</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Commission</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {level2Clients.map((client) => (
                    <tr key={client.id} className="border-b border-gray-100 hover:bg-cyan-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-900">{client.name}</div>
                        <div className="text-sm text-gray-500">(ID: {client.id})</div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{client.email}</td>
                      <td className="py-3 px-4 text-gray-700">{client.joinDate}</td>
                      <td className="py-3 px-4 text-gray-700">{client.accounts}</td>
                      <td className="py-3 px-4 text-gray-700">${client.balance.toFixed(2)}</td>
                      <td className="py-3 px-4 text-gray-700">{client.volume.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {client.pipRates.map((rate, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                              {rate.plan}: {rate.rate.toFixed(2)}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {client.commissionBreakdown ? (
                          <div className="space-y-1">
                            {Object.entries(client.commissionBreakdown).map(([plan, amount]) => (
                              <div key={plan} className="text-sm">
                                <span className="font-medium text-green-600">{plan}:</span> ${amount.toFixed(2)}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="font-semibold text-green-600">${client.commission.toFixed(2)}</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {client.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIBClients;