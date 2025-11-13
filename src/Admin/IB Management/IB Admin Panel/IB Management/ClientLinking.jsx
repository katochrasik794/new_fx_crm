import { useState } from 'react'
import { FiUsers, FiCheck, FiClock, FiEye, FiLink, FiSearch, FiInfo } from 'react-icons/fi'
import { HiOutlineUserGroup } from 'react-icons/hi'

const ClientLinking = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [clientInput, setClientInput] = useState('')
  const [selectedIB, setSelectedIB] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('default')
  const [note, setNote] = useState('')

  const stats = [
    { icon: FiUsers, value: '0', label: 'Total Clients', color: 'from-blue-500 to-blue-700' },
    { icon: FiCheck, value: '0', label: 'Linked', color: 'from-green-500 to-green-700' },
    { icon: FiClock, value: '0', label: 'Pending', color: 'from-amber-500 to-amber-700' },
    { icon: HiOutlineUserGroup, value: '0', label: 'IBs', color: 'from-cyan-500 to-cyan-700' }
  ]

  const handlePreview = () => {
    alert('Preview functionality - Coming Soon!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
            <FiLink className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">Client Linking</h4>
            <p className="text-sm md:text-base text-gray-600">Assign clients to direct IBs per group</p>
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
          )
        })}
      </div>

      {/* Linking Form + Pending Requests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Assign Client Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex justify-between items-center">
            <h6 className="text-xl font-bold text-white">Assign Client to IB</h6>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
              <FiInfo className="text-white" />
              <span className="text-white text-sm font-semibold">Preview</span>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Client (Login/Email)</label>
                <input
                  type="text"
                  value={clientInput}
                  onChange={(e) => setClientInput(e.target.value)}
                  placeholder="Client login or email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Direct IB</label>
                <select
                  value={selectedIB}
                  onChange={(e) => setSelectedIB(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                >
                  <option value="">Select IB...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Group</label>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                >
                  <option value="default">Default Group</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Note</label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Optional note"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePreview}
                className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <FiEye /> Preview
              </button>
              <button
                disabled
                className="flex-1 py-3 bg-gray-300 text-gray-500 font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FiLink /> Link (Coming Soon)
              </button>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-start gap-2">
                <FiInfo className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800">Linking validates IB entitlements and budgets.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 flex justify-between items-center">
            <h6 className="text-xl font-bold text-white">Pending Linking Requests</h6>
            <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all">
              Open Requests
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Client</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Requested IB</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase hidden md:table-cell">Group</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase hidden lg:table-cell">Requested</th>
                    <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <FiInfo className="text-3xl text-gray-400" />
                        <p>No pending requests</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Linked Clients Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h6 className="text-xl font-bold text-white">Linked Clients</h6>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="flex-1 md:w-64 px-4 py-2 border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 rounded-xl focus:outline-none focus:border-white focus:ring-4 focus:ring-white/20 transition-all"
            />
            <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all">
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Client</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase">Direct IB</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase hidden md:table-cell">Group</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase hidden lg:table-cell">Linked On</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase hidden lg:table-cell">Status</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-gray-700 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <FiUsers className="text-3xl text-gray-400" />
                      <p>No linked clients yet.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientLinking
