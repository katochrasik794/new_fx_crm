import React, { useState } from 'react';

const Investments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample investment data - in real app this would come from API
  const investments = [
    {
      id: 'INV-2025-001',
      investor: 'Mike Chen',
      investorEmail: 'mike.chen@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      group: 'VIP',
      amount: '$5,000',
      fees: '$250',
      status: 'Active',
      date: '2025-11-10',
      performance: '+8.5%'
    },
    {
      id: 'INV-2025-002',
      investor: 'Emma Davis',
      investorEmail: 'emma.davis@investor.com',
      manager: 'Sarah Johnson',
      managerEmail: 'sarah.j@pamm.com',
      group: 'Standard',
      amount: '$2,500',
      fees: '$125',
      status: 'Active',
      date: '2025-11-09',
      performance: '+5.2%'
    },
    {
      id: 'INV-2025-003',
      investor: 'Alex Rodriguez',
      investorEmail: 'alex.r@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      group: 'Premium',
      amount: '$10,000',
      fees: '$500',
      status: 'Pending',
      date: '2025-11-08',
      performance: '0%'
    }
  ];

  // Filter investments
  const filteredInvestments = investments.filter(investment => {
    const matchesSearch = investment.investor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || investment.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const stats = {
    total: investments.length,
    active: investments.filter(inv => inv.status === 'Active').length,
    pending: investments.filter(inv => inv.status === 'Pending').length,
    totalAUM: investments
      .filter(inv => inv.status === 'Active')
      .reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, '')), 0)
  };

  const handleViewDetails = (investment) => {
    setSelectedInvestment(investment);
    setShowModal(true);
  };

  const handleExportInvestments = () => {
    console.log('Exporting investments...');
    // Handle export functionality
  };

  const handleViewRequests = () => {
    // Navigate to requests page
    window.location.href = '/requests-applications';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedInvestment(null);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
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

  const StatCard = ({ title, value, subtitle, icon, color, trend }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className={`text-3xl font-bold ${color}`}>{value}</div>
          <div className="text-gray-900 font-semibold text-lg mt-1">{title}</div>
          <div className="text-gray-600 text-sm mt-1">{subtitle}</div>
          {trend && (
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 0116 0zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
              </svg>
              {trend}
            </div>
          )}
        </div>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color.replace('text-', 'bg-').replace('-600', '-100')}`}>
          <svg className={`w-8 h-8 ${color}`} fill="currentColor" viewBox="0 0 20 20">
            <path d={icon} />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">PAMM Investments Management</h1>
            <p className="text-gray-600 mt-1">Monitor and manage all PAMM investment activities</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExportInvestments}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <span>Export</span>
            </button>
            <button
              onClick={handleViewRequests}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
              <span>View Requests</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Investments"
            value={stats.total}
            subtitle="All time investments"
            icon="M11 3a1 1 0 10-2 0v1a1 1 0 011 1v4.586l1.293 1.293a1 1 0 001.414-1.414l-3-3A1 1 0 0011 3zM5 3a1 1 0 10-2 0v1a1 1 0 011 1v4.586l1.293 1.293a1 1 0 001.414-1.414l-3-3A1 1 0 005 3z"
            color="text-indigo-600"
            trend="All time"
          />
          <StatCard
            title="Active"
            value={stats.active}
            subtitle="Currently running"
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            color="text-green-600"
            trend="Currently running"
          />
          <StatCard
            title="Pending"
            value={stats.pending}
            subtitle="Awaiting approval"
            icon="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            color="text-yellow-600"
            trend="Awaiting approval"
          />
          <StatCard
            title="Total AUM"
            value={`$${stats.totalAUM.toLocaleString()}`}
            subtitle="Assets under management"
            icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            color="text-purple-600"
            trend="Assets under management"
          />
        </div>

        {/* Investments Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">All Investments</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search investments..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {filteredInvestments.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Investments Found</h3>
              <p className="text-gray-600">There are currently no investments matching your criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Investment ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Investor</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Manager</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Group</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Fees</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInvestments.map((investment) => (
                    <tr key={investment.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {investment.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{investment.investor}</div>
                          <div className="text-gray-500 text-xs">{investment.investorEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{investment.manager}</div>
                          <div className="text-gray-500 text-xs">{investment.managerEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(investment.group)}`}>
                          {investment.group}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        {investment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                        {investment.fees}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(investment.status)}`}>
                          {investment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {investment.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewDetails(investment)}
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                            title="View Details"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          {investment.status === 'Active' && (
                            <button
                              className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium rounded transition-colors"
                              title="Performance"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                              </svg>
                            </button>
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

        {/* Investment Details Modal */}
        {showModal && selectedInvestment && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg border-2 border-black shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Investment Details - {selectedInvestment.id}</h3>
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
                          <td className="py-2 px-2 text-gray-900">{selectedInvestment.investor}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                          <td className="py-2 px-2 text-gray-900">{selectedInvestment.investorEmail}</td>
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
                          <td className="py-2 px-2 text-gray-900">{selectedInvestment.manager}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                          <td className="py-2 px-2 text-gray-900">{selectedInvestment.managerEmail}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Group</th>
                          <td className="py-2 px-2">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(selectedInvestment.group)}`}>
                              {selectedInvestment.group}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Investment Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{selectedInvestment.amount}</div>
                      <div className="text-sm text-gray-600">Investment Amount</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{selectedInvestment.fees}</div>
                      <div className="text-sm text-gray-600">Total Fees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{selectedInvestment.date}</div>
                      <div className="text-sm text-gray-600">Investment Date</div>
                    </div>
                    <div className="text-center">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full border ${getStatusColor(selectedInvestment.status)}`}>
                        {selectedInvestment.status}
                      </span>
                      <div className="text-sm text-gray-600 mt-1">Status</div>
                    </div>
                  </div>
                  {selectedInvestment.status === 'Active' && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600">{selectedInvestment.performance}</div>
                        <div className="text-sm text-gray-600">Current Performance</div>
                      </div>
                    </div>
                  )}
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

export default Investments;