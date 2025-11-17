import React, { useState } from 'react';

const RejectedWithdrawals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 10;

  // Sample rejected withdrawals data - in real app this would come from API
  const withdrawals = [
    {
      id: 22,
      srNo: 1,
      user: 'Prasad Nanekar',
      email: 'prasadnanekar358@gmail.com',
      mt5Id: '7100020542',
      amount: '$10.00',
      status: 'rejected',
      method: 'Bank',
      date: '11-Nov-2025 05:15 PM',
      details: {
        accountName: 'Prasad Nanekar',
        accountNumber: '60321829118',
        ifscCode: 'MAHB0001715',
        bankName: 'Bank of Maharashtra'
      }
    },
    {
      id: 15,
      srNo: 2,
      user: 'r k',
      email: 'katochrasik000@gmail.com',
      mt5Id: '7100016966',
      amount: '$100.00',
      status: 'rejected',
      method: 'Crypto',
      date: '23-Oct-2025 08:50 PM',
      details: null // No approved crypto details found
    },
    {
      id: 14,
      srNo: 3,
      user: '',
      email: '',
      mt5Id: '7100016964',
      amount: '$100.00',
      status: 'rejected',
      method: 'Crypto',
      date: '21-Oct-2025 09:59 AM',
      details: null // No approved crypto details found
    },
    {
      id: 11,
      srNo: 4,
      user: '',
      email: '',
      mt5Id: '7100016976',
      amount: '$91.00',
      status: 'rejected',
      method: 'Crypto',
      date: '17-Oct-2025 09:15 AM',
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

  const WithdrawalGridCard = ({ withdrawal }) => (
    <div className="bg-white rounded-lg shadow-lg border border-red-200 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{withdrawal.user || 'N/A'}</h3>
            {withdrawal.email && (
              <p className="text-xs text-gray-600">{withdrawal.email}</p>
            )}
            <p className="text-xs text-gray-600">MT5: {withdrawal.mt5Id}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-red-600">{withdrawal.amount}</div>
          <div className="text-xs text-gray-500">{withdrawal.date}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-red-50 rounded-lg p-3">
          <span className="text-xs font-medium text-red-700 uppercase">Method</span>
          <p className="text-sm font-medium text-gray-900 mt-1">{withdrawal.method}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3">
          <span className="text-xs font-medium text-red-700 uppercase">Status</span>
          <p className="text-sm font-medium text-red-600 mt-1">{withdrawal.status}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleViewDetails(withdrawal)}
          className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium rounded transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-2 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Rejected Withdrawals</h1>
              <p className="text-lg text-gray-600 mt-1">List of all rejected withdrawal requests</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Rejected</p>
                <p className="text-2xl font-bold text-gray-900">{withdrawals.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Bank Rejections</p>
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
                <p className="text-sm font-medium text-gray-600">Crypto Rejections</p>
                <p className="text-2xl font-bold text-gray-900">
                  {withdrawals.filter(w => w.method === 'Crypto').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">
                  {withdrawals.filter(w => w.date.includes('Nov-2025')).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className="block md:hidden">
          {currentWithdrawals.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {currentWithdrawals.map((withdrawal) => (
                <WithdrawalGridCard key={withdrawal.id} withdrawal={withdrawal} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Rejected Withdrawals</h3>
              <p className="text-gray-600 mb-6">All withdrawal requests have been processed successfully.</p>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">0</div>
                  <div className="text-sm text-gray-600">Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">0</div>
                  <div className="text-sm text-gray-600">Rejected</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-rose-600 p-6">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Rejected Withdrawal Records
              </h2>
              <p className="text-red-100 mt-1">Complete history of rejected withdrawal transactions</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-red-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">SR No</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-red-800 uppercase tracking-wider">Details</th>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-red-600">
                        {withdrawal.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 border border-red-200">
                          {withdrawal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {withdrawal.method}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {withdrawal.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleViewDetails(withdrawal)}
                          className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium rounded transition-colors"
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

                {selectedWithdrawal.details ? (
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
                ) : (
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <h4 className="font-medium text-amber-900">No Approved Details Found</h4>
                        <p className="text-sm text-amber-800">This withdrawal was rejected and no approved payment details are available.</p>
                      </div>
                    </div>
                  </div>
                )}

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

export default RejectedWithdrawals;