import React, { useState } from 'react';

const CopierArea = () => {
  const [copierRelationships, setCopierRelationships] = useState([
    // Sample data - in real app this would come from API
    {
      id: 1,
      copier: {
        name: 'John Smith',
        email: 'john.smith@example.com',
        account: '369076'
      },
      master: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@example.com',
        account: '369077'
      },
      startDate: '2025-11-01',
      status: 'active'
    },
    {
      id: 2,
      copier: {
        name: 'Mike Davis',
        email: 'mike.davis@example.com',
        account: '369078'
      },
      master: {
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        account: '369079'
      },
      startDate: '2025-10-15',
      status: 'paused'
    },
    {
      id: 3,
      copier: {
        name: 'Lisa Brown',
        email: 'lisa.brown@example.com',
        account: '369080'
      },
      master: {
        name: 'David Miller',
        email: 'david.miller@example.com',
        account: '369081'
      },
      startDate: '2025-09-20',
      status: 'active'
    }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setCopierRelationships(prev =>
      prev.map(relationship =>
        relationship.id === id
          ? { ...relationship, status: newStatus }
          : relationship
      )
    );
  };

  const handleDeleteRelationship = (id) => {
    if (window.confirm('Are you sure you want to delete this copier relationship?')) {
      setCopierRelationships(prev => prev.filter(relationship => relationship.id !== id));
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: 'bg-green-100 text-green-800', label: 'Active' },
      paused: { color: 'bg-yellow-100 text-yellow-800', label: 'Paused' },
      stopped: { color: 'bg-red-100 text-red-800', label: 'Stopped' }
    };
    return statusConfig[status] || statusConfig.active;
  };

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Copy Trading (Copier → Master)</h1>
              <p className="text-gray-600 mt-1">Manage copier-master relationships and trading synchronization</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Total Relationships</div>
                <div className="text-2xl font-bold text-purple-600">{copierRelationships.length}</div>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                <div className="text-sm text-gray-600">Active</div>
                <div className="text-2xl font-bold text-green-600">
                  {copierRelationships.filter(r => r.status === 'active').length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-6">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
              </svg>
              Copier Relationships
            </h2>
            <p className="text-purple-100 text-sm mt-1">Monitor and manage copy trading relationships</p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Copier
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Master
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Change Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {copierRelationships.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                        </svg>
                        <p className="text-gray-500 text-lg font-medium">No copier relationships found.</p>
                        <p className="text-gray-400 text-sm mt-1">Copier-master relationships will appear here when established.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  copierRelationships.map((relationship) => (
                    <tr key={relationship.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {relationship.copier.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {relationship.copier.email}
                            </div>
                            <div className="text-xs text-gray-400">
                              MT5: {relationship.copier.account}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                              <svg className="w-5 h-5 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {relationship.master.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {relationship.master.email}
                            </div>
                            <div className="text-xs text-gray-400">
                              MT5: {relationship.master.account}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(relationship.startDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-xs text-gray-500">
                          {Math.floor((new Date() - new Date(relationship.startDate)) / (1000 * 60 * 60 * 24))} days active
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(relationship.status).color}`}>
                          {getStatusBadge(relationship.status).label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={relationship.status}
                          onChange={(e) => handleStatusChange(relationship.id, e.target.value)}
                          className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                          <option value="active">Active</option>
                          <option value="paused">Paused</option>
                          <option value="stopped">Stopped</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => console.log('View details for relationship:', relationship.id)}
                            className="text-purple-600 hover:text-purple-900 p-1 rounded-md hover:bg-purple-50 transition-colors"
                            title="View Details"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteRelationship(relationship.id)}
                            className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50 transition-colors"
                            title="Delete Relationship"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
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
          {copierRelationships.length > 0 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
                <div>
                  Showing {copierRelationships.length} copier relationship{copierRelationships.length !== 1 ? 's' : ''}
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                    {copierRelationships.filter(r => r.status === 'active').length} Active
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                    {copierRelationships.filter(r => r.status === 'paused').length} Paused
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {copierRelationships.filter(r => r.status === 'stopped').length} Stopped
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-start space-x-3">
            <svg className="w-6 h-6 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-2">Copy Trading Information</h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p><strong>Copier:</strong> The trader who follows and copies the master's trades automatically.</p>
                <p><strong>Master:</strong> The experienced trader whose trades are being copied by followers.</p>
                <p><strong>Status:</strong> Active relationships copy trades in real-time. Paused relationships stop copying temporarily. Stopped relationships are permanently disabled.</p>
                <p><strong>Management:</strong> You can change the status of any relationship or remove relationships entirely from this interface.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopierArea;