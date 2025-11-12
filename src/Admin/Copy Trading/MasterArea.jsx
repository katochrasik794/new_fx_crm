import React, { useState } from 'react';

const MasterArea = () => {
  const [masters, setMasters] = useState([
    // Sample data - in real app this would come from API
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      mt5Account: '369077',
      totalCopiers: 12,
      activeCopiers: 10,
      totalAUM: 45678.50,
      monthlyReturn: 8.5,
      riskLevel: 'Medium',
      status: 'active',
      joinDate: '2025-06-15'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      mt5Account: '369079',
      totalCopiers: 8,
      activeCopiers: 7,
      totalAUM: 32145.75,
      monthlyReturn: 12.3,
      riskLevel: 'Low',
      status: 'active',
      joinDate: '2025-07-22'
    },
    {
      id: 3,
      name: 'David Miller',
      email: 'david.miller@example.com',
      mt5Account: '369081',
      totalCopiers: 15,
      activeCopiers: 13,
      totalAUM: 78923.40,
      monthlyReturn: 6.8,
      riskLevel: 'High',
      status: 'active',
      joinDate: '2025-05-10'
    },
    {
      id: 4,
      name: 'Alex Chen',
      email: 'alex.chen@example.com',
      mt5Account: '369083',
      totalCopiers: 6,
      activeCopiers: 5,
      totalAUM: 18750.25,
      monthlyReturn: 15.2,
      riskLevel: 'Low',
      status: 'active',
      joinDate: '2025-08-05'
    },
    {
      id: 5,
      name: 'Maria Rodriguez',
      email: 'maria.rodriguez@example.com',
      mt5Account: '369085',
      totalCopiers: 9,
      activeCopiers: 8,
      totalAUM: 52341.60,
      monthlyReturn: 9.7,
      riskLevel: 'Medium',
      status: 'paused',
      joinDate: '2025-04-18'
    }
  ]);

  const getRiskBadge = (risk) => {
    const riskConfig = {
      'Low': { color: 'bg-green-100 text-green-800', icon: '🟢' },
      'Medium': { color: 'bg-yellow-100 text-yellow-800', icon: '🟡' },
      'High': { color: 'bg-red-100 text-red-800', icon: '🔴' }
    };
    return riskConfig[risk] || riskConfig.Medium;
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', label: 'Active' },
      paused: { color: 'bg-yellow-100 text-yellow-800', label: 'Paused' },
      suspended: { color: 'bg-red-100 text-red-800', label: 'Suspended' }
    };
    return statusConfig[status] || statusConfig.active;
  };

  const handleViewMaster = (masterId) => {
    console.log('View master details:', masterId);
    // Handle viewing master details
  };

  const handleToggleStatus = (masterId, currentStatus) => {
    const newStatus = currentStatus === 'active' ? 'paused' : 'active';
    setMasters(prev =>
      prev.map(master =>
        master.id === masterId
          ? { ...master, status: newStatus }
          : master
      )
    );
  };

  const activeMasters = masters.filter(m => m.status === 'active');
  const totalCopiers = masters.reduce((sum, master) => sum + master.totalCopiers, 0);
  const totalAUM = masters.reduce((sum, master) => sum + master.totalAUM, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Master Area - All Copy Trading Masters</h1>
              <p className="text-gray-600 mt-1">Monitor and manage all copy trading masters and their performance</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Total Masters</div>
                <div className="text-2xl font-bold text-emerald-600">{masters.length}</div>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Active Masters</div>
                <div className="text-2xl font-bold text-green-600">{activeMasters.length}</div>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Total Copiers</div>
                <div className="text-2xl font-bold text-cyan-600">{totalCopiers}</div>
              </div>
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Total AUM</div>
                <div className="text-2xl font-bold text-teal-600">${totalAUM.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Master Traders Overview
            </h2>
            <p className="text-emerald-100 text-sm mt-1">Comprehensive view of all copy trading masters and their performance metrics</p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                    Master Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                    Copiers
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                    Assets Under Management
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-emerald-800 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {masters.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                        </svg>
                        <p className="text-gray-500 text-lg font-medium">No masters found.</p>
                        <p className="text-gray-400 text-sm mt-1">Master traders will appear here when they register.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  masters.map((master) => (
                    <tr key={master.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-12 h-12">
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                              <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {master.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {master.email}
                            </div>
                            <div className="text-xs text-gray-400">
                              MT5: {master.mt5Account}
                            </div>
                            <div className="text-xs text-gray-400">
                              Joined: {new Date(master.joinDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">
                              {master.monthlyReturn > 0 ? '+' : ''}{master.monthlyReturn}%
                            </span>
                            <span className="text-xs text-gray-500">monthly</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskBadge(master.riskLevel).color}`}>
                              {getRiskBadge(master.riskLevel).icon} {master.riskLevel}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">
                          {master.totalCopiers}
                        </div>
                        <div className="text-xs text-gray-500">
                          {master.activeCopiers} active
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 font-medium">
                          ${master.totalAUM.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          Assets under management
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(master.status).color}`}>
                          {getStatusBadge(master.status).label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleViewMaster(master.id)}
                            className="text-emerald-600 hover:text-emerald-900 p-1 rounded-md hover:bg-emerald-50 transition-colors"
                            title="View Master Details"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleToggleStatus(master.id, master.status)}
                            className={`p-1 rounded-md transition-colors ${
                              master.status === 'active'
                                ? 'text-yellow-600 hover:text-yellow-900 hover:bg-yellow-50'
                                : 'text-green-600 hover:text-green-900 hover:bg-green-50'
                            }`}
                            title={master.status === 'active' ? 'Pause Master' : 'Activate Master'}
                          >
                            {master.status === 'active' ? (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                              </svg>
                            )}
                          </button>
                          <button
                            onClick={() => console.log('Edit master:', master.id)}
                            className="text-blue-600 hover:text-blue-900 p-1 rounded-md hover:bg-blue-50 transition-colors"
                            title="Edit Master"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer with summary */}
          {masters.length > 0 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
                <div>
                  Showing {masters.length} master{masters.length !== 1 ? 's' : ''}
                </div>
                <div className="mt-2 sm:mt-0 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {activeMasters.length} Active
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {masters.filter(m => m.status === 'paused').length} Paused
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {masters.filter(m => m.status === 'suspended').length} Suspended
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Performance Insights */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              Risk Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Low Risk</span>
                <span className="text-sm font-medium text-gray-900">
                  {masters.filter(m => m.riskLevel === 'Low').length} masters
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Medium Risk</span>
                <span className="text-sm font-medium text-gray-900">
                  {masters.filter(m => m.riskLevel === 'Medium').length} masters
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">High Risk</span>
                <span className="text-sm font-medium text-gray-900">
                  {masters.filter(m => m.riskLevel === 'High').length} masters
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Performance Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average Monthly Return</span>
                <span className="text-sm font-medium text-green-600">
                  +{(masters.reduce((sum, m) => sum + m.monthlyReturn, 0) / masters.length).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Highest Performer</span>
                <span className="text-sm font-medium text-gray-900">
                  {masters.reduce((max, m) => m.monthlyReturn > max.monthlyReturn ? m : max).name}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Assets Managed</span>
                <span className="text-sm font-medium text-gray-900">
                  ${totalAUM.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterArea;