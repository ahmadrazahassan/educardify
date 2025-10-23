import { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate?: (page: 'id-card' | 'fee-receipt' | 'class-schedule' | 'features' | 'about' | 'contact') => void;
  currentPage?: 'id-card' | 'fee-receipt' | 'class-schedule' | 'features' | 'about' | 'contact';
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide header when scrolled past 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="relative p-2.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg border border-white/20 backdrop-blur-sm">
              {/* Icon Glow */}
              <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-sm"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="relative h-6 w-6 text-white drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 drop-shadow-sm">EduCardify</h1>
              <p className="text-xs text-slate-700 font-semibold drop-shadow-sm">Professional Student Tools</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="relative px-2 py-2 bg-white/70 backdrop-blur-xl rounded-full shadow-lg border border-white/30">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onNavigate?.('id-card')}
                  className={`relative px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 ${
                    currentPage === 'id-card' || currentPage === 'fee-receipt' || currentPage === 'class-schedule'
                      ? 'text-blue-700 bg-blue-50/80'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/80'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => onNavigate?.('features')}
                  className={`relative px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 ${
                    currentPage === 'features'
                      ? 'text-blue-700 bg-blue-50/80'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/80'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => onNavigate?.('about')}
                  className={`relative px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 ${
                    currentPage === 'about'
                      ? 'text-blue-700 bg-blue-50/80'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/80'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className={`relative px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 hover:scale-105 ${
                    currentPage === 'contact'
                      ? 'text-blue-700 bg-blue-50/80'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50/80'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          {onNavigate && (
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('id-card')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  currentPage === 'id-card'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                ID Card
              </button>
              <button
                onClick={() => onNavigate('fee-receipt')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  currentPage === 'fee-receipt'
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                Fee Receipt
              </button>
              <button
                onClick={() => onNavigate('class-schedule')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  currentPage === 'class-schedule'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-white/70 text-slate-700 hover:bg-white hover:shadow-sm'
                }`}
              >
                Schedule
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
