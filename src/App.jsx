import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Terminal from './pages/Terminal';
import Arsenal from './pages/Arsenal';
import Scanner from './pages/Scanner';
import Intel from './pages/Intel';
import Reports from './pages/Reports';

const App = () => {
  const [activeTab, setActiveTab] = useState('DASHBOARD');
  const [isJEFEnabled, setIsJEFEnabled] = useState(true);

  const renderModule = () => {
    switch (activeTab) {
      case 'DASHBOARD': return <Dashboard />;
      case 'ARSENAL': return <Arsenal />;
      case 'SCANNER': return <Scanner />;
      case 'TERMINAL': return <Terminal />;
      case 'INTEL': return <Intel />;
      case 'REPORTS': return <Reports />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0e0e0e] text-[#dab9ff] font-['Inter']">
      {/* Header / TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#dab9ff]/10 px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-[#8f00ff] rounded flex items-center justify-center text-black font-bold text-xs italic">SL</div>
           <h1 className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-sm">SHADOWLIGHT</h1>
        </div>
        <div className="flex items-center gap-4">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[8px] text-zinc-500 uppercase tracking-widest leading-none">Protocol</span>
              <span className="text-[10px] text-purple-400 font-bold uppercase leading-none mt-1">SL_ELITE_V4</span>
           </div>
           <button className="px-3 py-1.5 bg-[#8f00ff] text-white text-[10px] font-bold rounded uppercase">Get Started</button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-16 pb-20 overflow-y-auto">
        {renderModule()}
      </main>

      {/* Navigation / BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-t border-[#393939]/30 flex justify-around items-center px-4 py-3 pb-safe">
        {[
          { id: 'DASHBOARD', icon: 'grid_view', label: 'Dash' },
          { id: 'TERMINAL', icon: 'terminal', label: '0din' },
          { id: 'ARSENAL', icon: 'account_tree', label: 'Chain' },
          { id: 'SCANNER', icon: 'radar', label: 'Scanner' },
          { id: 'INTEL', icon: 'hub', label: 'Intel' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all ${activeTab === tab.id ? 'text-[#dab9ff]' : 'text-[#393939]'}`}
          >
            <div className={`p-2 rounded-xl transition-all ${activeTab === tab.id ? 'bg-[#8f00ff]/20 shadow-[0_0_15px_rgba(143,0,255,0.3)]' : ''}`}>
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
            </div>
            <span className="text-[8px] uppercase font-bold tracking-widest">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
