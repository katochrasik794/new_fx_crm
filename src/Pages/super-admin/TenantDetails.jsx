const TenantDetails = () => {
  const activityLogs = [
    { date: "2024-01-15 10:30", action: "User login", user: "admin@forexpro.com", ip: "192.168.1.100" },
    { date: "2024-01-15 09:15", action: "Payment processed", user: "system", ip: "N/A" },
    { date: "2024-01-14 16:45", action: "Settings updated", user: "admin@forexpro.com", ip: "192.168.1.100" },
    { date: "2024-01-14 14:20", action: "New user registered", user: "john.doe@forexpro.com", ip: "203.0.113.45" }
  ];

  const usageStats = [
    { metric: "Total Users", value: "245", change: "+12%" },
    { metric: "Active Sessions", value: "89", change: "+5%" },
    { metric: "API Calls (24h)", value: "15,432", change: "+8%" },
    { metric: "Storage Used", value: "2.4 GB", change: "+15%" }
  ];

  return (
    <div className="w-[360px] sm:w-full max-w-[2800px] p-2 mx-auto sm:p-6 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tenant Details</h1>
          <p className="text-gray-600">Forex Pro Ltd - Enterprise Plan</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 w-full sm:w-auto">
            Edit Tenant
          </button>
          <button className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-green-700 w-full sm:w-auto">
            Login as Tenant
          </button>
          <button className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700 w-full sm:w-auto">
            Suspend
          </button>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {usageStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-600">{stat.metric}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-green-600">{stat.change} vs last month</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Company Info */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Company Information</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Company Name</label>
                <p className="text-gray-900 font-medium">Forex Pro Ltd</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Registration ID</label>
                <p className="text-gray-900">FP-2023-001</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Domain</label>
                <p className="text-gray-900">forexpro.com</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Subdomain</label>
                <p className="text-gray-900">app.forexpro.com</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Admin Email</label>
                <p className="text-gray-900">admin@forexpro.com</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <p className="text-gray-900">+1 (555) 123-4567</p>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Address</label>
              <p className="text-gray-900">
                123 Financial District, New York, NY 10004
              </p>
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Branding & Customization</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Company Logo</label>
              <div className="mt-2 flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FP</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm">Upload New</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Primary Color</label>
                <div className="flex items-center mt-1 space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded border"></div>
                  <span className="text-gray-900 font-mono">#2563eb</span>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-600">Secondary Color</label>
                <div className="flex items-center mt-1 space-x-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded border"></div>
                  <span className="text-gray-900 font-mono">#eab308</span>
                </div>
              </div>
            </div>

             {/* <div>
              <label className="text-sm text-gray-600">Custom CSS</label>
              <div className="mt-1 p-3 bg-gray-100 rounded border text-sm text-gray-700">
                .custom-header { bg: linear-gradient(45deg, #2563eb, #eab308); }
              </div>
            </div>  */}
          </div>
        </div>

        {/* MT5 Config */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">MT5 Configuration</h2>
            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
              Connected
            </span>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Server Address</label>
                <p className="font-mono text-gray-900">mt5.forexpro.com:443</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Manager Login</label>
                <p className="font-mono text-gray-900">10001</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">API Version</label>
                <p className="text-gray-900">MT5 Build 3815</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Sync</label>
                <p className="text-gray-900">2 minutes ago</p>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Trading Groups</label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Standard</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">VIP</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Demo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Subscription Details</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Change Plan</button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Current Plan</label>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise</span>
              </div>
              <div>
                <label className="text-sm text-gray-600">Monthly Fee</label>
                <p className="font-bold text-gray-900 text-lg">$299.00</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Billing Cycle</label>
                <p className="text-gray-900">Monthly</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Next Billing</label>
                <p className="text-gray-900">March 15, 2024</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Account Created</label>
                <p className="text-gray-900">January 15, 2023</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Status</label>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Logs */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>

        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Date & Time</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Action</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">User</th>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">IP Address</th>
              </tr>
            </thead>

            <tbody>
              {activityLogs.map((log, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{log.date}</td>
                  <td className="px-4 py-3">{log.action}</td>
                  <td className="px-4 py-3 text-gray-600">{log.user}</td>
                  <td className="px-4 py-3 text-gray-600">{log.ip}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default TenantDetails;
