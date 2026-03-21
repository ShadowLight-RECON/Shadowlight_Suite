<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Shadowlight Elite // Intel Hub Setup</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&amp;family=Inter:wght@300;400;500;600;700&amp;family=Fira+Code:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                        "mono": ["Fira Code"]
                    },
                    borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #131313; }
        ::-webkit-scrollbar-thumb { background: #353534; }
        .glass-panel {
            backdrop-filter: blur(12px);
            background: rgba(32, 31, 31, 0.6);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body min-h-screen pb-24">
<!-- TopAppBar -->
<header class="bg-[#131313] backdrop-blur-xl bg-opacity-80 flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#dab9ff]" data-icon="security">security</span>
<span class="font-headline tracking-[0.2em] uppercase font-black text-xl text-[#dab9ff]">SHADOWLIGHT</span>
</div>
<div class="flex items-center gap-4">
<div class="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border border-primary overflow-hidden">
<img alt="User Profile Tactical Avatar" data-alt="Tactical user avatar icon neon purple" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy73JN03a2kH718_D_xV8avSeSb-udlA3WiIfzwX022I53eMfu0u2KMQvdZq_uczSoqsac_6WiMBQf9IRm4fai2FUnVqG1KFIijbzSpYQPtIU0hZCwAhMXUrzzDlwP1Zs-Y27GwRQsVzoj3dXHULdIu54E0ojXLmnMUY_fQNvpAbNEB1WIBLzMUoMBTw4HXklAkCuwwg3Hkv4KksieDx7Q0KcxHfWvgPpdjnk2KqGExAl75qx9xou0QUoKHXvMJ2lmyHxDNonlawU"/>
</div>
</div>
</header>
<main class="pt-24 px-6 max-w-7xl mx-auto">
<!-- Header Section: Tactical Module ID & Progress -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div class="space-y-2">
<p class="font-mono text-primary tracking-widest text-xs font-bold">TACTICAL MODULE // 06</p>
<h1 class="font-headline text-5xl font-black tracking-tighter uppercase italic">File 6: Intel Hub Setup</h1>
<p class="max-w-2xl text-on-surface-variant font-medium leading-relaxed">
                    Establishing the centralized research feed for Shadowlight Elite. This module aggregates the latest AI vulnerabilities from GitHub, Reddit, and Arcanum-Sec, mapping them to OWASP LLM and MITRE ATLAS.
                </p>
</div>
<!-- Deployment Phase Indicator -->
<div class="w-full md:w-64 space-y-3">
<div class="flex justify-between items-end font-mono text-[10px] tracking-tighter uppercase">
<span class="text-on-surface-variant">Deployment Phase</span>
<span class="text-primary font-bold">06 / 07</span>
</div>
<div class="h-1.5 w-full bg-surface-container-highest overflow-hidden">
<div class="h-full bg-primary-container shadow-[0_0_10px_#8f00ff]" style="width: 85%;"></div>
</div>
</div>
</div>
<!-- Main Layout: Bento Style -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
<!-- Left Column: Project Explorer & Destination -->
<div class="lg:col-span-4 space-y-6">
<!-- Target Status Badge -->
<div class="bg-surface-container-low p-4 border-l-2 border-primary-container flex items-center gap-4">
<span class="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
<div>
<p class="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">Target Destination</p>
<p class="font-mono text-xs text-primary">src/pages/Intel.jsx</p>
</div>
</div>
<!-- Project Explorer View -->
<div class="bg-surface-container-lowest border border-outline-variant/20 overflow-hidden">
<div class="bg-surface-container-high px-4 py-2 flex items-center justify-between">
<span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Project Explorer</span>
<div class="flex gap-1.5">
<div class="w-2 h-2 rounded-full bg-error/40"></div>
<div class="w-2 h-2 rounded-full bg-tertiary/40"></div>
<div class="w-2 h-2 rounded-full bg-primary/40"></div>
</div>
</div>
<div class="p-4 font-mono text-[13px] leading-relaxed">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm" data-icon="folder">folder</span>
<span>Shadowlight_Suite</span>
</div>
<div class="pl-4 border-l border-outline-variant/30 ml-2 mt-1 space-y-1">
<div class="flex items-center gap-2 text-on-surface-variant opacity-60">
<span class="material-symbols-outlined text-sm" data-icon="folder">folder</span>
<span>public</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm" data-icon="folder_open">folder_open</span>
<span>src</span>
</div>
<div class="pl-4 border-l border-outline-variant/30 ml-2 space-y-1">
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-sm" data-icon="folder_open">folder_open</span>
<span>pages</span>
</div>
<div class="pl-4 border-l border-outline-variant/30 ml-2 space-y-1">
<div class="flex items-center gap-2 text-on-surface-variant opacity-60">
<span class="material-symbols-outlined text-sm" data-icon="javascript">javascript</span>
<span>Dash.jsx</span>
</div>
<div class="flex items-center gap-2 text-primary font-bold bg-primary/10 -ml-2 pl-2 pr-4 py-1">
<span class="material-symbols-outlined text-sm" data-icon="description">description</span>
<span>Intel.jsx</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant opacity-60">
<span class="material-symbols-outlined text-sm" data-icon="javascript">javascript</span>
<span>Payloads.jsx</span>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Tactical Metadata -->
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-container-high p-4">
<p class="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Complexity</p>
<p class="font-headline font-bold text-xl">LEVEL 4</p>
</div>
<div class="bg-surface-container-high p-4">
<p class="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Status</p>
<p class="font-headline font-bold text-xl text-primary">ENCRYPTED</p>
</div>
</div>
</div>
<!-- Right Column: Code Block & Action -->
<div class="lg:col-span-8 flex flex-col gap-6">
<!-- The Code Block -->
<div class="relative group">
<div class="absolute -inset-0.5 bg-gradient-to-r from-primary-container/20 to-transparent blur opacity-30"></div>
<div class="relative bg-[#0e0e0e] border border-outline-variant/20 flex flex-col min-h-[500px]">
<div class="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-outline-variant/20">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-lg" data-icon="code">code</span>
<span class="font-mono text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">IntelHub.jsx — React Component</span>
</div>
<div class="flex gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div class="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div class="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
</div>
<!-- Monospaced Code Preview -->
<div class="p-6 font-mono text-[13px] leading-relaxed overflow-x-auto text-on-surface-variant selection:bg-primary/30">
<pre><code><span class="text-primary-fixed-dim">import</span> React <span class="text-primary-fixed-dim">from</span> <span class="text-tertiary">'react'</span>;
<span class="text-primary-fixed-dim">import</span> { IntelCard } <span class="text-primary-fixed-dim">from</span> <span class="text-tertiary">'@shadowlight/core'</span>;

<span class="text-outline">/**
 * @module IntelHub
 * Establishing centralized research feed
 */</span>
<span class="text-primary-fixed-dim">const</span> <span class="text-secondary">IntelHub</span> = () =&gt; {
  <span class="text-primary-fixed-dim">const</span> vulnerabilities = [
    { 
      id: <span class="text-tertiary">'SHD-2024-06'</span>, 
      source: <span class="text-tertiary">'Arcanum-Sec'</span>,
      mapping: [<span class="text-tertiary">'OWASP LLM01'</span>, <span class="text-tertiary">'ATLAS-T001'</span>]
    }
  ];

  <span class="text-primary-fixed-dim">return</span> (
    &lt;<span class="text-secondary-fixed-dim">div</span> className=<span class="text-tertiary">"tactical-feed grid-cols-3"</span>&gt;
      {vulnerabilities.<span class="text-secondary-fixed-dim">map</span>(vuln =&gt; (
        &lt;<span class="text-secondary-fixed-dim">IntelCard</span> 
           key={vuln.id} 
           severity=<span class="text-tertiary">"CRITICAL"</span> 
           data={vuln} 
        /&gt;
      ))}
    &lt;/<span class="text-secondary-fixed-dim">div</span>&gt;
  );
};

<span class="text-primary-fixed-dim">export default</span> <span class="text-secondary">IntelHub</span>;</code></pre>
</div>
</div>
</div>
<!-- Action Button -->
<div class="flex justify-end">
<button class="bg-primary-container text-on-primary-container px-10 py-4 flex items-center gap-3 font-headline font-black tracking-widest uppercase text-sm hover:shadow-[0_0_25px_#8f00ff55] transition-all group">
<span class="material-symbols-outlined text-xl group-active:scale-90 transition-transform" data-icon="content_copy">content_copy</span>
                        COPY PAYLOAD
                    </button>
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
<a class="flex flex-col items-center justify-center text-[#dab9ff] bg-[#8f00ff]/10 rounded-lg py-1 px-3 shadow-[0_0_15px_rgba(143,0,255,0.2)]" href="#">
<span class="material-symbols-outlined" data-icon="hub">hub</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Intel</span>
</a>
</nav>
<!-- Tactical Overlay Decoration -->
<div class="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5">
<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container rounded-full blur-[120px]"></div>
<div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container rounded-full blur-[120px]"></div>
</div>
</body></html>
