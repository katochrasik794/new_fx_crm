import { useState } from 'react';

const Tenants = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    domain: '',
    email: '',
    phone: '',
    plan: 'Basic',
    logo: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, logo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New tenant:', formData);
    setShowAddModal(false);
  };

  const tenants = [
    { id: 1, name: "Forex Pro Ltd", domain: "forexpro.com", plan: "Enterprise", status: "Active", users: 245, revenue: "$2,450", created: "2023-01-15" },
    { id: 2, name: "Trade Masters", domain: "trademasters.net", plan: "Pro", status: "Active", users: 156, revenue: "$1,560", created: "2023-02-20" },
    { id: 3, name: "Capital FX", domain: "capitalfx.io", plan: "Basic", status: "Suspended", users: 89, revenue: "$890", created: "2023-03-10" },
    { id: 4, name: "Global Trading", domain: "globaltrading.com", plan: "Pro", status: "Active", users: 198, revenue: "$1,980", created: "2023-01-28" },
    { id: 5, name: "FX Solutions", domain: "fxsolutions.org", plan: "Enterprise", status: "Active", users: 312, revenue: "$3,120", created: "2022-12-05" },
    { id: 6, name: "Prime Brokers", domain: "primebrokers.com", plan: "Pro", status: "Trial", users: 45, revenue: "$0", created: "2024-01-10" },
    { id: 7, name: "Apex Trading", domain: "apextrading.net", plan: "Basic", status: "Active", users: 67, revenue: "$670", created: "2023-11-22" },
    { id: 8, name: "Elite FX", domain: "elitefx.io", plan: "Enterprise", status: "Active", users: 423, revenue: "$4,230", created: "2022-08-15" }
  ];

  return (
    <div className="w-[370px] sm:w-full max-w-[2800px] p-2 mx-auto sm:p-6 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Tenants Management</h1>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            Add New Tenant
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            Export Data
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
          <select className="border border-gray-300 px-3 py-2 rounded-lg w-full sm:w-auto">
            <option>All Status</option>
            <option>Active</option>
            <option>Suspended</option>
            <option>Trial</option>
          </select>

          <select className="border border-gray-300 px-3 py-2 rounded-lg w-full sm:w-auto">
            <option>All Plans</option>
            <option>Basic</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>

          <input 
            type="text" 
            placeholder="Search tenants..." 
            className="border border-gray-300 px-3 py-2 rounded-lg flex-1 min-w-[200px]"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["Tenant", "Plan", "Status", "Users", "Revenue", "Created", "Actions"]
                  .map((header) => (
                    <th key={header} className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">
                      {header}
                    </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="text-sm font-medium">{tenant.name}</p>
                      <p className="text-xs text-gray-500">{tenant.domain}</p>
                    </div>
                  </td>

                  {/* PLAN */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tenant.plan === "Enterprise"
                        ? "bg-purple-100 text-purple-700"
                        : tenant.plan === "Pro"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {tenant.plan}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      tenant.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : tenant.status === "Trial"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {tenant.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm">{tenant.users}</td>
                  <td className="px-6 py-4 text-sm font-medium">{tenant.revenue}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{tenant.created}</td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2 text-sm">
                      <button className="text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-yellow-600 hover:text-yellow-800">Edit</button>
                      <button className="text-green-600 hover:text-green-800">Login</button>
                      <button className="text-red-600 hover:text-red-800">Suspend</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">

          {/* Mobile */}
          <div className="flex justify-between w-full sm:hidden">
            <button className="px-4 py-2 border rounded-md">Previous</button>
            <button className="px-4 py-2 border rounded-md">Next</button>
          </div>

          {/* Desktop */}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <p className="text-sm">Showing 1 to 8 of 24 results</p>

            <div className="flex space-x-1">
              <button className="px-3 py-2 border rounded-md">1</button>
              <button className="px-3 py-2 border bg-blue-50 text-blue-600 rounded-md">2</button>
              <button className="px-3 py-2 border rounded-md">3</button>
            </div>
          </div>
        </div>
      </div>

      {/* ADD TENANT MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-3 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto border">

            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Add New Tenant</h2>
              <button onClick={() => setShowAddModal(false)} className="text-2xl text-gray-500">×</button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-5">

              {/* LOGO */}
              <div>
                <label className="text-sm font-medium">Company Logo</label>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center border">
                    {formData.logo ? (
                      <img src={URL.createObjectURL(formData.logo)} className="w-full h-full rounded-lg object-cover" />
                    ) : (
                      <span className="text-gray-400 text-sm">No Logo</span>
                    )}
                  </div>

                  <input type="file" accept="image/*" onChange={handleFileChange} className="text-sm" />
                </div>
              </div>

              {/* COMPANY INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Company Name *</label>
                  <input 
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="border px-3 py-2 rounded-lg w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Domain *</label>
                  <input 
                    type="text"
                    name="domain"
                    required
                    value={formData.domain}
                    onChange={handleInputChange}
                    className="border px-3 py-2 rounded-lg w-full"
                  />
                </div>
              </div>

              {/* ADMIN INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Admin Email *</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border px-3 py-2 rounded-lg w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input 
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border px-3 py-2 rounded-lg w-full"
                  />
                </div>
              </div>

              {/* PLAN SELECT */}
              <div>
                <label className="text-sm font-medium">Subscription Plan</label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="border px-3 py-2 rounded-lg w-full"
                >
                  <option>Basic - $99</option>
                  <option>Pro - $199</option>
                  <option>Enterprise - $299</option>
                </select>
              </div>

              {/* FORM ACTIONS */}
              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Create Tenant
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Tenants;
