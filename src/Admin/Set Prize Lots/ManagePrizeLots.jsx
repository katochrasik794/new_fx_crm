import React, { useState } from 'react';

const ManagePrizeLots = () => {
  const [prizes, setPrizes] = useState([]);
  const [lotRange, setLotRange] = useState('');
  const [prize, setPrize] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (lotRange && prize) {
      setPrizes([...prizes, { range: lotRange, prize }]);
      setLotRange('');
      setPrize('');
    }
  };

  const handleDelete = (index) => {
    setPrizes(prizes.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
          <h2 className="text-2xl font-bold">Manage Prize Lots</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              value={lotRange}
              onChange={(e) => setLotRange(e.target.value)}
              placeholder="e.g. 10-20 lots"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="text"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
              placeholder="e.g. $100 Cash"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-green-600 hover:to-teal-600 transition duration-300"
            >
              Add Prize Lot
            </button>
          </form>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">Range</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">Prize</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {prizes.map((p, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2">{p.range}</td>
                    <td className="px-4 py-2">{p.prize}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePrizeLots;