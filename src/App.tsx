import { useState } from 'react'
import StudentIDCardGenerator from './StudentIDCardGenerator'
import TeacherIDCardGenerator from './TeacherIDCardGenerator'
import TeacherOfficialLetterGenerator from './TeacherOfficialLetterGenerator'
import TuitionFeeReceiptGenerator from './TuitionFeeReceiptGenerator'
import ClassScheduleGenerator from './ClassScheduleGenerator'
import FeaturesPage from './components/FeaturesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Header from './components/Header'

function App() {
  const [currentPage, setCurrentPage] = useState<'id-card' | 'teacher-id-card' | 'teacher-letter' | 'fee-receipt' | 'class-schedule' | 'features' | 'about' | 'contact'>('id-card')

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      {/* Show pages or generators based on current page */}
      {currentPage === 'features' ? (
        <FeaturesPage />
      ) : currentPage === 'about' ? (
        <AboutPage />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : (
        <div className="pt-20 pb-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Single Hero Section with Tabs */}
            <div className="text-center mb-12 py-8">
              {/* Tab Switcher */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-slate-200 p-1 flex-wrap gap-1">
                  <button
                    onClick={() => setCurrentPage('id-card')}
                    className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentPage === 'id-card'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Student ID
                  </button>
                  <button
                    onClick={() => setCurrentPage('teacher-id-card')}
                    className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentPage === 'teacher-id-card'
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Teacher ID
                  </button>
                  <button
                    onClick={() => setCurrentPage('teacher-letter')}
                    className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentPage === 'teacher-letter'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Official Letter
                  </button>
                  <button
                    onClick={() => setCurrentPage('fee-receipt')}
                    className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentPage === 'fee-receipt'
                        ? 'bg-green-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Fee Receipt
                  </button>
                  <button
                    onClick={() => setCurrentPage('class-schedule')}
                    className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      currentPage === 'class-schedule'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Schedule
                  </button>
                </div>
              </div>

              {/* Dynamic Hero Content */}
              {currentPage === 'id-card' ? (
                <>
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      Free Tool
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    Student ID Card Generator
                  </h1>
                  <p className="text-slate-500 text-base max-w-xl mx-auto">
                    Create professional student ID cards instantly
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      <span className="text-xs text-slate-600">No Watermarks</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-slate-600">Unlimited</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                      <span className="text-xs text-slate-600">Privacy First</span>
                    </div>
                  </div>
                </>
              ) : currentPage === 'teacher-id-card' ? (
                <>
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                      Free Tool
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    Teacher ID Card Generator
                  </h1>
                  <p className="text-slate-500 text-base max-w-xl mx-auto">
                    Create professional teacher ID cards instantly
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      <span className="text-xs text-slate-600">No Watermarks</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                      <span className="text-xs text-slate-600">Professional</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                      <span className="text-xs text-slate-600">Privacy First</span>
                    </div>
                  </div>
                </>
              ) : currentPage === 'teacher-letter' ? (
                <>
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full">
                      Professional Tool
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    Official Letter Generator
                  </h1>
                  <p className="text-slate-500 text-base max-w-xl mx-auto">
                    Create authentic official letters instantly
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      <span className="text-xs text-slate-600">Professional Format</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                      <span className="text-xs text-slate-600">Multiple Types</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-slate-600">Print Ready</span>
                    </div>
                  </div>
                </>
              ) : currentPage === 'fee-receipt' ? (
                <>
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                      Free Tool
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    Tuition Fee Receipt Generator
                  </h1>
                  <p className="text-slate-500 text-base max-w-xl mx-auto">
                    Create professional fee receipts instantly
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      <span className="text-xs text-slate-600">Auto Calculate</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-slate-600">Print Ready</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                      <span className="text-xs text-slate-600">Professional</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
                      Free Tool
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                    Class Schedule Generator
                  </h1>
                  <p className="text-slate-500 text-base max-w-xl mx-auto">
                    Create professional class schedules instantly
                  </p>
                  
                  {/* Feature Pills */}
                  <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-green-500"></div>
                      <span className="text-xs text-slate-600">Customizable</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-slate-600">Print Ready</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/50 rounded-full border border-slate-100">
                      <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                      <span className="text-xs text-slate-600">Professional</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            {currentPage === 'id-card' ? (
              <StudentIDCardGenerator hideHero />
            ) : currentPage === 'teacher-id-card' ? (
              <TeacherIDCardGenerator hideHero />
            ) : currentPage === 'teacher-letter' ? (
              <TeacherOfficialLetterGenerator hideHero />
            ) : currentPage === 'fee-receipt' ? (
              <TuitionFeeReceiptGenerator hideHero />
            ) : (
              <ClassScheduleGenerator hideHero />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
