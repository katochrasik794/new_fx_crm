import { useState } from 'react'
import { FiUsers, FiUserCheck, FiRefreshCw, FiEye, FiSend, FiX } from 'react-icons/fi'
import { HiUserGroup } from 'react-icons/hi'
import { IoWalletOutline } from 'react-icons/io5'
import { MdCalculate } from 'react-icons/md'

const IBCommissionDistribution = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [rateFilter, setRateFilter] = useState('')
  const [sortBy, setSortBy] = useState('approved_at')
  const [selectedIB, setSelectedIB] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleViewDetails = (ib) => {
    setSelectedIB(ib)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedIB(null)
  }

  const stats = [
    { icon: FiUsers, value: '51', label: 'Total Approved IBs', color: 'from-blue-500 to-blue-700' },
    { icon: FiUserCheck, value: '42', label: 'Total Direct Clients', color: 'from-green-500 to-green-700' },
    { icon: HiUserGroup, value: '29', label: 'Total Sub-IBs', color: 'from-cyan-500 to-cyan-700' },
    { icon: IoWalletOutline, value: '$3,815.56', label: 'Total IB Balance', color: 'from-amber-500 to-amber-700' }
  ]

  const ibData = [
    { id: 388, name: 'Ravindra Pophale', email: 'ravindrapophale13@gmail.com', approved: 'Nov 12, 2025', rate: 1.20, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 },
    { id: 387, name: 'Ehsan Ali', email: 'ehsanali005@gmail.com', approved: 'Nov 12, 2025', rate: 1.70, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 },
    { id: 385, name: 'Ram Jawari', email: 'ram13august@gmail.com', approved: 'Nov 11, 2025', rate: 0.70, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 },
    { id: 384, name: 'Om Ramagar', email: 'Omom37401@gmail.com', approved: 'Nov 11, 2025', rate: 1.30, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 },
    { id: 383, name: 'jagdish sonar', email: 'jagdishsonar020@gmail.com', approved: 'Nov 11, 2025', rate: 1.20, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 },
    { id: 382, name: 'Rajesh Pawar', email: 'raju.21pawar@gmail.com', approved: 'Nov 11, 2025', rate: 1.30, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 85.63, commission: 0 },
    { id: 381, name: 'Rushikesh kale', email: 'kale91150@gmail.com', approved: 'Nov 11, 2025', rate: 1.00, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 },
    { id: 373, name: 'sanjay Jadhav', email: 'sj0447439@gmail.com', approved: 'Nov 09, 2025', rate: 1.20, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 248.90, commission: 0 },
    { id: 368, name: 'Tushar Warad', email: 'tusharimp13@gmail.com', approved: 'Nov 07, 2025', rate: 1.30, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 },
    { id: 367, name: 'Akash Sonmale', email: 'akashsonmale2026@gmail.com', approved: 'Nov 07, 2025', rate: 1.30, directClients: 0, subIBs: 0, totalReferrals: 0, balance: 0, commission: 0 }
  ]

  const filteredData = ibData.filter(ib => 
    ib.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ib.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
            <FiUsers className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">IB Commission Distribution</h4>
            <p className="text-sm md:text-base text-gray-600">Advanced IB Commission Management and Distribution System</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon
          return (
          <div key={idx} className={`relative overflow-hidden bg-gradient-to-br ${stat.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative flex items-center gap-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl">
                <IconComponent className="text-3xl text-white" />
              </div>
              <div>
                <p className="text-white/90 text-sm font-medium mb-1">{stat.label}</p>
                <h5 className="text-3xl font-bold text-white">{stat.value}</h5>
              </div>
            </div>
          </div>
        )})
      }
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Rate</label>
            <select
              value={rateFilter}
              onChange={(e) => setRateFilter(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            >
              <option value="">All Rates</option>
              <option value="0-5">$0 - $5</option>
              <option value="5-10">$5 - $10</option>
              <option value="10-15">$10 - $15</option>
              <option value="15+">$15+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            >
              <option value="approved_at">Approval Date</option>
              <option value="name">Name</option>
              <option value="ib_rate">IB Rate</option>
              <option value="direct_clients">Direct Clients</option>
              <option value="total_balance">Total Balance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">&nbsp;</label>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <FiRefreshCw />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <h5 className="text-xl font-bold text-white">IB Distribution Table</h5>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Sr No.</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">IB Details</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">IB Rate</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Direct Clients</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Sub-IBs</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Total Referrals</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Total Balance</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Commission</th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((ib, idx) => (
                <tr key={ib.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200">
                  <td className="px-6 py-4 text-center font-semibold text-gray-700">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-bold text-gray-800">{ib.name}</div>
                      <div className="text-sm text-gray-500">{ib.email}</div>
                      <div className="text-xs text-gray-400 mt-1">Approved: {ib.approved}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full text-xs whitespace-nowrap">
                      {ib.rate.toFixed(2)} PIP
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-full text-sm shadow-md">
                      {ib.directClients}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full text-sm shadow-md">
                      {ib.subIBs}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold rounded-full text-sm shadow-md">
                      {ib.totalReferrals}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-gray-800">${ib.balance.toFixed(2)}</td>
                  <td className="px-6 py-4 text-center font-bold text-green-600">${ib.commission.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button onClick={() => handleViewDetails(ib)} className="px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg text-sm font-semibold" title="View Details">
                        <FiEye className="text-base" />
                      </button>
                      <button className="px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg text-sm font-semibold" title="Calculate">
                        <MdCalculate className="text-base" />
                      </button>
                      <button className="px-3 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg text-sm font-semibold" title="Distribute">
                        <FiSend className="text-base" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden p-4 space-y-4">
          {filteredData.map((ib, idx) => (
            <div key={ib.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-4 border-l-4 border-blue-500 hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded">{idx + 1}</span>
                    <h3 className="font-bold text-gray-800">{ib.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{ib.email}</p>
                  <p className="text-xs text-gray-400 mt-1">Approved: {ib.approved}</p>
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full text-xs shadow-md whitespace-nowrap">
                  PIP {ib.rate.toFixed(2)}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Direct</div>
                  <div className="font-bold text-green-600">{ib.directClients}</div>
                </div>
                <div className="text-center p-2 bg-cyan-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Sub-IBs</div>
                  <div className="font-bold text-cyan-600">{ib.subIBs}</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">Referrals</div>
                  <div className="font-bold text-gray-600">{ib.totalReferrals}</div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3 p-2 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-xs text-gray-600">Balance</div>
                  <div className="font-bold text-gray-800">${ib.balance.toFixed(2)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-600">Commission</div>
                  <div className="font-bold text-green-600">${ib.commission.toFixed(2)}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={() => handleViewDetails(ib)} className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-blue-700 transition-all shadow-md flex items-center justify-center gap-2">
                  <FiEye /> View
                </button>
                <button className="flex-1 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold text-sm hover:from-green-600 hover:to-green-700 transition-all shadow-md flex items-center justify-center gap-2">
                  <MdCalculate /> Calculate
                </button>
                <button className="flex-1 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold text-sm hover:from-amber-600 hover:to-amber-700 transition-all shadow-md flex items-center justify-center gap-2">
                  <FiSend /> Send
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedIB && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">IB Details</h3>
              <button onClick={closeModal} className="p-2 hover:bg-white/20 rounded-lg transition-all">
                <FiX className="text-2xl text-white" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">IB Name</p>
                  <p className="text-lg font-bold text-gray-800">{selectedIB.name}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-lg font-bold text-gray-800">{selectedIB.email}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">IB Rate</p>
                  <p className="text-lg font-bold text-green-600">PIP {selectedIB.rate.toFixed(2)}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Approved Date</p>
                  <p className="text-lg font-bold text-purple-600">{selectedIB.approved}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-gray-600 mb-2">Direct Clients</p>
                  <p className="text-3xl font-bold text-green-600">{selectedIB.directClients}</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-gray-600 mb-2">Sub-IBs</p>
                  <p className="text-3xl font-bold text-cyan-600">{selectedIB.subIBs}</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-gray-600 mb-2">Total Referrals</p>
                  <p className="text-3xl font-bold text-gray-600">{selectedIB.totalReferrals}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Total Balance</p>
                  <p className="text-2xl font-bold text-amber-600">${selectedIB.balance.toFixed(2)}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Commission</p>
                  <p className="text-2xl font-bold text-green-600">${selectedIB.commission.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <MdCalculate className="text-xl" /> Calculate Commission
                </button>
                <button className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <FiSend className="text-xl" /> Distribute
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default IBCommissionDistribution
