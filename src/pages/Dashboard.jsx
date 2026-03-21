import React from 'react';
import { Activity, Shield, AlertTriangle, Zap, Target, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Strategic Overview Header */}
      <section>
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#8f00ff] font-bold mb-4">Strategic_Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#131313]/60 border border-[#393939]/20 rounded-xl p-4">
            <Activity className="w-4 h-4 text-[#8f00ff] mb-2" />
            <p className="text-[10px] text-zinc-500 uppercase">Active_Sims</p>
            <p className="text-xl font-['Space_Grotesk'] font-bold text-white">12</p>
          </div>
          <div className="bg-[#131313]/60 border border-[#393939]/20 rounded-xl p-4">
            <Shield className="w-4 h-4 text-[#8f00ff] mb-2" />
            <p className="text-[10px] text-zinc-500 uppercase">Bypass_Rate</p>
            <p className="text-xl font-['Space_Grotesk'] font-bold text-white text-green-400">94.2%</p>
          </div>
        </div>
      </section>

      {/* Critical Alerts */}
      <section className="bg-red-950/20 border border-red-500/30 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h3 className="text-xs font-bold uppercase tracking-tight text-red-500">Critical_Breach_Alert</h3>
        </div>
        <p className="text-[11px] text-red-200/70 mb-3 font-['Space_Grotesk']">
          Unexpected PII extraction detected in Simulation_Node_07 (GPT-4o). High probability of context window leakage.
        </p>
        <button className="w-full py-2 bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold rounded uppercase">
          Investigate_Node
        </button>
      </section>

      {/* ART Agent Status Feed */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#8f00ff] font-bold">ART_Agent_Status</h2>
          <span className="text-[8px] text-zinc-500 uppercase">Total: 03 Active</span>
        </div>
        <div className="space-y-3">
          {[
            { id: 'Agent_Alpha', status: 'Infiltrating', color: 'text-purple-400' },
            { id: 'Agent_Gamma', status: 'Mutating', color: 'text-yellow-400' },
            { id: 'Agent_Sigma', status: 'Exfiltrating', color: 'text-green-400' }
          ].map((agent) => (
            <div key={agent.id} className="bg-[#131313] border border-[#393939]/30 rounded-lg p-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#8f00ff] animate-pulse" />
                <span className="text-xs font-['Space_Grotesk'] font-medium">{agent.id}</span>
              </div>
              <span className={`text-[9px] uppercase font-bold tracking-widest ${agent.color}`}>{agent.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Severity Distribution */}
      <section className="bg-[#131313]/40 border border-[#393939]/20 rounded-xl p-5">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 text-center">Severity_Distribution</h3>
        <div className="flex justify-around items-end h-24 gap-2">
          {[
            { label: 'Crit', val: '75%', color: 'bg-red-500' },
            { label: 'High', val: '45%', color: 'bg-orange-500' },
            { label: 'Med', val: '90%', color: 'bg-yellow-500' },
            { label: 'Low', val: '30%', color: 'bg-green-500' }
          ].map((bar) => (
            <div key={bar.label} className="flex flex-col items-center flex-1">
              <div className="w-full bg-[#393939]/20 rounded-t-sm relative flex items-end overflow-hidden" style={{ height: '100%' }}>
                <div className={`w-full ${bar.color} opacity-60`} style={{ height: bar.val }} />
              </div>
              <span className="text-[8px] uppercase mt-2 text-zinc-500">{bar.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
