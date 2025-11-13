import { useState } from 'react'

const IBProfile = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const stats = [
    { icon: 'ti-users', value: '91', label: 'Active IBs', color: 'primary' },
    { icon: 'ti-hierarchy-2', value: '0', label: 'Master IBs', color: 'success' },
    { icon: 'ti-chart-line', value: '0.80', label: 'Avg Pip Rate', color: 'warning' },
    { icon: 'ti-users-group', value: '71', label: 'Total Referrals', color: 'info' }
  ]

  const groups = [
    {
      name: 'Plus IBs',
      count: 19,
      ibs: [
        { id: 388, name: 'Ravindra Pophale', email: 'ravindrapophale13@gmail.com', pip: 1.20 },
        { id: 382, name: 'Rajesh Pawar', email: 'raju.21pawar@gmail.com', pip: 1.30 },
        { id: 373, name: 'sanjay Jadhav', email: 'sj0447439@gmail.com', pip: 1.20 },
        { id: 366, name: 'Pramod Kirdat', email: 'kirdatpramod4@gmail.com', pip: 1.30 },
        { id: 364, name: 'Ganesh Sutar', email: 'ganeshsutar2002@gmail.com', pip: 1.30 },
        { id: 361, name: 'sanjay Jadhav', email: 'jsanjay1070@gmail.com', pip: 1.30 },
        { id: 358, name: 'Sonali sutar', email: 'sgsservices2002@gmail.com', pip: 1.30 },
        { id: 357, name: 'Madhukar Dhonde', email: 'dhondemadhukar2999@gmail.com', pip: 1.30 },
        { id: 356, name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com', pip: 1.30 },
        { id: 327, name: 'Shivprasad Prabhavale', email: 'shivprasadprabhavale@gmail.com', pip: 1.00 },
        { id: 326, name: 'Najamuddin Makandar', email: 'makandarnajamuddin0@gmail.com', pip: 1.00 },
        { id: 317, name: 'Akash Jadhav', email: 'akashjadhav9699@gmail.com', pip: 0.50 },
        { id: 224, name: 'nazeer sultan', email: 'asiacablg@gmail.com', pip: 1.00 },
        { id: 265, name: 'Anil Gaikwad', email: 'anilgaikwad9748ib@gmail.com', pip: 1.40 },
        { id: 264, name: 'Sagar Shinde', email: 'sagarshinde0034@gmail.com', pip: 1.70 },
        { id: 262, name: 'Suvarna Sawant', email: 'krantisawant27@gmail.com', pip: 1.50 },
        { id: 261, name: 'Suyog Datrange', email: 'suyogdatrange@gmail.com', pip: 1.50 },
        { id: 260, name: 'Rohit Kamble', email: 'rohitkamble4147@gmail.com', pip: 2.00 },
        { id: 229, name: 'Finstep India', email: 'finstepindia@gmail.com', pip: 2.00 }
      ]
    },
    {
      name: 'Pro IBs',
      count: 4,
      ibs: [
        { id: 358, name: 'Sonali sutar', email: 'sgsservices2002@gmail.com', pip: 0.70 },
        { id: 224, name: 'nazeer sultan', email: 'asiacablg@gmail.com', pip: 0.40 },
        { id: 229, name: 'Finstep India', email: 'finstepindia@gmail.com', pip: 1.00 },
        { id: 185, name: 'r k', email: 'katochrasik000@gmail.com', pip: 1.00 }
      ]
    },
    {
      name: 'Standard IBs',
      count: 7,
      ibs: [
        { id: 368, name: 'Tushar Warad', email: 'tusharimp13@gmail.com', pip: 1.50 },
        { id: 365, name: 'Sandip Kenjale', email: 'sandipkenjale@gmail.com', pip: 0.90 },
        { id: 224, name: 'nazeer sultan', email: 'asiacablg@gmail.com', pip: 0.70 },
        { id: 235, name: 'pratik bhagaje', email: 'pratikbhagaje7673@gmail.com', pip: 1.80 },
        { id: 214, name: 'Ajay Thengil', email: 'ajaythengil@gmail.com', pip: 1.00 },
        { id: 211, name: 'Pratik Babar', email: 'pratikbabar726@gmail.com', pip: 2.00 },
        { id: 185, name: 'r k', email: 'katochrasik000@gmail.com', pip: 1.00 }
      ]
    }
  ]

  const allIBs = [
    { id: 317, name: 'Akash Jadhav', email: 'akashjadhav9699@gmail.com', referredBy: { name: 'Sagar Shinde', email: 'sagarshinde0034@gmail.com' }, type: 'NORMAL', pip: 0.50, referrals: 0, commission: 0, status: 'Active' },
    { id: 367, name: 'Akash Sonmale', email: 'akashsonmale2026@gmail.com', referredBy: { name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com' }, type: 'NORMAL', pip: 1.20, referrals: 0, commission: 0, status: 'Active' },
    { id: 265, name: 'Anil Gaikwad', email: 'anilgaikwad9748ib@gmail.com', referredBy: { name: 'Sagar Shinde', email: 'sagarshinde0034@gmail.com' }, type: 'NORMAL', pip: 1.20, referrals: 3, commission: 0, status: 'Active' },
    { id: 328, name: 'Anil Patil', email: 'anillg123@gmail.com', referredBy: { name: 'Rohit Kamble', email: 'rohitkamble4147@gmail.com' }, type: 'NORMAL', pip: 1.50, referrals: 0, commission: 0, status: 'Active' },
    { id: 387, name: 'Ehsan Ali', email: 'ehsanali005@gmail.com', referredBy: null, type: 'NORMAL', pip: 1.20, referrals: 0, commission: 0, status: 'Active' },
    { id: 229, name: 'Finstep India', email: 'finstepindia@gmail.com', referredBy: null, type: 'NORMAL', pip: 1.50, referrals: 5, commission: 0, status: 'Active' },
    { id: 364, name: 'Ganesh Sutar', email: 'ganeshsutar2002@gmail.com', referredBy: { name: 'sanjay Jadhav', email: 'jsanjay1070@gmail.com' }, type: 'NORMAL', pip: 1.00, referrals: 2, commission: 0, status: 'Active' },
    { id: 383, name: 'jagdish sonar', email: 'jagdishsonar020@gmail.com', referredBy: { name: 'Candle Story', email: 'ceo.candlestory@gmail.com' }, type: 'NORMAL', pip: 1.20, referrals: 0, commission: 0, status: 'Active' },
    { id: 347, name: 'ksm init', email: 'ksmin@gmail.com', referredBy: { name: 'OXO MARKET IB', email: 'OXOMARKETIB@GMAIL.COM' }, type: 'NORMAL', pip: 1.40, referrals: 0, commission: 0, status: 'Active' },
    { id: 357, name: 'Madhukar Dhonde', email: 'dhondemadhukar2999@gmail.com', referredBy: { name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com' }, type: 'NORMAL', pip: 1.20, referrals: 0, commission: 0, status: 'Active' }
  ]

  const filteredIBs = allIBs.filter(ib =>
    ib.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ib.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredIBs.length / (entriesPerPage === -1 ? filteredIBs.length : entriesPerPage))
  const displayedIBs = entriesPerPage === -1 ? filteredIBs : filteredIBs.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

  return (
    <div className="min-h-screen bg-white  p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`relative overflow-hidden rounded-2xl p-8 text-center shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl ${
            idx === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
            idx === 1 ? 'bg-gradient-to-br from-pink-500 to-red-500' :
            idx === 2 ? 'bg-gradient-to-br from-cyan-400 to-cyan-600' :
            'bg-gradient-to-br from-green-400 to-teal-500'
          }`}>
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-white/10 to-transparent rounded-full"></div>
            <i className={`ti ${stat.icon} text-6xl text-white mb-3 drop-shadow-lg`}></i>
            <h5 className="text-4xl font-bold text-white mb-1 drop-shadow-md">{stat.value}</h5>
            <small className="text-white/90 text-sm font-semibold uppercase tracking-wider">{stat.label}</small>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {groups.map((group, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl">
            <div className={`p-5 flex justify-between items-center ${
              idx === 0 ? 'bg-gradient-to-r from-purple-500 to-purple-700' :
              idx === 1 ? 'bg-gradient-to-r from-pink-500 to-red-500' :
              'bg-gradient-to-r from-cyan-400 to-cyan-600'
            }`}>
              <h6 className="text-lg font-bold text-white drop-shadow-md">{group.name}</h6>
              <span className="px-4 py-1 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full text-sm">{group.count}</span>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              {group.ibs.map((ib) => (
                <div key={ib.id} className="flex justify-between items-center p-4 mb-2 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-transparent transition-all duration-300 hover:border-purple-500 hover:translate-x-2 hover:shadow-lg">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 mb-1">{ib.name}</div>
                    <div className="text-sm text-gray-500 truncate">{ib.email}</div>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-green-900 font-bold rounded-full text-xs mb-2 shadow-md">{ib.pip.toFixed(2)} pip</span>
                    <a href="#" className="text-cyan-500 hover:text-cyan-600 hover:bg-cyan-50 p-2 rounded-lg transition-all duration-300 hover:scale-110" title="Edit Pip Rates">
                      <i className="ti ti-edit text-lg"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6">
          <h5 className="text-2xl font-bold text-white drop-shadow-md">IB Profiles</h5>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                Show
                <select value={entriesPerPage} onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }} className="px-4 py-2 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all">
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={-1}>All</option>
                </select>
                entries
              </label>
            </div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                Search:
                <input type="search" placeholder="Search IBs..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} className="px-6 py-2 border-2 border-gray-200 rounded-full text-sm bg-gradient-to-r from-white to-gray-50 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all min-w-[250px]" />
              </label>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl mb-6">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr className="bg-gradient-to-r from-purple-500 to-purple-700">
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">IB Name</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Email</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Referred By</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Type</th>
                  <th className="px-4 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Pip Rate</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">Referrals</th>
                  <th className="px-4 py-4 text-right text-xs font-bold text-white uppercase tracking-wider">Total Commission</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">Status</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayedIBs.map((ib) => (
                  <tr key={ib.id} className="transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:scale-[1.01] hover:shadow-lg">
                    <td className="px-4 py-4 border-b border-gray-100">{ib.name}</td>
                    <td className="px-4 py-4 border-b border-gray-100">{ib.email}</td>
                    <td className="px-4 py-4 border-b border-gray-100">
                      {ib.referredBy ? (
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-800">{ib.referredBy.name}</span>
                          <small className="text-gray-500 text-xs">{ib.referredBy.email}</small>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 border-b border-gray-100">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 font-bold rounded-full text-xs uppercase tracking-wide shadow-sm">{ib.type}</span>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-100">
                      <div>{ib.pip.toFixed(2)} pip</div>
                      <small className="text-gray-500 text-xs">(avg, group-based)</small>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-100 text-center font-semibold">{ib.referrals}</td>
                    <td className="px-4 py-4 border-b border-gray-100 text-right font-semibold">${ib.commission.toFixed(2)}</td>
                    <td className="px-4 py-4 border-b border-gray-100 text-center">
                      <span className={`px-3 py-1 font-bold rounded-full text-xs uppercase tracking-wide shadow-md ${
                        ib.status === 'Active' ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white' : 'bg-gray-400 text-white'
                      }`}>{ib.status}</span>
                    </td>
                    <td className="px-4 py-4 border-b border-gray-100 text-center">
                      <div className="flex gap-2 justify-center">
                        <button className="px-3 py-2 bg-gradient-to-r from-cyan-50 to-cyan-100 text-cyan-600 border-2 border-cyan-400 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all duration-300 hover:from-cyan-400 hover:to-cyan-500 hover:text-white hover:-translate-y-1 hover:shadow-lg" title="View Details">
                          <i className="ti ti-eye"></i> View
                        </button>
                        <button className="px-3 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 border-2 border-purple-400 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all duration-300 hover:from-purple-500 hover:to-purple-700 hover:text-white hover:-translate-y-1 hover:shadow-lg" title="Edit Pip Rate">
                          <i className="ti ti-edit"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
            <div className="text-sm text-gray-600">
              Showing {displayedIBs.length > 0 ? (currentPage - 1) * entriesPerPage + 1 : 0} to {Math.min(currentPage * entriesPerPage, filteredIBs.length)} of {filteredIBs.length} entries
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg bg-white text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-800 disabled:hover:translate-y-0" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} className={`px-4 py-2 border-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  currentPage === i + 1 
                    ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white border-purple-500 shadow-lg' 
                    : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg'
                }`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
              ))}
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg bg-white text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-800 disabled:hover:translate-y-0" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IBProfile
