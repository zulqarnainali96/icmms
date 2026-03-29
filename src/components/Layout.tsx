import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

export default function Layout({ children, onNavigate }: LayoutProps) {
  const location = useLocation();
  const currentPage = location.pathname.replace('/', '') || 'home';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [sites, setSites] = useState('');

  const navItems = [
    { name: 'Platform', page: 'platform' },
    { name: 'AI-Native', page: 'ai-native' },
    { name: 'Sustainability', page: 'sustainability' },
    { name: 'Use Cases', page: 'use-cases' },
    { name: 'Security', page: 'security' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <nav className="bg-brand-dark border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2.5 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 gradient-btn rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </div>
              <span className="text-white text-lg font-bold tracking-tight">iCMMS</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-7">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-brand-blue'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-semibold text-brand-blue border border-brand-blue rounded-lg hover:bg-brand-blue/10 transition-colors">
                Explore modules
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="px-4 py-2 text-sm font-semibold text-white gradient-btn rounded-lg transition-opacity"
              >
                Book a demo
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-darker border-t border-white/5 animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => { onNavigate(item.page); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'text-brand-blue bg-brand-blue/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 space-y-2 border-t border-white/10 mt-3">
                <button className="w-full px-4 py-2 text-sm font-semibold text-brand-blue border border-brand-blue rounded-lg hover:bg-brand-blue/10 transition-colors">
                  Explore modules
                </button>
                <button className="w-full px-4 py-2 text-sm font-semibold text-white gradient-btn rounded-lg">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center space-x-2.5 mb-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 gradient-btn rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm" />
                </div>
                <span className="text-white text-lg font-bold">iCMMS</span>
                <span className="text-xs text-gray-400 border border-gray-700 rounded-full px-2 py-0.5 ml-1">
                  AI-native operations
                </span>
              </button>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                AI-native CMMS for{' '}
                <span className="text-brand-blue">mission-critical</span>{' '}data centers. Capture structured
                operational data so agents can retain institutional knowledge, assist operators,
                expose blind spots at scale, and extend asset life.
              </p>
              <p className="text-gray-600 text-xs mt-6">
                © 2026 iCMMS. All rights reserved. · Built for web + mobile.
              </p>
            </div>

            {/* Right — Book a demo form */}
            <div>
              <h3 className="text-white font-semibold text-base mb-1">Book a demo</h3>
              <p className="text-gray-400 text-sm mb-4">
                Tell us your portfolio size and current tooling—we'll tailor a walkthrough.
              </p>
              <div className="space-y-2.5">
                <input
                  type="email"
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-brand-darker border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue transition-colors"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-brand-darker border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue transition-colors"
                />
                <input
                  type="text"
                  placeholder="Number of sites (e.g., 6)"
                  value={sites}
                  onChange={(e) => setSites(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-brand-darker border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue transition-colors"
                />
                <button className="w-full py-2.5 text-sm font-semibold text-white gradient-btn rounded-lg transition-opacity">
                  Request demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
