import React, { useState } from 'react';

const PendingDeposits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rejectReason, setRejectReason] = useState('');
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedDepositId, setSelectedDepositId] = useState(null);

  // Sample deposits data - in real app this would come from API
  const deposits = [
    {
      id: 45,
      srNo: 1,
      user: 'AMIT UMBARKAR',
      mt5Id: '369067',
      method: 'Upi',
      amount: '$53.19',
      txnId: '9594980845@ybl',
      proof: '/uploads/proof/1762886709_IMG_3525.png',
      date: '11 Nov 2025, 06:45 PM'
    }
  ];

  const filteredDeposits = deposits.filter(deposit =>
    deposit.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.mt5Id.includes(searchTerm) ||
    deposit.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deposit.txnId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = (depositId) => {
    // Handle approve action
    console.log('Approve deposit:', depositId);
    // Here you would typically send the approval to your API
  };

  const handleRejectClick = (depositId) => {
    setSelectedDepositId(depositId);
    setShowRejectModal(true);
  };

  const handleRejectConfirm = () => {
    if (rejectReason.trim()) {
      console.log('Reject deposit:', selectedDepositId, 'Reason:', rejectReason);
      // Here you would typically send the rejection to your API
      setShowRejectModal(false);
      setRejectReason('');
      setSelectedDepositId(null);
    }
  };

  const DepositCard = ({ deposit }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-gray-900">{deposit.user}</h3>
          <p className="text-sm text-gray-600">MT5 ID: {deposit.mt5Id}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-600">{deposit.amount}</div>
          <div className="text-xs text-gray-500">{deposit.date}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <span className="text-xs font-medium text-gray-500 uppercase">Method</span>
          <p className="text-sm text-gray-900">{deposit.method}</p>
        </div>
        <div>
          <span className="text-xs font-medium text-gray-500 uppercase">TXN ID</span>
          <p className="text-sm text-gray-900 font-mono break-all">{deposit.txnId}</p>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs font-medium text-gray-500 uppercase block mb-2">Proof</span>
        <div className="flex items-center space-x-3">
          <a
            href={deposit.proof}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
          >
            View
          </a>
          <img
            src={deposit.proof}
            alt="proof"
            className="h-12 w-auto rounded border border-gray-200"
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => handleApprove(deposit.id)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
        >
          Approve
        </button>
        <button
          onClick={() => handleRejectClick(deposit.id)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors text-sm"
        >
          Reject
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Pending Deposits</h1>
          </div>
          <p className="text-center text-gray-600">Review and manage pending deposit requests</p>
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 bg-white transition-colors"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden">
          {filteredDeposits.length > 0 ? (
            filteredDeposits.map((deposit, index) => (
              <DepositCard key={deposit.id} deposit={deposit} index={index} />
            ))
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No pending deposits</h3>
              <p className="text-gray-600">All deposits have been processed.</p>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-rose-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Sr No</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">User</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">TXN ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Proof</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredDeposits.map((deposit) => (
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        {deposit.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-mono break-all max-w-xs">
                        {deposit.txnId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <a
                            href={deposit.proof}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                          >
                            View
                          </a>
                          <img
                            src={deposit.proof}
                            alt="proof"
                            className="h-10 w-auto rounded border border-gray-200"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deposit.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        <button
                          onClick={() => handleApprove(deposit.id)}
                          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectClick(deposit.id)}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredDeposits.length === 0 && (
              <div className="p-12 text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No pending deposits</h3>
                <p className="text-gray-600">All deposits have been processed.</p>
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
                <li>
                  <button
                    className="px-3 py-2 text-sm font-medium text-white bg-rose-600 border border-rose-600"
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage >= Math.ceil(filteredDeposits.length / 10)}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Reject Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Reject Deposit</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for rejection
                  </label>
                  <textarea
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                    placeholder="Enter reason for rejection..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                    rows="3"
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleRejectConfirm}
                    disabled={!rejectReason.trim()}
                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    Confirm Reject
                  </button>
                  <button
                    onClick={() => {
                      setShowRejectModal(false);
                      setRejectReason('');
                      setSelectedDepositId(null);
                    }}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded transition-colors"
                  >
                    Cancel
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

export default PendingDeposits;