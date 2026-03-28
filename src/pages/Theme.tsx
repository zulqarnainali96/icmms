export default function Theme() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">iCMMS Brand Kit</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-[#0A1628] rounded-lg mb-2 border border-gray-200"></div>
                <p className="text-sm font-medium text-gray-700">Navy Dark</p>
                <p className="text-xs text-gray-500">#0A1628</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#0F1F3D] rounded-lg mb-2 border border-gray-200"></div>
                <p className="text-sm font-medium text-gray-700">Navy Deep</p>
                <p className="text-xs text-gray-500">#0F1F3D</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#4F87FF] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Blue Primary</p>
                <p className="text-xs text-gray-500">#4F87FF</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#5B8CFF] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Blue Accent</p>
                <p className="text-xs text-gray-500">#5B8CFF</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Secondary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-[#F5F7FA] rounded-lg mb-2 border border-gray-200"></div>
                <p className="text-sm font-medium text-gray-700">Light Gray</p>
                <p className="text-xs text-gray-500">#F5F7FA</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-white rounded-lg mb-2 border border-gray-200"></div>
                <p className="text-sm font-medium text-gray-700">White</p>
                <p className="text-xs text-gray-500">#FFFFFF</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#E5E7EB] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Gray Light</p>
                <p className="text-xs text-gray-500">#E5E7EB</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#6B7280] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Gray Medium</p>
                <p className="text-xs text-gray-500">#6B7280</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#374151] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Gray Dark</p>
                <p className="text-xs text-gray-500">#374151</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Accent Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-[#9F7AEA] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Purple Accent</p>
                <p className="text-xs text-gray-500">#9F7AEA</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#F687B3] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Pink Accent</p>
                <p className="text-xs text-gray-500">#F687B3</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#3B82F6] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Blue Info</p>
                <p className="text-xs text-gray-500">#3B82F6</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#10B981] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Green Success</p>
                <p className="text-xs text-gray-500">#10B981</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-[#EF4444] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Red Status</p>
                <p className="text-xs text-gray-500">#EF4444</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-[#4F87FF] via-[#9F7AEA] to-[#F687B3] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Button Gradient</p>
                <p className="text-xs text-gray-500">Blue → Purple → Pink</p>
              </div>
              <div className="text-center">
                <div className="w-full h-24 bg-gradient-to-r from-[#4F87FF] to-[#9F7AEA] rounded-lg mb-2"></div>
                <p className="text-sm font-medium text-gray-700">Accent Gradient</p>
                <p className="text-xs text-gray-500">Blue → Purple</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography</h2>

          <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <div>
              <p className="text-xs text-gray-500 mb-1">Hero Title (56px / 700)</p>
              <h1 className="text-[3.5rem] font-bold leading-tight">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">H1 (48px / 700)</p>
              <h1 className="text-5xl font-bold">The quick brown fox</h1>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">H2 (36px / 700)</p>
              <h2 className="text-4xl font-bold">The quick brown fox</h2>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">H3 (30px / 600)</p>
              <h3 className="text-3xl font-semibold">The quick brown fox</h3>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">H4 (24px / 600)</p>
              <h4 className="text-2xl font-semibold">The quick brown fox</h4>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Body Large (18px / 400)</p>
              <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Body (16px / 400)</p>
              <p className="text-base">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Small (14px / 400)</p>
              <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Components</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#4F87FF] via-[#9F7AEA] to-[#F687B3] rounded-lg hover:opacity-90 transition-opacity">
                  Primary Button
                </button>
                <button className="px-8 py-3 text-sm font-semibold text-[#4F87FF] border-2 border-[#4F87FF] rounded-lg hover:bg-[#4F87FF] hover:text-white transition-colors">
                  Secondary Button
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Light Card</h4>
                  <p className="text-gray-600">This is a card component with shadow and rounded corners on a light background.</p>
                </div>
                <div className="bg-[#0F1F3D] p-8 rounded-xl shadow-lg">
                  <h4 className="text-xl font-semibold text-white mb-2">Dark Card</h4>
                  <p className="text-gray-300">This is a card component on a dark background used in hero sections.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Badges</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-sm font-medium text-[#4F87FF] bg-blue-50 rounded-full">
                  Institutional knowledge
                </span>
                <span className="px-3 py-1 text-sm font-medium text-[#4F87FF] bg-blue-50 rounded-full">
                  Operator assistance
                </span>
                <span className="px-3 py-1 text-sm font-medium text-[#4F87FF] bg-blue-50 rounded-full">
                  Management bulletins
                </span>
                <span className="px-3 py-1 text-sm font-medium text-[#4F87FF] bg-blue-50 rounded-full">
                  Predictive signals
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Spacing System</h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-700">xs (8px)</div>
                <div className="h-8 bg-[#4F87FF] rounded" style={{ width: '8px' }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-700">sm (16px)</div>
                <div className="h-8 bg-[#4F87FF] rounded" style={{ width: '16px' }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-700">md (24px)</div>
                <div className="h-8 bg-[#4F87FF] rounded" style={{ width: '24px' }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-700">lg (32px)</div>
                <div className="h-8 bg-[#4F87FF] rounded" style={{ width: '32px' }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-700">xl (48px)</div>
                <div className="h-8 bg-[#4F87FF] rounded" style={{ width: '48px' }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-700">2xl (64px)</div>
                <div className="h-8 bg-[#4F87FF] rounded" style={{ width: '64px' }}></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-gray-700">3xl (96px)</div>
                <div className="h-8 bg-[#4F87FF] rounded" style={{ width: '96px' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg border border-gray-200 flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F87FF] to-[#9F7AEA] rounded-lg flex items-center justify-center">
                  <div className="w-9 h-9 border-3 border-white rounded" />
                </div>
                <span className="text-[#0A1628] text-3xl font-bold">iCMMS</span>
              </div>
            </div>

            <div className="bg-[#0A1628] p-8 rounded-lg flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F87FF] to-[#9F7AEA] rounded-lg flex items-center justify-center">
                  <div className="w-9 h-9 border-3 border-white rounded" />
                </div>
                <span className="text-white text-3xl font-bold">iCMMS</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Principles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clarity</h3>
              <p className="text-gray-700">Information is structured and easy to digest</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-700">Professional appearance with attention to detail</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern</h3>
              <p className="text-gray-700">Clean, contemporary design without unnecessary decoration</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Consistent</h3>
              <p className="text-gray-700">Uniform spacing, colors, and typography throughout</p>
            </div>
          </div>
        </section>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-[#4F87FF]">
          <p className="text-sm text-gray-700">
            For complete brand guidelines and usage instructions, please refer to the <strong>BRANDKIT.md</strong> file in the project root.
          </p>
        </div>
      </div>
    </div>
  );
}
