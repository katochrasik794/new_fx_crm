import React, { useState } from 'react';

const RejectedDeposits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample rejected deposits data - in real app this would come from API
  const deposits = [
    {
      id: 1,
      srNo: 1,
      user: 'Naveed Naveed',
      mt5Id: '369010',
      method: 'Crypto',
      amount: '$401.00',
      txnId: '6f353b346c52c6beafb1bcdb881375ccecafd2ba17d7bcf7bcfe40b2ee446490',
      proof: '../uploads/proof/1762878083_WhatsApp Image 2025-11-11 at 8.13.08 PM (1).jpeg',
      date: '11 Nov 2025, 04:21 PM'
    },
    {
      id: 2,
      srNo: 2,
      user: 'Bhura Ram',
      mt5Id: '369066',
      method: 'Upi',
      amount: '$957.45',
      txnId: '668829389365',
      proof: '../uploads/proof/1762750765_1000099386.jpg',
      date: '10 Nov 2025, 04:59 AM'
    },
    {
      id: 3,
      srNo: 3,
      user: 'sanjay Jadhav',
      mt5Id: '369060',
      method: 'Upi',
      amount: '$425.53',
      txnId: '531320195920',
      proof: '../uploads/proof/1762686201_1000823205.jpg',
      date: '09 Nov 2025, 11:03 AM'
    },
    {
      id: 4,
      srNo: 4,
      user: 'Ganesh Sutar',
      mt5Id: '369053',
      method: 'Upi',
      amount: '$1,000.00',
      txnId: '567755111105',
      proof: '../uploads/proof/1762523071_1000820810.jpg',
      date: '07 Nov 2025, 01:44 PM'
    },
    {
      id: 5,
      srNo: 5,
      user: 'Deepak Patil',
      mt5Id: '369016',
      method: 'Upi',
      amount: '$159.57',
      txnId: '113442599065',
      proof: '../uploads/proof/1761912684_1000035296.jpg',
      date: '31 Oct 2025, 12:11 PM'
    },
    {
      id: 6,
      srNo: 6,
      user: 'r k',
      mt5Id: '7100016967',
      method: 'Crypto',
      amount: '$200.00',
      txnId: 'hhuihuhuhuiuh',
      proof: '../uploads/proof/1761253435_logo (1).png',
      date: '23 Oct 2025, 09:03 PM'
    }
  ];

  const filteredDeposits = deposits.filter(deposit =>
    deposit.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.mt5Id.includes(searchTerm) ||
    deposit.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.txnId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDeposits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDeposits = filteredDeposits.slice(startIndex, endIndex);

  const DepositListItem = ({ deposit }) => (
    <div className="bg-white rounded-lg shadow-md border-l-4 border-l-red-500 p-4 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
        <div className="flex-1 mb-2 sm:mb-0">
          <h3 className="font-semibold text-gray-900 text-sm">{deposit.user}</h3>
          <p className="text-xs text-gray-600">MT5: {deposit.mt5Id} • {deposit.method}</p>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-lg font-bold text-red-600">{deposit.amount}</div>
          <div className="text-xs text-gray-500">{deposit.date}</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
        <div className="flex-1">
          <span className="text-xs font-medium text-gray-500 uppercase">TXN ID:</span>
          <p className="text-xs text-gray-900 font-mono break-all mt-1">{deposit.txnId}</p>
        </div>
        <div className="flex-shrink-0">
          <a
            href={deposit.proof}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium rounded transition-colors"
          >
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
            </svg>
            View Proof
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Rejected Deposits</h1>
          </div>
          <p className="text-center text-gray-600">View all rejected deposit transactions</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, MT5 ID, method, txn ID..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white transition-colors"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile List View */}
        <div className="block md:hidden">
          {currentDeposits.length > 0 ? (
            currentDeposits.map((deposit) => (
              <DepositListItem key={deposit.id} deposit={deposit} />
            ))
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No rejected deposits found</h3>
              <p className="text-gray-600">No deposits match your search criteria.</p>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-red-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Sr No</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">TXN ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Proof</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentDeposits.map((deposit) => (
                    <tr key={deposit.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {deposit.srNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {deposit.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deposit.mt5Id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deposit.method}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">
                        {deposit.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono break-all max-w-xs">
                        {deposit.txnId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href={deposit.proof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium rounded transition-colors"
                        >
                          View
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deposit.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {currentDeposits.length === 0 && (
              <div className="p-12 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No rejected deposits found</h3>
                <p className="text-gray-600">No deposits match your search criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {filteredDeposits.length > 0 && (
          <div className="mt-6 flex justify-center">
            <nav>
              <ul className="flex items-center space-x-1">
                <li>
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                </li>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + 1;
                  return (
                    <li key={page}>
                      <button
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 text-sm font-medium border ${
                          page === currentPage
                            ? 'text-white bg-red-600 border-red-600'
                            : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  );
                })}
                {totalPages > 5 && (
                  <>
                    <li>
                      <span className="px-2 py-2 text-sm text-gray-500">...</span>
                    </li>
                    <li>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`px-3 py-2 text-sm font-medium border ${
                          totalPages === currentPage
                            ? 'text-white bg-red-600 border-red-600'
                            : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {totalPages}
                      </button>
                    </li>
                  </>
                )}
                <li>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default RejectedDeposits;