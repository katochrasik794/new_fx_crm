import React, { useState } from 'react';

const ApprovedDeposits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample approved deposits data - in real app this would come from API
  const deposits = [
    {
      id: 1,
      srNo: 1,
      user: 'Naveed Naveed',
      mt5Id: '369010',
      method: 'Crypto',
      amount: '$401.00',
      txnId: '6f353b346c52c6beafb1bcdb881375ccecafd2ba17d7bcf7bcfe40b2ee446490',
      proof: '../uploads/proof/1762874130_WhatsApp Image 2025-11-11 at 8.13.08 PM.jpeg',
      liveBalance: '$504.50',
      date: '11 Nov 2025, 03:15 PM'
    },
    {
      id: 2,
      srNo: 2,
      user: 'Naveed Naveed',
      mt5Id: '369010',
      method: 'Crypto',
      amount: '$100.00',
      txnId: '8d2c01bc284f391469ede5c5ba951138770f6eb736560ffa1dff2f4443677c95',
      proof: '../uploads/proof/1762872068_WhatsApp Image 2025-11-11 at 7.28.09 PM.jpeg',
      liveBalance: '$504.50',
      date: '11 Nov 2025, 02:41 PM'
    },
    {
      id: 3,
      srNo: 3,
      user: 'Prasad Nanekar',
      mt5Id: '7100020542',
      method: 'Admin_mt5',
      amount: '$100.00',
      txnId: '073072850661',
      proof: '../uploads/proof/admin_1762864071_9.3k.jpeg',
      liveBalance: '$6.32',
      date: '11 Nov 2025, 12:27 PM'
    },
    {
      id: 4,
      srNo: 4,
      user: 'Rajesh Pawar',
      mt5Id: '369075',
      method: 'Admin_mt5',
      amount: '$45.00',
      txnId: '-',
      proof: '../uploads/proof/',
      liveBalance: '$40.20',
      date: '11 Nov 2025, 07:15 AM'
    },
    {
      id: 5,
      srNo: 5,
      user: 'Vinod Kumar',
      mt5Id: '369070',
      method: 'Admin_mt5',
      amount: '$393.57',
      txnId: 'ADMIN_1762779474',
      proof: '../uploads/proof/',
      liveBalance: '$325.63',
      date: '10 Nov 2025, 12:57 PM'
    },
    {
      id: 6,
      srNo: 6,
      user: 'AMIT UMBARKAR',
      mt5Id: '369067',
      method: 'Upi',
      amount: '$53.19',
      txnId: '825711636746',
      proof: '../uploads/proof/1762769569_IMG_3505.png',
      liveBalance: '$93.92',
      date: '10 Nov 2025, 10:12 AM'
    },
    {
      id: 7,
      srNo: 7,
      user: 'Raj Pisal',
      mt5Id: '369042',
      method: 'Upi',
      amount: '$10.64',
      txnId: '788834984999',
      proof: '../uploads/proof/1762760418_1000805454.jpg',
      liveBalance: '$14.86',
      date: '10 Nov 2025, 07:40 AM'
    },
    {
      id: 8,
      srNo: 8,
      user: 'sanjay Jadhav',
      mt5Id: '369060',
      method: 'Upi',
      amount: '$159.57',
      txnId: '568089467191',
      proof: '../uploads/proof/1762756507_1000824407.jpg',
      liveBalance: '$190.67',
      date: '10 Nov 2025, 06:35 AM'
    },
    {
      id: 9,
      srNo: 9,
      user: 'sanjay Jadhav',
      mt5Id: '369052',
      method: 'Upi',
      amount: '$372.34',
      txnId: '568010275281',
      proof: '../uploads/proof/1762756291_1000824391.jpg',
      liveBalance: '$1.23',
      date: '10 Nov 2025, 06:31 AM'
    },
    {
      id: 10,
      srNo: 10,
      user: 'Karuna Dhisal',
      mt5Id: '7100017004',
      method: 'Upi',
      amount: '$21.28',
      txnId: '568070125150',
      proof: '../uploads/proof/1762756256_2k karuna 1.jpeg',
      liveBalance: '$8.17',
      date: '10 Nov 2025, 06:30 AM'
    },
    {
      id: 11,
      srNo: 11,
      user: 'Karuna Dhisal',
      mt5Id: '7100017004',
      method: 'Upi',
      amount: '$21.28',
      txnId: '568058326225',
      proof: '../uploads/proof/1762755857_2k karuna.jpeg',
      liveBalance: '$8.17',
      date: '10 Nov 2025, 06:24 AM'
    },
    {
      id: 12,
      srNo: 12,
      user: 'Rajendra Dudhe',
      mt5Id: '369008',
      method: 'Admin_mt5',
      amount: '$11,111.11',
      txnId: 'ADMIN_1762720825',
      proof: '../uploads/proof/admin_1762720823_fbc1fcda-e2cc-4bec-a462-23ff04cddaf8.jpeg',
      liveBalance: '$12,068.70',
      date: '09 Nov 2025, 08:40 PM'
    },
    {
      id: 13,
      srNo: 13,
      user: 'sanjay Jadhav',
      mt5Id: '369060',
      method: 'Upi',
      amount: '$425.53',
      txnId: '531320195920',
      proof: '../uploads/proof/1762686229_1000823205.jpg',
      liveBalance: '$190.67',
      date: '09 Nov 2025, 11:03 AM'
    },
    {
      id: 14,
      srNo: 14,
      user: 'sanjay Jadhav',
      mt5Id: '369056',
      method: 'Upi',
      amount: '$319.15',
      txnId: '567764049712',
      proof: '../uploads/proof/1762535820_Screenshot_20251107_224610.jpg',
      liveBalance: '$0.63',
      date: '07 Nov 2025, 05:17 PM'
    },
    {
      id: 15,
      srNo: 15,
      user: 'Ganesh Sutar',
      mt5Id: '369053',
      method: 'Upi',
      amount: '$100.00',
      txnId: '567755111105',
      proof: '../uploads/proof/1762524447_1000820810.jpg',
      liveBalance: '$2.59',
      date: '07 Nov 2025, 02:07 PM'
    },
    {
      id: 16,
      srNo: 16,
      user: 'Pramod Kirdat',
      mt5Id: '369035',
      method: 'Upi',
      amount: '$1,063.83',
      txnId: '009460611540',
      proof: '../uploads/proof/1762522616_1001499949.jpg',
      liveBalance: '$156.62',
      date: '07 Nov 2025, 01:36 PM'
    },
    {
      id: 17,
      srNo: 17,
      user: 'sanjay Jadhav',
      mt5Id: '369052',
      method: 'Upi',
      amount: '$531.91',
      txnId: '567799509713',
      proof: '../uploads/proof/1762522060_1000820777.jpg',
      liveBalance: '$1.23',
      date: '07 Nov 2025, 01:27 PM'
    },
    {
      id: 18,
      srNo: 18,
      user: 'FINCRM Trading tw',
      mt5Id: '369012',
      method: 'Admin_mt5',
      amount: '$1,000.00',
      txnId: '-',
      proof: '../uploads/proof/',
      liveBalance: '$967.77',
      date: '07 Nov 2025, 01:44 AM'
    },
    {
      id: 19,
      srNo: 19,
      user: 'Raj Pisal',
      mt5Id: '369042',
      method: 'Upi',
      amount: '$11.82',
      txnId: '189866949094',
      proof: '../uploads/proof/1762418876_1000801179.jpg',
      liveBalance: '$14.86',
      date: '06 Nov 2025, 08:47 AM'
    },
    {
      id: 20,
      srNo: 20,
      user: 'FINCRM MARKET TRADING',
      mt5Id: '7100016975',
      method: 'Admin_mt5',
      amount: '$1,000.00',
      txnId: '-',
      proof: '../uploads/proof/',
      liveBalance: '$999.43',
      date: '06 Nov 2025, 05:28 AM'
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

  const DepositGridCard = ({ deposit }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-sm">{deposit.user}</h3>
          <p className="text-xs text-gray-600">MT5: {deposit.mt5Id}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-emerald-600">{deposit.amount}</div>
          <div className="text-xs text-gray-500">{deposit.method}</div>
        </div>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">Live Balance:</span>
          <span className="font-medium text-emerald-600">{deposit.liveBalance}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-500">TXN ID:</span>
          <span className="font-mono text-xs break-all max-w-32">{deposit.txnId}</span>
        </div>
        <div className="text-xs text-gray-500">{deposit.date}</div>
      </div>

      <div className="flex justify-end">
        <a
          href={deposit.proof}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium rounded transition-colors"
        >
          View Proof
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Approved Deposits</h1>
          </div>
          <p className="text-center text-gray-600">View all successfully approved deposit transactions</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by user, MT5 ID, method, txn ID..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white transition-colors"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className="block md:hidden">
          {currentDeposits.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {currentDeposits.map((deposit) => (
                <DepositGridCard key={deposit.id} deposit={deposit} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No approved deposits found</h3>
              <p className="text-gray-600">No deposits match your search criteria.</p>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Sr No</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">TXN ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Proof</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Live Balance</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Date</th>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">
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
                          className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium rounded transition-colors"
                        >
                          View
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-600">
                        {deposit.liveBalance}
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
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No approved deposits found</h3>
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
                            ? 'text-white bg-emerald-600 border-emerald-600'
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
                            ? 'text-white bg-emerald-600 border-emerald-600'
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

export default ApprovedDeposits;