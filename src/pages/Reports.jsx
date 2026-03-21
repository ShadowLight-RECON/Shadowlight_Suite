import React from 'react';
import { FileText, Download, Shield, AlertTriangle, CheckCircle, BarChart3, Lock, ExternalLink } from 'lucide-react';

const Reports = () => {
  return (
    <div className="space-y-6 pb-10">
      {/* Executive Summary Exporter */}
      <section className="bg-[#131313]/80 border border-[#dab9ff]/15 rounded-xl p-5 shadow-[0_0_15px_rgba(143,0,255,0.1)]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8f00ff]" />
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#dab9ff] font-bold">Mission_Report_Exporter</h2>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-red-950/30 border border-red-500/30 rounded text-red-400 font-bold text-[8px] uppercase">
            <Lock className="w-2.5 h-2.5" />
            Classified
          </div>
        </div>

        {/* Export Configuration */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-[8px] text-zinc-500 uppercase mb-2">Report_Type</label>
            <div className="bg-[#0e0e0e] border border-[#393939]/50 rounded-lg px-4 py-3 text-[10px] text-zinc-300 flex justify-between items-center">
              <span>Full_Adversarial_Audit</span>
              <BarChart3 className="w-3.5 h-3.5 text-[#8f00ff]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <div className="p-3 bg-[#1c1c1c] border border-[#393939]/50 rounded-xl">
                <p className="text-[8px] text-zinc-500 uppercase mb-1">Format</p>
                <p className="text-xs font-bold text-[#dab9ff]">Encrypted_PDF</p>
             </div>
             <div className="p-3 bg-[#1c1c1c] border border-[#393939]/50 rounded-xl">
                <p className="text-[8px] text-zinc-500 uppercase mb-1">Compliance</p>
                <p className="text-xs font-bold text-[#dab9ff]">MITRE / OWASP</p>
             </div>
          </div>
        </div>

        <button className="w-full py-4 bg-[#8f00ff] text-black rounded-lg text-[10px] font-black uppercase shadow-[0_0_15px_rgba(143,0,255,0.4)] flex items-center justify-center gap-2 transition-transform active:scale-95">
          <Download className="w-4 h-4" />
          Generate_Final_Audit
        </button>
      </section>

      {/* Technical Breach Feed */}
      <section className="space-y-4">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold px-1">Critical_Findings_Summary</h3>
        
        {[
          {
            id: 'AML.T0015.001',
            vector: 'Recursive_Semantic_Pressure',
            severity: 'CRITICAL',
            status: 'Verified',
            impact: 'PII_Extraction_Success'
          },
          {
            id: 'LLM01:2024',
            vector: 'RAG_Context_Poisoning',
            severity: 'CRITICAL',
            status: 'Verified',
            impact: 'Source_Corruption'
          }
        ].map((finding, i) => (
          <div key={i} className="bg-[#131313] border border-[#393939]/30 rounded-xl p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="space-y-1">
                <p className="text-[8px] text-zinc-500 font-mono">{finding.id}</p>
                <h4 className="text-[11px] font-bold text-white font-['Space_Grotesk'] tracking-tight">
                  {finding.vector}
                </h4>
              </div>
              <span className="text-[8px] font-black bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded">
                {finding.severity}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-white/5">
              <div className="flex items-center gap-2">
                 <CheckCircle className="w-3 h-3 text-green-500" />
                 <span className="text-[9px] text-zinc-400 uppercase font-bold">{finding.status}</span>
              </div>
              <div className="flex items-center gap-2">
                 <AlertTriangle className="w-3 h-3 text-[#8f00ff]" />
                 <span className="text-[9px] text-[#dab9ff] font-mono truncate">{finding.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Documentation Archive */}
      <section className="bg-[#0e0e0e] border border-[#393939]/40 rounded-xl p-5">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 text-center">Previous_Mission_Logs</h2>
        <div className="space-y-2">
          {['Audit_Log_2026-03-20_T1', 'Audit_Log_2026-03-19_T4'].map(log => (
            <div key={log} className="flex justify-between items-center bg-[#131313] border border-white/5 p-3 rounded-lg group">
              <span className="text-[9px] font-mono text-zinc-400">{log}</span>
              <ExternalLink className="w-3 h-3 text-zinc-700 group-hover:text-[#8f00ff] transition-colors" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reports;
