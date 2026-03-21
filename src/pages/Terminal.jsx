<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>0DIN.AI TACTICAL - Setup Terminal.jsx</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "tertiary-fixed": "#ffd6fb",
              "surface-bright": "#393939",
              "on-tertiary-container": "#ffd8fa",
              "tertiary-fixed-dim": "#ffa9ff",
              "background": "#131313",
              "primary-container": "#8f00ff",
              "error": "#ffb4ab",
              "on-tertiary": "#590062",
              "on-secondary-container": "#fff6fc",
              "surface-container-low": "#1c1b1b",
              "outline-variant": "#4d4356",
              "on-error-container": "#ffdad6",
              "inverse-primary": "#8600ef",
              "on-tertiary-fixed-variant": "#7d008b",
              "surface-dim": "#131313",
              "on-primary-container": "#efddff",
              "on-surface-variant": "#cfc2d9",
              "on-secondary-fixed-variant": "#75009d",
              "on-background": "#e5e2e1",
              "inverse-surface": "#e5e2e1",
              "secondary-fixed-dim": "#edb1ff",
              "secondary-container": "#b804f4",
              "on-error": "#690005",
              "on-primary-fixed": "#2b0053",
              "on-surface": "#e5e2e1",
              "tertiary-container": "#b000c2",
              "surface-variant": "#353534",
              "surface-container-highest": "#353534",
              "surface-container-high": "#2a2a2a",
              "on-secondary-fixed": "#320046",
              "surface-container-lowest": "#0e0e0e",
              "surface-container": "#201f1f",
              "primary-fixed": "#efdbff",
              "on-primary": "#470083",
              "secondary-fixed": "#f9d8ff",
              "on-primary-fixed-variant": "#6500b8",
              "tertiary": "#ffa9ff",
              "on-tertiary-fixed": "#36003d",
              "secondary": "#edb1ff",
              "error-container": "#93000a",
              "inverse-on-surface": "#313030",
              "outline": "#988ca2",
              "surface": "#131313",
              "primary-fixed-dim": "#dab9ff",
              "on-secondary": "#530070",
              "surface-tint": "#dab9ff",
              "primary": "#dab9ff"
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
      .glass-panel {
        backdrop-filter: blur(12px);
        background: rgba(28, 27, 27, 0.7);
      }
      .glow-primary {
        box-shadow: 0 0 32px rgba(143, 0, 255, 0.1);
      }
      .ghost-border {
        border: 1px solid rgba(152, 140, 162, 0.15);
      }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- Header Navigation -->
<header class="bg-[#131313] dark:bg-[#131313] backdrop-blur-xl bg-opacity-80 flex justify-between items-center w-full px-6 h-16 fixed top-0 z-50 border-b border-white/5">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#dab9ff]" data-icon="terminal">terminal</span>
<h1 class="font-['Space_Grotesk'] font-bold tracking-tighter text-xl font-black tracking-widest text-[#dab9ff] uppercase">0DIN.AI TACTICAL</h1>
</div>
<div class="flex items-center gap-4">
<div class="hidden md:flex gap-6 items-center mr-8">
<span class="text-[#dab9ff] brightness-125 font-label text-xs tracking-widest uppercase cursor-pointer">Scope</span>
<span class="text-white/40 hover:bg-white/5 transition-all duration-300 font-label text-xs tracking-widest uppercase cursor-pointer">Targets</span>
<span class="text-white/40 hover:bg-white/5 transition-all duration-300 font-label text-xs tracking-widest uppercase cursor-pointer">Intel</span>
</div>
<div class="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="User Profile" data-alt="Cybernetic user profile avatar icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9jfcGqA_WRmYyLWPymjjFUKLFs6MAhzDJWnabXN4SudN9uNPbNU07W2Y7XXOsJydeqMy0h5jOsin00TWuvyUdLwK3jw47DiqIWOnOYiYjPx4nL6DQoNuYaOMpiuuGZanIvsW8HT2ckFTdmzgTz1eIb8LU4XGc7jKHLTl2Xhf6KrfKgNx2dVPX4c34TY5MhOnpFXy-a2_llbLdP_xG2XdO6QLm9aUlDJCokR9Mvj4ZvSWGQdCuUDYN_Lausga-cHT8taxuhw46Mbo"/>
</div>
</div>
</header>
<main class="pt-24 pb-32 px-6 max-w-5xl mx-auto">
<!-- Progress Indicator -->
<div class="flex items-center gap-2 mb-12">
<div class="h-1 w-12 bg-primary-container rounded-full"></div>
<div class="h-1 w-12 bg-primary-container rounded-full"></div>
<div class="h-1 w-12 bg-primary-container rounded-full glow-primary"></div>
<div class="h-1 w-12 bg-surface-container-highest rounded-full"></div>
<span class="ml-4 font-headline text-xs tracking-[0.2em] text-primary uppercase font-bold">Step 03 / Deployment</span>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left Content: Instructions -->
<div class="lg:col-span-7 space-y-8">
<section>
<h2 class="font-headline text-5xl font-bold tracking-tighter mb-4 text-on-surface leading-none">
                        Initialize <span class="text-primary">Terminal.jsx</span>
