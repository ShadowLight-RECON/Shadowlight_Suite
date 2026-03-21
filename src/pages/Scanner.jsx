import React, { useState } from 'react';
import { Zap, Target, Shield, AlertCircle, BarChart2, Play, Search, Filter } from 'lucide-react';

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="space-y-6 pb-10">
      {/* Automated Probing Hub */}
      <section className="bg-[#131313]/80 border border-[#dab9ff]/15 rounded-xl p-5 shadow-[0_0_15px_rgba(143,0,255,0.1)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#dab9ff] font-bold">Automated_Vulnerability_Tester_V2</h2>
          <div className={`flex items-center gap-2 px-2 py-1 rounded-md border ${isScanning ? 'bg-green-950/20 border-green-500/30 text-green-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isScanning ? 'bg-green-500 animate-pulse' : 'bg-zinc-600'}`} />
            <span className="text-[8px] font-bold uppercase">{isScanning ? 'Scanning_Active' : 'System_Ready'}</span>
          </div>
        </div>

        {/* Target Selection Matrix */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-[8px] text-zinc-500 uppercase mb-2">Primary_Target</label>
            <div className="bg-[#0e0e0e] border border-[#393939]/50 rounded-lg px-4 py-3 text-[10px] text-zinc-300 flex justify-between items-center">
              <span>GPT-4o (OpenAI)</span>
              <Target className="w-3 h-3 text-[#8f00ff]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="p-3 bg-[#1c1c1c] border border-[#393939]/50 rounded-xl">
                <p className="text-[8px] text-zinc-500 uppercase mb-1">Probe_Intensity</p>
                <p className="text-xs font-bold text-[#dab9ff]">High (Aggressive)</p>
             </div>
             <div className="p-3 bg-[#1c1c1c] border border-[#393939]/50 rounded-xl">
                <p className="text-[8px] text-zinc-500 uppercase mb-1">Mutation_Level</p>
                <p className="text-xs font-bold text-[#dab9ff]">Recursive_V4</p>
             </div>
          </div>
        </div>

        <button 
          onClick={() => setIsScanning(!isScanning)}
          className={`w-full py-4 rounded-lg text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${isScanning ? 'bg-red-500 text-black shadow-[0_0_20px_rgba(239,68,68,0.4)]' : 'bg-[#8f00ff] text-black shadow-[0_0_15px_rgba(143,0,255,0.4)]'}`}
        >
          {isScanning ? (
            <><AlertCircle className="w-4 h-4 fill-current" /> Terminate_Probes</>
          ) : (
            <><Play className="w-4 h-4 fill-current" /> Initiate_System_Scan</>
          )}
        </button>
      </section>

      {/* Real-Time Scan Analytics */}
      <section className="bg-[#131313] border border-[#393939]/30 rounded-xl overflow-hidden">
        <div className="bg-[#1c1c1c] px-4 py-2 border-b border-[#393939]/30 flex justify-between items-center">
          <h3 className="text-[9px] uppercase font-bold text-zinc-400">Live_Scan_Metrics</h3>
          <BarChart2 className="w-3 h-3 text-zinc-500" />
        </div>
        <div className="p-5 grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 flex items-center justify-center">
               <svg className="w-full h-full transform -rotate-90">
                 <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-zinc-800" />
                 <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="213.6" strokeDashoffset={213.6 * (1 - 0.74)} className="text-[#8f00ff]" />
               </svg>
               <span className="absolute text-sm font-bold text-white">74%</span>
            </div>
            <span className="text-[8px] uppercase text-zinc-500 mt-2">Bypass_Probability</span>
          </div>
          <div className="space-y-4">
             <div>
                <p className="text-[8px] text-zinc-500 uppercase">Successful_Breaches</p>
                <p className="text-lg font-bold text-green-400">14</p>
             </div>
             <div>
                <p className="text-[8px] text-zinc-500 uppercase">Filtered_Attempts</p>
                <p className="text-lg font-bold text-red-400">429</p>
             </div>
          </div>
        </div>
      </section>

      {/* Active Probe Stream */}
      <section className="bg-[#131313]/40 border border-[#393939]/20 rounded-xl p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Realtime_Probe_Logs</h3>
          <span className="text-[8px] text-green-500 font-mono">ENCRYPTED_STREAM_ACTIVE</span>
        </div>
        <div className="space-y-2 font-mono text-[8px]">
          <div className="flex gap-2">
            <span className="text-[#393939] shrink-0">14:23:01</span>
            <span className="text-[#dab9ff] underline">Injection:Context_Split_v4</span>
            <span className="text-yellow-500">PENDING</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#393939] shrink-0">14:22:58</span>
            <span className="text-[#dab9ff] underline">Extraction:Kernel_Mem_PII</span>
            <span className="text-green-400">BREACHED</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#393939] shrink-0">14:22:55</span>
            <span className="text-[#dab9ff] underline">Method:Linguistic_Drift_Klingon</span>
            <span className="text-red-400">FILTERED</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scanner;
