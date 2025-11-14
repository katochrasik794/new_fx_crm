import React, { useState } from 'react';

const AssignMt5Account = () => {
  const [formData, setFormData] = useState({
    userId: '',
    mt5Id: '',
    newPassword: ''
  });

  // Sample user data - in real app this would come from API
  const users = [
    { id: 330, email: 'aakankshalp@gmail.com' },
    { id: 331, email: 'aditya.nikam9075@gmail.com' },
    { id: 180, email: 'admin@gmail.com' },
    { id: 369, email: 'adnan24raza@gmail.com' },
    { id: 268, email: 'ajay7038814475@gmail.com' },
    { id: 201, email: 'ajayrajput99911@gmail.com' },
    { id: 214, email: 'ajaythengil@gmail.com' },
    { id: 317, email: 'akashjadhav9699@gmail.com' },
    { id: 367, email: 'akashsonmale2026@gmail.com' },
    { id: 219, email: 'alimohsinaa1@gmail.com' },
    { id: 220, email: 'alimohsinaa2@gmail.com' },
    { id: 324, email: 'aliraza37411@gmail.com' },
    { id: 205, email: 'alizafatma5110@gmail.com' },
    { id: 265, email: 'anilgaikwad9748ib@gmail.com' },
    { id: 328, email: 'anillg123@gmail.com' },
    { id: 236, email: 'apal5878@gmail.com' },
    { id: 243, email: 'arunadhisal@gmail.com' },
    { id: 224, email: 'asiacablg@gmail.com' },
    { id: 376, email: 'bhuraram9754@gmail.com' },
    { id: 216, email: 'candlestoryofficial@gmail.com' },
    { id: 353, email: 'ceo.candlestory@gmail.com' },
    { id: 348, email: 'daya23299@gmail.com' },
    { id: 238, email: 'deepak11683@gmail.com' },
    { id: 320, email: 'dhagemanju57@gmail.com' },
    { id: 357, email: 'dhondemadhukar2999@gmail.com' },
    { id: 209, email: 'dvrushni@gmail.com' },
    { id: 387, email: 'ehsanali005@gmail.com' },
    { id: 229, email: 'finstepindia@gmail.com' },
    { id: 194, email: 'finwizacademy@gmail.com' },
    { id: 364, email: 'ganeshsutar2002@gmail.com' },
    { id: 210, email: 'garahaltopai@gmail.com' },
    { id: 272, email: 'hanamantsonavane351@gmail.com' },
    { id: 228, email: 'hassanpathan795@gmail.com' },
    { id: 283, email: 'ib.wtcindia@gmail.com' },
    { id: 333, email: 'ikmansuri88@gmail.com' },
    { id: 375, email: 'insurancearadhanahyundai@gmail.com' },
    { id: 383, email: 'jagdishsonar020@gmail.com' },
    { id: 226, email: 'javaidiqbal548@gmail.com' },
    { id: 335, email: 'jogindersingh9671@gmail.com' },
    { id: 361, email: 'jsanjay1070@gmail.com' },
    { id: 381, email: 'kale91150@gmail.com' },
    { id: 350, email: 'kalerushikesh350@gmail.com' },
    { id: 202, email: 'karnwalprashant20@gmail.com' },
    { id: 185, email: 'katochrasik000@gmail.com' },
    { id: 212, email: 'kerlensdameus89@gmail.com' },
    { id: 206, email: 'kgc110566@gmail.com' },
    { id: 366, email: 'kirdatpramod4@gmail.com' },
    { id: 270, email: 'kolipl28@gmail.com' },
    { id: 262, email: 'krantisawant27@gmail.com' },
    { id: 347, email: 'ksmin@gmail.com' },
    { id: 323, email: 'luckee8@gmail.com' },
    { id: 326, email: 'makandarnajamuddin0@gmail.com' },
    { id: 319, email: 'mandarak16051922@gmail.com' },
    { id: 310, email: 'mani3130882929@gmail.com' },
    { id: 307, email: 'master1234@gmail.com' },
    { id: 321, email: 'misalp737@gmail.com' },
    { id: 322, email: 'misalprathamesh385@gmail.com' },
    { id: 334, email: 'mohammadnaveed84@gmail.com' },
    { id: 263, email: 'muhamadjaenuri63@gmail.com' },
    { id: 332, email: 'naveed1381381@gmail.com' },
    { id: 309, email: 'nazeerg999@gmail.com' },
    { id: 308, email: 'nbs881982@gmail.com' },
    { id: 244, email: 'nileshsharma131998@gmail.com' },
    { id: 372, email: 'nitin3105.shinde@gmail.com' },
    { id: 271, email: 'omkakade0809@gmail.com' },
    { id: 384, email: 'Omom37401@gmail.com' },
    { id: 338, email: 'FINCRMMARKETIB@GMAIL.COM' },
    { id: 339, email: 'FINCRMmarketsubib@gmail.com' },
    { id: 351, email: 'FINCRMsubib2@gmail.com' },
    { id: 275, email: 'pankajmatere08@gmail.com' },
    { id: 217, email: 'panshoindia@gmail.com' },
    { id: 360, email: 'parteekchawla69@gmail.com' },
    { id: 302, email: 'piyush_dhakan@hotmail.com' },
    { id: 218, email: 'prakashgelye85@gmail.com' },
    { id: 269, email: 'prasadnanekar358@gmail.com' },
    { id: 344, email: 'prashk456@gmail.com' },
    { id: 211, email: 'pratikbabar726@gmail.com' },
    { id: 235, email: 'pratikbhagaje7673@gmail.com' },
    { id: 337, email: 'priyjeetdevkar@gmail.com' },
    { id: 192, email: 'rahulborkar@gmail.com' },
    { id: 223, email: 'rajanagalave81@gmail.com' },
    { id: 230, email: 'rajeshgamare38@gmail.com' },
    { id: 318, email: 'rajpisal07@gmail.com' },
    { id: 382, email: 'raju.21pawar@gmail.com' },
    { id: 385, email: 'ram13august@gmail.com' },
    { id: 386, email: 'rohitjadhav@2930gmail.com' },
    { id: 260, email: 'rohitkamble4147@gmail.com' },
    { id: 203, email: 'rramesh.singh77@gmail.com' },
    { id: 346, email: 'rushikale8024@gmail.com' },
    { id: 349, email: 'rushikesh350@gmail.com' },
    { id: 264, email: 'sagarshinde0034@gmail.com' },
    { id: 237, email: 'sambhajih2255@gmail.com' },
    { id: 257, email: 'sandeepplcu3434@gmail.com' },
    { id: 365, email: 'sandipkenjale@gmail.com' },
    { id: 193, email: 'sayhi2bhairu@gmail.com' },
    { id: 358, email: 'sgsservices2002@gmail.com' },
    { id: 325, email: 'shahbazilyas074@gmail.com' },
    { id: 377, email: 'shahbazilyas196@gmail.com' },
    { id: 221, email: 'sharkk.capital@gmail.com' },
    { id: 327, email: 'shivprasadprabhavale@gmail.com' },
    { id: 204, email: 'shreefire_rajesh@rediffmail.com' },
    { id: 373, email: 'sj0447439@gmail.com' },
    { id: 371, email: 'ss12421243@gmail.com' },
    { id: 261, email: 'suyogdatrange@gmail.com' },
    { id: 370, email: 'swarupk298@gmail.com' },
    { id: 354, email: 'thomasselve7@gmail.com' },
    { id: 352, email: 'trading123@gmail.com' },
    { id: 340, email: 'tradings@gmail.com' },
    { id: 368, email: 'tusharimp13@gmail.com' },
    { id: 225, email: 'umairwarraich355@gmail.com' },
    { id: 345, email: 'umbarkaramit90@gmail.com' },
    { id: 227, email: 'uzairiqbal548@gmail.comi' },
    { id: 266, email: 'v.vijay137@gmail.com' },
    { id: 267, email: 'vijay.ik137@gmail.com' },
    { id: 329, email: 'vishwjitsalunkhe2000@gmail.com' },
    { id: 378, email: 'vkvinodkumar760@gmail.com' },
    { id: 356, email: 'vrenterprisessatara@gmail.com' },
    { id: 273, email: 'yashcollectionpune@gmail.com' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
  };

  return (
    <div className="min-h-screen bg-violet-100 p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-gray-900">Assign Existing MT5 Account</h4>
              <p className="text-gray-600 mt-1">Map an existing MT5 ID to a user account and save it to the database.</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h5 className="text-white text-lg font-semibold">Account Assignment Form</h5>
            <p className="text-blue-100 text-sm">Fill in the details below to assign an MT5 account</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
              {/* User Selection */}
              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select User (Email)
                </label>
                <select
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
                >
                  <option value="">-- Select User Email --</option>
                  {users.map(user => (
                    <option key={user.id} value={user.id}>
                      {user.email}
                    </option>
                  ))}
                </select>
              </div>

              {/* MT5 ID Input */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter MT5 ID
                </label>
                <input
                  type="text"
                  name="mt5Id"
                  value={formData.mt5Id}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter MT5 ID"
                />
              </div>

              {/* Password Input */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Set new password"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 lg:col-span-1">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span>Fetch Info</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <div>
                  <h6 className="text-sm font-medium text-blue-900">Important Notes</h6>
                  <ul className="text-sm text-blue-800 mt-1 space-y-1">
                    <li>• Ensure the MT5 ID exists and is not already assigned to another user</li>
                    <li>• The new password field is optional - leave blank to keep existing password</li>
                    <li>• Changes will be saved to the database immediately after submission</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignMt5Account;