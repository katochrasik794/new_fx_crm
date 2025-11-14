import React, { useState } from 'react';

function SystemSettings() {
  const [activeTab, setActiveTab] = useState('smtp');

  const tabs = [
    { id: 'mt5', label: 'MT5 Connection', icon: 'ti ti-antenna-bars-5' },
    { id: 'smtp', label: 'SMTP Settings', icon: 'ti ti-mail' }
  ];

  return (
    <div className="min-h-screen bg-violet-100 p-6">
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800  mb-8 flex items-center">
          <i className="ti ti-settings mr-3 text-blue-600"></i>
          System Settings
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white  rounded-xl shadow-lg p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'text-gray-700  hover:bg-gray-100 '
                    }`}
                  >
                    <i className={`${tab.icon} mr-3`}></i>
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'mt5' && <MT5Tab />}
            {activeTab === 'smtp' && <SMTPTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

function MT5Tab() {
  return (
    <div className="space-y-6">
      {/* MT5 Form */}
      <div className="bg-white  rounded-xl shadow-lg p-6 border-l-4 border-green-500">
        <h3 className="text-xl font-semibold text-gray-800  mb-4 flex items-center">
          <i className="ti ti-plus mr-2 text-green-500"></i>
          Add New MT5 Connection
        </h3>
        <form method="POST" className="space-y-4">
          <input type="hidden" name="action" value="save_mt5" />
          <input type="hidden" name="id" value="0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Server Name
              </label>
              <input
                type="text"
                name="server_name"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
                placeholder="Ex: MetaTrader5 (Prod)"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Server IP
              </label>
              <input
                type="text"
                name="server_ip"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
                placeholder="1.2.3.4"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Server Port
              </label>
              <input
                type="number"
                name="server_port"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
                placeholder="443"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Web Login
              </label>
              <input
                type="text"
                name="web_login"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
                placeholder="MT5 Manager/Web login"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Web Password
              </label>
              <input
                type="password"
                name="web_password"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
                placeholder="••••••••"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                API URL
              </label>
              <input
                type="text"
                name="api_url"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
                placeholder="https://mt5.example.com/api"
                value=""
              />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700  mb-1">
                MT5 Group
              </label>
              <input
                type="text"
                name="mt5_group"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
                placeholder="company-live\group1"
                value=""
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center">
              <i className="ti ti-device-floppy mr-2"></i>
              Save Connection
            </button>
          </div>
        </form>
      </div>

      {/* MT5 List */}
      <div className="bg-white  rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-500">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <i className="ti ti-list-details mr-2"></i>
            Saved MT5 Connections
          </h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-gray-200 ">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Server Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">IP : Port</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Web Login</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Group</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">API URL</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Created</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                <tr className="hover:bg-gray-50 ">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">1</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">Oxo markets</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">31.14.254.213 : 443</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">1818</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">OXO\AI\Classic</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    <span title="https://31.14.254.213:443" className="truncate inline-block max-w-48">https://31.14.254.213:443</span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">2025-09-01 07:46:44</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="system_settings.php?edit=1" className="text-blue-600 hover:text-blue-900   mr-3">
                      <i className="ti ti-pencil"></i> Edit
                    </a>
                    <form method="POST" className="inline" onsubmit="return confirm('Delete this connection?')">
                      <input type="hidden" name="action" value="delete_mt5" />
                      <input type="hidden" name="id" value="1" />
                      <button className="text-red-600 hover:text-red-900  ">
                        <i className="ti ti-trash"></i> Delete
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MT5 Usage Note */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50   border border-yellow-200  rounded-xl p-6">
        <h4 className="text-lg font-semibold text-yellow-800  mb-3 flex items-center">
          <i className="ti ti-info-circle mr-2"></i>
          MT5 Connection — what to enter
        </h4>
        <ul className="space-y-2 text-sm text-yellow-700 ">
          <li><strong>Server Name:</strong> Friendly label, e.g. <em>MetaTrader5 – Production</em>.</li>
          <li><strong>Server IP:</strong> Your MT5 Manager/Web API server IP, e.g. <em>198.51.100.25</em>.</li>
          <li><strong>Server Port:</strong> Manager/Web API port (often <em>443</em>/<em>444</em>).</li>
          <li><strong>Web Login:</strong> MT5 Manager/Web login (not client login).</li>
          <li><strong>Web Password:</strong> Password for that login.</li>
          <li><strong>API URL:</strong> Full Web API endpoint, e.g. <em>https://mt5.yourdomain.com/api</em>.</li>
          <li><strong>MT5 Group:</strong> Default group, e.g. <em>company-live\group1</em>.</li>
        </ul>
        <p className="mt-3 text-sm text-yellow-600 ">
          Most recent row is used as the active connection by your scripts.
        </p>
      </div>
    </div>
  );
}

function SMTPTab() {
  return (
    <div className="space-y-6">
      {/* SMTP Form */}
      <div className="bg-white  rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
        <h3 className="text-xl font-semibold text-gray-800  mb-4 flex items-center">
          <i className="ti ti-plus mr-2 text-purple-500"></i>
          Configure SMTP Settings
        </h3>
        <form method="POST" className="space-y-4">
          <input type="hidden" name="action" value="save_smtp" />
          <input type="hidden" name="smtp_id" value="0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                SMTP Host
              </label>
              <input
                type="text"
                name="host"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="mail.yourdomain.com"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Port
              </label>
              <input
                type="number"
                name="port"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="465/587"
                value="465"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Encryption
              </label>
              <select
                name="secure"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
              >
                <option value="ssl">SSL</option>
                <option value="tls">TLS</option>
                <option value="none">NONE</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="you@yourdomain.com"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                From Email
              </label>
              <input
                type="email"
                name="from_email"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="no-reply@yourdomain.com"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                From Name
              </label>
              <input
                type="text"
                name="from_name"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="Your Brand"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Reply-To Email (optional)
              </label>
              <input
                type="email"
                name="reply_to_email"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="support@yourdomain.com"
                value=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700  mb-1">
                Reply-To Name (optional)
              </label>
              <input
                type="text"
                name="reply_to_name"
                className="w-full px-3 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent  "
                placeholder="Support Team"
                value=""
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center">
              <i className="ti ti-device-floppy mr-2"></i>
              Save SMTP
            </button>
          </div>
        </form>
      </div>

      {/* SMTP List */}
      <div className="bg-white  rounded-xl shadow-lg overflow-hidden border-l-4 border-indigo-500">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <i className="ti ti-list-details mr-2"></i>
            Saved SMTP Profiles
          </h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-gray-200 ">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Host</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Port</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Security</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Username</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">From</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Reply-To</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Active</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                <tr className="hover:bg-gray-50 ">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">1</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">mail.portal.oxomarkets.com</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">465</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">SSL</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">admin@portal.oxomarkets.com</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="font-semibold text-gray-900 ">OXO MARKETS</div>
                    <div className="text-gray-500  text-xs">admin@portal.oxomarkets.com</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="font-semibold text-gray-900 ">Support Team</div>
                    <div className="text-gray-500  text-xs">admin@portal.oxomarkets.com</div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800  ">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="system_settings.php?smtp_edit=1#smtp-tab" className="text-indigo-600 hover:text-indigo-900   mr-3">
                      <i className="ti ti-pencil"></i> Edit
                    </a>
                    <form method="POST" className="inline" onsubmit="return confirm('Delete this SMTP profile?')">
                      <input type="hidden" name="action" value="delete_smtp" />
                      <input type="hidden" name="id" value="1" />
                      <button className="text-red-600 hover:text-red-900  ">
                        <i className="ti ti-trash"></i> Delete
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SMTP Usage Note */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50   border border-green-200  rounded-xl p-6">
        <h4 className="text-lg font-semibold text-green-800  mb-3 flex items-center">
          <i className="ti ti-info-circle mr-2"></i>
          What to enter for SMTP
        </h4>
        <ul className="space-y-2 text-sm text-green-700 ">
          <li><strong>SMTP Host:</strong> Your mail server (e.g., <em>mail.yourdomain.com</em>).</li>
          <li><strong>Port:</strong> Usually <b>465</b> (SSL) or <b>587</b> (TLS).</li>
          <li><strong>Encryption:</strong> Choose <b>SSL</b>, <b>TLS</b>, or <b>None</b> per your provider.</li>
          <li><strong>Username / Password:</strong> Your mailbox credentials.</li>
          <li><strong>From Email / From Name:</strong> What users see as sender.</li>
          <li><strong>Reply-To:</strong> Optional mailbox where replies should go.</li>
          <li><strong>Active:</strong> Click "Set Active" in the table to use that profile globally.</li>
        </ul>
      </div>
    </div>
  );
}

export default SystemSettings;



