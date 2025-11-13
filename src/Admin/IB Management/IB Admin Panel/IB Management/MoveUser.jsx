import { useState } from 'react'
import { FiUsers, FiArrowRight, FiInfo } from 'react-icons/fi'
import { MdSwapHoriz } from 'react-icons/md'

const MoveUser = () => {
  const [selectedUser, setSelectedUser] = useState('')
  const [newIB, setNewIB] = useState('')
  const [currentIBInfo, setCurrentIBInfo] = useState(null)

  const users = [
    { id: 330, name: 'Aakanksha Pawar', email: 'aakankshalp@gmail.com', currentIB: 'Sagar Shinde', volume: '2.5 lots' },
    { id: 354, name: 'abc cde', email: 'thomasselve7@gmail.com', currentIB: 'Finstep India', volume: '1.2 lots' },
    { id: 180, name: 'ABCD XYZ', email: 'admin@gmail.com', currentIB: 'None', volume: '0 lots' },
    { id: 310, name: 'Abdul Rehman', email: 'mani3130882929@gmail.com', currentIB: 'Rajesh Pawar', volume: '3.8 lots' },
    { id: 317, name: 'Akash Jadhav', email: 'akashjadhav9699@gmail.com', currentIB: 'Sagar Shinde', volume: '1.5 lots' },
    { id: 265, name: 'Anil Gaikwad', email: 'anilgaikwad9748ib@gmail.com', currentIB: 'Sagar Shinde', volume: '4.2 lots' },
    { id: 229, name: 'Finstep India', email: 'finstepindia@gmail.com', currentIB: 'None', volume: '10.5 lots' },
    { id: 364, name: 'Ganesh Sutar', email: 'ganeshsutar2002@gmail.com', currentIB: 'sanjay Jadhav', volume: '2.1 lots' }
  ]

  const ibs = [
    { id: 180, name: 'ABCD XYZ', email: 'admin@gmail.com' },
    { id: 214, name: 'Ajay Thengil', email: 'ajaythengil@gmail.com' },
    { id: 317, name: 'Akash Jadhav', email: 'akashjadhav9699@gmail.com' },
    { id: 265, name: 'Anil Gaikwad', email: 'anilgaikwad9748ib@gmail.com' },
    { id: 229, name: 'Finstep India', email: 'finstepindia@gmail.com' },
    { id: 364, name: 'Ganesh Sutar', email: 'ganeshsutar2002@gmail.com' },
    { id: 361, name: 'sanjay Jadhav', email: 'jsanjay1070@gmail.com' },
    { id: 264, name: 'Sagar Shinde', email: 'sagarshinde0034@gmail.com' },
    { id: 365, name: 'Sandip Kenjale', email: 'sandipkenjale@gmail.com' },
    { id: 356, name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com' }
  ]

  const handleUserChange = (userId) => {
    setSelectedUser(userId)
    const user = users.find(u => u.id === parseInt(userId))
    if (user) {
      setCurrentIBInfo(user)
    } else {
      setCurrentIBInfo(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedUser || !newIB) {
      alert('Please select both user and new IB')
      return
    }
    alert('User moved successfully! (Demo)')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
            <MdSwapHoriz className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">Move User to Another IB</h4>
            <p className="text-sm md:text-base text-gray-600">Transfer users between different IB accounts</p>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <h5 className="text-xl font-bold text-white">User Transfer Form</h5>
        </div>

        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select User */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select User <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedUser}
                onChange={(e) => handleUserChange(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
              >
                <option value="">-- Select User --</option>
                {users.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
            </div>

            {/* Current IB Info */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current IB & Direct Volume
              </label>
              <div className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                {currentIBInfo ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FiUsers className="text-blue-600" />
                      <span className="font-semibold text-gray-800">Current IB:</span>
                      <span className="text-gray-700">{currentIBInfo.currentIB}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiInfo className="text-green-600" />
                      <span className="font-semibold text-gray-800">Direct Volume:</span>
                      <span className="text-gray-700">{currentIBInfo.volume}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-500 flex items-center gap-2">
                    <FiInfo className="text-gray-400" />
                    Select a user to see their current IB…
                  </div>
                )}
              </div>
            </div>

            {/* Visual Arrow */}
            {currentIBInfo && (
              <div className="flex justify-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg">
                  <FiArrowRight className="text-2xl text-white" />
                </div>
              </div>
            )}

            {/* Assign To New IB */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Assign To (New IB) <span className="text-red-500">*</span>
              </label>
              <select
                value={newIB}
                onChange={(e) => setNewIB(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
              >
                <option value="">-- Select IB --</option>
                {ibs.map(ib => (
                  <option key={ib.id} value={ib.id}>
                    {ib.name} ({ib.email})
                  </option>
                ))}
              </select>
            </div>

            {/* Info Alert */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg">
              <div className="flex items-start gap-2">
                <FiInfo className="text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800 font-semibold mb-1">Important Information</p>
                  <p className="text-sm text-blue-700">
                    Moving a user will transfer all their trading volume and commission calculations to the new IB. 
                    This action will be logged and can be reviewed in the audit trail.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MdSwapHoriz className="text-xl" />
                Move User
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Summary Card */}
      {currentIBInfo && newIB && (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mt-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4">
            <h6 className="text-lg font-bold text-white">Transfer Summary</h6>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-1">From</p>
                <p className="font-bold text-gray-800">{currentIBInfo.currentIB}</p>
              </div>
              <div className="flex justify-center">
                <FiArrowRight className="text-3xl text-green-600" />
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl text-center">
                <p className="text-sm text-gray-600 mb-1">To</p>
                <p className="font-bold text-gray-800">{ibs.find(ib => ib.id === parseInt(newIB))?.name || 'New IB'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MoveUser
