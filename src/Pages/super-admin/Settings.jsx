const Settings = () => {
  const systemStatus = [
    { service: "Database", status: "Healthy", uptime: "99.9%", lastCheck: "2 min ago" },
    { service: "Email Service", status: "Warning", uptime: "95.2%", lastCheck: "5 min ago" },
    { service: "Payment Gateway", status: "Healthy", uptime: "98.7%", lastCheck: "1 min ago" },
    { service: "File Storage", status: "Healthy", uptime: "99.5%", lastCheck: "3 min ago" }
  ];

  const securityLogs = [
    { timestamp: "2024-01-15 14:30", event: "Failed login attempt", ip: "192.168.1.100", severity: "Medium" },
    { timestamp: "2024-01-15 12:15", event: "Admin settings changed", ip: "10.0.0.1", severity: "Low" },
    { timestamp: "2024-01-15 10:45", event: "Suspicious API calls", ip: "203.0.113.45", severity: "High" },
    { timestamp: "2024-01-15 09:20", event: "Password reset request", ip: "172.16.0.1", severity: "Low" }
  ];

  return (
    <div className="w-[350px] sm:w-full max-w-[2800px] p-2 mx-auto sm:p-6 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Super Admin Settings</h1>
          <p className="text-gray-600 text-sm">Configure system-wide settings and monitor platform health</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Backup Now</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Emergency Mode</button>
        </div>
      </div>

      {/* SYSTEM HEALTH */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">System Health Monitor</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {systemStatus.map((sys, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{sys.service}</h3>
                <span className={`w-3 h-3 rounded-full ${
                  sys.status === "Healthy" ? "bg-green-500" : "bg-yellow-500"
                }`} />
              </div>

              <p className={`text-sm font-medium ${
                sys.status === "Healthy" ? "text-green-600" : "text-yellow-600"
              }`}>{sys.status}</p>

              <p className="text-xs text-gray-500">Uptime: {sys.uptime}</p>
              <p className="text-xs text-gray-500">Last check: {sys.lastCheck}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONFIG SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* SMTP */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">SMTP Configuration</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Connected</span>
          </div>

          <div className="space-y-4">

            {/* GRID FIXED TO 1 COL ON MOBILE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">SMTP Host</label>
                <input className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="smtp.gmail.com" />
              </div>

              <div>
                <label className="text-sm font-medium">SMTP Port</label>
                <input className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="587" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Username</label>
              <input className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="noreply@superadmin.com" />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input type="password" className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="••••••••••••" />
            </div>

            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" defaultChecked />
              <span className="text-sm">Enable SSL/TLS</span>
            </label>

          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Save Settings</button>
            <button className="border px-4 py-2 rounded-lg w-full sm:w-auto">Test Connection</button>
          </div>
        </div>

        {/* PAYMENT SETTINGS */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6">
          <div className="flex justify-between">
            <h2 className="font-semibold text-lg">Payment Gateway</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
          </div>

          <div className="space-y-6 mt-4">

            {/* STRIPE */}
            <div>
              <h3 className="font-medium mb-2">Stripe Configuration</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Publishable Key</label>
                  <input className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="pk_live_••••••••••••••••" />
                </div>

                <div>
                  <label className="text-sm font-medium">Secret Key</label>
                  <input type="password" className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="sk_live_••••••••••••" />
                </div>
              </div>
            </div>

            {/* PAYPAL */}
            <div>
              <h3 className="font-medium mb-2">PayPal Configuration</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Client ID</label>
                  <input className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="AX••••••••••••••••••••••" />
                </div>
                <div>
                  <label className="text-sm font-medium">Client Secret</label>
                  <input type="password" className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="EL••••••••••••••••••••••" />
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Save Settings</button>
            <button className="border px-4 py-2 rounded-lg w-full sm:w-auto">Test Payments</button>
          </div>
        </div>

      </div>

      {/* SYSTEM CONFIG */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">System Configuration</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT SETTINGS */}
          <div className="space-y-6">
            {[
              {
                title: "Maintenance Mode",
                desc: "Temporarily disable access for all tenants",
                defaultChecked: false
              },
              {
                title: "Auto Backup",
                desc: "Daily automated backups at 2:00 AM UTC",
                defaultChecked: true
              },
              {
                title: "Security Monitoring",
                desc: "Real-time threat detection and alerts",
                defaultChecked: true
              },
              {
                title: "Debug Mode",
                desc: "Enable detailed logging for troubleshooting",
                defaultChecked: false
              }
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>

                <label className="relative inline-flex cursor-pointer">
                  <input type="checkbox" className="peer sr-only" defaultChecked={item.defaultChecked} />
                  <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition peer-checked:after:translate-x-5"></div>
                </label>
              </div>
            ))}
          </div>

          {/* RIGHT SETTINGS */}
          <div className="space-y-4">

            <div>
              <label className="font-medium text-sm">System Timezone</label>
              <select className="w-full border rounded-lg px-3 py-2 mt-1">
                <option>UTC (Coordinated Universal Time)</option>
                <option>America/New_York (EST/EDT)</option>
                <option>Europe/London</option>
                <option>Asia/Tokyo</option>
                <option>Australia/Sydney</option>
              </select>
            </div>

            <div>
              <label className="font-medium text-sm">Session Timeout (minutes)</label>
              <input type="number" className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="30" />
            </div>

            <div>
              <label className="font-medium text-sm">Max File Upload Size (MB)</label>
              <input type="number" className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="50" />
            </div>

            <div>
              <label className="font-medium text-sm">API Rate Limit</label>
              <input type="number" className="w-full border rounded-lg px-3 py-2 mt-1" defaultValue="1000" />
            </div>

          </div>

        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Save All Settings</button>
          <button className="border px-4 py-2 rounded-lg w-full sm:w-auto">Reset to Defaults</button>
        </div>
      </div>

      {/* SECURITY LOGS */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Security Activity Log</h2>
          <button className="text-blue-600 text-sm">View All Logs</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Timestamp</th>
                <th className="px-4 py-2 text-left">Event</th>
                <th className="px-4 py-2 text-left">IP Address</th>
                <th className="px-4 py-2 text-left">Severity</th>
              </tr>
            </thead>

            <tbody>
              {securityLogs.map((log, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{log.timestamp}</td>
                  <td className="px-4 py-2">{log.event}</td>
                  <td className="px-4 py-2 font-mono">{log.ip}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      log.severity === "High" ? "bg-red-100 text-red-700" :
                      log.severity === "Medium" ? "bg-yellow-100 text-yellow-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {log.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
};

export default Settings;
