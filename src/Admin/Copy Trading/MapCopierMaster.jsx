import React, { useState } from 'react';

const MapCopierMaster = () => {
  const [formData, setFormData] = useState({
    copierId: '',
    masterId: ''
  });

  // Sample user data - in real app this would come from API
  const users = [
    { id: 330, name: 'Aakanksha Pawar', email: 'aakankshalp@gmail.com' },
    { id: 354, name: 'abc cde', email: 'thomasselve7@gmail.com' },
    { id: 180, name: 'ABCD XYZ', email: 'admin@gmail.com' },
    { id: 310, name: 'Abdul Rehman', email: 'mani3130882929@gmail.com' },
    { id: 331, name: 'Aditya Nikam', email: 'aditya.nikam9075@gmail.com' },
    { id: 369, name: 'adnan raza', email: 'adnan24raza@gmail.com' },
    { id: 214, name: 'Ajay  Thengil ', email: 'ajaythengil@gmail.com' },
    { id: 201, name: 'Ajay Rajput', email: 'ajayrajput99911@gmail.com' },
    { id: 268, name: 'Ajay Sonawane', email: 'ajay7038814475@gmail.com' },
    { id: 367, name: 'Akash Sonmale', email: 'akashsonmale2026@gmail.com' },
    { id: 317, name: 'Akash Jadhav', email: 'akashjadhav9699@gmail.com' },
    { id: 324, name: 'Ali Raza', email: 'aliraza37411@gmail.com' },
    { id: 205, name: 'Aliza Fatma', email: 'alizafatma5110@gmail.com' },
    { id: 345, name: 'AMIT UMBARKAR', email: 'umbarkaramit90@gmail.com' },
    { id: 320, name: 'Aniket Dhage', email: 'dhagemanju57@gmail.com' },
    { id: 265, name: 'Anil Gaikwad', email: 'anilgaikwad9748ib@gmail.com' },
    { id: 328, name: 'Anil Patil', email: 'anillg123@gmail.com' },
    { id: 360, name: 'anku putt', email: 'parteekchawla69@gmail.com' },
    { id: 236, name: 'ashish pal', email: 'apal5878@gmail.com' },
    { id: 193, name: 'Bhairavi Kamble', email: 'sayhi2bhairu@gmail.com' },
    { id: 376, name: 'Bhura Ram', email: 'bhuraram9754@gmail.com' },
    { id: 353, name: 'Candle  Story', email: 'ceo.candlestory@gmail.com' },
    { id: 348, name: 'Dayanand Shendarkar', email: 'daya23299@gmail.com' },
    { id: 238, name: 'Deepak Patil', email: 'deepak11683@gmail.com' },
    { id: 387, name: 'Ehsan Ali', email: 'ehsanali005@gmail.com' },
    { id: 229, name: 'Finstep India', email: 'finstepindia@gmail.com' },
    { id: 364, name: 'Ganesh Sutar', email: 'ganeshsutar2002@gmail.com' },
    { id: 223, name: 'Gauri Agalave', email: 'rajanagalave81@gmail.com' },
    { id: 219, name: 'Ghazanfar Akram', email: 'alimohsinaa1@gmail.com' },
    { id: 272, name: 'Hanamant Sonavane', email: 'hanamantsonavane351@gmail.com' },
    { id: 228, name: 'Hassan khan', email: 'hassanpathan795@gmail.com' },
    { id: 216, name: 'India Head', email: 'candlestoryofficial@gmail.com' },
    { id: 383, name: 'jagdish sonar', email: 'jagdishsonar020@gmail.com' },
    { id: 226, name: 'Javaid Iqbal', email: 'javaidiqbal548@gmail.com' },
    { id: 227, name: 'Javaid Iqbal', email: 'uzairiqbal548@gmail.comi' },
    { id: 335, name: 'Joginder Singh', email: 'jogindersingh9671@gmail.com' },
    { id: 333, name: 'KALUJAAN Gullijaan', email: 'ikmansuri88@gmail.com' },
    { id: 209, name: 'Karuna Dhisal', email: 'dvrushni@gmail.com' },
    { id: 243, name: 'Karuna  Dhisal', email: 'arunadhisal@gmail.com' },
    { id: 212, name: 'KERLENS DAMEUS', email: 'kerlensdameus89@gmail.com' },
    { id: 206, name: 'Khemlal Chandekar', email: 'kgc110566@gmail.com' },
    { id: 347, name: 'ksm init', email: 'ksmin@gmail.com' },
    { id: 357, name: 'Madhukar Dhonde', email: 'dhondemadhukar2999@gmail.com' },
    { id: 319, name: 'Mandar Kathote', email: 'mandarak16051922@gmail.com' },
    { id: 307, name: 'Master mas', email: 'master1234@gmail.com' },
    { id: 220, name: 'Mudassar Nawaz', email: 'alimohsinaa2@gmail.com' },
    { id: 263, name: 'Muhamad Jaenuri', email: 'muhamadjaenuri63@gmail.com' },
    { id: 194, name: 'Mukul Tyagi', email: 'finwizacademy@gmail.com' },
    { id: 326, name: 'Najamuddin Makandar', email: 'makandarnajamuddin0@gmail.com' },
    { id: 332, name: 'Naveed Naveed', email: 'naveed1381381@gmail.com' },
    { id: 334, name: 'Naveed Naveed', email: 'mohammadnaveed84@gmail.com' },
    { id: 308, name: 'Navnath Salunkhe', email: 'nbs881982@gmail.com' },
    { id: 309, name: 'nazeer sultan', email: 'nazeerg999@gmail.com' },
    { id: 224, name: 'nazeer sultan', email: 'asiacablg@gmail.com' },
    { id: 244, name: 'Nilesh Sharma', email: 'nileshsharma131998@gmail.com' },
    { id: 273, name: 'Nitin Shah', email: 'yashcollectionpune@gmail.com' },
    { id: 271, name: 'Om Kakade', email: 'omkakade0809@gmail.com' },
    { id: 384, name: 'Om Ramagar', email: 'Omom37401@gmail.com' },
    { id: 352, name: 'OXO Trading tw', email: 'trading123@gmail.com' },
    { id: 338, name: 'OXO MARKET IB', email: 'OXOMARKETIB@GMAIL.COM' },
    { id: 339, name: 'OXO MARKET SUB IB', email: 'oxomarketsubib@gmail.com' },
    { id: 340, name: 'OXO MARKET TRADING', email: 'tradings@gmail.com' },
    { id: 351, name: 'OXO SUB IB TWO', email: 'oxosubib2@gmail.com' },
    { id: 275, name: 'Pankaj  Matere', email: 'pankajmatere08@gmail.com' },
    { id: 302, name: 'Piyush dhakan', email: 'piyush_dhakan@hotmail.com' },
    { id: 366, name: 'Pramod Kirdat', email: 'kirdatpramod4@gmail.com' },
    { id: 269, name: 'Prasad Nanekar', email: 'prasadnanekar358@gmail.com' },
    { id: 202, name: 'Prashant Karnwal', email: 'karnwalprashant20@gmail.com' },
    { id: 344, name: 'PRASHANT S KAKADE', email: 'prashk456@gmail.com' },
    { id: 322, name: 'Prathamesh MISAL', email: 'misalprathamesh385@gmail.com' },
    { id: 321, name: 'Prathamesh MISAL', email: 'misalp737@gmail.com' },
    { id: 235, name: 'pratik bhagaje', email: 'pratikbhagaje7673@gmail.com' },
    { id: 211, name: 'Pratik Babar', email: 'pratikbabar726@gmail.com' },
    { id: 270, name: 'PRAVIN KOLI', email: 'kolipl28@gmail.com' },
    { id: 218, name: 'Priyanka Gelye', email: 'prakashgelye85@gmail.com' },
    { id: 337, name: 'Priyjeet Devkar', email: 'priyjeetdevkar@gmail.com' },
    { id: 185, name: 'r k', email: 'katochrasik000@gmail.com' },
    { id: 192, name: 'RAHUL WAMANRAO BORKAR ', email: 'rahulborkar@gmail.com' },
    { id: 318, name: 'Raj Pisal', email: 'rajpisal07@gmail.com' },
    { id: 217, name: 'Rajan Agalave', email: 'panshoindia@gmail.com' },
    { id: 350, name: 'Rajendra Dudhe', email: 'kalerushikesh350@gmail.com' },
    { id: 349, name: 'Rajendra Dudhe', email: 'rushikesh350@gmail.com' },
    { id: 204, name: 'Rajesh Kadu', email: 'shreefire_rajesh@rediffmail.com' },
    { id: 382, name: 'Rajesh Pawar', email: 'raju.21pawar@gmail.com' },
    { id: 385, name: 'Ram  Jawari', email: 'ram13august@gmail.com' },
    { id: 283, name: 'Ramesh Babar', email: 'ib.wtcindia@gmail.com' },
    { id: 203, name: 'Ramesh Singh', email: 'rramesh.singh77@gmail.com' },
    { id: 386, name: 'Rohit Jadhav', email: 'rohitjadhav@2930gmail.com' },
    { id: 260, name: 'Rohit Kamble', email: 'rohitkamble4147@gmail.com' },
    { id: 381, name: 'Rushikesh kale', email: 'kale91150@gmail.com' },
    { id: 346, name: 'Rushikesh Kale', email: 'rushikale8024@gmail.com' },
    { id: 371, name: 'Sagar Shinde', email: 'ss12421243@gmail.com' },
    { id: 372, name: 'Sagar Shinde', email: 'nitin3105.shinde@gmail.com' },
    { id: 264, name: 'Sagar Shinde', email: 'sagarshinde0034@gmail.com' },
    { id: 237, name: 'Sambhaji Hajare', email: 'sambhajih2255@gmail.com' },
    { id: 257, name: 'Sandeep Mane', email: 'sandeepplcu3434@gmail.com' },
    { id: 365, name: 'Sandip Kenjale', email: 'sandipkenjale@gmail.com' },
    { id: 361, name: 'sanjay Jadhav', email: 'jsanjay1070@gmail.com' },
    { id: 373, name: 'sanjay Jadhav', email: 'sj0447439@gmail.com' },
    { id: 325, name: 'Shahbaz Ilyas', email: 'shahbazilyas074@gmail.com' },
    { id: 377, name: 'shahbaz ilyas', email: 'shahbazilyas196@gmail.com' },
    { id: 221, name: 'Sharkk Capital', email: 'sharkk.capital@gmail.com' },
    { id: 327, name: 'Shivprasad Prabhavale', email: 'shivprasadprabhavale@gmail.com' },
    { id: 323, name: 'Shoaib Qureshi', email: 'luckee8@gmail.com' },
    { id: 358, name: 'Sonali sutar', email: 'sgsservices2002@gmail.com' },
    { id: 262, name: 'Suvarna Sawant', email: 'krantisawant27@gmail.com' },
    { id: 261, name: 'Suyog Datrange', email: 'suyogdatrange@gmail.com' },
    { id: 370, name: 'Swarup Kakade', email: 'swarupk298@gmail.com' },
    { id: 368, name: 'Tushar Warad', email: 'tusharimp13@gmail.com' },
    { id: 225, name: 'Umair Hafeez', email: 'umairwarraich355@gmail.com' },
    { id: 356, name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com' },
    { id: 266, name: 'Vijay Kamble', email: 'v.vijay137@gmail.com' },
    { id: 267, name: 'Vijay Kamble', email: 'vijay.ik137@gmail.com' },
    { id: 230, name: 'Vilas  Jadhav', email: 'rajeshgamare38@gmail.com' },
    { id: 378, name: 'Vinod Kumar', email: 'vkvinodkumar760@gmail.com' },
    { id: 375, name: 'Vinod Kumar', email: 'insurancearadhanahyundai@gmail.com' },
    { id: 329, name: 'Vishwjit Salunkhe', email: 'vishwjitsalunkhe2000@gmail.com' },
    { id: 210, name: 'Younes Alshoafi', email: 'garahaltopai@gmail.com' }
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
    if (formData.copierId && formData.masterId) {
      console.log('Mapping copier to master:', formData);
      // Handle form submission
      alert('Copier successfully mapped to master!');
    } else {
      alert('Please select both a copier and a master.');
    }
  };

  const selectedCopier = users.find(user => user.id.toString() === formData.copierId);
  const selectedMaster = users.find(user => user.id.toString() === formData.masterId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Map Copier & Master</h1>
          <p className="text-xl text-gray-600">Connect copy traders with their master traders</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-8">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-7 h-7 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                  Mapping Configuration
                </h2>
                <p className="text-amber-100 text-sm mt-2">Select a copier and master to establish the trading relationship</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Copier Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Select Copier</h3>
                        <p className="text-sm text-gray-600">The trader who will copy trades</p>
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        name="copierId"
                        value={formData.copierId}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white transition-all duration-200 text-gray-900 appearance-none"
                      >
                        <option value="">-- Select Copier --</option>
                        {users.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.name} ({user.email})
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    {selectedCopier && (
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {selectedCopier.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-900">{selectedCopier.name}</p>
                            <p className="text-xs text-blue-700">{selectedCopier.email}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Master Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Select Master</h3>
                        <p className="text-sm text-gray-600">The trader whose trades will be copied</p>
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        name="masterId"
                        value={formData.masterId}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white transition-all duration-200 text-gray-900 appearance-none"
                      >
                        <option value="">-- Select Master --</option>
                        {users.map(user => (
                          <option key={user.id} value={user.id}>
                            {user.name} ({user.email})
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 0 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>

                    {selectedMaster && (
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {selectedMaster.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-green-900">{selectedMaster.name}</p>
                            <p className="text-xs text-green-700">{selectedMaster.email}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connection Visualization */}
                {(selectedCopier && selectedMaster) && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <div className="flex items-center justify-center space-x-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-lg">
                            {selectedCopier.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{selectedCopier.name}</p>
                        <p className="text-xs text-gray-600">Copier</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-amber-400"></div>
                        <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                        </svg>
                        <div className="w-8 h-0.5 bg-amber-400"></div>
                      </div>

                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-lg">
                            {selectedMaster.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{selectedMaster.name}</p>
                        <p className="text-xs text-gray-600">Master</p>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Ready to establish copy trading relationship
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-lg rounded-xl transition-all duration-200 focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 flex items-center space-x-3 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                    </svg>
                    <span>Map Copier → Master</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Instructions Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                How It Works
              </h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 font-bold text-xs">1</span>
                  </div>
                  <p>Select a copier from the available users list</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 font-bold text-xs">2</span>
                  </div>
                  <p>Choose a master trader whose trades will be copied</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 font-bold text-xs">3</span>
                  </div>
                  <p>Click "Map Copier → Master" to establish the relationship</p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.924-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                Important Notes
              </h3>
              <ul className="text-sm text-amber-800 space-y-2">
                <li>• Only one master can be assigned per copier</li>
                <li>• Copiers will automatically follow master's trades</li>
                <li>• Relationships can be modified or terminated later</li>
                <li>• Both users must have active MT5 accounts</li>
                <li>• Changes take effect immediately</li>
              </ul>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{users.length}</div>
                  <div className="text-sm text-gray-600">Total Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Active Mappings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCopierMaster;