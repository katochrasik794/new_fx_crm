import React, { useState } from 'react';

const IBDistributionManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [rateFilter, setRateFilter] = useState('');
  const [sortBy, setSortBy] = useState('approved_at');
  const [selectedIB, setSelectedIB] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 10;

  // Sample IB data - in real app this would come from API
  const ibData = [
    {
      id: 385,
      name: 'Ram Jawari',
      email: 'ram13august@gmail.com',
      approvedDate: 'Nov 11, 2025',
      ibRate: '$0.70',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$0.00',
      commission: '$0.00'
    },
    {
      id: 384,
      name: 'Om Ramagar',
      email: 'Omom37401@gmail.com',
      approvedDate: 'Nov 11, 2025',
      ibRate: '$1.30',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$0.00',
      commission: '$0.00'
    },
    {
      id: 383,
      name: 'jagdish sonar',
      email: 'jagdishsonar020@gmail.com',
      approvedDate: 'Nov 11, 2025',
      ibRate: '$1.20',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$0.00',
      commission: '$0.00'
    },
    {
      id: 382,
      name: 'Rajesh Pawar',
      email: 'raju.21pawar@gmail.com',
      approvedDate: 'Nov 11, 2025',
      ibRate: '$1.30',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$52.89',
      commission: '$0.00'
    },
    {
      id: 381,
      name: 'Rushikesh kale',
      email: 'kale91150@gmail.com',
      approvedDate: 'Nov 11, 2025',
      ibRate: '$1.00',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$0.00',
      commission: '$0.00'
    },
    {
      id: 373,
      name: 'sanjay Jadhav',
      email: 'sj0447439@gmail.com',
      approvedDate: 'Nov 09, 2025',
      ibRate: '$1.20',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$175.71',
      commission: '$0.00'
    },
    {
      id: 368,
      name: 'Tushar Warad',
      email: 'tusharimp13@gmail.com',
      approvedDate: 'Nov 07, 2025',
      ibRate: '$1.30',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$0.00',
      commission: '$0.00'
    },
    {
      id: 367,
      name: 'Akash Sonmale',
      email: 'akashsonmale2026@gmail.com',
      approvedDate: 'Nov 07, 2025',
      ibRate: '$1.30',
      directClients: 0,
      subIBs: 0,
      totalReferrals: 0,
      totalBalance: '$0.00',
      commission: '$0.00'
    },
    {
      id: 366,
      name: 'Pramod Kirdat',
      email: 'kirdatpramod4@gmail.com',
      approvedDate: 'Nov 07, 2025',
      ibRate: '$1.30',
      directClients: 1,
      subIBs: 0,
      totalReferrals: 1,
      totalBalance: '$248.49',
      commission: '$0.00'
    },
    {
      id: 365,
      name: 'Sandip Kenjale',
      email: 'sandipkenjale@gmail.com',
      approvedDate: 'Nov 07, 2025',
      ibRate: '$1.30',
      directClients: 0,
      subIBs: 1,
      totalReferrals: 1,
      totalBalance: '$0.00',
      commission: '$0.00'
    }
  ];

  // Filter and sort data
  const filteredData = ibData.filter(ib => {
    const matchesSearch = ib.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ib.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRate = !rateFilter || (
      rateFilter === '0-5' && parseFloat(ib.ibRate.replace('$', '')) >= 0 && parseFloat(ib.ibRate.replace('$', '')) <= 5 ||
      rateFilter === '5-10' && parseFloat(ib.ibRate.replace('$', '')) > 5 && parseFloat(ib.ibRate.replace('$', '')) <= 10 ||
      rateFilter === '10-15' && parseFloat(ib.ibRate.replace('$', '')) > 10 && parseFloat(ib.ibRate.replace('$', '')) <= 15 ||
      rateFilter === '15+' && parseFloat(ib.ibRate.replace('$', '')) > 15
    );
    return matchesSearch && matchesRate;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'ib_rate':
        return parseFloat(b.ibRate.replace('$', '')) - parseFloat(a.ibRate.replace('$', ''));
      case 'direct_clients':
        return b.directClients - a.directClients;
      case 'total_balance':
        return parseFloat(b.totalBalance.replace('$', '')) - parseFloat(a.totalBalance.replace('$', ''));
      default:
        return new Date(b.approvedDate) - new Date(a.approvedDate);
    }
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handleViewDetails = (ib) => {
    setSelectedIB(ib);
    setShowModal(true);
  };

  const handleCalculateCommission = (ibId) => {
    console.log('Calculate commission for IB:', ibId);
    // Handle commission calculation
  };

  const handleDistributeCommission = (ibId) => {
    console.log('Distribute commission for IB:', ibId);
    // Handle commission distribution
  };

  const handleRefresh = () => {
    // Handle data refresh
    console.log('Refreshing data...');
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIB(null);
  };

  const IBKanbanCard = ({ ib }) => (
    <div className="bg-white rounded-lg shadow-lg border border-orange-200 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <span className="text-orange-600 font-semibold text-sm">
              {ib.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{ib.name}</h3>
            <p className="text-xs text-gray-600">{ib.email}</p>
            <p className="text-xs text-gray-500">Approved: {ib.approvedDate}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-orange-600">{ib.ibRate}</div>
          <div className="text-xs text-gray-500">IB Rate</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-green-50 rounded-lg p-3">
          <div className="text-xs font-medium text-green-700">Direct Clients</div>
          <div className="text-lg font-bold text-green-600">{ib.directClients}</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="text-xs font-medium text-blue-700">Sub-IBs</div>
          <div className="text-lg font-bold text-blue-600">{ib.subIBs}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="text-xs font-medium text-purple-700">Total Referrals</div>
          <div className="text-lg font-bold text-purple-600">{ib.totalReferrals}</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-3">
          <div className="text-xs font-medium text-yellow-700">Total Balance</div>
          <div className="text-lg font-bold text-yellow-600">{ib.totalBalance}</div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-medium text-gray-600">Commission:</span>
          <span className="text-sm font-bold text-emerald-600 ml-1">{ib.commission}</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => handleViewDetails(ib)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded transition-colors flex items-center justify-center space-x-1"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
          </svg>
          <span>View</span>
        </button>
        <button
          onClick={() => handleCalculateCommission(ib.id)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded transition-colors flex items-center justify-center space-x-1"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
          </svg>
          <span>Calc</span>
        </button>
        <button
          onClick={() => handleDistributeCommission(ib.id)}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-3 rounded transition-colors flex items-center justify-center space-x-1"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 001.414-1.414l-6-6a1 1 0 010-1.414z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 001.414-1.414l-6-6a1 1 0 010-1.414z" clipRule="evenodd"/>
            <path d="M4 10.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"/>
          </svg>
          <span>Send</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">IB Distribution Management</h1>
              <p className="text-lg text-gray-600 mt-1">Manage Introducing Broker commissions and distributions</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Approved IBs</p>
                <p className="text-2xl font-bold text-gray-900">49</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Direct Clients</p>
                <p className="text-2xl font-bold text-gray-900">42</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sub-IBs</p>
                <p className="text-2xl font-bold text-gray-900">28</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total IB Balance</p>
                <p className="text-2xl font-bold text-gray-900">$1,298.76</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Rate</label>
              <select
                value={rateFilter}
                onChange={(e) => setRateFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              >
                <option value="">All Rates</option>
                <option value="0-5">$0 - $5</option>
                <option value="5-10">$5 - $10</option>
                <option value="10-15">$10 - $15</option>
                <option value="15+">$15+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              >
                <option value="approved_at">Approval Date</option>
                <option value="name">Name</option>
                <option value="ib_rate">IB Rate</option>
                <option value="direct_clients">Direct Clients</option>
                <option value="total_balance">Total Balance</option>
              </select>
            </div>

            <div>
              <button
                onClick={handleRefresh}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                </svg>
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Kanban View */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {currentData.map((ib, index) => (
              <IBKanbanCard key={ib.id} ib={ib} index={index} />
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                IB Distribution Records
              </h2>
              <p className="text-orange-100 mt-1">Complete overview of all Introducing Broker activities</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Sr No.</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">IB Details</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">IB Rate</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Direct Clients</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Sub-IBs</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Total Referrals</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Total Balance</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Commission</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentData.map((ib, index) => (
                    <tr key={ib.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div>
                          <div className="font-medium text-gray-900">{ib.name}</div>
                          <div className="text-gray-500 text-xs">{ib.email}</div>
                          <div className="text-gray-500 text-xs">Approved: {ib.approvedDate}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                          {ib.ibRate}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 border border-green-200">
                          {ib.directClients}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                          {ib.subIBs}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                          {ib.totalReferrals}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {ib.totalBalance}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">
                        {ib.commission}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleViewDetails(ib)}
                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                            title="View Details"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleCalculateCommission(ib.id)}
                            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors"
                            title="Calculate Commission"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDistributeCommission(ib.id)}
                            className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded transition-colors"
                            title="Distribute Commission"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 001.414-1.414l-6-6a1 1 0 010-1.414z" clipRule="evenodd"/>
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 001.414-1.414l-6-6a1 1 0 010-1.414z" clipRule="evenodd"/>
                              <path d="M4 10.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"/>
                            </svg>
                          </button>
                        </div>
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
                              ? 'text-white bg-orange-600 border-orange-600'
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
                              ? 'text-white bg-orange-600 border-orange-600'
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

        {/* IB Details Modal */}
        {showModal && selectedIB && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white border-2 border-black rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">IB Details - {selectedIB.name}</h3>
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
                    <h4 className="font-medium text-gray-900 mb-3">Basic Information</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                          <td className="py-2 px-2 text-gray-900">{selectedIB.name}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                          <td className="py-2 px-2 text-gray-900">{selectedIB.email}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Approved Date</th>
                          <td className="py-2 px-2 text-gray-900">{selectedIB.approvedDate}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">IB Rate</th>
                          <td className="py-2 px-2 text-gray-900 font-semibold">{selectedIB.ibRate}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Performance Metrics</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Direct Clients</th>
                          <td className="py-2 px-2 text-gray-900">{selectedIB.directClients}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Sub-IBs</th>
                          <td className="py-2 px-2 text-gray-900">{selectedIB.subIBs}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Total Referrals</th>
                          <td className="py-2 px-2 text-gray-900">{selectedIB.totalReferrals}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Total Balance</th>
                          <td className="py-2 px-2 text-gray-900 font-semibold">{selectedIB.totalBalance}</td>
                        </tr>
                        <tr>
                          <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Commission</th>
                          <td className="py-2 px-2 text-emerald-600 font-semibold">{selectedIB.commission}</td>
                        </tr>
                      </tbody>
                    </table>
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

export default IBDistributionManagement;