</h2>
<p class="text-on-surface-variant text-lg max-w-prose leading-relaxed">
                        Establishing the command-line interface for the tactical HUD. This file handles real-time log ingestion and interactive node execution.
                    </p>
</section>
<!-- File Path Anchor -->
<div class="surface-container-low p-6 rounded-lg ghost-border flex items-center gap-4">
<div class="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="folder_open">folder_open</span>
</div>
<div>
<p class="text-[10px] uppercase tracking-widest text-outline mb-1 font-bold">Target Destination</p>
<code class="text-primary font-mono font-medium">src/pages/Terminal.jsx</code>
</div>
</div>
<!-- Tactical Steps -->
<div class="space-y-4">
<div class="flex gap-4 p-4 hover:bg-white/5 transition-colors rounded-lg group">
<span class="text-primary font-mono text-sm">01</span>
<div>
<h4 class="text-on-surface font-bold text-sm uppercase tracking-wide mb-1">Copy Manifest Data</h4>
<p class="text-on-surface-variant text-sm">Transfer the tactical terminal logic from your local source to the GitHub environment.</p>
</div>
</div>
<div class="flex gap-4 p-4 hover:bg-white/5 transition-colors rounded-lg group">
<span class="text-primary font-mono text-sm">02</span>
<div>
<h4 class="text-on-surface font-bold text-sm uppercase tracking-wide mb-1">Verify Dependencies</h4>
<p class="text-on-surface-variant text-sm">Ensure 'xterm-js' and 'framer-motion' hooks are properly referenced in the import header.</p>
</div>
</div>
</div>
<!-- Action Button -->
<div class="pt-6">
<button class="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(143,0,255,0.3)]">
                        Commit to Repository
                        <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<!-- Right Content: Visual Context -->
