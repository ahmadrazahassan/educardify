import { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (page: 'id-card' | 'teacher-id-card' | 'teacher-letter' | 'fee-receipt' | 'class-schedule' | 'features' | 'about' | 'contact') => void;
  currentPage?: 'id-card' | 'teacher-id-card' | 'teacher-letter' | 'fee-receipt' | 'class-schedule' | 'features' | 'about' | 'contact';
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => onNavigate?.('id-card')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg blur-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-violet-600 p-1.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
            </div>
            <span className="text-lg font-semibold text-slate-900 tracking-tight">EduCardify</span>
          </div>

          {/* Tool Selector */}
          {onNavigate && (
            <nav className="flex items-center gap-1 bg-slate-100/80 backdrop-blur-sm rounded-lg p-1">
              <button
                onClick={() => onNavigate('id-card')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  currentPage === 'id-card'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                Student ID
              </button>
              <button
                onClick={() => onNavigate('teacher-id-card')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  currentPage === 'teacher-id-card'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                Teacher ID
              </button>
              <button
                onClick={() => onNavigate('teacher-letter')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  currentPage === 'teacher-letter'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                Letter
              </button>
              <button
                onClick={() => onNavigate('fee-receipt')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  currentPage === 'fee-receipt'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                Receipt
              </button>
              <button
                onClick={() => onNavigate('class-schedule')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  currentPage === 'class-schedule'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                Schedule
              </button>
            </nav>
          )}

          {/* Right Side - Empty for balance */}
          <div className="w-32"></div>
        </div>
      </div>
    </header>
  );
}
