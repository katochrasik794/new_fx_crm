import React, { useState } from 'react';

const RequestsApplications = () => {
  const [activeTab, setActiveTab] = useState('applications');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  // Sample data - in real app this would come from API
  const managerApplications = [
    {
      id: 1,
      user: 'John Smith',
      email: 'john.smith@pamm.com',
      group: 'Standard',
      leverage: '1:100',
      minDeposit: '$500',
      performanceFee: '20%',
      managementFee: '2%',
      submittedDate: '2025-11-10',
      status: 'Pending'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      email: 'sarah.j@pamm.com',
      group: 'VIP',
      leverage: '1:200',
      minDeposit: '$1,000',
      performanceFee: '25%',
      managementFee: '3%',
      submittedDate: '2025-11-09',
      status: 'Under Review'
    }
  ];

  const investmentRequests = [
    {
      id: 1,
      investor: 'Mike Chen',
      investorEmail: 'mike.chen@investor.com',
      manager: 'John Smith',
      managerEmail: 'john.smith@pamm.com',
      amount: '$5,000',
      method: 'Bank Transfer',
      requestedDate: '2025-11-11',
      status: 'Pending'
    },
    {
      id: 2,
      investor: 'Emma Davis',
      investorEmail: 'emma.davis@investor.com',
      manager: 'Sarah Johnson',
      managerEmail: 'sarah.j@pamm.com',
      amount: '$2,500',
      method: 'Credit Card',
      requestedDate: '2025-11-10',
      status: 'Processing'
    }
  ];

  const handleApproveApplication = (applicationId) => {
    console.log('Approve application:', applicationId);
    // Handle application approval
  };

  const handleRejectApplication = (applicationId) => {
    console.log('Reject application:', applicationId);
    // Handle application rejection
  };

  const handleApproveRequest = (requestId) => {
    console.log('Approve request:', requestId);
    // Handle request approval
  };

  const handleRejectRequest = (requestId) => {
    console.log('Reject request:', requestId);
    // Handle request rejection
  };

  const handleViewApplicationDetails = (application) => {
    setSelectedApplication(application);
    setShowApplicationModal(true);
  };

  const handleViewRequestDetails = (request) => {
    setSelectedRequest(request);
    setShowRequestModal(true);
  };

  const closeApplicationModal = () => {
    setShowApplicationModal(false);
    setSelectedApplication(null);
  };

  const closeRequestModal = () => {
    setShowRequestModal(false);
    setSelectedRequest(null);
  };


  const TabButton = ({ id, label, count, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 font-medium text-sm transition-colors relative ${
        isActive
          ? 'text-amber-600 border-b-2 border-amber-600'
          : 'text-gray-600 hover:text-amber-600'
      }`}
    >
      {label}
      {count > 0 && (
        <span className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
          isActive ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'
        }`}>
          {count}
        </span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">PAMM Requests & Applications</h1>
              <p className="text-lg text-gray-600 mt-1">Manage manager applications and investment requests</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <TabButton
                id="applications"
                label="Manager Applications"
                count={managerApplications.length}
                isActive={activeTab === 'applications'}
              />
              <TabButton
                id="requests"
                label="Investment Requests"
                count={investmentRequests.length}
                isActive={activeTab === 'requests'}
              />
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Manager Applications Tab */}
            {activeTab === 'applications' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Manager Applications</h3>
                    <p className="text-gray-600 mt-1">Review and process new PAMM manager applications</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-600">
                      Total Applications: <span className="font-semibold text-amber-600">{managerApplications.length}</span>
                    </div>
                  </div>
                </div>

                {managerApplications.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Pending Applications</h3>
                    <p className="text-gray-600">All manager applications have been processed.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-amber-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">User</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Group</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Leverage</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Min Deposit</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Perf Fee</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Mgmt Fee</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Submitted</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {managerApplications.map((application) => (
                          <tr key={application.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div>
                                <div className="font-medium text-gray-900">{application.user}</div>
                                <div className="text-gray-500 text-xs">{application.email}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                                {application.group}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {application.leverage}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {application.minDeposit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-600">
                              {application.performanceFee}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                              {application.managementFee}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {application.submittedDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleViewApplicationDetails(application)}
                                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                                  title="View Details"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleApproveApplication(application.id)}
                                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors"
                                  title="Approve Application"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleRejectApplication(application.id)}
                                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors"
                                  title="Reject Application"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                  </svg>
                                </button>
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

            {/* Investment Requests Tab */}
            {activeTab === 'requests' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Investment Requests</h3>
                    <p className="text-gray-600 mt-1">Review and process investor requests to join PAMM portfolios</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-600">
                      Total Requests: <span className="font-semibold text-amber-600">{investmentRequests.length}</span>
                    </div>
                  </div>
                </div>

                {investmentRequests.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Pending Requests</h3>
                    <p className="text-gray-600">All investment requests have been processed.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-amber-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Investor</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Manager</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Amount</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Method</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Requested</th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-amber-800 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {investmentRequests.map((request) => (
                          <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div>
                                <div className="font-medium text-gray-900">{request.investor}</div>
                                <div className="text-gray-500 text-xs">{request.investorEmail}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div>
                                <div className="font-medium text-gray-900">{request.manager}</div>
                                <div className="text-gray-500 text-xs">{request.managerEmail}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                              {request.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                                {request.method}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {request.requestedDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handleViewRequestDetails(request)}
                                  className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded transition-colors"
                                  title="View Details"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleApproveRequest(request.id)}
                                  className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded transition-colors"
                                  title="Approve Request"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleRejectRequest(request.id)}
                                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors"
                                  title="Reject Request"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                  </svg>
                                </button>
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

        {/* Application Details Modal */}
        {showApplicationModal && selectedApplication && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white border-2 border-black rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Application Details - {selectedApplication.user}</h3>
                  <button
                    onClick={closeApplicationModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Personal Information</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                            <td className="py-2 px-2 text-gray-900">{selectedApplication.user}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                            <td className="py-2 px-2 text-gray-900">{selectedApplication.email}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Submitted</th>
                            <td className="py-2 px-2 text-gray-900">{selectedApplication.submittedDate}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Trading Parameters</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Group</th>
                            <td className="py-2 px-2 text-gray-900">{selectedApplication.group}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Leverage</th>
                            <td className="py-2 px-2 text-gray-900">{selectedApplication.leverage}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Min Deposit</th>
                            <td className="py-2 px-2 text-gray-900">{selectedApplication.minDeposit}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Fee Structure</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-600">{selectedApplication.performanceFee}</div>
                        <div className="text-sm text-gray-600">Performance Fee</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{selectedApplication.managementFee}</div>
                        <div className="text-sm text-gray-600">Management Fee</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => handleRejectApplication(selectedApplication.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors"
                  >
                    Reject Application
                  </button>
                  <button
                    onClick={() => handleApproveApplication(selectedApplication.id)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors"
                  >
                    Approve Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Request Details Modal */}
        {showRequestModal && selectedRequest && (
          <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-white border-2 border-black rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Investment Request Details</h3>
                  <button
                    onClick={closeRequestModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Investor Information</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Name</th>
                            <td className="py-2 px-2 text-gray-900">{selectedRequest.investor}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                            <td className="py-2 px-2 text-gray-900">{selectedRequest.investorEmail}</td>
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
                            <td className="py-2 px-2 text-gray-900">{selectedRequest.manager}</td>
                          </tr>
                          <tr>
                            <th className="text-left py-2 px-2 font-medium text-gray-700 bg-gray-100">Email</th>
                            <td className="py-2 px-2 text-gray-900">{selectedRequest.managerEmail}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Investment Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{selectedRequest.amount}</div>
                        <div className="text-sm text-gray-600">Investment Amount</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-purple-600">{selectedRequest.method}</div>
                        <div className="text-sm text-gray-600">Payment Method</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900">{selectedRequest.requestedDate}</div>
                        <div className="text-sm text-gray-600">Request Date</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    onClick={() => handleRejectRequest(selectedRequest.id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors"
                  >
                    Reject Request
                  </button>
                  <button
                    onClick={() => handleApproveRequest(selectedRequest.id)}
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition-colors"
                  >
                    Approve Request
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

export default RequestsApplications;