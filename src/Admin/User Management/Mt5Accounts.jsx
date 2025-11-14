import React, { useState, useEffect } from 'react';
import { FaServer, FaSearch, FaEye, FaDollarSign, FaUser, FaChartLine } from 'react-icons/fa';

const Mt5Accounts = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockUsers = [
      { id: 329, name: 'Vishwjit Salunkhe', email: 'vishwjitsalunkhe2000@gmail.com', mt5Count: 1, totalBalance: 0.00 },
      { id: 378, name: 'Vinod Kumar', email: 'vkvinodkumar760@gmail.com', mt5Count: 1, totalBalance: 411.83 },
      { id: 230, name: 'Vilas Jadhav', email: 'rajeshgamare38@gmail.com', mt5Count: 1, totalBalance: 1.37 },
      { id: 267, name: 'Vijay Kamble', email: 'vijay.ik137@gmail.com', mt5Count: 1, totalBalance: 24.22 },
      { id: 356, name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com', mt5Count: 5, totalBalance: 0.00 },
      { id: 368, name: 'Tushar Warad', email: 'tusharimp13@gmail.com', mt5Count: 1, totalBalance: 0.00 },
      { id: 370, name: 'Swarup Kakade', email: 'swarupk298@gmail.com', mt5Count: 1, totalBalance: 0.00 },
      { id: 261, name: 'Suyog Datrange', email: 'suyogdatrange@gmail.com', mt5Count: 2, totalBalance: 0.00 },
      { id: 262, name: 'Suvarna Sawant', email: 'krantisawant27@gmail.com', mt5Count: 1, totalBalance: 0.00 },
      { id: 358, name: 'Sonali sutar', email: 'sgsservices2002@gmail.com', mt5Count: 2, totalBalance: 0.00 },
      { id: 359, name: 'Sandip Kenjale', email: 'sandipkenjale@gmail.com', mt5Count: 1, totalBalance: 0.00 },
      { id: 360, name: 'Rajendra Dudhe', email: 'kalerushikesh350@gmail.com', mt5Count: 1, totalBalance: 957.59 },
      { id: 361, name: 'Rajesh Pawar', email: 'raju.21pawar@gmail.com', mt5Count: 1, totalBalance: 13.36 },
      { id: 362, name: 'Rajesh Kadu', email: 'shreefire_rajesh@rediffmail.com', mt5Count: 1, totalBalance: 124.52 },
      { id: 363, name: 'Pankaj Matere', email: 'pankajmatere08@gmail.com', mt5Count: 1, totalBalance: 106.81 },
      { id: 364, name: 'PRAVIN KOLI', email: 'kolipl28@gmail.com', mt5Count: 1, totalBalance: 106.40 },
      { id: 365, name: 'Piyush dhakan', email: 'piyush_dhakan@hotmail.com', mt5Count: 1, totalBalance: 5.05 },
      { id: 366, name: 'Om Kakade', email: 'omkakade0809@gmail.com', mt5Count: 1, totalBalance: 265.71 },
      { id: 367, name: 'Madhukar Dhonde', email: 'dhondemadhukar2999@gmail.com', mt5Count: 1, totalBalance: 0.00 },
      { id: 369, name: 'Akash Sonmale', email: 'akashsonmale2026@gmail.com', mt5Count: 1, totalBalance: 0.00 }
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      searchTerm === '' ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm]);

  const handleViewDetails = (userId) => {
    // Mock view details functionality
    console.log(`Viewing MT5 accounts for user ${userId}`);
    // You can add modal or navigation to account details page here
  };

  const getBalanceColor = (balance) => {
    if (balance > 0) return 'text-emerald-600';
    if (balance < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getMt5CountBadge = (count) => {
    let colorClass = 'bg-blue-100 text-blue-800';
    if (count > 3) colorClass = 'bg-purple-100 text-purple-800';
    else if (count > 1) colorClass = 'bg-indigo-100 text-indigo-800';

    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${colorClass}`}>
        {count} Account{count !== 1 ? 's' : ''}
      </span>
    );
  };

  const totalUsers = filteredUsers.length;
  const totalBalance = filteredUsers.reduce((sum, user) => sum + user.totalBalance, 0);
  const totalAccounts = filteredUsers.reduce((sum, user) => sum + user.mt5Count, 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-violet-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl shadow-xl border-2 border-blue-400">
              <FaServer className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                MT5 Accounts
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                All users who have MT5 accounts with their total balance.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm font-semibold text-gray-600">
                  Total Users: <strong className="text-blue-600">{totalUsers}</strong>
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  Total Accounts: <strong className="text-cyan-600">{totalAccounts}</strong>
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  Combined Balance: <strong className={`text-lg ${totalBalance >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    ${totalBalance.toFixed(2)}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-500/30 p-6 hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FaUser className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active MT5 Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-500/30 p-6 hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <FaServer className="text-cyan-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total MT5 Accounts</p>
                <p className="text-2xl font-bold text-gray-900">{totalAccounts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-500/30 p-6 hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <FaDollarSign className="text-emerald-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Combined Balance</p>
                <p className={`text-2xl font-bold ${totalBalance >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  ${totalBalance.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-500/30 p-6 mb-8">
          <div className="max-w-md">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <FaSearch className="text-blue-500" />
              Search by Name, Email, or MT5 Account ID
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Start typing..."
                className="w-full px-4 py-3 pl-12 bg-blue-50/50 border-2 border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-blue-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Table/Card View */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Sr No.</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">MT5 Accounts</th>
                      <th className="px-6 py-4 text-right text-white font-semibold text-sm">Total Balance</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-100">
                    {currentItems.map((user, index) => (
                      <tr key={user.id} className="hover:bg-blue-50/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {getMt5CountBadge(user.mt5Count)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className={`text-lg font-bold ${getBalanceColor(user.totalBalance)}`}>
                            ${user.totalBalance.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleViewDetails(user.id)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                          >
                            <FaEye className="text-xs" />
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {currentItems.map((user, index) => (
              <div key={user.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-500/30 p-6 hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-blue-400">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{user.name}</h3>
                      <p className="text-sm text-gray-600 break-all">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {getMt5CountBadge(user.mt5Count)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-500/20">
                    <div className="text-xs text-gray-600 mb-1">Total Balance</div>
                    <div className={`text-lg font-bold ${getBalanceColor(user.totalBalance)}`}>
                      ${user.totalBalance.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-3 bg-cyan-50/50 rounded-xl border border-cyan-500/20">
                    <div className="text-xs text-gray-600 mb-1">MT5 Accounts</div>
                    <div className="text-lg font-bold text-gray-900">{user.mt5Count}</div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-blue-100">
                  <button
                    onClick={() => handleViewDetails(user.id)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                  >
                    <FaEye className="text-xs" />
                    View Accounts
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-500/30 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-blue-500/30 rounded-xl hover:bg-blue-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-blue-600 font-medium"
                >
                  Previous
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={`px-4 py-2 border-2 rounded-xl transition-colors font-medium ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-600'
                          : 'border-blue-500/30 hover:bg-blue-900/50 text-blue-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-blue-400">...</span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className="px-4 py-2 border-2 border-blue-500/30 rounded-xl hover:bg-blue-900/50 text-blue-600 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-blue-500/30 rounded-xl hover:bg-blue-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-blue-600 font-medium"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mt5Accounts;