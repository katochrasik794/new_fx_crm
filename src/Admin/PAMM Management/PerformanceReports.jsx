import React, { useState } from 'react';

const PerformanceReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedManager, setSelectedManager] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample manager data - in real app this would come from API
  const managers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@pamm.com',
      group: 'VIP',
      mt5Id: '369076',
      aum: '$125,000',
      investors: 15,
      roi: '+12.5%',
      fees: '$2,500',
      status: 'Active',
      performance: 12.5,
      createdDate: '2025-10-15'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@pamm.com',
      group: 'Premium',
      mt5Id: '369075',
      aum: '$89,000',
      investors: 12,
      roi: '+8.3%',
      fees: '$1,780',
      status: 'Active',
      performance: 8.3,
      createdDate: '2025-10-12'
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@pamm.com',
      group: 'Standard',
      mt5Id: '369074',
      aum: '$0',
      investors: 0,
      roi: '0%',
      fees: '$0',
      status: 'Pending',
      performance: 0,
      createdDate: '2025-11-01'
    }
  ];

  // Filter managers
  const filteredManagers = managers.filter(manager => {
    const matchesSearch = manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manager.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manager.mt5Id.includes(searchTerm);
    const matchesStatus = !statusFilter || manager.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const stats = {
    totalManagers: managers.length,
    activeManagers: managers.filter(m => m.status === 'Active').length,
    totalAUM: managers
      .filter(m => m.status === 'Active')
      .reduce((sum, m) => sum + parseFloat(m.aum.replace(/[$,]/g, '')), 0),
    activeInvestors: managers
      .filter(m => m.status === 'Active')
      .reduce((sum, m) => sum + m.investors, 0),
    averageROI: managers.length > 0
      ? (managers.reduce((sum, m) => sum + m.performance, 0) / managers.length).toFixed(2)
      : 0
  };

  // Top performers
  const topPerformers = [...managers]
    .filter(m => m.status === 'Active')
    .sort((a, b) => b.performance - a.performance)
    .slice(0, 5);

  const handleExportReport = () => {
    console.log('Exporting performance report...');
    // Handle export functionality
  };

  const handleRefreshData = () => {
    console.log('Refreshing performance data...');
    // Handle data refresh
  };

  const handleViewDetails = (manager) => {
    setSelectedManager(manager);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedManager(null);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'banned':
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

  const getPerformanceColor = (performance) => {
    if (performance > 10) return 'text-green-600';
    if (performance > 0) return 'text-blue-600';
    if (performance < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const StatCard = ({ title, value, subtitle, icon, color, bgColor }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className={`text-3xl font-bold ${color}`}>{value}</div>
          <div className="text-gray-900 font-semibold text-lg mt-1">{title}</div>
          <div className="text-gray-600 text-sm mt-1">{subtitle}</div>
        </div>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColor}`}>
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">PAMM Managers Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Comprehensive performance insights and analytics</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExportReport}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <span>Export Report</span>
            </button>
            <button
              onClick={handleRefreshData}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
              </svg>
              <span>Refresh Data</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Managers"
            value={stats.totalManagers}
            subtitle={`${stats.activeManagers} active`}
            icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            color="text-blue-600"
            bgColor="bg-blue-500"
          />
          <StatCard
            title="Total AUM"
            value={`$${stats.totalAUM.toLocaleString()}`}
            subtitle="Assets under management"
            icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            color="text-green-600"
            bgColor="bg-green-500"
          />
          <StatCard
            title="Active Investors"
            value={stats.activeInvestors}
            subtitle="Currently investing"
            icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            color="text-cyan-600"
            bgColor="bg-cyan-500"
          />
          <StatCard
            title="Average ROI"
            value={`${stats.averageROI}%`}
            subtitle="Performance metric"
            icon="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            color="text-yellow-600"
            bgColor="bg-yellow-500"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">AUM Growth Trend</h3>
              </div>
              <div className="p-6">
                <div className="h-64 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-cyan-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">AUM Growth Chart</h4>
                    <p className="text-gray-600">Chart visualization would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Manager Status Distribution</h3>
              </div>
              <div className="p-6">
                <div className="h-64 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-indigo-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Status Distribution</h4>
                    <p className="text-gray-600">Pie chart would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Top Performing Managers</h3>
            </div>
            <div className="p-6">
              {topPerformers.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No Performance Data</h4>
                  <p className="text-gray-600">No performance data available yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {topPerformers.map((manager, index) => (
                    <div key={manager.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-400' :
                          index === 2 ? 'bg-amber-600' : 'bg-cyan-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{manager.name}</div>
                          <div className="text-sm text-gray-600">{manager.group} • {manager.investors} investors</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getPerformanceColor(manager.performance)}`}>
                          {manager.roi}
                        </div>
                        <div className="text-sm text-gray-600">{manager.aum} AUM</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Manager Performance Metrics</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{stats.activeManagers}</div>
                  <div className="text-sm text-gray-600">Active Managers</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{stats.totalManagers - stats.activeManagers}</div>
                  <div className="text-sm text-gray-600">Inactive Managers</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                  <div className="text-2xl font-bold text-cyan-600">
                    {stats.totalManagers > 0 ? Math.round((stats.activeManagers / stats.totalManagers) * 100) : 0}%
                  </div>
                  <div className="text-sm text-gray-600">Active Rate</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-2xl font-bold text-yellow-600">
                    ${stats.activeInvestors > 0 ? Math.round(stats.totalAUM / stats.activeInvestors) : 0}
                  </div>
                  <div className="text-sm text-gray-600">Avg AUM per Investor</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Managers Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Manager Details</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="banned">Banned</option>
                </select>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search managers..."
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {filteredManagers.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                <path d="M9 5a1 1 0 011-1h4a1 1 0 011 1v1H9V5z"/>
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No PAMM Managers Found</h3>
              <p className="text-gray-600">There are currently no managers matching your criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cyan-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">Manager</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">Group</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">MT5 ID</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">AUM</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">Investors</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">ROI</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">Fees</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-cyan-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredManagers.map((manager) => (
                    <tr key={manager.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{manager.name}</div>
                          <div className="text-gray-500 text-xs">{manager.email}</div>
                          <div className="text-gray-500 text-xs">Created: {manager.createdDate}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(manager.group)}`}>
                          {manager.group}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                        {manager.mt5Id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        {manager.aum}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {manager.investors}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                        <span className={getPerformanceColor(manager.performance)}>
                          {manager.roi}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-purple-600">
                        {manager.fees}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(manager.status)}`}>
                          {manager.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleViewDetails(manager)}
                          className="px-3 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-medium rounded transition-colors"
                          title="View Details"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Manager Details Modal */}
        {showModal && selectedManager && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white border-2 border-black rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Manager Performance Details - {selectedManager.name}</h3>
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
                    <h4 className="font-medium text-gray-900 mb-3">Manager Information</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                          <td className="py-2 px-2 text-gray-900">{selectedManager.name}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                          <td className="py-2 px-2 text-gray-900">{selectedManager.email}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">MT5 ID</th>
                          <td className="py-2 px-2 text-gray-900 font-mono">{selectedManager.mt5Id}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Group</th>
                          <td className="py-2 px-2">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getGroupColor(selectedManager.group)}`}>
                              {selectedManager.group}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Status</th>
                          <td className="py-2 px-2">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(selectedManager.status)}`}>
                              {selectedManager.status}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Performance Metrics</h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                          <div className="text-xl font-bold text-green-600">{selectedManager.aum}</div>
                          <div className="text-xs text-gray-600">Total AUM</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded border border-blue-200">
                          <div className="text-xl font-bold text-blue-600">{selectedManager.investors}</div>
                          <div className="text-xs text-gray-600">Investors</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className={`text-center p-3 rounded border ${getPerformanceColor(selectedManager.performance).includes('green') ? 'bg-green-50 border-green-200' : getPerformanceColor(selectedManager.performance).includes('blue') ? 'bg-blue-50 border-blue-200' : 'bg-red-50 border-red-200'}`}>
                          <div className={`text-xl font-bold ${getPerformanceColor(selectedManager.performance)}`}>
                            {selectedManager.roi}
                          </div>
                          <div className="text-xs text-gray-600">ROI</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                          <div className="text-xl font-bold text-purple-600">{selectedManager.fees}</div>
                          <div className="text-xs text-gray-600">Total Fees</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Additional Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Created Date:</span>
                      <span className="ml-2 text-gray-900">{selectedManager.createdDate}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Performance Score:</span>
                      <span className={`ml-2 font-semibold ${getPerformanceColor(selectedManager.performance)}`}>
                        {selectedManager.performance}/100
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Commission Rate:</span>
                      <span className="ml-2 text-gray-900">
                        {selectedManager.group === 'VIP' ? '25%' :
                         selectedManager.group === 'Premium' ? '20%' : '15%'}
                      </span>
                    </div>
                  </div>
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

export default PerformanceReports;