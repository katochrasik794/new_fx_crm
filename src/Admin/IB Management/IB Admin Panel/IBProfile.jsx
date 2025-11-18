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
    { id: 347, name: 'ksm init', email: 'ksmin@gmail.com', referredBy: { name: 'FINCRM MARKET IB', email: 'FINCRMMARKETIB@GMAIL.COM' }, type: 'NORMAL', pip: 1.40, referrals: 0, commission: 0, status: 'Active' },
    { id: 357, name: 'Madhukar Dhonde', email: 'dhondemadhukar2999@gmail.com', referredBy: { name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com' }, type: 'NORMAL', pip: 1.20, referrals: 0, commission: 0, status: 'Active' }
  ]

  const filteredIBs = allIBs.filter(ib =>
    ib.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ib.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredIBs.length / (entriesPerPage === -1 ? filteredIBs.length : entriesPerPage))
  const displayedIBs = entriesPerPage === -1 ? filteredIBs : filteredIBs.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

  return (
    <div className="w-[370px] sm:w-full max-w-6xl mx-auto min-h-screen bg-violet-100 sm:p-4 lg:pt-2 lg:px-0">

      {/* === RESPONSIVE STATS CARDS === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-lg lg:shadow-xl
              transition-transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:shadow-xl lg:hover:shadow-2xl 
              ${
                idx === 0 ? 'bg-gradient-to-br from-purple-500 to-purple-700' :
                idx === 1 ? 'bg-gradient-to-br from-pink-500 to-red-500' :
                idx === 2 ? 'bg-gradient-to-br from-cyan-400 to-cyan-600' :
                'bg-gradient-to-br from-green-400 to-teal-500'
              }
            `}
          >
            <i className={`ti ${stat.icon} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-2 lg:mb-3`}></i>
            <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{stat.value}</h5>
            <p className="text-white/90 text-xs sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>


      {/* === RESPONSIVE GROUP SECTIONS === */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8">
        {groups.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl overflow-hidden hover:-translate-y-1 transition-all"
          >
            <div
              className={`p-3 sm:p-4 lg:p-5 flex justify-between items-center text-white
                ${
                  idx === 0 ? 'bg-gradient-to-r from-purple-500 to-purple-700' :
                  idx === 1 ? 'bg-gradient-to-r from-pink-500 to-red-500' :
                  'bg-gradient-to-r from-cyan-400 to-cyan-600'
                }
              `}
            >
              <h6 className="text-base sm:text-lg font-bold">{group.name}</h6>
              <span className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-sm">{group.count}</span>
            </div>

            <div className="p-3 sm:p-4 max-h-64 sm:max-h-80 overflow-y-auto">
              {group.ibs.map((ib) => (
                <div
                  key={ib.id}
                  className="flex justify-between items-center bg-gray-50 rounded-lg lg:rounded-xl p-2 sm:p-3 mb-2 hover:shadow-md"
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="font-semibold text-sm sm:text-base truncate">{ib.name}</p>
                    <p className="text-xs text-gray-500 truncate">{ib.email}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="px-2 sm:px-3 py-1 bg-green-200 text-green-800 font-bold rounded-full text-xs whitespace-nowrap">
                      {ib.pip.toFixed(2)} pip
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* === MAIN TABLE SECTION === */}
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-4 lg:p-5">
          <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">IB Profiles</h5>
        </div>

        <div className="p-3 sm:p-4 lg:p-6">

          {/* === RESPONSIVE SEARCH + ENTRIES === */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 lg:mb-6">
            <div className="flex items-center gap-2">
              <label className="text-sm whitespace-nowrap">Show</label>
              <select
                value={entriesPerPage}
                onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }}
                className="px-2 sm:px-3 py-2 border rounded-lg text-sm min-w-[80px]"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={-1}>All</option>
              </select>
            </div>

            <div className="w-full sm:w-auto">
              <input
                type="search"
                placeholder="Search IBs..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full sm:w-64 lg:w-80 px-3 sm:px-4 py-2 border rounded-lg text-sm"
              />
            </div>
          </div>


          {/* === RESPONSIVE TABLE === */}
          <div className="overflow-x-auto rounded-lg lg:rounded-xl">
            <table className="min-w-[800px] lg:min-w-[900px] w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs">
                  {["IB Name","Email","Referred By","Type","Pip Rate","Referrals","Commission","Status","Actions"]
                    .map((h) => (
                      <th key={h} className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-left uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                </tr>
              </thead>

              <tbody>
                {displayedIBs.map((ib) => (
                  <tr key={ib.id} className="border-b hover:bg-gray-50">
                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 whitespace-nowrap">{ib.name}</td>
                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3">
                      <div className="max-w-[150px] sm:max-w-[200px] lg:max-w-none truncate">{ib.email}</div>
                    </td>

                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3">
                      {ib.referredBy ? (
                        <div className="max-w-[120px] sm:max-w-[150px] lg:max-w-none">
                          <p className="font-semibold text-sm truncate">{ib.referredBy.name}</p>
                          <p className="text-xs text-gray-500 truncate">{ib.referredBy.email}</p>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>

                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3">
                      <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs whitespace-nowrap">{ib.type}</span>
                    </td>

                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 whitespace-nowrap">{ib.pip.toFixed(2)} pip</td>
                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">{ib.referrals}</td>
                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-right whitespace-nowrap">${ib.commission.toFixed(2)}</td>

                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">
                      <span className="px-2 sm:px-3 py-1 bg-green-500 text-white rounded-full text-xs whitespace-nowrap">
                        {ib.status}
                      </span>
                    </td>

                    <td className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-center">
                      <div className="flex gap-1 sm:gap-2 justify-center">
                        <button className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-xs whitespace-nowrap">View</button>
                        <button className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs whitespace-nowrap">Edit</button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          {/* === RESPONSIVE PAGINATION === */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mt-4 lg:mt-6">
            <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              Showing {filteredIBs.length === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1} –
              {Math.min(currentPage * entriesPerPage, filteredIBs.length)} of {filteredIBs.length}
            </p>

            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 sm:px-4 py-2 border rounded-lg disabled:opacity-40 text-sm"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 sm:px-4 py-2 border rounded-lg text-sm
                    ${currentPage === i + 1 ? 'bg-purple-600 text-white' : ''}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 sm:px-4 py-2 border rounded-lg disabled:opacity-40 text-sm"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default IBProfile
