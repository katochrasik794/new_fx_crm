import { useState } from 'react'
import { FiList, FiClock, FiCheck, FiX, FiSearch, FiEye, FiCreditCard } from 'react-icons/fi'
import { MdOutlineAccountBalance } from 'react-icons/md'

const IBWithdrawalManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const stats = [
    { icon: FiList, value: '23', label: 'Total Requests', color: 'from-blue-500 to-blue-700', border: 'border-blue-500' },
    { icon: FiClock, value: '0', label: 'Pending', amount: '$0.00', color: 'from-amber-500 to-amber-700', border: 'border-amber-500' },
    { icon: FiCheck, value: '15', label: 'Approved', amount: '$724.00', color: 'from-green-500 to-green-700', border: 'border-green-500' },
    { icon: FiX, value: '8', label: 'Rejected', color: 'from-red-500 to-red-700', border: 'border-red-500' }
  ]

  const withdrawals = [
    { id: 24, ibName: 'Rajesh Pawar', ibId: 382, email: 'raju.21pawar@gmail.com', amount: 23.00, method: 'Bank', status: 'Approved', date: 'Nov 13, 2025', time: '11:13', bankDetails: 'Account Holder: Rajesh Pawar\nBank Name: Bank of Baroda\nAccount Number: 04260100014144\nIFSC Code: BARB0KALYAN\nBank Address: Kalyan' },
    { id: 23, ibName: 'V R ENTERPRISE', ibId: 356, email: 'vrenterprisessatara@gmail.com', amount: 47.00, method: 'Bank', status: 'Approved', date: 'Nov 13, 2025', time: '10:41', bankDetails: 'Account Holder: V R ENTERPRISE\nBank Name: HDFC BANK\nAccount Number: 50200093253563\nIFSC Code: HDFC0000790\nBank Address: SATARA' },
    { id: 22, ibName: 'Sandip Kenjale', ibId: 365, email: 'sandipkenjale@gmail.com', amount: 10.00, method: 'Bank', status: 'Approved', date: 'Nov 13, 2025', time: '07:47', bankDetails: 'Account Holder: Sandip Kenjale\nBank Name: Kotak Mahindra bank\nAccount Number: 0446015408\nIFSC Code: KKBK0002038\nBank Address: Satara' },
    { id: 21, ibName: 'Ganesh Sutar', ibId: 364, email: 'ganeshsutar2002@gmail.com', amount: 11.00, method: 'Bank', status: 'Approved', date: 'Nov 12, 2025', time: '22:31', bankDetails: 'Account Holder: Ganesh Sutar\nBank Name: Kotak Bank\nAccount Number: 8012359482\nIFSC Code: KKBK0002038\nBank Address: Satara' },
    { id: 20, ibName: 'Pramod Kirdat', ibId: 366, email: 'kirdatpramod4@gmail.com', amount: 161.00, method: 'Bank', status: 'Approved', date: 'Nov 12, 2025', time: '21:29', bankDetails: 'Account Holder: Pramod Kirdat\nBank Name: Saraswat bank\nAccount Number: 382203100000966\nIFSC Code: SRCB0000382\nBank Address: Satara' },
    { id: 19, ibName: 'Sandip Kenjale', ibId: 365, email: 'sandipkenjale@gmail.com', amount: 4.00, method: 'Bank', status: 'Rejected', date: 'Nov 12, 2025', time: '15:01', bankDetails: 'Account Holder: Sandip Kenjale\nBank Name: Kotak Mahindra bank\nAccount Number: 0446015408\nIFSC Code: KKBK0002038\nBank Address: Satara' },
    { id: 18, ibName: 'sanjay Jadhav', ibId: 361, email: 'jsanjay1070@gmail.com', amount: 27.00, method: 'Bank', status: 'Approved', date: 'Nov 12, 2025', time: '07:53', bankDetails: 'Account Holder: sanjay Jadhav\nBank Name: CSB Bank\nAccount Number: 0370010000456\nIFSC Code: CSBK0000370\nBank Address: Satara' },
    { id: 17, ibName: 'Ganesh Sutar', ibId: 364, email: 'ganeshsutar2002@gmail.com', amount: 15.00, method: 'Bank', status: 'Approved', date: 'Nov 12, 2025', time: '07:20', bankDetails: 'Account Holder: Ganesh Sutar\nBank Name: Kotak Bank\nAccount Number: 8012359482\nIFSC Code: KKBK0002038\nBank Address: Satara' },
    { id: 16, ibName: 'Anil Gaikwad', ibId: 265, email: 'anilgaikwad9748ib@gmail.com', amount: 17.00, method: 'Bank', status: 'Approved', date: 'Nov 11, 2025', time: '20:54', bankDetails: 'Account Holder: Anil Gaikwad\nBank Name: Bank of india\nAccount Number: 071318210000350\nIFSC Code: BKID0000713\nBank Address: Piliv Tal: Malshiras Dist : Sholapur' },
    { id: 15, ibName: 'V R ENTERPRISE', ibId: 356, email: 'vrenterprisessatara@gmail.com', amount: 45.00, method: 'Bank', status: 'Approved', date: 'Nov 11, 2025', time: '12:43', bankDetails: 'Account Holder: V R ENTERPRISE\nBank Name: HDFC BANK\nAccount Number: 50200093253563\nIFSC Code: HDFC0000790\nBank Address: SATARA' }
  ]

  const filteredWithdrawals = withdrawals.filter(w =>
    w.ibName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleViewDetails = (withdrawal) => {
    setSelectedWithdrawal(withdrawal)
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
            <FiCreditCard className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">IB Withdrawal Management</h4>
            <p className="text-sm md:text-base text-gray-600">Review and manage IB commission withdrawal requests</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {stats.map((stat, idx) => {
          const IconComponent = stat.icon
          return (
            <div key={idx} className={`relative overflow-hidden bg-gradient-to-br ${stat.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${stat.border}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative text-center">
                <IconComponent className="text-4xl text-white mx-auto mb-2" />
                <h5 className="text-3xl font-bold text-white mb-1">{stat.value}</h5>
                <small className="text-white/90 text-sm font-medium uppercase tracking-wide">{stat.label}</small>
                {stat.amount && <div className="text-white/80 text-sm mt-1">{stat.amount}</div>}
              </div>
            </div>
          )
        })}
      </div>

      {/* Withdrawal Requests Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h5 className="text-xl font-bold text-white">Withdrawal Requests</h5>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email..."
              className="flex-1 md:w-64 px-4 py-2 border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 rounded-xl focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all"
            />
            <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all">
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto p-6">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Request ID</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">IB User</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Payment Method</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Requested Date</th>
                <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredWithdrawals.map((withdrawal) => (
                <tr key={withdrawal.id} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all">
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 font-bold rounded-full text-sm">#{withdrawal.id}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-gray-800">{withdrawal.ibName}</div>
                    <small className="text-gray-500">ID: {withdrawal.ibId}</small>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{withdrawal.email}</td>
                  <td className="px-4 py-4">
                    <span className="font-bold text-blue-600">${withdrawal.amount.toFixed(2)}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <MdOutlineAccountBalance className="text-gray-600" />
                      <span className="text-gray-700">{withdrawal.method}</span>
                    </div>
                    <button
                      onClick={() => handleViewDetails(withdrawal)}
                      className="text-blue-600 hover:text-blue-700 text-sm mt-1 flex items-center gap-1"
                    >
                      <FiEye /> View Details
                    </button>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-3 py-1 font-bold rounded-full text-xs uppercase ${
                      withdrawal.status === 'Approved' ? 'bg-green-100 text-green-700' :
                      withdrawal.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {withdrawal.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-gray-800">{withdrawal.date}</div>
                    <small className="text-gray-500">{withdrawal.time}</small>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className="text-gray-400">-</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden p-4 space-y-4">
          {filteredWithdrawals.map((withdrawal) => (
            <div key={withdrawal.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-4 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 font-bold rounded-full text-xs">#{withdrawal.id}</span>
                  <h3 className="font-bold text-gray-800 mt-2">{withdrawal.ibName}</h3>
                  <p className="text-sm text-gray-600">{withdrawal.email}</p>
                  <small className="text-gray-500">ID: {withdrawal.ibId}</small>
                </div>
                <span className={`px-3 py-1 font-bold rounded-full text-xs ${
                  withdrawal.status === 'Approved' ? 'bg-green-100 text-green-700' :
                  withdrawal.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {withdrawal.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-violet-100 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Amount</p>
                  <p className="font-bold text-blue-600">${withdrawal.amount.toFixed(2)}</p>
                </div>
                <div className="bg-violet-100 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Method</p>
                  <p className="font-semibold text-gray-700">{withdrawal.method}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                <span>{withdrawal.date} {withdrawal.time}</span>
              </div>

              <button
                onClick={() => handleViewDetails(withdrawal)}
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-2"
              >
                <FiEye /> View Payment Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedWithdrawal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Payment Details</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/20 rounded-lg transition-all">
                <FiX className="text-2xl text-white" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Request ID</p>
                  <p className="text-lg font-bold text-gray-800">#{selectedWithdrawal.id}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Amount</p>
                  <p className="text-2xl font-bold text-green-600">${selectedWithdrawal.amount.toFixed(2)}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 mb-2 font-semibold">Bank Details</p>
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">{selectedWithdrawal.bankDetails}</pre>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <span className={`px-3 py-1 font-bold rounded-full text-xs ${
                    selectedWithdrawal.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    selectedWithdrawal.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {selectedWithdrawal.status}
                  </span>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Date</p>
                  <p className="font-semibold text-gray-800">{selectedWithdrawal.date}</p>
                  <p className="text-sm text-gray-600">{selectedWithdrawal.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default IBWithdrawalManagement
