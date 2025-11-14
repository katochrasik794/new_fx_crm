import React, { useState } from 'react';

const ApprovedWithdrawals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 10;

  // Sample approved withdrawals data - in real app this would come from API
  const withdrawals = [
    {
      id: 23,
      srNo: 1,
      user: 'Pramod Kirdat',
      email: 'kirdatpramod4@gmail.com',
      mt5Id: '369035',
      amount: '$55.00',
      method: 'Bank',
      status: 'approved',
      date: '12-Nov-2025 02:58 AM',
      details: {
        accountName: 'Pramod Kirdat',
        accountNumber: '382203100000966',
        ifscCode: 'SRCB0000382',
        bankName: 'Saraswat bank'
      }
    },
    {
      id: 21,
      srNo: 2,
      user: 'PRAVIN KOLI',
      email: 'kolipl28@gmail.com',
      mt5Id: '369026',
      amount: '$100.00',
      method: 'Bank',
      status: 'approved',
      date: '11-Nov-2025 05:12 PM',
      details: {
        accountName: 'PRAVIN KOLI',
        accountNumber: '31663339426',
        ifscCode: 'SBIN0013262',
        bankName: 'state bank of india'
      }
    },
    {
      id: 20,
      srNo: 3,
      user: 'Vinod Kumar',
      email: 'vkvinodkumar760@gmail.com',
      mt5Id: '369070',
      amount: '$110.00',
      method: 'Crypto',
      status: 'approved',
      date: '11-Nov-2025 07:51 AM',
      details: {
        walletAddress: 'TLMfj2iwmn3LcddvaApDNxmwTtjLW3C4mU'
      }
    },
    {
      id: 19,
      srNo: 4,
      user: 'PRAVIN KOLI',
      email: 'kolipl28@gmail.com',
      mt5Id: '369026',
      amount: '$100.00',
      method: 'Bank',
      status: 'approved',
      date: '10-Nov-2025 02:13 PM',
      details: {
        accountName: 'PRAVIN KOLI',
        accountNumber: '31663339426',
        ifscCode: 'SBIN0013262',
        bankName: 'state bank of india'
      }
    },
    {
      id: 18,
      srNo: 5,
      user: 'Pramod Kirdat',
      email: 'kirdatpramod4@gmail.com',
      mt5Id: '369035',
      amount: '$400.00',
      method: 'Bank',
      status: 'approved',
      date: '10-Nov-2025 01:42 AM',
      details: {
        accountName: 'Pramod Kirdat',
        accountNumber: '382203100000966',
        ifscCode: 'SRCB0000382',
        bankName: 'Saraswat bank'
      }
    },
    {
      id: 17,
      srNo: 6,
      user: 'Pramod Kirdat',
      email: 'kirdatpramod4@gmail.com',
      mt5Id: '369035',
      amount: '$200.00',
      method: 'Bank',
      status: 'approved',
      date: '07-Nov-2025 05:01 PM',
      details: {
        accountName: 'Pramod Kirdat',
        accountNumber: '382203100000966',
        ifscCode: 'SRCB0000382',
        bankName: 'Saraswat bank'
      }
    },
    {
      id: 16,
      srNo: 7,
      user: '',
      email: '',
      mt5Id: '7100016976',
      amount: '$74.22',
      method: 'Crypto',
      status: 'approved',
      date: '27-Oct-2025 01:48 PM',
      details: {
        walletAddress: 'teyukjfjmgdghmchgfivngdtugfhjcvj'
      }
    },
    {
      id: 13,
      srNo: 8,
      user: 'Aliza Fatma',
      email: 'alizafatma5110@gmail.com',
      mt5Id: '7100016944',
      amount: '$800.00',
      method: 'Crypto',
      status: 'approved',
      date: '17-Oct-2025 02:09 PM',
      details: {
        walletAddress: 'TFJKBqr4ZDajDKgFWXW1YKPhfhri2AEZjE'
      }
    },
    {
      id: 12,
      srNo: 9,
      user: '',
      email: '',
      mt5Id: '7100016976',
      amount: '$91.00',
      method: 'Crypto',
      status: 'approved',
      date: '17-Oct-2025 09:20 AM',
      details: {
        walletAddress: 'teyukjfjmgdghmchgfivngdtugfhjcvj'
      }
    }
  ];

  const totalPages = Math.ceil(withdrawals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWithdrawals = withdrawals.slice(startIndex, endIndex);

  const handleViewDetails = (withdrawal) => {
    setSelectedWithdrawal(withdrawal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWithdrawal(null);
  };

  const TimelineItem = ({ withdrawal, isLast }) => (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-emerald-400 to-emerald-200"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-md"></div>

      {/* Content */}
      <div className="ml-16 pb-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
            <div className="flex-1 mb-2 sm:mb-0">
              <h3 className="font-semibold text-gray-900 text-sm">{withdrawal.user || 'N/A'}</h3>
              {withdrawal.email && (
                <p className="text-xs text-gray-600">{withdrawal.email}</p>
              )}
              <p className="text-xs text-gray-600">MT5: {withdrawal.mt5Id}</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-lg font-bold text-emerald-600">{withdrawal.amount}</div>
              <div className="text-xs text-gray-500">{withdrawal.date}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">Method:</span>
              <span className="text-sm font-medium text-gray-900">{withdrawal.method}</span>
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                {withdrawal.status}
              </span>
            </div>
            <button
              onClick={() => handleViewDetails(withdrawal)}
              className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium rounded transition-colors"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Approved Withdrawals</h1>
              <p className="text-lg text-gray-600 mt-1">List of all successfully approved withdrawals</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Approved</p>
                <p className="text-2xl font-bold text-gray-900">{withdrawals.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Bank Transfers</p>
                <p className="text-2xl font-bold text-gray-900">
                  {withdrawals.filter(w => w.method === 'Bank').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Crypto</p>
                <p className="text-2xl font-bold text-gray-900">
                  {withdrawals.filter(w => w.method === 'Crypto').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline View */}
        <div className="block md:hidden">
          <div className="space-y-0">
            {currentWithdrawals.map((withdrawal, index) => (
              <TimelineItem
                key={withdrawal.id}
                withdrawal={withdrawal}
                isLast={index === currentWithdrawals.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Approved Withdrawal Records
              </h2>
              <p className="text-emerald-100 mt-1">Complete history of successful withdrawal transactions</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">SR No</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentWithdrawals.map((withdrawal) => (
                    <tr key={withdrawal.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {withdrawal.srNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{withdrawal.user || 'N/A'}</div>
                          {withdrawal.email && (
                            <div className="text-gray-500 text-xs">{withdrawal.email}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {withdrawal.mt5Id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">
                        {withdrawal.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {withdrawal.method}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {withdrawal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {withdrawal.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleViewDetails(withdrawal)}
                          className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium rounded transition-colors"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex justify-center">
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
          </div>
        </div>

        {/* Details Modal */}
        {showModal && selectedWithdrawal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Withdrawal Method Details</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <table className="w-full text-sm">
                    <tbody>
                      {selectedWithdrawal.method === 'Bank' ? (
                        <>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Account Name</th>
                            <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.details.accountName}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Account Number</th>
                            <td className="py-2 px-2 text-gray-900 font-mono">{selectedWithdrawal.details.accountNumber}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">IFSC Code</th>
                            <td className="py-2 px-2 text-gray-900 font-mono">{selectedWithdrawal.details.ifscCode}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Bank Name</th>
                            <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.details.bankName}</td>
                          </tr>
                        </>
                      ) : (
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">USDT Wallet Address</th>
                          <td className="py-2 px-2 text-gray-900 font-mono break-all">{selectedWithdrawal.details.walletAddress}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApprovedWithdrawals;