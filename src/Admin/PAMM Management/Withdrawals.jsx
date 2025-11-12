import React, { useState } from 'react';

const Withdrawals = () => {
  const [activeTab, setActiveTab] = useState('manager');
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample withdrawal data - in real app this would come from API
  const managerWithdrawals = [
    {
      id: 'MW-2025-001',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      group: 'VIP',
      amount: '$2,500',
      status: 'Pending',
      requestedDate: '2025-11-10',
      commissionType: 'Performance Fee'
    },
    {
      id: 'MW-2025-002',
      manager: 'Sarah Johnson',
      managerEmail: 'sarah.j@pamm.com',
      group: 'Premium',
      amount: '$1,750',
      status: 'Approved',
      requestedDate: '2025-11-09',
      commissionType: 'Management Fee'
    }
  ];

  const investorWithdrawals = [
    {
      id: 'IW-2025-001',
      investor: 'Mike Chen',
      investorEmail: 'mike.chen@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      group: 'VIP',
      amount: '$1,200',
      status: 'Pending',
      requestedDate: '2025-11-11',
      profitShare: '$150'
    },
    {
      id: 'IW-2025-002',
      investor: 'Emma Davis',
      investorEmail: 'emma.davis@investor.com',
      manager: 'Sarah Johnson',
      managerEmail: 'sarah.j@pamm.com',
      group: 'Standard',
      amount: '$800',
      status: 'Processing',
      requestedDate: '2025-11-10',
      profitShare: '$95'
    },
    {
      id: 'IW-2025-003',
      investor: 'Alex Rodriguez',
      investorEmail: 'alex.r@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      group: 'Premium',
      amount: '$3,000',
      status: 'Rejected',
      requestedDate: '2025-11-08',
      profitShare: '$420'
    }
  ];

  const handleApproveWithdrawal = (withdrawalId, type) => {
    console.log(`Approve ${type} withdrawal:`, withdrawalId);
    // Handle withdrawal approval
  };

  const handleRejectWithdrawal = (withdrawalId, type) => {
    console.log(`Reject ${type} withdrawal:`, withdrawalId);
    // Handle withdrawal rejection
  };

  const handleViewDetails = (withdrawal, type) => {
    setSelectedWithdrawal({ ...withdrawal, type });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWithdrawal(null);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getGroupColor = (group) => {
    switch (group.toLowerCase()) {
      case 'vip':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'premium':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'standard':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const TabButton = ({ id, label, count, icon, color, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-4 font-medium text-sm transition-all duration-200 ${
        isActive
          ? `${color} text-white shadow-lg transform scale-105`
          : 'text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-50'
      } rounded-t-lg border-b-2 ${isActive ? 'border-current' : 'border-transparent'}`}
    >
      <div className="flex items-center space-x-3">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d={icon} />
        </svg>
        <span>{label}</span>
        {count > 0 && (
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            isActive ? 'bg-white bg-opacity-20 text-white' : 'bg-gray-100 text-gray-600'
          }`}>
            {count}
          </span>
        )}
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">PAMM Withdrawals Management</h1>
              <p className="text-lg text-gray-600 mt-1">Manage commission and investment withdrawals</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <TabButton
              id="manager"
              label="Manager Withdrawals"
              count={managerWithdrawals.length}
              icon="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              color="bg-amber-500"
              isActive={activeTab === 'manager'}
            />
            <TabButton
              id="investor"
              label="Investor Withdrawals"
              count={investorWithdrawals.length}
              icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              color="bg-rose-500"
              isActive={activeTab === 'investor'}
            />
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Manager Withdrawals Tab */}
            {activeTab === 'manager' && (
              <div>
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-6 mb-6 text-white">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg">Manager Commission Withdrawals</h3>
                      <p className="text-amber-100">Process commission withdrawals from PAMM managers</p>
                    </div>
                  </div>
                </div>

                {managerWithdrawals.length === 0 ? (
                  <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No Manager Withdrawal Requests</h3>
                    <p className="text-gray-600">There are currently no pending manager withdrawal requests.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-amber-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Manager</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">PAMM Group</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Requested At</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {managerWithdrawals.map((withdrawal) => (
                          <tr key={withdrawal.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div>
                                <div className="font-medium text-gray-900">{withdrawal.manager}</div>
                                <div className="text-gray-500 text-xs">{withdrawal.managerEmail}</div>
                                <div className="text-gray-500 text-xs">{withdrawal.commissionType}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(withdrawal.group)}`}>
                                {withdrawal.group}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                              {withdrawal.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(withdrawal.status)}`}>
                                {withdrawal.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {withdrawal.requestedDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleViewDetails(withdrawal, 'manager')}
                                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                                  title="View Details"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                  </svg>
                                </button>
                                {withdrawal.status === 'Pending' && (
                                  <>
                                    <button
                                      onClick={() => handleApproveWithdrawal(withdrawal.id, 'manager')}
                                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors"
                                      title="Approve Withdrawal"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() => handleRejectWithdrawal(withdrawal.id, 'manager')}
                                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors"
                                      title="Reject Withdrawal"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                      </svg>
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Investor Withdrawals Tab */}
            {activeTab === 'investor' && (
              <div>
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg p-6 mb-6 text-white">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg">Investor Withdrawals</h3>
                      <p className="text-rose-100">Process investment and profit withdrawals from investors</p>
                    </div>
                  </div>
                </div>

                {investorWithdrawals.length === 0 ? (
                  <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No Investor Withdrawal Requests</h3>
                    <p className="text-gray-600">There are currently no pending investor withdrawal requests.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-rose-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Investor</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">PAMM Manager</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">PAMM Group</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Requested At</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-rose-800 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {investorWithdrawals.map((withdrawal) => (
                          <tr key={withdrawal.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div>
                                <div className="font-medium text-gray-900">{withdrawal.investor}</div>
                                <div className="text-gray-500 text-xs">{withdrawal.investorEmail}</div>
                                <div className="text-green-600 text-xs">Profit: {withdrawal.profitShare}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div>
                                <div className="font-medium text-gray-900">{withdrawal.manager}</div>
                                <div className="text-gray-500 text-xs">{withdrawal.managerEmail}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(withdrawal.group)}`}>
                                {withdrawal.group}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                              {withdrawal.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(withdrawal.status)}`}>
                                {withdrawal.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {withdrawal.requestedDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleViewDetails(withdrawal, 'investor')}
                                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                                  title="View Details"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                  </svg>
                                </button>
                                {withdrawal.status === 'Pending' && (
                                  <>
                                    <button
                                      onClick={() => handleApproveWithdrawal(withdrawal.id, 'investor')}
                                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors"
                                      title="Approve Withdrawal"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() => handleRejectWithdrawal(withdrawal.id, 'investor')}
                                      className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors"
                                      title="Reject Withdrawal"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                      </svg>
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Withdrawal Details Modal */}
        {showModal && selectedWithdrawal && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white border-2 border-black rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedWithdrawal.type === 'manager' ? 'Manager' : 'Investor'} Withdrawal Details - {selectedWithdrawal.id}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedWithdrawal.type === 'manager' ? (
                    <>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Manager Information</h4>
                        <table className="w-full text-sm">
                          <tbody>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                              <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.manager}</td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                              <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.managerEmail}</td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Group</th>
                              <td className="py-2 px-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(selectedWithdrawal.group)}`}>
                                  {selectedWithdrawal.group}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Commission Type</th>
                              <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.commissionType}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Withdrawal Details</h4>
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">{selectedWithdrawal.amount}</div>
                            <div className="text-sm text-gray-600">Withdrawal Amount</div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full border ${getStatusColor(selectedWithdrawal.status)}`}>
                                {selectedWithdrawal.status}
                              </span>
                              <div className="text-sm text-gray-600 mt-1">Status</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-semibold text-gray-900">{selectedWithdrawal.requestedDate}</div>
                              <div className="text-sm text-gray-600">Requested Date</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Investor Information</h4>
                        <table className="w-full text-sm">
                          <tbody>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                              <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.investor}</td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                              <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.investorEmail}</td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Profit Share</th>
                              <td className="py-2 px-2 text-green-600 font-semibold">{selectedWithdrawal.profitShare}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Manager & Withdrawal Details</h4>
                        <table className="w-full text-sm">
                          <tbody>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Manager</th>
                              <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.manager}</td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Group</th>
                              <td className="py-2 px-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(selectedWithdrawal.group)}`}>
                                  {selectedWithdrawal.group}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Amount</th>
                              <td className="py-2 px-2 text-green-600 font-semibold">{selectedWithdrawal.amount}</td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Status</th>
                              <td className="py-2 px-2">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(selectedWithdrawal.status)}`}>
                                  {selectedWithdrawal.status}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Requested</th>
                              <td className="py-2 px-2 text-gray-900">{selectedWithdrawal.requestedDate}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  {selectedWithdrawal.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleRejectWithdrawal(selectedWithdrawal.id, selectedWithdrawal.type)}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors"
                      >
                        Reject Withdrawal
                      </button>
                      <button
                        onClick={() => handleApproveWithdrawal(selectedWithdrawal.id, selectedWithdrawal.type)}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors"
                      >
                        Approve Withdrawal
                      </button>
                    </>
                  )}
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

export default Withdrawals;