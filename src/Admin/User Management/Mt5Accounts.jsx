import React, { useState, useEffect } from 'react';
import { FaServer, FaSearch, FaEye, FaDollarSign, FaUser } from 'react-icons/fa';

const Mt5Accounts = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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
      { id: 369, name: 'Akash Sonmale', email: 'akashsonmale2026@gmail.com', mt5Count: 1, totalBalance: 0.00 },
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
    console.log(`Viewing MT5 accounts for user ${userId}`);
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
      <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${colorClass}`}>
        {count} Account{count !== 1 ? 's' : ''}
      </span>
    );
  };

  const totalUsers = filteredUsers.length;
  const totalBalance = filteredUsers.reduce((sum, user) => sum + user.totalBalance, 0);
  const totalAccounts = filteredUsers.reduce((sum, user) => sum + user.mt5Count, 0);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (num) => setCurrentPage(num);

  return (
    <div className="w-100 sm:w-full sm:max-w-[1800px] bg-violet-100 p-3 sm:p-4 md:p-6">
      <div className="max-w-[1600px] mx-auto w-full">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-md border border-blue-400 w-fit">
            <FaServer className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              MT5 Accounts
            </h1>
            <p className="text-gray-700 text-sm sm:text-base mt-1">
              All users who have MT5 accounts with their total balance.
            </p>

            <div className="flex flex-wrap gap-3 mt-2 text-sm">
              <span>Total Users: <strong className="text-blue-600">{totalUsers}</strong></span>
              <span>Total Accounts: <strong className="text-cyan-600">{totalAccounts}</strong></span>
              <span>
                Combined Balance:
                <strong className={`${totalBalance >= 0 ? 'text-emerald-600' : 'text-red-600'} ml-1`}>
                  ${totalBalance.toFixed(2)}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-md border border-blue-200">
            <div className="flex gap-3 items-center">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FaUser className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Active MT5 Users</p>
                <p className="text-xl font-bold">{totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md border border-cyan-200">
            <div className="flex gap-3 items-center">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <FaServer className="text-cyan-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total MT5 Accounts</p>
                <p className="text-xl font-bold">{totalAccounts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md border border-emerald-200">
            <div className="flex gap-3 items-center">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <FaDollarSign className="text-emerald-600 text-xl" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Combined Balance</p>
                <p className={`text-xl font-bold ${totalBalance >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  ${totalBalance.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="bg-white rounded-xl p-5 shadow-md border border-blue-200 mb-6 w-full">
          <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <FaSearch className="text-blue-500" />
            Search Name or Email
          </label>
          <div className="relative">
            <input
              className="w-full p-3 pl-10 bg-blue-50 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Start typing..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
          </div>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-xl shadow-md border border-blue-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Sr No.</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-center">MT5 Accounts</th>
                    <th className="p-4 text-right">Total Balance</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentItems.map((u, i) => (
                    <tr key={u.id} className="border-b hover:bg-blue-50">
                      <td className="p-4">{(currentPage - 1) * itemsPerPage + i + 1}</td>
                      <td className="p-4 font-semibold">{u.name}</td>
                      <td className="p-4 break-all">{u.email}</td>
                      <td className="p-4 text-center">{getMt5CountBadge(u.mt5Count)}</td>
                      <td className="p-4 text-right">
                        <span className={`font-bold ${getBalanceColor(u.totalBalance)}`}>
                          ${u.totalBalance.toFixed(2)}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => handleViewDetails(u.id)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          <FaEye className="inline-block mr-1" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>

        {/* MOBILE CARDS */}
        <div className="lg:hidden space-y-4">
          {currentItems.map((u, i) => (
            <div
              key={u.id}
              className="bg-white rounded-xl p-5 shadow-md border border-blue-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{u.name}</h3>
                  <p className="text-sm text-gray-600 break-all">{u.email}</p>
                </div>
                {getMt5CountBadge(u.mt5Count)}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-gray-600">Total Balance</p>
                  <p className={`font-bold text-lg ${getBalanceColor(u.totalBalance)}`}>
                    ${u.totalBalance.toFixed(2)}
                  </p>
                </div>

                <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-lg">
                  <p className="text-xs text-gray-600">MT5 Accounts</p>
                  <p className="font-bold text-lg">{u.mt5Count}</p>
                </div>
              </div>

              <button
                onClick={() => handleViewDetails(u.id)}
                className="mt-4 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <FaEye className="inline-block mr-1" /> View Accounts
              </button>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center">
            <div className="flex gap-2 flex-wrap justify-center">

              <button
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-40"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 border rounded-lg ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-blue-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-40"
              >
                Next
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mt5Accounts;
