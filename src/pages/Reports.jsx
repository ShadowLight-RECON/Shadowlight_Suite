<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Shadowlight // Mission Report Exporter</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary-container": "#8f00ff",
          "inverse-on-surface": "#313030",
          "error": "#ffb4ab",
          "surface-dim": "#131313",
          "on-background": "#e5e2e1",
          "background": "#131313",
          "surface-container-highest": "#353534",
          "on-surface-variant": "#cfc2d9",
          "on-tertiary-fixed-variant": "#7d008b",
          "surface-variant": "#353534",
          "surface-tint": "#dab9ff",
          "surface": "#131313",
          "on-secondary-fixed": "#320046",
          "on-secondary": "#530070",
          "tertiary-fixed-dim": "#ffa9ff",
          "tertiary-fixed": "#ffd6fb",
          "secondary-container": "#b804f4",
          "on-surface": "#e5e2e1",
          "surface-container": "#201f1f",
          "tertiary-container": "#b000c2",
          "on-primary-container": "#efddff",
          "on-secondary-fixed-variant": "#75009d",
          "on-primary": "#470083",
          "on-tertiary-container": "#ffd8fa",
          "on-error": "#690005",
          "primary-fixed-dim": "#dab9ff",
          "inverse-surface": "#e5e2e1",
          "secondary": "#edb1ff",
          "on-tertiary-fixed": "#36003d",
          "surface-container-low": "#1c1b1b",
          "on-tertiary": "#590062",
          "outline-variant": "#4d4356",
          "surface-container-high": "#2a2a2a",
          "outline": "#988ca2",
          "error-container": "#93000a",
          "surface-bright": "#393939",
          "on-error-container": "#ffdad6",
          "tertiary": "#ffa9ff",
          "surface-container-lowest": "#0e0e0e",
          "secondary-fixed-dim": "#edb1ff",
          "primary-fixed": "#efdbff",
          "primary": "#dab9ff",
          "on-primary-fixed": "#2b0053",
          "on-secondary-container": "#fff6fc",
          "inverse-primary": "#8600ef",
          "on-primary-fixed-variant": "#6500b8",
          "secondary-fixed": "#f9d8ff"
        },
        fontFamily: {
          "headline": ["Space Grotesk"],
          "body": ["Inter"],
          "label": ["Inter"],
          "mono": ["JetBrains Mono"]
        },
        borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
      },
    },
  }
