import React, { useState, useEffect } from 'react';
import { FaChartLine, FaSearch, FaFilter, FaDollarSign, FaUsers, FaChartBar, FaTrophy, FaTimes, FaRedo } from 'react-icons/fa';

const ProfitLossReport = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [plFilter, setPlFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockUsers = [
      { id: 1, name: 'Rajendra Dudhe', email: 'kalerushikesh350@gmail.com', mt5: '369008', netPl: 957.59, volume: 12.0000, winRate: 69.63, joined: '06 Nov 2025', lastTrade: '11 Nov 2025' },
      { id: 2, name: 'Om Kakade', email: 'omkakade0809@gmail.com', mt5: '369027', netPl: 265.71, volume: 3.8400, winRate: 71.43, joined: '03 Nov 2025', lastTrade: '11 Nov 2025' },
      { id: 3, name: 'Rajesh Kadu', email: 'shreefire_rajesh@rediffmail.com', mt5: '7100016979', netPl: 124.52, volume: 0.0200, winRate: 100, joined: '16 Oct 2025', lastTrade: '10 Nov 2025' },
      { id: 4, name: 'Pankaj Matere', email: 'pankajmatere08@gmail.com', mt5: '—', netPl: 106.81, volume: 0.3300, winRate: 57.58, joined: '03 Nov 2025', lastTrade: '29 Oct 2025' },
      { id: 5, name: 'PRAVIN KOLI', email: 'kolipl28@gmail.com', mt5: '369026', netPl: 106.40, volume: 2.2600, winRate: 53.85, joined: '03 Nov 2025', lastTrade: '11 Nov 2025' },
      { id: 6, name: 'Vinod Kumar', email: 'vkvinodkumar760@gmail.com', mt5: '369070', netPl: 18.26, volume: 0.0500, winRate: 80, joined: '10 Nov 2025', lastTrade: '11 Nov 2025' },
      { id: 7, name: 'Rajesh Pawar', email: 'raju.21pawar@gmail.com', mt5: '369075', netPl: 13.36, volume: 0.0900, winRate: 100, joined: '11 Nov 2025', lastTrade: '11 Nov 2025' },
      { id: 8, name: 'Piyush dhakan', email: 'piyush_dhakan@hotmail.com', mt5: '369037', netPl: 5.05, volume: 0.0500, winRate: 100, joined: '03 Nov 2025', lastTrade: '11 Nov 2025' },
      { id: 9, name: 'Ramesh Singh', email: 'rramesh.singh77@gmail.com', mt5: '7100016978', netPl: 0.71, volume: 0.0100, winRate: 100, joined: '16 Oct 2025', lastTrade: '17 Oct 2025' },
      { id: 10, name: 'ABCD XYZ', email: 'admin@gmail.com', mt5: '—', netPl: 0.00, volume: 0.0000, winRate: null, joined: '15 Oct 2025', lastTrade: '—' },
      { id: 11, name: 'r k', email: 'katochrasik000@gmail.com', mt5: '7100016966, 7100016967, 7100016968, 7100016985, 7100017064, 7100017092', netPl: 0.00, volume: 0.0000, winRate: null, joined: '15 Oct 2025', lastTrade: '—' },
      { id: 12, name: 'RAHUL WAMANRAO BORKAR', email: 'rahulborkar@gmail.com', mt5: '—', netPl: 0.00, volume: 0.0000, winRate: null, joined: '15 Oct 2025', lastTrade: '—' },
      { id: 13, name: 'Bhairavi Kamble', email: 'sayhi2bhairu@gmail.com', mt5: '7100016973', netPl: 0.00, volume: 0.0000, winRate: null, joined: '15 Oct 2025', lastTrade: '—' },
      { id: 14, name: 'Mukul Tyagi', email: 'finwizacademy@gmail.com', mt5: '—', netPl: 0.00, volume: 0.0000, winRate: null, joined: '15 Oct 2025', lastTrade: '—' },
      { id: 15, name: 'Ajay Rajput', email: 'ajayrajput99911@gmail.com', mt5: '—', netPl: 0.00, volume: 0.0000, winRate: null, joined: '16 Oct 2025', lastTrade: '—' },
      { id: 16, name: 'Prashant Karnwal', email: 'karnwalprashant20@gmail.com', mt5: '—', netPl: 0.00, volume: 0.0000, winRate: null, joined: '16 Oct 2025', lastTrade: '—' },
      { id: 17, name: 'Younes Alshoafi', email: 'garahaltopai@gmail.com', mt5: '—', netPl: 0.00, volume: 0.0000, winRate: null, joined: '17 Oct 2025', lastTrade: '—' },
      { id: 18, name: 'Pratik Babar', email: 'pratikbabar726@gmail.com', mt5: '7100017037, 7100017042, 7100017043', netPl: 0.00, volume: 0.0000, winRate: null, joined: '19 Oct 2025', lastTrade: '—' },
      { id: 19, name: 'KERLENS DAMEUS', email: 'kerlensdameus89@gmail.com', mt5: '7100017041', netPl: 0.00, volume: 0.0000, winRate: null, joined: '20 Oct 2025', lastTrade: '—' },
      { id: 20, name: 'Ajay Thengil', email: 'ajaythengil@gmail.com', mt5: '369006', netPl: 0.00, volume: 0.0000, winRate: null, joined: '24 Oct 2025', lastTrade: '—' },
      { id: 21, name: 'India Head', email: 'candlestoryofficial@gmail.com', mt5: '7100017070', netPl: 0.00, volume: 0.0000, winRate: null, joined: '25 Oct 2025', lastTrade: '—' },
      { id: 22, name: 'Rajan Agalave', email: 'panshoindia@gmail.com', mt5: '—', netPl: 0.00, volume: 0.0000, winRate: null, joined: '27 Oct 2025', lastTrade: '—' },
      { id: 23, name: 'Priyanka Gelye', email: 'prakashgelye85@gmail.com', mt5: '7100017081', netPl: 0.00, volume: 0.0000, winRate: null, joined: '27 Oct 2025', lastTrade: '—' },
      { id: 24, name: 'Ghazanfar Akram', email: 'alimohsinaa1@gmail.com', mt5: '7100017082', netPl: 0.00, volume: 0.0000, winRate: null, joined: '27 Oct 2025', lastTrade: '—' },
      { id: 25, name: 'Mudassar Nawaz', email: 'alimohsinaa2@gmail.com', mt5: '7100017083', netPl: 0.00, volume: 0.0000, winRate: null, joined: '27 Oct 2025', lastTrade: '—' }
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    let filtered = users.filter(user => {
      const matchesSearch = searchTerm === '' ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPlFilter = plFilter === '' ||
        (plFilter === 'profit' && user.netPl > 0) ||
        (plFilter === 'loss' && user.netPl < 0);

      return matchesSearch && matchesPlFilter;
    });

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm, plFilter]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setPlFilter('');
    setCurrentPage(1);
  };

  const getPlBadge = (netPl) => {
    if (netPl > 0) {
      return (
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 border-2 border-emerald-200">
          <FaTrophy className="inline mr-1" />
          Profit
        </span>
      );
    } else if (netPl < 0) {
      return (
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800 border-2 border-red-200">
          <FaTimes className="inline mr-1" />
          Loss
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-800 border-2 border-gray-200">
          Break Even
        </span>
      );
    }
  };

  const getWinRateBadge = (winRate) => {
    if (!winRate) return <span className="text-gray-400">—</span>;

    let colorClass = 'bg-gray-100 text-gray-800';
    if (winRate >= 80) colorClass = 'bg-emerald-100 text-emerald-800';
    else if (winRate >= 60) colorClass = 'bg-blue-100 text-blue-800';
    else if (winRate >= 40) colorClass = 'bg-yellow-100 text-yellow-800';
    else colorClass = 'bg-red-100 text-red-800';

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>
        {winRate}%
      </span>
    );
  };

  const totalUsers = filteredUsers.length;
  const totalNetPl = filteredUsers.reduce((sum, user) => sum + user.netPl, 0);
  const totalVolume = filteredUsers.reduce((sum, user) => sum + user.volume, 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-xl border-2 border-emerald-400">
              <FaChartLine className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                User Profit/Loss Report
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                View all users with their trading profit and loss statistics.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-500/30 p-6 hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <FaUsers className="text-emerald-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-red-500/30 p-6 hover:shadow-red-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-xl">
                <FaDollarSign className="text-red-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Net P/L</p>
                <p className={`text-2xl font-bold ${totalNetPl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  ${totalNetPl.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-500/30 p-6 hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FaChartBar className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Volume</p>
                <p className="text-2xl font-bold text-gray-900">{totalVolume.toFixed(4)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-emerald-500/30 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaSearch className="text-emerald-500" />
                Search
              </label>
              <input
                type="text"
                placeholder="Name, Email, Phone..."
                className="w-full px-4 py-3 bg-emerald-50/50 border-2 border-emerald-500/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-900 placeholder-emerald-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaFilter className="text-emerald-500" />
                Profit/Loss Type
              </label>
              <select
                className="w-full px-4 py-3 bg-emerald-50/50 border-2 border-emerald-500/30 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 text-gray-900"
                value={plFilter}
                onChange={(e) => setPlFilter(e.target.value)}
              >
                <option value="">All Users</option>
                <option value="profit">Profit Users Only</option>
                <option value="loss">Loss Users Only</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleResetFilters}
                className="w-full px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm font-medium"
              >
                <FaRedo className="text-xs" />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Table/Card View */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-emerald-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">MT5 No</th>
                      <th className="px-6 py-4 text-right text-white font-semibold text-sm">Net P/L</th>
                      <th className="px-6 py-4 text-right text-white font-semibold text-sm">Volume</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Win Rate</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Joined</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Last Trade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-100">
                    {currentItems.map((user) => (
                      <tr key={user.id} className="hover:bg-emerald-50/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-emerald-600 bg-emerald-50 rounded-lg px-2 py-1">
                          {user.mt5}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className={`text-sm font-bold ${user.netPl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                              ${user.netPl.toFixed(2)}
                            </span>
                            {getPlBadge(user.netPl)}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                          {user.volume.toFixed(4)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {getWinRateBadge(user.winRate)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {user.lastTrade}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-emerald-50/50">
                    <tr>
                      <td colSpan="3" className="px-6 py-4 text-right font-bold text-gray-900">
                        Totals:
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`font-bold ${totalNetPl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                          ${totalNetPl.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-gray-900">
                        {totalVolume.toFixed(4)}
                      </td>
                      <td colSpan="3"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {currentItems.map((user, index) => (
              <div key={user.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-emerald-500/30 p-6 hover:shadow-emerald-500/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-emerald-400">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{user.name}</h3>
                      <p className="text-sm text-gray-600 break-all">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {getPlBadge(user.netPl)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-500/20">
                    <div className="text-xs text-gray-600 mb-1">Net P/L</div>
                    <div className={`text-lg font-bold ${user.netPl >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      ${user.netPl.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-500/20">
                    <div className="text-xs text-gray-600 mb-1">Volume</div>
                    <div className="text-lg font-bold text-gray-900">{user.volume.toFixed(4)}</div>
                  </div>
                  <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-500/20">
                    <div className="text-xs text-gray-600 mb-1">Win Rate</div>
                    <div className="text-lg font-bold text-gray-900">
                      {user.winRate ? `${user.winRate}%` : '—'}
                    </div>
                  </div>
                  <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-500/20">
                    <div className="text-xs text-gray-600 mb-1">MT5</div>
                    <div className="text-sm font-medium text-orange-600 truncate">{user.mt5}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
                  <div className="text-xs text-gray-500">
                    Joined: {user.joined} | Last Trade: {user.lastTrade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-emerald-500/30 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-emerald-500/30 rounded-xl hover:bg-emerald-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-emerald-600 font-medium"
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
                          ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white border-emerald-600'
                          : 'border-emerald-500/30 hover:bg-emerald-900/50 text-emerald-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-emerald-400">...</span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className="px-4 py-2 border-2 border-emerald-500/30 rounded-xl hover:bg-emerald-900/50 text-emerald-600 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-emerald-500/30 rounded-xl hover:bg-emerald-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-emerald-600 font-medium"
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

export default ProfitLossReport;