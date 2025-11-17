import React, { useState } from 'react';

const Deposits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample deposit data - in real app this would come from API
  const deposits = [
    {
      id: 'DEP-2025-001',
      investor: 'Mike Chen',
      investorEmail: 'mike.chen@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      mt5Id: '369076',
      group: 'VIP',
      amount: '$5,000',
      status: 'Approved',
      submittedDate: '2025-11-10',
      approvedDate: '2025-11-10'
    },
    {
      id: 'DEP-2025-002',
      investor: 'Emma Davis',
      investorEmail: 'emma.davis@investor.com',
      manager: 'Sarah Johnson',
      managerEmail: 'sarah.j@pamm.com',
      mt5Id: '369075',
      group: 'Standard',
      amount: '$2,500',
      status: 'Pending',
      submittedDate: '2025-11-09',
      approvedDate: null
    },
    {
      id: 'DEP-2025-003',
      investor: 'Alex Rodriguez',
      investorEmail: 'alex.r@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      mt5Id: '369074',
      group: 'Premium',
      amount: '$10,000',
      status: 'Rejected',
      submittedDate: '2025-11-08',
      approvedDate: null
    }
  ];

  // Filter deposits
  const filteredDeposits = deposits.filter(deposit => {
    const matchesSearch = deposit.investor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deposit.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deposit.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deposit.mt5Id.includes(searchTerm);
    const matchesStatus = !statusFilter || deposit.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const stats = {
    total: deposits.length,
    pending: deposits.filter(dep => dep.status === 'Pending').length,
    approved: deposits.filter(dep => dep.status === 'Approved').length,
    rejected: deposits.filter(dep => dep.status === 'Rejected').length,
    totalAmount: deposits
      .filter(dep => dep.status === 'Approved')
      .reduce((sum, dep) => sum + parseFloat(dep.amount.replace(/[$,]/g, '')), 0)
  };

  const handleExportDeposits = () => {
    console.log('Exporting deposits...');
    // Handle export functionality
  };

  const handleApproveDeposit = (depositId) => {
    console.log('Approve deposit:', depositId);
    // Handle deposit approval
  };

  const handleRejectDeposit = (depositId) => {
    console.log('Reject deposit:', depositId);
    // Handle deposit rejection
  };

  const handleViewDetails = (deposit) => {
    setSelectedDeposit(deposit);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDeposit(null);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
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

  const StatCard = ({ title, value, subtitle, icon, bgColor }) => (
    <div className={`bg-gradient-to-br ${bgColor} rounded-xl shadow-lg border border-gray-200 p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-3xl font-bold mb-1">{value}</div>
          <div className="text-lg font-semibold mb-1">{title}</div>
          <div className="text-sm opacity-90">{subtitle}</div>
        </div>
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d={icon} />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-2 md:p-6">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">PAMM Deposits Management</h1>
            <p className="text-gray-600 mt-1">Monitor and manage all PAMM deposit transactions</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExportDeposits}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <span>Export</span>
            </button>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Deposits"
            value={stats.total}
            subtitle="All deposit transactions"
            icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            bgColor="from-blue-500 to-blue-600"
          />
          <StatCard
            title="Pending"
            value={stats.pending}
            subtitle="Awaiting approval"
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            bgColor="from-yellow-500 to-orange-500"
          />
          <StatCard
            title="Approved"
            value={stats.approved}
            subtitle="Successfully processed"
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            bgColor="from-green-500 to-emerald-500"
          />
          <StatCard
            title="Total Amount"
            value={`$${stats.totalAmount.toLocaleString()}`}
            subtitle="Approved deposits"
            icon="M11 3a1 1 0 10-2 0v1a1 1 0 011 1v4.586l1.293 1.293a1 1 0 001.414-1.414l-3-3A1 1 0 0011 3zM5 3a1 1 0 10-2 0v1a1 1 0 011 1v4.586l1.293 1.293a1 1 0 001.414-1.414l-3-3A1 1 0 005 3z"
            bgColor="from-purple-500 to-indigo-500"
          />
        </div>

        {/* Deposits Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">All Deposits</h2>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search deposits..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors w-full md:w-64"
              />
            </div>
          </div>

          {filteredDeposits.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No PAMM Deposits Found</h3>
              <p className="text-gray-600">There are currently no deposits matching your criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Deposit ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Investor</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Manager</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Group</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Submitted</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredDeposits.map((deposit) => (
                    <tr key={deposit.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {deposit.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{deposit.investor}</div>
                          <div className="text-gray-500 text-xs">{deposit.investorEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{deposit.manager}</div>
                          <div className="text-gray-500 text-xs">{deposit.managerEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        {deposit.mt5Id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(deposit.group)}`}>
                          {deposit.group}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        {deposit.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(deposit.status)}`}>
                          {deposit.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {deposit.submittedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewDetails(deposit)}
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                            title="View Details"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          {deposit.status === 'Pending' && (
                            <>
                              <button
                                onClick={() => handleApproveDeposit(deposit.id)}
                                className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors"
                                title="Approve Deposit"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                              </button>
                              <button
                                onClick={() => handleRejectDeposit(deposit.id)}
                                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors"
                                title="Reject Deposit"
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

        {/* Deposit Details Modal */}
        {showModal && selectedDeposit && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white border-2 border-black rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Deposit Details - {selectedDeposit.id}</h3>
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
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Investor Information</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                          <td className="py-2 px-2 text-gray-900">{selectedDeposit.investor}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                          <td className="py-2 px-2 text-gray-900">{selectedDeposit.investorEmail}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">MT5 ID</th>
                          <td className="py-2 px-2 text-gray-900 font-mono">{selectedDeposit.mt5Id}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Manager Information</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                          <td className="py-2 px-2 text-gray-900">{selectedDeposit.manager}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                          <td className="py-2 px-2 text-gray-900">{selectedDeposit.managerEmail}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Group</th>
                          <td className="py-2 px-2">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(selectedDeposit.group)}`}>
                              {selectedDeposit.group}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Deposit Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{selectedDeposit.amount}</div>
                      <div className="text-sm text-gray-600">Deposit Amount</div>
                    </div>
                    <div className="text-center">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full border ${getStatusColor(selectedDeposit.status)}`}>
                        {selectedDeposit.status}
                      </span>
                      <div className="text-sm text-gray-600 mt-1">Status</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{selectedDeposit.submittedDate}</div>
                      <div className="text-sm text-gray-600">Submitted Date</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">
                        {selectedDeposit.approvedDate || 'N/A'}
                      </div>
                      <div className="text-sm text-gray-600">Approved Date</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  {selectedDeposit.status === 'Pending' && (
                    <>
                      <button
                        onClick={() => handleRejectDeposit(selectedDeposit.id)}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors"
                      >
                        Reject Deposit
                      </button>
                      <button
                        onClick={() => handleApproveDeposit(selectedDeposit.id)}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors"
                      >
                        Approve Deposit
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

export default Deposits;