import React, { useState } from 'react';

const AllDeposits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample all deposits data - in real app this would come from API
  const deposits = [
    {
      id: 1,
      srNo: 1,
      user: 'AMIT UMBARKAR',
      mt5Id: '369067',
      method: 'Upi',
      amount: '$53.19',
      txnId: '9594980845@ybl',
      status: 'approved',
      proof: '../uploads/proof/1762886709_IMG_3525.png',
      date: '11 Nov 2025, 06:45 PM'
    },
    {
      id: 2,
      srNo: 2,
      user: 'Naveed Naveed',
      mt5Id: '369010',
      method: 'Crypto',
      amount: '$401.00',
      txnId: '6f353b346c52c6beafb1bcdb881375ccecafd2ba17d7bcf7bcfe40b2ee446490',
      status: 'rejected',
      proof: '../uploads/proof/1762878083_WhatsApp Image 2025-11-11 at 8.13.08 PM (1).jpeg',
      date: '11 Nov 2025, 04:21 PM'
    },
    {
      id: 3,
      srNo: 3,
      user: 'Naveed Naveed',
      mt5Id: '369010',
      method: 'Crypto',
      amount: '$401.00',
      txnId: '6f353b346c52c6beafb1bcdb881375ccecafd2ba17d7bcf7bcfe40b2ee446490',
      status: 'approved',
      proof: '../uploads/proof/1762874130_WhatsApp Image 2025-11-11 at 8.13.08 PM.jpeg',
      date: '11 Nov 2025, 03:15 PM'
    },
    {
      id: 4,
      srNo: 4,
      user: 'Naveed Naveed',
      mt5Id: '369010',
      method: 'Crypto',
      amount: '$100.00',
      txnId: '8d2c01bc284f391469ede5c5ba951138770f6eb736560ffa1dff2f4443677c95',
      status: 'approved',
      proof: '../uploads/proof/1762872068_WhatsApp Image 2025-11-11 at 7.28.09 PM.jpeg',
      date: '11 Nov 2025, 02:41 PM'
    },
    {
      id: 5,
      srNo: 5,
      user: 'Prasad Nanekar',
      mt5Id: '7100020542',
      method: 'Admin_mt5',
      amount: '$100.00',
      txnId: '073072850661',
      status: 'approved',
      proof: '../uploads/proof/admin_1762864071_9.3k.jpeg',
      date: '11 Nov 2025, 12:27 PM'
    },
    {
      id: 6,
      srNo: 6,
      user: 'Rajesh Pawar',
      mt5Id: '369075',
      method: 'Admin_mt5',
      amount: '$45.00',
      txnId: '-',
      status: 'approved',
      proof: '../uploads/proof/',
      date: '11 Nov 2025, 07:15 AM'
    },
    {
      id: 7,
      srNo: 7,
      user: 'Vinod Kumar',
      mt5Id: '369070',
      method: 'Admin_mt5',
      amount: '$393.57',
      txnId: 'ADMIN_1762779474',
      status: 'approved',
      proof: '../uploads/proof/',
      date: '10 Nov 2025, 12:57 PM'
    },
    {
      id: 8,
      srNo: 8,
      user: 'AMIT UMBARKAR',
      mt5Id: '369067',
      method: 'Upi',
      amount: '$53.19',
      txnId: '825711636746',
      status: 'approved',
      proof: '../uploads/proof/1762769569_IMG_3505.png',
      date: '10 Nov 2025, 10:12 AM'
    },
    {
      id: 9,
      srNo: 9,
      user: 'Raj Pisal',
      mt5Id: '369042',
      method: 'Upi',
      amount: '$10.64',
      txnId: '788834984999',
      status: 'approved',
      proof: '../uploads/proof/1762760418_1000805454.jpg',
      date: '10 Nov 2025, 07:40 AM'
    },
    {
      id: 10,
      srNo: 10,
      user: 'sanjay Jadhav',
      mt5Id: '369060',
      method: 'Upi',
      amount: '$159.57',
      txnId: '568089467191',
      status: 'approved',
      proof: '../uploads/proof/1762756507_1000824407.jpg',
      date: '10 Nov 2025, 06:35 AM'
    },
    {
      id: 11,
      srNo: 11,
      user: 'sanjay Jadhav',
      mt5Id: '369052',
      method: 'Upi',
      amount: '$372.34',
      txnId: '568010275281',
      status: 'approved',
      proof: '../uploads/proof/1762756291_1000824391.jpg',
      date: '10 Nov 2025, 06:31 AM'
    },
    {
      id: 12,
      srNo: 12,
      user: 'Karuna Dhisal',
      mt5Id: '7100017004',
      method: 'Upi',
      amount: '$21.28',
      txnId: '568070125150',
      status: 'approved',
      proof: '../uploads/proof/1762756256_2k karuna 1.jpeg',
      date: '10 Nov 2025, 06:30 AM'
    },
    {
      id: 13,
      srNo: 13,
      user: 'Karuna Dhisal',
      mt5Id: '7100017004',
      method: 'Upi',
      amount: '$21.28',
      txnId: '568058326225',
      status: 'approved',
      proof: '../uploads/proof/1762755857_2k karuna.jpeg',
      date: '10 Nov 2025, 06:24 AM'
    },
    {
      id: 14,
      srNo: 14,
      user: 'Bhura Ram',
      mt5Id: '369066',
      method: 'Upi',
      amount: '$957.45',
      txnId: '668829389365',
      status: 'rejected',
      proof: '../uploads/proof/1762750765_1000099386.jpg',
      date: '10 Nov 2025, 04:59 AM'
    },
    {
      id: 15,
      srNo: 15,
      user: 'Rajendra Dudhe',
      mt5Id: '369008',
      method: 'Admin_mt5',
      amount: '$11,111.11',
      txnId: 'ADMIN_1762720825',
      status: 'approved',
      proof: '../uploads/proof/admin_1762720823_fbc1fcda-e2cc-4bec-a462-23ff04cddaf8.jpeg',
      date: '09 Nov 2025, 08:40 PM'
    },
    {
      id: 16,
      srNo: 16,
      user: 'sanjay Jadhav',
      mt5Id: '369060',
      method: 'Upi',
      amount: '$425.53',
      txnId: '531320195920',
      status: 'approved',
      proof: '../uploads/proof/1762686229_1000823205.jpg',
      date: '09 Nov 2025, 11:03 AM'
    },
    {
      id: 17,
      srNo: 17,
      user: 'sanjay Jadhav',
      mt5Id: '369060',
      method: 'Upi',
      amount: '$425.53',
      txnId: '531320195920',
      status: 'rejected',
      proof: '../uploads/proof/1762686201_1000823205.jpg',
      date: '09 Nov 2025, 11:03 AM'
    },
    {
      id: 18,
      srNo: 18,
      user: 'sanjay Jadhav',
      mt5Id: '369056',
      method: 'Upi',
      amount: '$319.15',
      txnId: '567764049712',
      status: 'approved',
      proof: '../uploads/proof/1762535820_Screenshot_20251107_224610.jpg',
      date: '07 Nov 2025, 05:17 PM'
    },
    {
      id: 19,
      srNo: 19,
      user: 'Ganesh Sutar',
      mt5Id: '369053',
      method: 'Upi',
      amount: '$100.00',
      txnId: '567755111105',
      status: 'approved',
      proof: '../uploads/proof/1762524447_1000820810.jpg',
      date: '07 Nov 2025, 02:07 PM'
    },
    {
      id: 20,
      srNo: 20,
      user: 'Ganesh Sutar',
      mt5Id: '369053',
      method: 'Upi',
      amount: '$1,000.00',
      txnId: '567755111105',
      status: 'rejected',
      proof: '../uploads/proof/1762523071_1000820810.jpg',
      date: '07 Nov 2025, 01:44 PM'
    }
  ];

  const filteredDeposits = deposits.filter(deposit =>
    deposit.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.mt5Id.includes(searchTerm) ||
    deposit.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.txnId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDeposits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDeposits = filteredDeposits.slice(startIndex, endIndex);

  const getStatusBadge = (status) => {
    return status === 'approved'
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-red-100 text-red-800 border-red-200';
  };

  const getStatusIcon = (status) => {
    return status === 'approved' ? (
      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
      </svg>
    ) : (
      <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    );
  };

  const CompactDepositCard = ({ deposit }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {getStatusIcon(deposit.status)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{deposit.user}</h3>
            <p className="text-xs text-gray-600">MT5: {deposit.mt5Id}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-indigo-600">{deposit.amount}</div>
          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusBadge(deposit.status)}`}>
            {deposit.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <span className="text-gray-500">Method:</span>
          <p className="font-medium text-gray-900">{deposit.method}</p>
        </div>
        <div>
          <span className="text-gray-500">Date:</span>
          <p className="font-medium text-gray-900">{deposit.date}</p>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex-1 mr-3">
            <span className="text-xs text-gray-500">TXN ID:</span>
            <p className="text-xs font-mono text-gray-900 break-all">{deposit.txnId}</p>
          </div>
          <a
            href={deposit.proof}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded transition-colors"
          >
            View Proof
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-2 sm:p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">All Deposits</h1>
          </div>
          <p className="text-center text-gray-600">Complete overview of all deposit transactions</p>
        </div>

        {/* Search */}
        <div className="mb-4 sm:mb-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, MT5 ID, method, status, txn ID..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white transition-colors"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Compact Card View */}
        <div className="block md:hidden">
          {currentDeposits.length > 0 ? (
            <div className="space-y-4">
              {currentDeposits.map((deposit) => (
                <CompactDepositCard key={deposit.id} deposit={deposit} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No deposits found</h3>
              <p className="text-gray-600">No deposits match your search criteria.</p>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Sr No</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">TXN ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Proof</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Date</th>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600">
                        {deposit.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono break-all max-w-xs">
                        {deposit.txnId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(deposit.status)}
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusBadge(deposit.status)}`}>
                            {deposit.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href={deposit.proof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded transition-colors"
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
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No deposits found</h3>
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
                            ? 'text-white bg-indigo-600 border-indigo-600'
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
                            ? 'text-white bg-indigo-600 border-indigo-600'
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

export default AllDeposits;