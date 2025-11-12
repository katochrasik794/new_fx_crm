import React, { useState } from 'react';

const Mt5Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data - in real app this would come from API
  const usersData = [
    { id: 1, name: 'Vishwjit Salunkhe', email: 'vishwjitsalunkhe2000@gmail.com', phone: '9130835434', country: 'India', mt5Accounts: 1, balance: '$0.00', userId: 329 },
    { id: 2, name: 'Vinod Kumar', email: 'vkvinodkumar760@gmail.com', phone: '+91 90583 67783', country: 'india', mt5Accounts: 1, balance: '$325.63', userId: 378 },
    { id: 3, name: 'Vilas Jadhav', email: 'rajeshgamare38@gmail.com', phone: '919423292816', country: 'India', mt5Accounts: 1, balance: '$1.37', userId: 230 },
    { id: 4, name: 'Vijay Kamble', email: 'vijay.ik137@gmail.com', phone: '7977827358', country: 'India', mt5Accounts: 1, balance: '$27.35', userId: 267 },
    { id: 5, name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com', phone: '7875311225', country: 'India', mt5Accounts: 5, balance: '$0.00', userId: 356 },
    { id: 6, name: 'Tushar Warad', email: 'tusharimp13@gmail.com', phone: '9970433322', country: 'India', mt5Accounts: 1, balance: '$0.00', userId: 368 },
    { id: 7, name: 'Swarup Kakade', email: 'swarupk298@gmail.com', phone: '9322432803', country: 'India', mt5Accounts: 1, balance: '$0.00', userId: 370 },
    { id: 8, name: 'Suyog Datrange', email: 'suyogdatrange@gmail.com', phone: '9834707113', country: 'India', mt5Accounts: 2, balance: '$0.00', userId: 261 },
    { id: 9, name: 'Suvarna Sawant', email: 'krantisawant27@gmail.com', phone: '8830762024', country: 'India', mt5Accounts: 1, balance: '$0.00', userId: 262 },
    { id: 10, name: 'Sonali sutar', email: 'sgsservices2002@gmail.com', phone: '9049296262', country: 'India', mt5Accounts: 2, balance: '$0.00', userId: 358 },
    // Add more users as needed to reach 70
  ];

  // Filter data based on search term
  const filteredData = usersData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm) ||
    user.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleViewDetails = (userId) => {
    // Handle view details - could open modal or navigate
    console.log('View details for user:', userId);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <div className="mb-6">
        <h4 className="text-2xl font-bold flex items-center mb-2">
          <svg className="w-6 h-6 mr-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
          MT5 Users
        </h4>
        <p className="text-gray-600">All users with their MT5 account details and balances (live synced).</p>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Show</label>
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="ml-2 text-sm text-gray-600">entries</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Search</label>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder=""
                className="bg-white border border-gray-300 rounded px-3 py-2 text-sm w-full sm:w-64 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-teal-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">#</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Full Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Country</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">MT5 Accounts</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Total Balance</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-teal-800 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentData.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm">{startIndex + index + 1}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">{user.name}</td>
                  <td className="px-4 py-4 text-sm break-all">{user.email}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">{user.phone}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">{user.country}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center">{user.mt5Accounts}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-medium">{user.balance}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleViewDetails(user.userId)}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} users
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded text-gray-700"
            >
              Previous
            </button>
            {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 text-sm rounded ${
                    page === currentPage ? 'bg-teal-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            {totalPages > 7 && (
              <>
                <span className="px-2 text-sm text-gray-500">...</span>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`px-3 py-1 text-sm rounded ${
                    totalPages === currentPage ? 'bg-teal-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded text-gray-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mt5Users;