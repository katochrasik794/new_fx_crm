import { useState } from 'react'
import { HiArrowUp, HiCheck, HiChartBar, HiUserGroup, HiPlus, HiPencil, HiEye, HiEyeOff, HiTrash } from 'react-icons/hi'
import { RiCoinLine } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'

export default function CommissionDistribution() {
  const [showModal, setShowModal] = useState(false)
  const [selectedCommission, setSelectedCommission] = useState(null)
  const [distributions] = useState([
    { id: 1, groupName: 'ECN', groupPath: 'FINCRM_B\\ECN', pipValue: 0.20, availability: 'all_users', status: 0, created: '2025-10-16 01:32', updated: '2025-10-28 19:44' },
    { id: 6, groupName: 'PLUS', groupPath: 'FINCRM_B\\Plus', pipValue: 2.00, availability: 'all_users', status: 1, created: '2025-10-31 14:49', updated: '2025-11-01 20:19' },
    { id: 2, groupName: 'PRO', groupPath: 'FINCRM_B\\Pro', pipValue: 1.00, availability: 'all_users', status: 1, created: '2025-10-16 01:35', updated: '2025-10-31 16:29' },
    { id: 3, groupName: 'STANDARD', groupPath: 'FINCRM_B\\Standard', pipValue: 1.50, availability: 'all_users', status: 1, created: '2025-10-16 01:35', updated: '2025-10-31 16:27' },
    { id: 4, groupName: 'STARTUP', groupPath: 'FINCRM_B\\Startup', pipValue: 0.01, availability: 'all_users', status: 0, created: '2025-10-16 01:36', updated: '2025-10-28 19:45' }
  ])

  const totalDistributions = distributions.length
  const activeDistributions = distributions.filter(d => d.status === 1).length
  const avgPipValue = (distributions.reduce((sum, d) => sum + d.pipValue, 0) / distributions.length).toFixed(2)

  return (
    <div className="w-[350px] sm:w-full max-w-[2800px] p-6 bg-violet-100 min-h-screen">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-800">Commission Distribution</h4>
          <nav className="text-sm text-gray-600">
            <a href="/dashboard" className="text-blue-600 hover:underline">IB Portal</a>
            <span className="mx-2">/</span>
            <span>Commission Distribution</span>
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase text-gray-500 font-medium">Total Distributions</p>
            <HiArrowUp className="text-green-500" />
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold mb-2">{totalDistributions}</h4>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                <RiCoinLine /> Pip Values
              </span>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <RiCoinLine className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase text-gray-500 font-medium">Active Distributions</p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold mb-2">{activeDistributions}</h4>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                <HiCheck /> Active
              </span>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <HiCheck className="text-2xl text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase text-gray-500 font-medium">Average Pip Value</p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold mb-2">{avgPipValue}</h4>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm">
                <HiChartBar /> Average
              </span>
            </div>
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <HiChartBar className="text-2xl text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase text-gray-500 font-medium">Available Groups</p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold mb-2">17</h4>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm">
                <HiUserGroup /> Groups
              </span>
            </div>
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <HiUserGroup className="text-2xl text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex items-center justify-between flex-wrap gap-4">
          <h4 className="text-lg font-semibold">Commission Distribution Actions</h4>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <HiPlus />Add Group
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h4 className="text-lg font-semibold">Commission Distribution Settings</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Group Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Group Path</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Pip Value</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Availability</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Created</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Updated</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {distributions.map(dist => (
                <tr key={dist.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{dist.id}</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {dist.groupName}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                      {dist.groupPath}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-blue-600">{dist.pipValue.toFixed(2)}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">All Users</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${dist.status === 1 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {dist.status === 1 ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3">{dist.created}</td>
                  <td className="px-4 py-3">{dist.updated}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button onClick={() => { setSelectedCommission(dist); setShowModal(true); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded border border-blue-600">
                        <HiPencil />
                      </button>
                      <button className={`p-2 rounded border ${dist.status === 1 ? 'text-amber-600 border-amber-600 hover:bg-amber-50' : 'text-green-600 border-green-600 hover:bg-green-50'}`}>
                        {dist.status === 1 ? <HiEyeOff /> : <HiEye />}
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded border border-red-600">
                        <HiTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white border-2 border-black rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b">
              <h5 className="text-xl font-semibold">Edit Commission - {selectedCommission?.groupName}</h5>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <MdClose className="text-2xl" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
                <input type="text" defaultValue={selectedCommission?.groupName} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Path</label>
                <input type="text" defaultValue={selectedCommission?.groupPath} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pip Value</label>
                <input type="number" step="0.01" defaultValue={selectedCommission?.pipValue} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <select defaultValue={selectedCommission?.availability} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="all_users">All Users</option>
                  <option value="specific_users">Specific Users</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
