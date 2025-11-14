import { useState } from 'react'
import { HiCog, HiPhotograph, HiUpload } from 'react-icons/hi'

export default function PortalSettings() {
  const [logos] = useState({
    main: { path: 'assets/images/logo.png', exists: true },
    small: { path: 'assets/images/logo-sm.png', exists: true },
    favicon: { path: 'assets/images/favicon.ico', exists: true },
    faviconSvg: { path: 'assets/images/icon.svg', exists: false },
    appleTouchIcon: { path: 'assets/images/apple-touch-icon.png', exists: false }
  })

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
            <HiCog className="text-2xl text-white" />
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800">IB Portal Settings</h4>
            <p className="text-sm md:text-base text-gray-600">Manage logos, favicon, and other portal settings</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <h5 className="text-xl font-bold text-white flex items-center gap-2">
            <HiPhotograph className="text-2xl" /> Logo & Favicon Management
          </h5>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Logo */}
            <div className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h6 className="font-bold text-lg mb-4 text-gray-800">Main Logo</h6>
              <div className="mb-4 text-center bg-white rounded-lg p-4 border-2 border-dashed border-blue-200">
                <img 
                  src={logos.main.path} 
                  alt="Main Logo" 
                  className="inline-block max-h-[100px] max-w-[200px] rounded"
                />
                <div className="mt-3 text-xs text-gray-600 space-y-1 bg-gray-50 rounded-lg p-3">
                  <div className="font-medium">DB path: <span className="text-blue-600">{logos.main.path}</span></div>
                  <div className="font-medium">Display path: <span className="text-blue-600">{logos.main.path}</span></div>
                  <div className="font-medium">File exists: <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">✓ Yes</span></div>
                </div>
              </div>
              <form className="space-y-3">
                <div>
                  <input 
                    type="file" 
                    accept="image/png,image/jpeg,image/jpg,image/gif,image/svg+xml"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold hover:file:bg-blue-100"
                  />
                  <small className="text-gray-500 block mt-2">Recommended: PNG, JPG, or SVG (max 5MB)</small>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <HiUpload className="text-lg" /> Upload Main Logo
                </button>
              </form>
            </div>

            {/* Small Logo */}
            <div className="bg-gradient-to-br from-white to-cyan-50 border-2 border-cyan-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h6 className="font-bold text-lg mb-4 text-gray-800">Small Logo</h6>
              <div className="mb-4 text-center bg-white rounded-lg p-4 border-2 border-dashed border-cyan-200 min-h-[120px] flex items-center justify-center">
                <img 
                  src={logos.small.path} 
                  alt="Small Logo" 
                  className="inline-block max-h-[50px] max-w-[150px] rounded"
                />
              </div>
              <form className="space-y-3">
                <div>
                  <input 
                    type="file" 
                    accept="image/png,image/jpeg,image/jpg,image/gif,image/svg+xml"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-50 file:text-cyan-700 file:font-semibold hover:file:bg-cyan-100"
                  />
                  <small className="text-gray-500 block mt-2">Recommended: PNG or SVG (max 5MB)</small>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <HiUpload className="text-lg" /> Upload Small Logo
                </button>
              </form>
            </div>

            {/* Favicon ICO */}
            <div className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h6 className="font-bold text-lg mb-4 text-gray-800">Favicon (ICO)</h6>
              <div className="mb-4 text-center bg-white rounded-lg p-4 border-2 border-dashed border-purple-200 min-h-[100px] flex items-center justify-center">
                <img 
                  src={logos.favicon.path} 
                  alt="Favicon" 
                  className="inline-block max-h-[32px] max-w-[32px] rounded"
                />
              </div>
              <form className="space-y-3">
                <div>
                  <input 
                    type="file" 
                    accept=".ico,image/x-icon"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-50 file:text-purple-700 file:font-semibold hover:file:bg-purple-100"
                  />
                  <small className="text-gray-500 block mt-2">Format: ICO file (16x16, 32x32, or 48x48 pixels)</small>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <HiUpload className="text-lg" /> Upload Favicon
                </button>
              </form>
            </div>

            {/* Favicon SVG */}
            <div className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h6 className="font-bold text-lg mb-4 text-gray-800">Favicon (SVG)</h6>
              <div className="mb-4 text-center bg-white rounded-lg p-4 border-2 border-dashed border-green-200 min-h-[100px] flex items-center justify-center">
                {logos.faviconSvg.exists ? (
                  <img 
                    src={logos.faviconSvg.path} 
                    alt="Favicon SVG" 
                    className="inline-block max-h-[32px] max-w-[32px] rounded"
                  />
                ) : (
                  <span className="text-gray-400 text-sm font-medium">No SVG favicon uploaded</span>
                )}
              </div>
              <form className="space-y-3">
                <div>
                  <input 
                    type="file" 
                    accept="image/svg+xml"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-50 file:text-green-700 file:font-semibold hover:file:bg-green-100"
                  />
                  <small className="text-gray-500 block mt-2">Format: SVG file</small>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <HiUpload className="text-lg" /> Upload SVG Favicon
                </button>
              </form>
            </div>

            {/* Apple Touch Icon */}
            <div className="bg-gradient-to-br from-white to-amber-50 border-2 border-amber-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h6 className="font-bold text-lg mb-4 text-gray-800">Apple Touch Icon</h6>
              <div className="mb-4 text-center bg-white rounded-lg p-4 border-2 border-dashed border-amber-200 min-h-[200px] flex items-center justify-center">
                {logos.appleTouchIcon.exists ? (
                  <img 
                    src={logos.appleTouchIcon.path} 
                    alt="Apple Touch Icon" 
                    className="inline-block max-h-[180px] max-w-[180px] rounded-lg"
                  />
                ) : (
                  <span className="text-gray-400 text-sm font-medium">No Apple Touch Icon uploaded</span>
                )}
              </div>
              <form className="space-y-3">
                <div>
                  <input 
                    type="file" 
                    accept="image/png"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-50 file:text-amber-700 file:font-semibold hover:file:bg-amber-100"
                  />
                  <small className="text-gray-500 block mt-2">Format: PNG (180x180 pixels recommended)</small>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl hover:from-amber-600 hover:to-orange-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <HiUpload className="text-lg" /> Upload Apple Touch Icon
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
