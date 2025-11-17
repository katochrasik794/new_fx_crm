import React, { useState } from 'react';

const RolesManagement = () => {
  const [roles, setRoles] = useState([
    {
      id: 4,
      name: 'Parth',
      email: 'parthd0610@gmail.com',
      permissions: [
        'System Settings', 'Dashboard', 'Roles & Responsibilities', 'Add User', 'All Users',
        'Active Users', 'Banned Users', 'Email Unverified', 'KYC Unverified', 'KYC Pending',
        'With Balance', 'Send Notification', 'MT5 Account List', 'Manage Finance', 'KYC Verifications',
        'MT5 Users List', 'Assign MT5 to Email', 'Automatic Gateways', 'Manual Gateways',
        'Pending Deposits', 'Approved Deposits', 'Rejected Deposits', 'All Deposits',
        'Pending Withdrawals', 'Approved Withdrawals', 'Rejected Withdrawals', 'All Withdrawals',
        'IB Dashboard', 'IB Requests', 'IB Profiles', 'Set IB Commission', 'Set IB Structure',
        'IB Withdrawals', 'Move user to IB', 'PAMM Deposits', 'PAMM Withdrawals', 'Manage PAMM Accounts',
        'Copier Area', 'Master Area', 'Map Copier & Master', 'Manage Bots', 'Bot Plans / Pricing',
        'Bot Configuration', 'Chat Support', 'Manage Prize Lots', 'Set Lot Pricing',
        'Prize Distribution History', 'Send Emails', 'Send Analysis'
      ]
    },
    {
      id: 5,
      name: 'Pratin',
      email: 'Loyal1285@gmail.com',
      permissions: [
        'System Settings', 'Dashboard', 'Roles & Responsibilities', 'Add User', 'All Users',
        'Active Users', 'Banned Users', 'Email Unverified', 'KYC Unverified', 'KYC Pending',
        'With Balance', 'Send Notification', 'MT5 Account List', 'Manage Finance', 'KYC Verifications',
        'MT5 Users List', 'Assign MT5 to Email', 'Automatic Gateways', 'Manual Gateways',
        'Pending Deposits', 'Approved Deposits', 'Rejected Deposits', 'All Deposits',
        'Pending Withdrawals', 'Approved Withdrawals', 'Rejected Withdrawals', 'All Withdrawals',
        'IB Dashboard', 'IB Requests', 'IB Profiles', 'Set IB Commission', 'Set IB Structure',
        'IB Withdrawals', 'Move user to IB', 'PAMM Deposits', 'PAMM Withdrawals', 'Manage PAMM Accounts',
        'Copier Area', 'Master Area', 'Map Copier & Master', 'Manage Bots', 'Bot Plans / Pricing',
        'Bot Configuration', 'Chat Support', 'Manage Prize Lots', 'Set Lot Pricing',
        'Prize Distribution History', 'Send Emails', 'Send Analysis'
      ]
    },
    {
      id: 6,
      name: 'Anushka',
      email: 'Anushkaa1603@gmail.com',
      permissions: [
        'Dashboard', 'Add User', 'All Users', 'Active Users', 'Banned Users', 'Email Unverified',
        'KYC Unverified', 'KYC Pending', 'With Balance', 'Send Notification', 'MT5 Account List',
        'Manage Finance', 'KYC Verifications', 'MT5 Users List', 'Assign MT5 to Email',
        'Pending Deposits', 'Approved Deposits', 'Rejected Deposits', 'All Deposits',
        'Pending Withdrawals', 'Approved Withdrawals', 'Rejected Withdrawals', 'All Withdrawals',
        'IB Dashboard', 'IB Requests', 'IB Profiles', 'Set IB Commission', 'Set IB Structure',
        'IB Withdrawals', 'Move user to IB', 'PAMM Deposits', 'PAMM Withdrawals', 'Manage PAMM Accounts',
        'Copier Area', 'Master Area', 'Map Copier & Master', 'Manage Bots', 'Bot Plans / Pricing',
        'Bot Configuration', 'Chat Support', 'Manage Prize Lots', 'Set Lot Pricing',
        'Prize Distribution History', 'Send Emails', 'Send Analysis'
      ]
    },
    {
      id: 7,
      name: 'Monica',
      email: 'tiwarimonica369@gmail.com',
      permissions: [
        'Dashboard', 'Add User', 'All Users', 'Active Users', 'Banned Users', 'Email Unverified',
        'KYC Unverified', 'KYC Pending', 'With Balance', 'Send Notification', 'MT5 Account List',
        'Manage Finance', 'KYC Verifications', 'MT5 Users List', 'Assign MT5 to Email',
        'Manual Gateways', 'Pending Deposits', 'Approved Deposits', 'Rejected Deposits', 'All Deposits',
        'Pending Withdrawals', 'Approved Withdrawals', 'Rejected Withdrawals', 'All Withdrawals',
        'IB Dashboard', 'IB Requests', 'IB Profiles', 'Set IB Commission', 'Set IB Structure',
        'IB Withdrawals', 'Move user to IB', 'PAMM Deposits', 'PAMM Withdrawals', 'Manage PAMM Accounts',
        'Copier Area', 'Master Area', 'Map Copier & Master', 'Manage Bots', 'Bot Plans / Pricing',
        'Bot Configuration', 'Chat Support', 'Manage Prize Lots', 'Set Lot Pricing',
        'Prize Distribution History', 'Send Emails'
      ]
    },
    {
      id: 8,
      name: 'Anchal madam accountant',
      email: 'anchal.j000@gmail.com',
      permissions: [
        'All Users', 'MT5 Account List', 'Pending Deposits', 'Approved Deposits',
        'Rejected Deposits', 'All Deposits', 'Pending Withdrawals', 'Approved Withdrawals',
        'Rejected Withdrawals', 'All Withdrawals', 'IB Withdrawals'
      ]
    }
  ]);

  const [editingRole, setEditingRole] = useState(null);
  const [formData, setFormData] = useState({
    role_name: '',
    email: '',
    password: '',
    permissions: []
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  const permissionGroups = {
    system: ['System Settings'],
    dashboard: ['Dashboard'],
    roles: ['Roles & Responsibilities'],
    add: ['Add User'],
    users: ['All Users', 'Active Users', 'Banned Users', 'With Balance'],
    unverified: ['Email Unverified'],
    kyc: ['KYC Unverified', 'KYC Pending', 'KYC Verifications'],
    send: ['Send Notification', 'Send Emails', 'Send Analysis'],
    mt5: ['MT5 Account List', 'MT5 Users List', 'Assign MT5 to Email'],
    finance: ['Manage Finance'],
    payment: ['Automatic Gateways', 'Manual Gateways'],
    deposits: ['Pending Deposits', 'Approved Deposits', 'Rejected Deposits', 'All Deposits'],
    withdrawals: ['Pending Withdrawals', 'Approved Withdrawals', 'Rejected Withdrawals', 'All Withdrawals'],
    ib: ['IB Dashboard', 'IB Requests', 'IB Profiles', 'Set IB Commission', 'Set IB Structure', 'IB Withdrawals', 'Move user to IB'],
    pamm: ['PAMM Deposits', 'PAMM Withdrawals', 'Manage PAMM Accounts'],
    copy: ['Copier Area', 'Master Area', 'Map Copier & Master'],
    bot: ['Manage Bots', 'Bot Plans / Pricing', 'Bot Configuration'],
    chat: ['Chat Support'],
    prize: ['Manage Prize Lots', 'Prize Distribution History'],
    lot: ['Set Lot Pricing']
  };

  const allPermissions = Object.values(permissionGroups).flat();

  const filteredPermissions = allPermissions.filter(perm =>
    perm.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedGroup || permissionGroups[selectedGroup]?.includes(perm))
  );

  const handleEdit = (role) => {
    setEditingRole(role);
    setFormData({
      role_name: role.name,
      email: role.email,
      password: '',
      permissions: role.permissions
    });
  };

  const handleDelete = (id) => {
    if (confirm('Delete this role?')) {
      setRoles(roles.filter(role => role.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const togglePermission = (permission) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(p => p !== permission)
        : [...prev.permissions, permission]
    }));
  };

  return (
    <div className="w-100 sm:w-full sm:max-w-[1800px] min-h-screen bg-violet-100 text-gray-900 p-6">
      <div className="w-full max-w-[1800px] mx-auto space-y-8">
        {/* Add/Edit Role Form */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              {editingRole ? 'Edit Role' : 'Add / Edit Role'}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
                <input
                  type="text"
                  value={formData.role_name}
                  onChange={(e) => setFormData({...formData, role_name: e.target.value})}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Leave blank to keep existing"
                />
              </div>
            </div>

            {/* Permissions Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Permissions</h4>
                <span className="text-sm text-gray-500">{formData.permissions.length} selected</span>
              </div>

              {/* Search and Filter */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <svg className="absolute left-3 top-3 w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search permissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">All Groups</option>
                  {Object.keys(permissionGroups).map(group => (
                    <option key={group} value={group}>
                      {group.charAt(0).toUpperCase() + group.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Permission Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                {filteredPermissions.map((permission, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.permissions.includes(permission)
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.permissions.includes(permission)}
                      onChange={() => togglePermission(permission)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                      formData.permissions.includes(permission)
                        ? 'border-white bg-white'
                        : 'border-slate-400'
                    }`}>
                      {formData.permissions.includes(permission) && (
                        <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">{permission}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
              </svg>
              Save Role
            </button>
          </form>
        </div>

        {/* All Roles Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
            <h3 className="text-xl font-bold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              All Roles
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">#</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Permissions</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {roles.map((role) => (
                  <tr key={role.id} className="hover:bg-white/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {role.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {role.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        {role.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div className="flex flex-wrap gap-1 max-w-md">
                        {role.permissions.slice(0, 5).map((perm, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-600 text-gray-700"
                          >
                            {perm}
                          </span>
                        ))}
                        {role.permissions.length > 5 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-500 text-gray-900">
                            +{role.permissions.length - 5} more
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(role)}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          title="Edit"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                          title="Delete"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </div>
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

export default RolesManagement;



