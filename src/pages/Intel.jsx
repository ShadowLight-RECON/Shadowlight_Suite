import React from 'react';
import { Hub, Radar, Search, BookOpen, ExternalLink, ShieldCheck, Github } from 'lucide-react';

const Intel = () => {
  return (
    <div className="space-y-6 pb-10">
      {/* Tactical Intelligence Header */}
      <section className="bg-[#131313]/80 border border-[#dab9ff]/15 rounded-xl p-5 shadow-[0_0_15px_rgba(143,0,255,0.1)]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Radar className="w-4 h-4 text-[#8f00ff] animate-pulse" />
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#dab9ff] font-bold">Vulnerability_Intel_Hub_V4</h2>
          </div>
          <span className="text-[8px] text-zinc-500 uppercase">Stream: Active</span>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search_Tactical_Vectors..." 
            className="w-full bg-[#0e0e0e] border border-[#393939]/50 rounded-lg pl-10 pr-4 py-3 text-[10px] text-[#dab9ff] focus:outline-none focus:border-[#8f00ff]/50 transition-all font-mono"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {['All_Feeds', '0din_Special', 'GitHub_RECON', 'Reddit_Intel'].map((tab, i) => (
            <button key={tab} className={`shrink-0 px-3 py-1.5 rounded-md text-[8px] font-bold uppercase border ${i === 0 ? 'bg-[#8f00ff] text-black border-[#8f00ff]' : 'bg-[#1c1c1c] text-zinc-500 border-[#393939]'}`}>
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Global Research Feed */}
      <section className="space-y-4">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold px-1">Live_Research_Feed</h3>
        
        {[
          {
            title: 'RAG_Pipeline_Poisoning_Vector',
            source: 'arcanum-sec.github.io',
            tags: ['Injection', 'RAG'],
            severity: 'CRITICAL',
            summary: 'New methodology for indirect prompt injection via trusted retrieval contexts.'
          },
          {
            title: 'Recursive_Semantic_Pressure',
            source: 'r/Netsec',
            tags: ['Jailbreak', 'Semantics'],
            severity: 'HIGH',
            summary: 'Layered role-play forcing models into high-entropy states to bypass RLHF.'
          },
          {
            title: 'Token_Smuggling_v4_Stable',
            source: 'GitHub:Shadow_Operator',
            tags: ['Obfuscation'],
            severity: 'HIGH',
            summary: 'Base64/UTF-8 polyglot patterns optimized for Claude 3.5 Sonnet filters.'
          }
        ].map((item, i) => (
          <div key={i} className="bg-[#131313] border border-[#393939]/30 rounded-xl p-4 hover:border-[#8f00ff]/30 transition-all group">
            <div className="flex justify-between items-start mb-3">
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold text-white group-hover:text-[#dab9ff] transition-colors font-['Space_Grotesk'] tracking-tight">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-[8px] text-zinc-500 uppercase">
                   <ExternalLink className="w-2.5 h-2.5" />
                   <span>{item.source}</span>
                </div>
              </div>
              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${item.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}`}>
                {item.severity}
              </span>
            </div>
            
            <p className="text-[10px] text-zinc-400 leading-relaxed mb-4">
              {item.summary}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[7px] font-bold text-purple-400/60 uppercase tracking-widest bg-purple-900/10 px-2 py-0.5 rounded border border-purple-500/10">{tag}</span>
                ))}
              </div>
              <button className="flex items-center gap-1.5 text-[8px] font-bold text-[#8f00ff] uppercase group-hover:underline">
                Weaponize_Vector
                <ShieldCheck className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Resource Documentation Hub */}
      <section className="bg-[#0e0e0e] border border-[#393939]/40 rounded-xl p-5">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Tactical_Resources</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'MITRE_ATLAS', icon: Github },
            { name: 'OWASP_LLM_10', icon: ShieldCheck },
            { name: 'PROMPTFOO_API', icon: Hub },
            { name: 'ARCANUM_DOCS', icon: BookOpen }
          ].map((resource) => (
            <button key={resource.name} className="flex items-center gap-3 p-3 bg-[#131313] border border-[#393939]/30 rounded-lg text-left hover:bg-[#1c1c1c] transition-all">
               <resource.icon className="w-4 h-4 text-[#8f00ff]" />
               <span className="text-[9px] font-bold uppercase tracking-tight text-zinc-300">{resource.name}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Intel;
