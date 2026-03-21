<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&amp;family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "inverse-surface": "#e5e2e1",
              "surface-bright": "#393939",
              "surface": "#131313",
              "outline-variant": "#4d4356",
              "on-primary-fixed-variant": "#6500b8",
              "tertiary-fixed": "#ffd6fb",
              "on-secondary": "#530070",
              "inverse-on-surface": "#313030",
              "surface-container-highest": "#353534",
              "secondary": "#edb1ff",
              "on-surface": "#e5e2e1",
              "inverse-primary": "#8600ef",
              "primary-fixed": "#efdbff",
              "on-secondary-container": "#fff6fc",
              "secondary-fixed": "#f9d8ff",
              "on-secondary-fixed-variant": "#75009d",
              "background": "#131313",
              "surface-container-lowest": "#0e0e0e",
              "on-tertiary-fixed": "#36003d",
              "tertiary-container": "#b000c2",
              "surface-tint": "#dab9ff",
              "error-container": "#93000a",
              "surface-dim": "#131313",
              "on-error": "#690005",
              "primary-container": "#8f00ff",
              "tertiary": "#ffa9ff",
              "on-primary-fixed": "#2b0053",
              "on-error-container": "#ffdad6",
              "on-tertiary": "#590062",
              "outline": "#988ca2",
              "on-background": "#e5e2e1",
              "error": "#ffb4ab",
              "tertiary-fixed-dim": "#ffa9ff",
              "on-tertiary-fixed-variant": "#7d008b",
              "surface-container-low": "#1c1b1b",
              "secondary-fixed-dim": "#edb1ff",
              "on-secondary-fixed": "#320046",
              "surface-container": "#201f1f",
              "on-primary": "#470083",
              "on-primary-container": "#efddff",
              "surface-variant": "#353534",
              "surface-container-high": "#2a2a2a",
              "primary": "#dab9ff",
              "on-surface-variant": "#cfc2d9",
              "secondary-container": "#b804f4",
              "primary-fixed-dim": "#dab9ff",
              "on-tertiary-container": "#ffd8fa"
            },
            fontFamily: {
              "headline": ["Space Grotesk"],
              "body": ["Inter"],
              "label": ["Inter"]
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
        .code-scrollbar::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }
        .code-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .code-scrollbar::-webkit-scrollbar-thumb {
            background: #353534;
            border-radius: 2px;
        }
        .glass-panel {
            backdrop-filter: blur(12px);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- Top Navigation Anchor -->
<header class="bg-neutral-950/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4 max-w-none sticky">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-purple-400" data-icon="security">security</span>
<h1 class="font-['Space_Grotesk'] tracking-widest uppercase font-bold text-lg font-black tracking-[0.2em] text-purple-300">SHADOWLIGHT // SCANNER</h1>
</div>
<div class="flex items-center gap-6">
<div class="hidden md:flex items-center gap-6 text-zinc-600 font-['Space_Grotesk'] text-sm tracking-wider font-bold">
<a class="text-purple-400 hover:text-purple-200 transition-all duration-200" href="#">SCAN</a>
<a class="hover:text-purple-200 transition-all duration-200" href="#">RESULTS</a>
<a class="hover:text-purple-200 transition-all duration-200" href="#">CONFIG</a>
</div>
<span class="material-symbols-outlined text-purple-400" data-icon="sensors">sensors</span>
</div>
</header>
<main class="min-h-screen pb-32 px-4 md:px-12 pt-8 max-w-7xl mx-auto">
<!-- Hero Section: Title and Intent -->
<section class="mb-12 relative">
<div class="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span class="inline-block py-1 px-3 bg-primary-container/20 border border-primary-container/30 text-primary text-[10px] font-black tracking-widest uppercase mb-4">TACTICAL MODULE // 05</span>
<h2 class="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface">File 5: Model Scanner Setup</h2>
<p class="mt-4 text-on-surface-variant max-w-xl font-light leading-relaxed">
                        Deploying the automated probing logic for the <span class="text-primary">Shadowlight Elite</span> model analysis environment. Initialize the React hook to begin extraction.
                    </p>
</div>
<div class="flex items-center gap-4 bg-surface-container-high p-4 rounded-lg border-l-2 border-primary shadow-lg">
<div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
</div>
<div>
<div class="text-[10px] font-bold text-outline uppercase tracking-widest">Target Status</div>
<div class="text-sm font-headline font-bold text-on-surface uppercase">Ready for Injection</div>
</div>
</div>
</div>
</section>
<!-- Asymmetric Bento Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
<!-- File Explorer (3 columns) -->
<div class="md:col-span-4 lg:col-span-3 bg-surface-container-low rounded-lg p-0 flex flex-col border border-outline-variant/10">
<div class="p-4 border-b border-outline-variant/10 flex justify-between items-center">
<span class="text-[10px] font-black text-outline tracking-widest uppercase">Project Explorer</span>
<span class="material-symbols-outlined text-xs text-outline" data-icon="more_vert">more_vert</span>
</div>
<div class="p-2 space-y-1">
<div class="flex items-center gap-2 px-3 py-2 text-on-surface-variant opacity-50">
<span class="material-symbols-outlined text-sm" data-icon="folder">folder</span>
<span class="text-xs font-mono">public</span>
</div>
<div class="flex items-center gap-2 px-3 py-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm" data-icon="folder_open">folder_open</span>
<span class="text-xs font-mono">src</span>
</div>
<div class="ml-4 space-y-1 border-l border-outline-variant/20">
<div class="flex items-center gap-2 px-4 py-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm" data-icon="folder_open">folder_open</span>
<span class="text-xs font-mono">pages</span>
</div>
<div class="ml-4 space-y-1">
<div class="flex items-center gap-2 px-4 py-2 bg-primary-container/10 border-r-2 border-primary group cursor-pointer transition-all">
<span class="material-symbols-outlined text-sm text-primary" data-icon="javascript">javascript</span>
<span class="text-xs font-mono text-on-surface font-bold">Scanner.jsx</span>
<span class="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
</div>
<div class="flex items-center gap-2 px-4 py-2 text-on-surface-variant/40">
<span class="material-symbols-outlined text-sm" data-icon="javascript">javascript</span>
<span class="text-xs font-mono">Dashboard.jsx</span>
</div>
</div>
<div class="flex items-center gap-2 px-4 py-2 text-on-surface-variant opacity-50">
<span class="material-symbols-outlined text-sm" data-icon="description">description</span>
<span class="text-xs font-mono">App.css</span>
</div>
</div>
<div class="flex items-center gap-2 px-3 py-2 text-on-surface-variant opacity-50">
<span class="material-symbols-outlined text-sm" data-icon="settings">settings</span>
<span class="text-xs font-mono">package.json</span>
</div>
</div>
<div class="mt-auto p-4 bg-surface-container-highest/30">
<div class="text-[10px] font-bold text-outline uppercase mb-2">Workspace Load</div>
<div class="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary-container w-[65%]"></div>
</div>
</div>
</div>
<!-- Code Preview Box (9 columns) -->
<div class="md:col-span-8 lg:col-span-9 bg-surface-container-lowest rounded-lg overflow-hidden border border-outline-variant/10 shadow-2xl relative flex flex-col">
<!-- Editor Header -->
<div class="flex items-center justify-between px-6 py-3 bg-surface-container-high/50 border-b border-outline-variant/10">
<div class="flex items-center gap-4">
<div class="flex gap-1.5">
<div class="w-2.5 h-2.5 rounded-full bg-error/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-outline-variant"></div>
</div>
<span class="text-xs font-mono text-outline uppercase tracking-widest">src/pages/Scanner.jsx — React (TSX)</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-sm text-outline" data-icon="search">search</span>
<span class="material-symbols-outlined text-sm text-outline" data-icon="deployed_code">deployed_code</span>
</div>
</div>
<!-- Code Content -->
<div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto code-scrollbar bg-surface-container-lowest flex-grow">
<div class="flex gap-6">
<div class="text-outline/30 text-right select-none pr-4 border-r border-outline-variant/10">
                            1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14<br/>15<br/>16<br/>17<br/>18
                        </div>
<div class="whitespace-nowrap text-on-surface">
<div class="text-secondary">import</div> <span class="text-on-surface">{</span> useState, useEffect <span class="text-on-surface">}</span> <span class="text-secondary">from</span> <span class="text-primary">'react'</span>; <br/>
<div class="text-secondary">import</div> <span class="text-on-surface">{</span> useScanner <span class="text-on-surface">}</span> <span class="text-secondary">from</span> <span class="text-primary">'@shadowlight/core'</span>; <br/>
<br/>
<div class="text-secondary">export const</div> <span class="text-primary-fixed-dim">ScannerModule</span> <span class="text-secondary">=</span> <span class="text-on-surface">()</span> <span class="text-secondary">=&gt;</span> <span class="text-on-surface">{</span> <br/>
                              <div class="text-secondary">const</div> <span class="text-on-surface">{</span> probe, results <span class="text-on-surface">}</span> <span class="text-secondary">=</span> <span class="text-primary-fixed-dim">useScanner</span><span class="text-on-surface">({</span> <br/>
                                mode: <span class="text-primary">'aggressive'</span>, <br/>
                                depth: <span class="text-secondary">1024</span>, <br/>
                                recursive: <span class="text-secondary">true</span> <br/>
                              <span class="text-on-surface">})</span>; <br/>
<br/>
                              <span class="text-outline-variant font-italic">// Initialize Automated Probing Sequence</span><br/>
                              <span class="text-primary-fixed-dim">useEffect</span><span class="text-on-surface">(()</span> <span class="text-secondary">=&gt;</span> <span class="text-on-surface">{</span> <br/>
                                <span class="text-primary-fixed-dim">probe</span><span class="text-on-surface">(</span><span class="text-primary">'0x77-shadow-kernel'</span><span class="text-on-surface">)</span>; <br/>
                              <span class="text-on-surface">}</span>, <span class="text-on-surface">[]</span><span class="text-on-surface">)</span>; <br/>
<br/>
                              <span class="text-secondary">return</span> <span class="text-on-surface">(</span> <br/>
                                <span class="text-on-surface-variant">&lt;</span><span class="text-secondary-container text-white px-1">ScannerView</span> data<span class="text-secondary">=</span><span class="text-on-surface">{</span>results<span class="text-on-surface">}</span> <span class="text-on-surface-variant">/&gt;</span> <br/>
                              <span class="text-on-surface">)</span>; <br/>
<span class="text-on-surface">}</span>;
                        </div>
</div>
</div>
<!-- Floating CTA Action -->
<div class="absolute bottom-8 right-8 flex flex-col items-end gap-4">
<div class="bg-surface-container-high/90 backdrop-blur-md p-3 rounded-lg border border-primary/20 shadow-[0_0_30px_rgba(143,0,255,0.15)] flex items-center gap-4">
<div class="text-right">
<div class="text-[10px] font-black text-outline uppercase tracking-widest">Payload Size</div>
<div class="text-xs font-mono text-primary font-bold">1.24 KB</div>
</div>
<div class="h-8 w-px bg-outline-variant/30"></div>
<button class="bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary-container font-headline font-black text-xs px-6 py-3 rounded-lg shadow-lg active:scale-95 transition-all flex items-center gap-2 group">
<span class="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform" data-icon="content_copy">content_copy</span>
                            COPY PAYLOAD
                        </button>
</div>
</div>
</div>
</div>
<!-- Documentation/Guideline Grid -->
<section class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="bg-surface-container rounded-lg p-6 border-l-2 border-secondary/30">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-secondary" data-icon="hub" style="font-variation-settings: 'FILL' 1;">hub</span>
<h3 class="font-headline font-bold text-sm uppercase tracking-wider">Deep Hooking</h3>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed opacity-70">
                    The useScanner hook establishes a persistent WebSocket tunnel to the Shadowlight backend for real-time model telemetry.
                </p>
</div>
<div class="bg-surface-container rounded-lg p-6 border-l-2 border-error/30">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-error" data-icon="policy" style="font-variation-settings: 'FILL' 1;">policy</span>
<h3 class="font-headline font-bold text-sm uppercase tracking-wider">Risk Protocols</h3>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed opacity-70">
                    Aggressive mode may trigger intrusion detection systems. Ensure your target environment is properly isolated before probing.
                </p>
</div>
<div class="bg-surface-container rounded-lg p-6 border-l-2 border-primary/30">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-primary" data-icon="memory" style="font-variation-settings: 'FILL' 1;">memory</span>
<h3 class="font-headline font-bold text-sm uppercase tracking-wider">Extraction Speed</h3>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed opacity-70">
                    Optimized for sub-200ms round trips when processing large-scale neural network architectures in the cloud.
                </p>
</div>
</section>
</main>
<!-- Navigation Shell Support -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 pb-safe bg-neutral-950 border-t border-neutral-800 md:hidden z-50 shadow-[0_-4px_20px_rgba(143,0,255,0.05)]">
<div class="flex flex-col items-center justify-center bg-purple-950/30 text-purple-400 border-t-2 border-purple-600 px-6 py-2 transition-transform duration-300 ease-out active:scale-90 font-['Inter'] text-[10px] font-black tracking-tighter">
<span class="material-symbols-outlined" data-icon="radar">radar</span>
<span>SCAN</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-6 py-2 opacity-60 hover:bg-neutral-900/50 hover:text-purple-300 transition-transform duration-300 ease-out active:scale-90 font-['Inter'] text-[10px] font-black tracking-tighter">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>RESULTS</span>
</div>
<div class="flex flex-col items-center justify-center text-zinc-600 px-6 py-2 opacity-60 hover:bg-neutral-900/50 hover:text-purple-300 transition-transform duration-300 ease-out active:scale-90 font-['Inter'] text-[10px] font-black tracking-tighter">
<span class="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span>
<span>CONFIG</span>
</div>
</nav>
</body></html>