</script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            backdrop-filter: blur(12px);
            background: rgba(20, 20, 20, 0.7);
        }
        .step-complete {
            background: linear-gradient(90deg, #8f00ff 0%, #dab9ff 100%);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body selection:bg-primary-container selection:text-white min-h-screen pb-24">
<!-- TopAppBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#131313] border-none backdrop-blur-xl bg-opacity-80">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#dab9ff]" data-icon="security">security</span>
<h1 class="font-['Space_Grotesk'] tracking-[0.2em] uppercase font-black text-xl text-[#dab9ff]">SHADOWLIGHT</h1>
</div>
<div class="flex items-center gap-4">
<div class="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="Tactical Avatar" class="w-full h-full object-cover" data-alt="Cybersecurity analyst tactical profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRUpP69Hv6fp9tRcPEJHdcLkCtjLaf9wxAr_ey1ps_64bieCcbMAMQJKX6fWbP094aI8jeYv5CSlxjucUBJvU2QPaxtN8XJiNkKxf_pefxPueLju1ZLjHaDJkzMG-_C6n29y70RIHg39dg7oFlRN0sTB6BPM41YqyTw6lodiuFgkD_FKy_RCnAvm3hRpz5QrYutmcPkSHZF6ypoN6j519MQfkWjagbbVxTPZeYP3W3gxjK3kxu9alxPvF8dDMQ9VV_OoMzehHBqQE"/>
</div>
</div>
</header>
<main class="pt-24 px-6 max-w-6xl mx-auto">
<!-- Module Header Section -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div class="space-y-2">
<div class="flex items-center gap-3">
<span class="text-primary font-mono text-xs tracking-widest bg-primary-container/10 px-2 py-1 border-l-2 border-primary-container">TACTICAL MODULE // 07</span>
<span class="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold tracking-tighter rounded-sm">FINAL STAGE</span>
</div>
<h2 class="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-on-surface">File 7: Final Report Exporter</h2>
<p class="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                    Deploying the final audit reporting engine. This module consolidates all adversarial research, simulation logs, and compliance mapping into a mission-ready document (PDF/JSON/HTML).
                </p>
</div>
<div class="flex flex-col items-end gap-3">
<div class="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded border border-outline-variant/30">
<span class="material-symbols-outlined text-xs text-primary" data-icon="terminal">terminal</span>
<span class="text-[10px] font-mono text-primary uppercase tracking-widest">TARGET DESTINATION: src/pages/Reports.jsx</span>
</div>
<div class="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded border border-green-500/20">
<div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span class="text-[10px] font-mono text-green-400 font-bold tracking-widest uppercase">MISSION_READY</span>
</div>
</div>
</div>
<!-- Progress Component -->
<div class="mb-12 space-y-3">
<div class="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">
<span>Deployment Sequence</span>
<span class="text-primary">100% COMPLETE</span>
</div>
<div class="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden flex gap-0.5">
<div class="h-full w-full step-complete"></div>
</div>
<div class="flex justify-between text-[9px] font-mono text-outline uppercase tracking-widest">
<span>Phase 01: Core</span>
<span>Phase 02: Intel</span>
<span>Phase 03: Auth</span>
<span>Phase 04: Odin</span>
<span>Phase 05: Chain</span>
<span>Phase 06: Payload</span>
<span class="text-primary-fixed-dim">Phase 07: Reports</span>
</div>
</div>
<!-- Main Bento Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
<!-- Code Block Container -->
<div class="lg:col-span-8 flex flex-col gap-4">
<div class="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden flex flex-col h-full shadow-2xl">
<div class="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant/30">
<div class="flex items-center gap-2">
<div class="flex gap-1.5">
<div class="w-2.5 h-2.5 rounded-full bg-error/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
</div>
<span class="ml-4 text-[10px] font-mono text-on-surface-variant/70">src/components/ReportExporter.jsx</span>
</div>
<button class="text-primary text-[10px] font-bold hover:underline transition-all">COPY FINAL PAYLOAD</button>
</div>
<div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-[#0a0a0a]">
<pre class="text-primary-fixed-dim"><span class="text-secondary">import</span> React, { useState } <span class="text-secondary">from</span> <span class="text-green-400">'react'</span>;
<span class="text-secondary">import</span> { Download, Shield } <span class="text-secondary">from</span> <span class="text-green-400">'shadowlight-ui'</span>;

<span class="text-outline">/**
 * MISSION REPORT EXPORTER // MODULE 07
 * Logic for selecting report types and classification levels.
 */</span>
<span class="text-secondary">export const</span> <span class="text-yellow-400">ReportExporter</span> = () =&gt; {
  <span class="text-secondary">const</span> [config, setConfig] = useState({
    format: <span class="text-green-400">'PDF'</span>,
    level: <span class="text-green-400">'INTERNAL'</span>,
    includeLogs: <span class="text-secondary">true</span>
  });

  <span class="text-secondary">const</span> <span class="text-yellow-400">handleExport</span> = () =&gt; {
    <span class="text-outline">// Core reporting engine execution</span>
    System.trigger(<span class="text-green-400">'REPORT_GEN'</span>, config);
  };

  <span class="text-secondary">return</span> (
    &lt;<span class="text-primary">div</span> className=<span class="text-green-400">"tactical-container"</span>&gt;
      &lt;<span class="text-primary">h3</span>&gt;Generate Mission Brief&lt;/<span class="text-primary">h3</span>&gt;
      {<span class="text-outline">/* Report selection and classification logic here */</span>}
      &lt;<span class="text-primary">button</span> onClick={handleExport}&gt;
        EXECUTE DOWNLOAD
      &lt;/<span class="text-primary">button</span>&gt;
    &lt;/<span class="text-primary">div</span>&gt;
  );
};</pre>
</div>
</div>
</div>
<!-- Configuration & Actions -->
<div class="lg:col-span-4 flex flex-col gap-6">
<!-- Classification Selector Card -->
<div class="glass-panel p-6 rounded-lg border border-primary-container/20 shadow-[0_0_30px_rgba(143,0,255,0.05)] flex flex-col gap-4">
<h4 class="font-headline font-bold text-sm tracking-widest text-primary uppercase">Configuration</h4>
<div class="space-y-4">
<div class="space-y-2">
<label class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Classification Level</label>
<div class="grid grid-cols-2 gap-2">
<button class="bg-surface-container-highest border border-primary-container text-primary px-3 py-3 rounded text-[10px] font-black tracking-widest">INTERNAL</button>
<button class="bg-surface-container-low border border-outline-variant/30 text-outline px-3 py-3 rounded text-[10px] font-black tracking-widest hover:border-error hover:text-error transition-all">SECRET</button>
</div>
</div>
<div class="space-y-2">
<label class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Output Format</label>
<div class="flex gap-2">
<div class="bg-surface-container-high px-3 py-1 rounded-sm text-[10px] font-mono text-on-surface">.PDF</div>
<div class="bg-surface-container-high px-3 py-1 rounded-sm text-[10px] font-mono text-on-surface">.JSON</div>
<div class="bg-surface-container-high px-3 py-1 rounded-sm text-[10px] font-mono text-on-surface">.HTML</div>
</div>
</div>
</div>
<button class="mt-4 w-full bg-primary-container text-on-primary-container py-4 rounded font-headline font-black text-sm tracking-[0.3em] uppercase hover:shadow-[0_0_20px_rgba(143,0,255,0.4)] transition-all flex items-center justify-center gap-3">
<span class="material-symbols-outlined text-lg" data-icon="file_download">file_download</span>
                        COPY FINAL PAYLOAD
                    </button>
</div>
<!-- Tactical Metadata -->
<div class="bg-surface-container-low p-6 rounded-lg border-l-2 border-primary flex flex-col gap-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-primary" data-icon="info">info</span>
<span class="text-[10px] font-bold tracking-widest uppercase">Deployment Specs</span>
</div>
<ul class="space-y-3">
<li class="flex justify-between text-[11px] font-mono border-b border-outline-variant/10 pb-2">
<span class="text-outline">Dependencies</span>
<span class="text-on-surface">verified: 12</span>
</li>
<li class="flex justify-between text-[11px] font-mono border-b border-outline-variant/10 pb-2">
<span class="text-outline">Vulnerability Map</span>
<span class="text-green-400">CLEAN</span>
</li>
<li class="flex justify-between text-[11px] font-mono">
<span class="text-outline">Runtime Hash</span>
<span class="text-on-surface">0x7F...9A2</span>
</li>
</ul>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-safe pt-2 px-2 bg-[#0e0e0e]/90 backdrop-blur-md border-t border-zinc-800/30 shadow-[0_-4px_20px_rgba(143,0,255,0.05)] rounded-t-lg">
<a class="flex flex-col items-center justify-center text-zinc-600 grayscale hover:text-[#dab9ff] transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Dash</span>
</a>
<a class="flex flex-col items-center justify-center text-zinc-600 grayscale hover:text-[#dab9ff] transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">0din</span>
</a>
<a class="flex flex-col items-center justify-center text-zinc-600 grayscale hover:text-[#dab9ff] transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Chain</span>
</a>
<a class="flex flex-col items-center justify-center text-zinc-600 grayscale hover:text-[#dab9ff] transition-all duration-200" href="#">
<span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Payloads</span>
</a>
<!-- Active Nav: Intel (closest context to Reports/Final Module) -->
<a class="flex flex-col items-center justify-center text-[#dab9ff] bg-[#8f00ff]/10 rounded-lg py-1 px-3 shadow-[0_0_15px_rgba(143,0,255,0.2)]" href="#">
<span class="material-symbols-outlined" data-icon="hub">hub</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Intel</span>
</a>
</nav>
</body></html>
