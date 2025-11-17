import React, { useState, useEffect } from 'react';

const ChangeMt5Password = () => {
  const [formData, setFormData] = useState({
    userId: '',
    mt5Id: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [mt5Accounts, setMt5Accounts] = useState([]);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    upper: false,
    lower: false,
    number: false,
    special: false,
    match: false
  });

  // Sample user data - in real app this would come from API
  const users = [
    { id: 382, name: 'Rajesh Pawar', email: 'raju.21pawar@gmail.com' },
    { id: 378, name: 'Vinod Kumar', email: 'vkvinodkumar760@gmail.com' },
    { id: 377, name: 'shahbaz ilyas', email: 'shahbazilyas196@gmail.com' },
    { id: 376, name: 'Bhura Ram', email: 'bhuraram9754@gmail.com' },
    { id: 373, name: 'sanjay Jadhav', email: 'sj0447439@gmail.com' },
    { id: 372, name: 'Sagar Shinde', email: 'nitin3105.shinde@gmail.com' },
    { id: 370, name: 'Swarup Kakade', email: 'swarupk298@gmail.com' },
    { id: 369, name: 'adnan raza', email: 'adnan24raza@gmail.com' },
    { id: 368, name: 'Tushar Warad', email: 'tusharimp13@gmail.com' },
    { id: 366, name: 'Pramod Kirdat', email: 'kirdatpramod4@gmail.com' },
    { id: 365, name: 'Sandip Kenjale', email: 'sandipkenjale@gmail.com' },
    { id: 364, name: 'Ganesh Sutar', email: 'ganeshsutar2002@gmail.com' },
    { id: 361, name: 'sanjay Jadhav', email: 'jsanjay1070@gmail.com' },
    { id: 358, name: 'Sonali sutar', email: 'sgsservices2002@gmail.com' },
    { id: 357, name: 'Madhukar Dhonde', email: 'dhondemadhukar2999@gmail.com' },
    { id: 356, name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com' },
    { id: 352, name: 'FINCRM Trading tw', email: 'trading123@gmail.com' },
    { id: 350, name: 'Rajendra Dudhe', email: 'kalerushikesh350@gmail.com' },
    { id: 348, name: 'Dayanand Shendarkar', email: 'daya23299@gmail.com' },
    { id: 345, name: 'AMIT UMBARKAR', email: 'umbarkaramit90@gmail.com' },
    { id: 344, name: 'PRASHANT S KAKADE', email: 'prashk456@gmail.com' },
    { id: 340, name: 'FINCRM MARKET TRADING', email: 'tradings@gmail.com' },
    { id: 334, name: 'Naveed Naveed', email: 'mohammadnaveed84@gmail.com' },
    { id: 331, name: 'Aditya Nikam', email: 'aditya.nikam9075@gmail.com' },
    { id: 330, name: 'Aakanksha Pawar', email: 'aakankshalp@gmail.com' },
    { id: 329, name: 'Vishwjit Salunkhe', email: 'vishwjitsalunkhe2000@gmail.com' },
    { id: 327, name: 'Shivprasad Prabhavale', email: 'shivprasadprabhavale@gmail.com' },
    { id: 326, name: 'Najamuddin Makandar', email: 'makandarnajamuddin0@gmail.com' },
    { id: 324, name: 'Ali Raza', email: 'aliraza37411@gmail.com' },
    { id: 323, name: 'Shoaib Qureshi', email: 'luckee8@gmail.com' },
    { id: 322, name: 'Prathamesh MISAL', email: 'misalprathamesh385@gmail.com' },
    { id: 320, name: 'Aniket Dhage', email: 'dhagemanju57@gmail.com' },
    { id: 319, name: 'Mandar Kathote', email: 'mandarak16051922@gmail.com' },
    { id: 318, name: 'Raj Pisal', email: 'rajpisal07@gmail.com' },
    { id: 317, name: 'Akash Jadhav', email: 'akashjadhav9699@gmail.com' },
    { id: 309, name: 'nazeer sultan', email: 'nazeerg999@gmail.com' },
    { id: 302, name: 'Piyush dhakan', email: 'piyush_dhakan@hotmail.com' },
    { id: 275, name: 'Pankaj  Matere', email: 'pankajmatere08@gmail.com' },
    { id: 273, name: 'Nitin Shah', email: 'yashcollectionpune@gmail.com' },
    { id: 272, name: 'Hanamant Sonavane', email: 'hanamantsonavane351@gmail.com' },
    { id: 271, name: 'Om Kakade', email: 'omkakade0809@gmail.com' },
    { id: 270, name: 'PRAVIN KOLI', email: 'kolipl28@gmail.com' },
    { id: 269, name: 'Prasad Nanekar', email: 'prasadnanekar358@gmail.com' },
    { id: 268, name: 'Ajay Sonawane', email: 'ajay7038814475@gmail.com' },
    { id: 267, name: 'Vijay Kamble', email: 'vijay.ik137@gmail.com' },
    { id: 265, name: 'Anil Gaikwad', email: 'anilgaikwad9748ib@gmail.com' },
    { id: 264, name: 'Sagar Shinde', email: 'sagarshinde0034@gmail.com' },
    { id: 263, name: 'Muhamad Jaenuri', email: 'muhamadjaenuri63@gmail.com' },
    { id: 262, name: 'Suvarna Sawant', email: 'krantisawant27@gmail.com' },
    { id: 261, name: 'Suyog Datrange', email: 'suyogdatrange@gmail.com' },
    { id: 260, name: 'Rohit Kamble', email: 'rohitkamble4147@gmail.com' },
    { id: 238, name: 'Deepak Patil', email: 'deepak11683@gmail.com' },
    { id: 235, name: 'pratik bhagaje', email: 'pratikbhagaje7673@gmail.com' },
    { id: 230, name: 'Vilas  Jadhav', email: 'rajeshgamare38@gmail.com' },
    { id: 229, name: 'Finstep India', email: 'finstepindia@gmail.com' },
    { id: 224, name: 'nazeer sultan', email: 'asiacablg@gmail.com' },
    { id: 220, name: 'Mudassar Nawaz', email: 'alimohsinaa2@gmail.com' },
    { id: 219, name: 'Ghazanfar Akram', email: 'alimohsinaa1@gmail.com' },
    { id: 218, name: 'Priyanka Gelye', email: 'prakashgelye85@gmail.com' },
    { id: 216, name: 'India Head', email: 'candlestoryofficial@gmail.com' },
    { id: 214, name: 'Ajay  Thengil ', email: 'ajaythengil@gmail.com' },
    { id: 212, name: 'KERLENS DAMEUS', email: 'kerlensdameus89@gmail.com' },
    { id: 211, name: 'Pratik Babar', email: 'pratikbabar726@gmail.com' },
    { id: 209, name: 'Karuna Dhisal', email: 'dvrushni@gmail.com' },
    { id: 206, name: 'Khemlal Chandekar', email: 'kgc110566@gmail.com' },
    { id: 205, name: 'Aliza Fatma', email: 'alizafatma5110@gmail.com' },
    { id: 204, name: 'Rajesh Kadu', email: 'shreefire_rajesh@rediffmail.com' },
    { id: 203, name: 'Ramesh Singh', email: 'rramesh.singh77@gmail.com' },
    { id: 193, name: 'Bhairavi Kamble', email: 'sayhi2bhairu@gmail.com' },
    { id: 185, name: 'r k', email: 'katochrasik000@gmail.com' }
  ];

  // Check password requirements
  useEffect(() => {
    const password = formData.newPassword;
    const confirm = formData.confirmPassword;

    setPasswordRequirements({
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
      match: password === confirm && password.length > 0
    });
  }, [formData.newPassword, formData.confirmPassword]);

  // Handle user selection change
  const handleUserChange = (e) => {
    const userId = e.target.value;
    setFormData(prev => ({ ...prev, userId, mt5Id: '' }));

    if (userId) {
      // Simulate fetching MT5 accounts for the selected user
      // In real app, this would be an API call
      setMt5Accounts([
        { id: '369076', label: 'MT5 Account 369076' },
        { id: '369075', label: 'MT5 Account 369075' },
        { id: '369074', label: 'MT5 Account 369074' }
      ]);
    } else {
      setMt5Accounts([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
  };

  const handleReset = () => {
    setFormData({
      userId: '',
      mt5Id: '',
      newPassword: '',
      confirmPassword: ''
    });
    setMt5Accounts([]);
  };

  const isFormValid = formData.userId && formData.mt5Id && formData.newPassword &&
                     formData.confirmPassword && Object.values(passwordRequirements).every(req => req);

  return (
    <div className="min-h-screen bg-violet-100 p-2">
      <div className="w-full max-w-[1800px] mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Change MT5 Trading Password</h1>
          <p className="text-lg text-gray-600">Change MT5 trading password for users from admin panel.</p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
            <div>
              <h3 className="font-semibold text-lg">Found Users</h3>
              <p className="text-purple-100">70 users with MT5 accounts available.</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-6">
                <h2 className="text-xl font-semibold text-white">Password Change Form</h2>
                <p className="text-purple-100 text-sm">Select user and set new trading password</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* User and MT5 Selection Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select User
                    </label>
                    <select
                      name="userId"
                      value={formData.userId}
                      onChange={handleUserChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white transition-colors"
                    >
                      <option value="">Choose a user...</option>
                      {users.map(user => (
                        <option key={user.id} value={user.id}>
                          {user.name} ({user.email})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select MT5 Account
                    </label>
                    <select
                      name="mt5Id"
                      value={formData.mt5Id}
                      onChange={handleInputChange}
                      required
                      disabled={!formData.userId}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
                    >
                      <option value="">
                        {formData.userId ? 'Select MT5 account...' : 'First select a user...'}
                      </option>
                      {mt5Accounts.map(account => (
                        <option key={account.id} value={account.id}>
                          {account.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Password Type Info */}
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <h4 className="font-medium text-purple-900">Password Type</h4>
                      <p className="text-sm text-purple-700">Main Password (Trading)</p>
                      <p className="text-xs text-purple-600 mt-1">Only main trading password will be changed</p>
                    </div>
                  </div>
                </div>

                {/* Password Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Enter new password"
                      required
                      minLength="8"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm new password"
                      required
                      minLength="8"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Password Requirements */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Password Requirements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className={`flex items-center space-x-2 ${passwordRequirements.length ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 ${passwordRequirements.length ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        {passwordRequirements.length ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        )}
                      </svg>
                      <span>At least 8 characters</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${passwordRequirements.upper ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 ${passwordRequirements.upper ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        {passwordRequirements.upper ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        )}
                      </svg>
                      <span>At least 1 uppercase letter</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${passwordRequirements.lower ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 ${passwordRequirements.lower ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        {passwordRequirements.lower ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        )}
                      </svg>
                      <span>At least 1 lowercase letter</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${passwordRequirements.number ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 ${passwordRequirements.number ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        {passwordRequirements.number ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        )}
                      </svg>
                      <span>At least 1 number</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${passwordRequirements.special ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 ${passwordRequirements.special ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        {passwordRequirements.special ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        )}
                      </svg>
                      <span>At least 1 special character</span>
                    </div>
                    <div className={`flex items-center space-x-2 ${passwordRequirements.match ? 'text-green-600' : 'text-gray-500'}`}>
                      <svg className={`w-4 h-4 ${passwordRequirements.match ? 'text-green-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        {passwordRequirements.match ? (
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        )}
                      </svg>
                      <span>Passwords must match</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Change Password</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                    </svg>
                    <span>Reset Form</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Instructions Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            {/* Instructions Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-6">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  Instructions
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-medium text-blue-900 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      Important Notes
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li><strong>Main Trading Password:</strong> Used for trading and account management</li>
                      <li>Only the main trading password will be changed</li>
                      <li>Password changes are immediate and affect MT5 login</li>
                      <li>Users will need to use the new password for MT5 login</li>
                      <li>Changes are logged for security purposes</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <h4 className="font-medium text-amber-900 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      Security
                    </h4>
                    <ul className="text-sm text-amber-800 space-y-1">
                      <li>Only authorized admins can change passwords</li>
                      <li>All password changes are logged</li>
                      <li>Users should be notified of password changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeMt5Password;