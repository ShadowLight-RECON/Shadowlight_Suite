import React, { useState } from 'react';
import { Shield, Zap, AccountTree, Build, Database, Info, ChevronRight, Play, Save } from 'lucide-react';

const Arsenal = () => {
  const [activeMethod, setActiveMethod] = useState('Payload_Splitting');

  return (
    <div className="space-y-6 pb-10">
      {/* Advanced Attack Chain Builder */}
      <section className="bg-[#131313]/80 border border-[#dab9ff]/15 rounded-xl p-5 shadow-[0_0_15px_rgba(143,0,255,0.1)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#dab9ff] font-bold">Attack_Chain_Builder_V4</h2>
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-zinc-500 uppercase">Detection_Risk:</span>
            <span className="text-[10px] text-green-400 font-bold uppercase">Low</span>
          </div>
        </div>

        {/* Chain Visualizer */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {['Recon', 'Jailbreak', 'Mutation', 'Exfil'].map((step, i) => (
            <React.Fragment key={step}>
              <div className={`shrink-0 px-3 py-2 rounded-lg border ${i === 1 ? 'bg-[#8f00ff]/20 border-[#8f00ff] text-[#dab9ff]' : 'bg-[#1c1c1c] border-[#393939] text-zinc-500'} text-[10px] font-bold uppercase`}>
                {step}
              </div>
              {i < 3 && <ChevronRight className="w-3 h-3 text-zinc-700 shrink-0" />}
            </React.Fragment>
          ))}
        </div>

        {/* Methodology Selection */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { id: 'Payload_Splitting', label: 'Payload Splitting', icon: Zap },
            { id: 'Cognitive_Overload', label: 'Cognitive Overload', icon: Shield }
          ].map((method) => (
            <button
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${activeMethod === method.id ? 'bg-[#1c1c1c] border-[#8f00ff] text-[#dab9ff]' : 'bg-[#0e0e0e] border-[#393939] text-zinc-500'}`}
            >
              <method.icon className={`w-3 h-3 ${activeMethod === method.id ? 'text-[#8f00ff]' : 'text-zinc-600'}`} />
              <span className="text-[9px] font-bold uppercase tracking-tight">{method.label}</span>
            </button>
          ))}
        </div>

        <button className="w-full py-3 bg-[#8f00ff] text-black rounded-lg text-[10px] font-black uppercase shadow-[0_0_15px_rgba(143,0,255,0.4)] flex items-center justify-center gap-2">
          <Play className="w-3 h-3 fill-current" />
          Simulate_Chain
        </button>
      </section>

      {/* Custom Payload Wizard */}
      <section className="bg-[#131313] border border-[#393939]/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Build className="w-4 h-4 text-[#8f00ff]" />
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#8f00ff] font-bold">Payload_Wizard</h2>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-[8px] text-zinc-500 uppercase mb-2">Base_Vector</label>
            <div className="bg-[#0e0e0e] border border-[#393939]/50 rounded-lg px-4 py-3 text-[10px] text-zinc-300 flex justify-between items-center">
              <span>Prompt_Injection_RAG</span>
              <ChevronRight className="w-3 h-3 text-zinc-700" />
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-[8px] text-zinc-500 uppercase mb-2">Mutation_Layer</label>
              <div className="bg-[#0e0e0e] border border-[#393939]/50 rounded-lg px-3 py-2 text-[10px] text-zinc-300">Base64</div>
            </div>
            <div className="flex-1">
              <label className="block text-[8px] text-zinc-500 uppercase mb-2">Language</label>
              <div className="bg-[#0e0e0e] border border-[#393939]/50 rounded-lg px-3 py-2 text-[10px] text-zinc-300">Emoji_Polyglot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Payload Repository Snippet */}
      <section className="bg-[#131313]/40 border border-[#393939]/20 rounded-xl p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Recent_Vectors</h3>
          <Database className="w-3 h-3 text-zinc-600" />
        </div>
        <div className="space-y-2">
          {[
            { name: 'DAN_6.0_STABLE', type: 'Jailbreak', rate: '88%' },
            { name: 'TOKEN_SMUGGLE_V2', type: 'Exfil', rate: '92%' }
          ].map((v) => (
            <div key={v.name} className="flex justify-between items-center bg-[#1c1c1c]/50 p-2 rounded border border-white/5">
              <div>
                <p className="text-[9px] font-mono text-[#dab9ff]">{v.name}</p>
                <p className="text-[7px] text-zinc-600 uppercase">{v.type}</p>
              </div>
              <span className="text-[9px] font-bold text-green-500">{v.rate}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Arsenal;
