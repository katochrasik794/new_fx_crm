import React, { useState } from 'react';

const PammUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [managerFilter, setManagerFilter] = useState('');
  const [amountFilter, setAmountFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
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
      amount: '$5,000',
      duration: '12 months',
      status: 'Active',
      fees: '$250',
      joinedDate: '2025-11-10',
      performance: '+8.5%'
    },
    {
      id: 'INV-2025-002',
      investor: 'Emma Davis',
      investorEmail: 'emma.davis@investor.com',
      manager: 'Sarah Johnson',
      managerEmail: 'sarah.j@pamm.com',
      amount: '$2,500',
      duration: '6 months',
      status: 'Active',
      fees: '$125',
      joinedDate: '2025-11-09',
      performance: '+5.2%'
    },
    {
      id: 'INV-2025-003',
      investor: 'Alex Rodriguez',
      investorEmail: 'alex.r@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      amount: '$10,000',
      duration: '24 months',
      status: 'Pending',
      fees: '$500',
      joinedDate: '2025-11-08',
      performance: '0%'
    },
    {
      id: 'INV-2025-004',
      investor: 'Lisa Wang',
      investorEmail: 'lisa.wang@investor.com',
      manager: 'Sarah Johnson',
      managerEmail: 'sarah.j@pamm.com',
      amount: '$7,500',
      duration: '18 months',
      status: 'Completed',
      fees: '$375',
      joinedDate: '2025-10-15',
      performance: '+15.3%'
    }
  ];

  // Filter investments
  const filteredInvestments = investments.filter(investment => {
    const matchesSearch = investment.investor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.investorEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || investment.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesManager = !managerFilter || investment.manager === managerFilter;
    const matchesAmount = !amountFilter || checkAmountRange(investment.amount, amountFilter);
    const matchesDate = !dateFilter || checkDateRange(investment.joinedDate, dateFilter);

    return matchesSearch && matchesStatus && matchesManager && matchesAmount && matchesDate;
  });

  // Calculate statistics
  const stats = {
    totalInvestments: investments.length,
    activeInvestments: investments.filter(inv => inv.status === 'Active').length,
    totalInvested: investments
      .filter(inv => inv.status === 'Active' || inv.status === 'Completed')
      .reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, '')), 0),
    uniqueInvestors: [...new Set(investments.map(inv => inv.investor))].length,
    averageInvestment: investments.length > 0
      ? investments.reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, '')), 0) / investments.length
      : 0
  };

  // Performance metrics
  const performanceMetrics = {
    active: investments.filter(inv => inv.status === 'Active').length,
    pending: investments.filter(inv => inv.status === 'Pending').length,
    completed: investments.filter(inv => inv.status === 'Completed').length,
    cancelled: investments.filter(inv => inv.status === 'Cancelled').length,
    activeManagers: [...new Set(investments.filter(inv => inv.status === 'Active').map(inv => inv.manager))].length,
    activeRate: investments.length > 0 ? Math.round((investments.filter(inv => inv.status === 'Active').length / investments.length) * 100) : 0
  };

  // Top investors by volume
  const topInvestors = [...investments]
    .filter(inv => inv.status === 'Active' || inv.status === 'Completed')
    .sort((a, b) => parseFloat(b.amount.replace(/[$,]/g, '')) - parseFloat(a.amount.replace(/[$,]/g, '')))
    .slice(0, 5);

  const checkAmountRange = (amount, range) => {
    const value = parseFloat(amount.replace(/[$,]/g, ''));
    switch (range) {
      case '0-1000': return value >= 0 && value <= 1000;
      case '1000-5000': return value > 1000 && value <= 5000;
      case '5000-10000': return value > 5000 && value <= 10000;
      case '10000+': return value > 10000;
      default: return true;
    }
  };

  const checkDateRange = (date, range) => {
    const investmentDate = new Date(date);
    const now = new Date();
    const diffTime = now - investmentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    switch (range) {
      case 'today': return diffDays <= 1;
      case 'week': return diffDays <= 7;
      case 'month': return diffDays <= 30;
      case 'quarter': return diffDays <= 90;
      default: return true;
    }
  };

  const handleExportData = () => {
    console.log('Exporting investment data...');
    // Handle export functionality
  };

  const handleRefreshData = () => {
    console.log('Refreshing investment data...');
    // Handle data refresh
  };

  const handleViewDetails = (investment) => {
    setSelectedInvestment(investment);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedInvestment(null);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('');
    setManagerFilter('');
    setAmountFilter('');
    setDateFilter('');
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
    <div className="min-h-screen bg-violet-100 p-2 md:p-6">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">PAMM Investment Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Comprehensive investment insights and user analytics</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleExportData}
              className="px-4 py-2 bg-lime-600 hover:bg-lime-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <span>Export Data</span>
            </button>
            <button
              onClick={handleRefreshData}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
              </svg>
              <span>Refresh</span>
            </button>
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Investments"
            value={stats.totalInvestments}
            subtitle={`${stats.activeInvestments} active`}
            icon="M11 3a1 1 0 10-2 0v1a1 1 0 011 1v4.586l1.293 1.293a1 1 0 001.414-1.414l-3-3A1 1 0 0011 3zM5 3a1 1 0 10-2 0v1a1 1 0 011 1v4.586l1.293 1.293a1 1 0 001.414-1.414l-3-3A1 1 0 005 3z"
            color="text-blue-600"
            bgColor="bg-blue-500"
          />
          <StatCard
            title="Total Invested"
            value={`$${stats.totalInvested.toLocaleString()}`}
            subtitle="All time"
            icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            color="text-green-600"
            bgColor="bg-green-500"
          />
          <StatCard
            title="Unique Investors"
            value={stats.uniqueInvestors}
            subtitle="Active participants"
            icon="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            color="text-cyan-600"
            bgColor="bg-cyan-500"
          />
          <StatCard
            title="Average Investment"
            value={`$${Math.round(stats.averageInvestment).toLocaleString()}`}
            subtitle="Per investment"
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
                <h3 className="text-xl font-semibold text-gray-900">Investment Volume Trend</h3>
              </div>
              <div className="p-6">
                <div className="h-64 bg-gradient-to-r from-lime-50 to-green-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-lime-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Investment Volume Chart</h4>
                    <p className="text-gray-600">Chart visualization would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Investment Status Distribution</h3>
              </div>
              <div className="p-6">
                <div className="h-64 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-emerald-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Top Investors & Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Top Investors by Volume</h3>
            </div>
            <div className="p-6">
              {topInvestors.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    <path d="M9 5a1 1 0 011-1h4a1 1 0 011 1v1H9V5z"/>
                  </svg>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No Investor Data</h4>
                  <p className="text-gray-600">No investor data available yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {topInvestors.map((investment, index) => (
                    <div key={investment.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-lime-50 to-green-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-400' :
                          index === 2 ? 'bg-amber-600' : 'bg-lime-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{investment.investor}</div>
                          <div className="text-sm text-gray-600">{investment.manager} • {investment.status}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{investment.amount}</div>
                        <div className="text-sm text-gray-600">{investment.performance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Investment Performance Metrics</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">{performanceMetrics.active}</div>
                  <div className="text-sm text-gray-600">Active Investments</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-2xl font-bold text-yellow-600">{performanceMetrics.pending}</div>
                  <div className="text-sm text-gray-600">Pending Investments</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{performanceMetrics.completed}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">{performanceMetrics.cancelled}</div>
                  <div className="text-sm text-gray-600">Cancelled</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">{performanceMetrics.activeManagers}</div>
                  <div className="text-sm text-gray-600">Active Managers</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600">{performanceMetrics.activeRate}%</div>
                  <div className="text-sm text-gray-600">Active Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showAdvancedFilters && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Advanced Filters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Manager</label>
                <select
                  value={managerFilter}
                  onChange={(e) => setManagerFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors"
                >
                  <option value="">All Managers</option>
                  {[...new Set(investments.map(inv => inv.manager))].map(manager => (
                    <option key={manager} value={manager}>{manager}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount Range</label>
                <select
                  value={amountFilter}
                  onChange={(e) => setAmountFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors"
                >
                  <option value="">All Amounts</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors"
                >
                  <option value="">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by investor, manager, or email..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors"
                />
              </div>
              <div className="flex items-end space-x-3">
                <button
                  onClick={() => console.log('Applying filters...')}
                  className="px-6 py-2 bg-lime-600 hover:bg-lime-700 text-white font-medium rounded-lg transition-colors focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                >
                  Apply Filters
                </button>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Investments Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0">Investment Details</h2>
              <div className="flex items-center space-x-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-lime-100 text-lime-800 border border-lime-200">
                  {filteredInvestments.length} Total
                </span>
              </div>
            </div>
          </div>

          {filteredInvestments.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No PAMM Investments Found</h3>
              <p className="text-gray-600">There are currently no investments matching your criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-lime-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Investor</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Manager</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Fees</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Joined</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-lime-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInvestments.map((investment) => (
                    <tr key={investment.id} className="hover:bg-gray-50 transition-colors">
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                        {investment.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {investment.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(investment.status)}`}>
                          {investment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                        {investment.fees}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {investment.joinedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleViewDetails(investment)}
                          className="px-3 py-1 bg-lime-500 hover:bg-lime-600 text-white text-xs font-medium rounded transition-colors"
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

        {/* Investment Details Modal */}
        {showModal && selectedInvestment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
                      <div className="text-lg font-semibold text-gray-900">{selectedInvestment.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div className="text-center">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full border ${getStatusColor(selectedInvestment.status)}`}>
                        {selectedInvestment.status}
                      </span>
                      <div className="text-sm text-gray-600 mt-1">Status</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900">{selectedInvestment.joinedDate}</div>
                      <div className="text-sm text-gray-600">Joined Date</div>
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

export default PammUsers;