import { useState } from 'react'
import { HiArrowUp, HiUserGroup, HiServer, HiRefresh, HiEye, HiTrash, HiPencil } from 'react-icons/hi'
import { MdBugReport, MdClose } from 'react-icons/md'
import { IoReload } from 'react-icons/io5'

export default function TradingGroups() {
  const [showModal, setShowModal] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [groups] = useState([
    { id: 1, name: 'OXO_A\\Classic', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 13, name: 'OXO_A\\ECN', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '70%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 2, name: 'OXO_A\\ECN+$10Comm', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '15%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 3, name: 'OXO_A\\ECN+$5Comm', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '70%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 4, name: 'OXO_A\\Prime', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 5, name: 'OXO_A\\Pro', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 16, name: 'OXO_A\\Standard', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 12, name: 'OXO_A\\Startup', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'A' },
    { id: 6, name: 'OXO_B\\Classic', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' },
    { id: 14, name: 'OXO_B\\ECN', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '70%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' },
    { id: 7, name: 'OXO_B\\ECN+$10Comm', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '15%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' },
    { id: 8, name: 'OXO_B\\ECN+$5Comm', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '70%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' },
    { id: 89, name: 'OXO_B\\Plus', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-31 14:44', type: 'B' },
    { id: 9, name: 'OXO_B\\Prime', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' },
    { id: 10, name: 'OXO_B\\Pro', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' },
    { id: 15, name: 'OXO_B\\Standard', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' },
    { id: 11, name: 'OXO_B\\Startup', server: 1, company: 'OXO Markets Limited', currency: 0, marginCall: '100%', stopOut: '50%', tradeFlags: 16, created: '2025-10-15 23:08', type: 'B' }
  ])

  const oxoACount = groups.filter(g => g.type === 'A').length
  const oxoBCount = groups.filter(g => g.type === 'B').length

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-800">Group Management</h4>
          <nav className="text-sm text-gray-600">
            <a href="/dashboard" className="text-blue-600 hover:underline">IB Portal</a>
            <span className="mx-2">/</span>
            <span>Group Management</span>
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase text-gray-500 font-medium">Total Groups</p>
            <HiArrowUp className="text-green-500" />
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold mb-2">{groups.length}</h4>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                <HiUserGroup /> Groups
              </span>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <HiUserGroup className="text-2xl text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase text-gray-500 font-medium">OXO_A Groups</p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold mb-2">{oxoACount}</h4>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm">
                <HiServer /> Server A
              </span>
            </div>
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
              <HiServer className="text-2xl text-cyan-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm uppercase text-gray-500 font-medium">OXO_B Groups</p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h4 className="text-3xl font-bold mb-2">{oxoBCount}</h4>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm">
                <HiServer /> Server B
              </span>
            </div>
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <HiServer className="text-2xl text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b flex items-center justify-between flex-wrap gap-4">
          <h4 className="text-lg font-semibold">Group Management Actions</h4>
          <div className="flex gap-2 flex-wrap">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <HiRefresh />Sync from API
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
              <IoReload />Refresh Table
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
              <MdBugReport />Debug AJAX
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h4 className="text-lg font-semibold">Trading Account Groups</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Group Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Server</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Company</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Currency</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Margin Call</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Stop Out</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Trade Flags</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Created</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {groups.map(group => (
                <tr key={group.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{group.id}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${group.type === 'A' ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700'}`}>
                      {group.name}
                    </span>
                  </td>
                  <td className="px-4 py-3">{group.server}</td>
                  <td className="px-4 py-3">{group.company}</td>
                  <td className="px-4 py-3">{group.currency}</td>
                  <td className="px-4 py-3">{group.marginCall}</td>
                  <td className="px-4 py-3">{group.stopOut}</td>
                  <td className="px-4 py-3">{group.tradeFlags}</td>
                  <td className="px-4 py-3">{group.created}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded border border-blue-600">
                        <HiEye />
                      </button>
                      <button onClick={() => { setSelectedGroup(group); setShowModal(true); }} className="p-2 text-green-600 hover:bg-green-50 rounded border border-green-600">
                        <HiPencil />
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
              <h5 className="text-xl font-semibold">Edit Group - {selectedGroup?.name}</h5>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <MdClose className="text-2xl" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
                <input type="text" defaultValue={selectedGroup?.name} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input type="text" defaultValue={selectedGroup?.company} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Margin Call</label>
                <input type="text" defaultValue={selectedGroup?.marginCall} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stop Out</label>
                <input type="text" defaultValue={selectedGroup?.stopOut} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
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
