import React from 'react';

const IbRequests = () => {
  const pendingRequests = [
    {
      id: 165,
      name: 'Abdul Rehman',
      email: 'mani3130882929@gmail.com',
      userId: 310,
      referredBy: { name: 'nazeer sultan', email: 'asiacablg@gmail.com' },
      appliedDate: '2025-11-04 15:13',
      requestedRates: 'Default rates',
      referrals: 0,
      ownCommission: '$0.00',
      referralCommission: '$0.00',
      totalCommission: '$0.00',
      type: 'normal'
    }
  ];

  const approvedIBs = [
    { id: 388, name: 'Ravindra Pophale', email: 'ravindrapophale13@gmail.com', approvedDate: '2025-11-12 19:25', pipRate: '1.20 pip', type: 'normal', status: 'Approved' },
    { id: 387, name: 'Ehsan Ali', email: 'ehsanali005@gmail.com', approvedDate: '2025-11-12 13:20', pipRate: '1.70 pip', type: 'normal', status: 'Approved' },
    { id: 385, name: 'Ram Jawari', email: 'ram13august@gmail.com', approvedDate: '2025-11-11 20:28', pipRate: '0.70 pip', type: 'normal', status: 'Approved' },
    { id: 384, name: 'Om Ramagar', email: 'Omom37401@gmail.com', approvedDate: '2025-11-11 19:11', pipRate: '1.30 pip', type: 'normal', status: 'Approved' },
    { id: 383, name: 'jagdish sonar', email: 'jagdishsonar020@gmail.com', approvedDate: '2025-11-11 15:29', pipRate: '1.20 pip', type: 'normal', status: 'Approved' },
  ];

  return (
    <div className="w-[350px] sm:w-full max-w-[2800px] p-4 md:p-6 bg-violet-100 min-h-screen overflow-x-hidden">
      {/* Title */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">👤 IB Requests</h1>
        <p className="text-gray-600 text-sm md:text-lg">Review and approve IB applications</p>
      </div>

      {/* Request Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-amber-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">⏰</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">1</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Pending Requests</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-green-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">✅</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">0</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Approved Today</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 border-2 border-red-200 hover:scale-105">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-3">❌</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">0</h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Rejected Today</p>
          </div>
        </div>
      </div>

      {/* Pending Requests */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6 md:mb-8">
        <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">Pending IB Requests</h2>
            <div className="flex gap-2">
              <input type="text" placeholder="Search requests..." className="flex-1 md:w-48 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300">
                🔍
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 md:p-6">
          <div className="overflow-x-auto -mx-3 md:mx-0">
            <table className="w-full min-w-max">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Applicant</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Email</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Referred By</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Applied Date</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Requested Rates</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Referrals</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Commission</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Type</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((request) => (
                  <tr key={request.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 md:py-4 px-2">
                      <div className="font-semibold text-xs md:text-sm text-gray-800">{request.name}</div>
                      <div className="text-xs text-gray-500">User ID: {request.userId}</div>
                    </td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm text-gray-600 whitespace-nowrap">{request.email}</td>
                    <td className="py-3 md:py-4 px-2">
                      <div className="font-semibold text-xs md:text-sm text-gray-800">{request.referredBy.name}</div>
                      <div className="text-xs text-gray-500">{request.referredBy.email}</div>
                    </td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm text-gray-600 whitespace-nowrap">{request.appliedDate}</td>
                    <td className="py-3 md:py-4 px-2">
                      <span className="text-gray-500 text-xs md:text-sm">{request.requestedRates}</span>
                    </td>
                    <td className="py-3 md:py-4 px-2">
                      <span className="bg-gray-500 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">{request.referrals} referrals</span>
                    </td>
                    <td className="py-3 md:py-4 px-2">
                      <div className="flex flex-col gap-1">
                        <div className="text-xs">
                          <span className="text-gray-500">Own: </span>
                          <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full font-medium">{request.ownCommission}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-gray-500">Ref: </span>
                          <span className="bg-cyan-500 text-white px-2 py-0.5 rounded-full font-medium">{request.referralCommission}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-gray-500">Total: </span>
                          <span className="bg-green-500 text-white px-2 py-0.5 rounded-full font-medium">{request.totalCommission}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 md:py-4 px-2">
                      <span className="bg-cyan-500 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">{request.type}</span>
                    </td>
                    <td className="py-3 md:py-4 px-2">
                      <div className="flex gap-1">
                        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 md:px-3 py-1.5 rounded-lg text-xs font-semibold hover:from-green-600 hover:to-green-700 shadow-md transition-all duration-300 whitespace-nowrap">
                          ✅ Approve
                        </button>
                        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 md:px-3 py-1.5 rounded-lg text-xs font-semibold hover:from-red-600 hover:to-red-700 shadow-md transition-all duration-300 whitespace-nowrap">
                          ❌ Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Approved IBs */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="px-4 md:px-6 py-4 md:py-5 border-b bg-gradient-to-r from-green-50 to-emerald-50">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">Recently Approved IBs</h2>
        </div>
        <div className="p-3 md:p-6">
          <div className="overflow-x-auto -mx-3 md:mx-0">
            <table className="w-full min-w-max">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50">
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">IB Name</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Approved Date</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Pip/Lot Rate</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Type</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Status</th>
                  <th className="text-left py-2 md:py-3 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedIBs.map((ib) => (
                  <tr key={ib.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-3 md:py-4 px-2">
                      <div className="font-semibold text-xs md:text-sm text-gray-800">{ib.name}</div>
                      <div className="text-xs text-gray-500">{ib.email}</div>
                    </td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm text-gray-600 whitespace-nowrap">{ib.approvedDate}</td>
                    <td className="py-3 md:py-4 px-2 text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">{ib.pipRate}</td>
                    <td className="py-3 md:py-4 px-2">
                      <span className="bg-cyan-500 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">{ib.type}</span>
                    </td>
                    <td className="py-3 md:py-4 px-2">
                      <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">{ib.status}</span>
                    </td>
                    <td className="py-3 md:py-4 px-2">
                      <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 md:px-3 py-1.5 rounded-lg text-xs font-semibold hover:from-blue-600 hover:to-blue-700 shadow-md transition-all duration-300 whitespace-nowrap">
                        👤 Profiles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IbRequests;