<div class="lg:col-span-5 space-y-6">
<!-- Code Preview Card -->
<div class="bg-surface-container-lowest rounded-lg overflow-hidden ghost-border shadow-2xl">
<div class="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-white/5">
<div class="flex gap-1.5">
<div class="w-2.5 h-2.5 rounded-full bg-error/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-surface-bright"></div>
<div class="w-2.5 h-2.5 rounded-full bg-surface-bright"></div>
</div>
<span class="text-[10px] font-mono text-outline uppercase tracking-tighter">Terminal.jsx — Preview</span>
</div>
<div class="p-6 font-mono text-xs leading-relaxed space-y-2 opacity-80">
<p class="text-secondary"><span class="text-outline">import</span> React <span class="text-outline">from</span> 'react';</p>
<p class="text-secondary"><span class="text-outline">import</span> { TerminalUI } <span class="text-outline">from</span> '../components';</p>
<p> </p>
<p class="text-on-surface-variant"><span class="text-primary">const</span> Terminal = () =&gt; {</p>
<p class="pl-4 text-on-surface-variant"><span class="text-primary">return</span> (</p>
<p class="pl-8 text-on-surface-variant">&lt;<span class="text-tertiary">TerminalUI</span>&gt;</p>
<p class="pl-12 text-outline">// Tactical data stream initialization</p>
<p class="pl-12 text-on-surface-variant">path="<span class="text-primary">/root/0din/core</span>"</p>
<p class="pl-8 text-on-surface-variant">/&gt;</p>
<p class="pl-4 text-on-surface-variant">);</p>
<p class="text-on-surface-variant">};</p>
<div class="h-2 w-1/2 bg-surface-container-high rounded mt-4"></div>
</div>
</div>
<!-- Technical Specs Bento -->
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-container-low p-4 rounded-lg ghost-border">
<p class="text-[9px] text-outline uppercase font-bold tracking-[0.2em] mb-2">Complexity</p>
<div class="flex gap-1">
<div class="h-1.5 w-4 bg-primary rounded-full"></div>
<div class="h-1.5 w-4 bg-primary rounded-full"></div>
<div class="h-1.5 w-4 bg-surface-bright rounded-full"></div>
</div>
</div>
<div class="bg-surface-container-low p-4 rounded-lg ghost-border">
<p class="text-[9px] text-outline uppercase font-bold tracking-[0.2em] mb-2">Security Level</p>
<span class="text-error font-headline font-bold text-xs uppercase">Class-A Restricted</span>
</div>
</div>
<!-- Abstract Decorative Map Element -->
<div class="h-32 rounded-lg relative overflow-hidden ghost-border">
<img alt="Tactical Grid" class="absolute inset-0 w-full h-full object-cover opacity-20 saturate-0 grayscale" data-alt="Abstract tactical grid background with digital scan lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApVb1gXtheNloGang8tYaUkHdR2Plx-ifKPWdITSPTYHI5NGk_Rlh6Kj_chUjjbKAVqBq4SjojEpd_xmU2gl6QhUvOuKufo48sivHVf1mX1EA1E9Q2CeXVgh8VnKR2bAXc9DKcz6W7jJqiy3IzQN6FYh9im5lS_ggnuFB8IgYK-xKccH8GmxdiK40cJWYc_Gl-nuA0FHN7Tt_VaxFm1IzjePS9R1tQlJyxKAblrhntK5XKXy1W4Z4x8DOIgLMDZLK40zhBt_Tkhu8"/>
<div class="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
<div class="absolute bottom-4 left-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="text-[10px] font-mono text-primary uppercase tracking-widest">System Active</span>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Bottom Navigation Bar -->
<nav class="bg-[#0e0e0e]/90 dark:bg-[#0e0e0e]/90 backdrop-blur-2xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe h-20 z-50 border-t border-white/5 shadow-[0_-4px_20px_rgba(143,0,255,0.1)]">
<div class="flex flex-col items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors cursor-pointer group px-4 py-2">
<span class="material-symbols-outlined mb-1 group-active:scale-95 duration-150" data-icon="ads_click">ads_click</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Scope</span>
</div>
<div class="flex flex-col items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors cursor-pointer group px-4 py-2">
<span class="material-symbols-outlined mb-1 group-active:scale-95 duration-150" data-icon="radar">radar</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Targets</span>
</div>
<div class="flex flex-col items-center justify-center text-[#dab9ff] bg-[#8f00ff]/10 rounded-lg py-1 px-3 shadow-[0_0_15px_rgba(143,0,255,0.2)] cursor-pointer group">
<span class="material-symbols-outlined mb-1 group-active:scale-95 duration-150" data-icon="terminal">terminal</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Terminal</span>
</div>
<div class="flex flex-col items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors cursor-pointer group px-4 py-2">
<span class="material-symbols-outlined mb-1 group-active:scale-95 duration-150" data-icon="biotech">biotech</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Intel</span>
</div>
<div class="flex flex-col items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors cursor-pointer group px-4 py-2">
<span class="material-symbols-outlined mb-1 group-active:scale-95 duration-150" data-icon="settings">settings</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Settings</span>
</div>
</nav>
</body></html>
