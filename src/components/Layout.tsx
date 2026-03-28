import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Platform', page: 'platform' },
    { name: 'AI-Native', page: 'ai-native' },
    { name: 'Sustainability', page: 'sustainability' },
    { name: 'Security', page: 'security' },
    { name: 'Theme', page: 'theme' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-[#0A1628] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#4F87FF] to-[#9F7AEA] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded" />
              </div>
              <span className="text-white text-xl font-bold">iCMMS</span>
            </button>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-[#4F87FF]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 text-sm font-semibold text-white border-2 border-[#4F87FF] rounded-lg hover:bg-[#4F87FF] transition-colors">
                Explore modules
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#4F87FF] via-[#9F7AEA] to-[#F687B3] rounded-lg hover:opacity-90 transition-opacity">
                Book a demo
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F1F3D] border-t border-gray-800">
            <div className="px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'text-[#4F87FF] bg-[#1a2942]'
                      : 'text-gray-300 hover:text-white hover:bg-[#1a2942]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 space-y-2">
                <button className="w-full px-4 py-2 text-sm font-semibold text-white border-2 border-[#4F87FF] rounded-lg hover:bg-[#4F87FF] transition-colors">
                  Explore modules
                </button>
                <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#4F87FF] via-[#9F7AEA] to-[#F687B3] rounded-lg hover:opacity-90 transition-opacity">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-[#0A1628] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-[#4F87FF] to-[#9F7AEA] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded" />
              </div>
              <span className="text-white text-lg font-bold">iCMMS</span>
              <span className="text-gray-400 text-sm ml-4">AI-native operations</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 iCMMS. All rights reserved. Built for web + mobile.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
