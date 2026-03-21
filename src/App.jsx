<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SHADOWLIGHT | FILE_01</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;900&amp;family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-surface-variant": "#cfc2d9",
              "on-primary-container": "#efddff",
              "surface-tint": "#dab9ff",
              "surface-dim": "#131313",
              "error-container": "#93000a",
              "tertiary-fixed": "#ffd6fb",
              "surface-container-lowest": "#0e0e0e",
              "outline": "#988ca2",
              "error": "#ffb4ab",
              "primary-container": "#8f00ff",
              "on-primary-fixed-variant": "#6500b8",
              "primary": "#dab9ff",
              "secondary": "#edb1ff",
              "on-primary-fixed": "#2b0053",
              "outline-variant": "#4d4356",
              "on-secondary-container": "#fff6fc",
              "on-secondary": "#530070",
              "secondary-fixed-dim": "#edb1ff",
              "tertiary-fixed-dim": "#ffa9ff",
              "secondary-fixed": "#f9d8ff",
              "primary-fixed": "#efdbff",
              "on-error": "#690005",
              "surface-container-low": "#1c1b1b",
              "on-tertiary-fixed-variant": "#7d008b",
              "on-secondary-fixed": "#320046",
              "primary-fixed-dim": "#dab9ff",
              "secondary-container": "#b804f4",
              "on-tertiary-fixed": "#36003d",
              "tertiary-container": "#b000c2",
              "inverse-primary": "#8600ef",
              "surface-container": "#201f1f",
              "surface": "#131313",
              "on-surface": "#e5e2e1",
              "surface-container-highest": "#353534",
              "on-tertiary": "#590062",
              "on-primary": "#470083",
              "on-error-container": "#ffdad6",
              "tertiary": "#ffa9ff",
              "surface-container-high": "#2a2a2a",
              "inverse-on-surface": "#313030",
              "surface-variant": "#353534",
              "surface-bright": "#393939",
              "background": "#131313",
              "on-tertiary-container": "#ffd8fa",
              "on-secondary-fixed-variant": "#75009d",
              "inverse-surface": "#e5e2e1",
              "on-background": "#e5e2e1"
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
            vertical-align: middle;
        }
        .glass-panel {
            background: rgba(19, 19, 19, 0.8);
            backdrop-filter: blur(12px);
        }
        .tactical-grid {
            background-image: radial-gradient(circle at 2px 2px, rgba(143, 0, 255, 0.05) 1px, transparent 0);
            background-size: 24px 24px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container tactical-grid min-h-screen">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-[#dab9ff]/10 shadow-[0_0_20px_rgba(143,0,255,0.05)]">
<div class="flex justify-between items-center px-6 py-4 max-w-full mx-auto">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#dab9ff] text-2xl" data-icon="security">security</span>
<h1 class="text-2xl font-black text-[#dab9ff] tracking-widest font-headline uppercase">SHADOWLIGHT</h1>
</div>
<div class="hidden md:flex items-center gap-8 font-headline font-bold tracking-tighter uppercase">
<a class="text-[#dab9ff] border-b-2 border-[#dab9ff]" href="#">TERMINAL</a>
<a class="text-gray-400 hover:text-white transition-colors" href="#">OPERATIONS</a>
<a class="text-gray-400 hover:text-white transition-colors" href="#">INTEL</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 font-headline font-bold tracking-widest hover:bg-opacity-90 active:scale-95 duration-200 ease-in-out">
                GET STARTED
            </button>
</div>
</header>
<main class="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-12">
<!-- Header Section -->
<div class="flex flex-col md:flex-row justify-between items-end gap-4 border-l-4 border-primary pl-6 py-2">
<div>
<p class="text-primary font-mono text-sm tracking-widest uppercase mb-1">STAGED_INITIATION // RECON_ACTIVE</p>
<h2 class="text-5xl font-black font-headline tracking-tighter uppercase">FILE_01: App.jsx Setup</h2>
</div>
<div class="text-right font-mono text-xs text-outline tracking-tighter">
                STATUS: ENCRYPTED_DEPLOYMENT<br/>
                UPLINK: STABLE_V4.2
            </div>
</div>
<!-- Main Content: Bento Layout -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Code Viewer Container -->
<div class="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 relative overflow-hidden group shadow-2xl">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
<!-- Terminal Header -->
<div class="bg-surface-container flex items-center justify-between px-4 py-3 border-b border-outline-variant/20">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-full bg-error/20 border border-error/40"></div>
<div class="w-3 h-3 rounded-full bg-secondary/20 border border-secondary/40"></div>
<div class="w-3 h-3 rounded-full bg-primary/20 border border-primary/40"></div>
<span class="ml-4 text-xs font-mono text-on-surface-variant/60">src/App.jsx</span>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-sm text-outline cursor-pointer hover:text-primary transition-colors" data-icon="content_copy">content_copy</span>
<span class="text-[10px] font-mono text-outline uppercase tracking-widest">UTF-8 // REACT-JS</span>
</div>
</div>
<!-- Code Content -->
<div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-surface-container-lowest">
<pre class="text-on-surface-variant"><span class="text-primary-fixed-dim italic">import</span> React <span class="text-primary-fixed-dim italic">from</span> <span class="text-secondary">'react'</span>;
<span class="text-primary-fixed-dim italic">import</span> { ShadowProvider } <span class="text-primary-fixed-dim italic">from</span> <span class="text-secondary">'./context/ShadowContext'</span>;
<span class="text-primary-fixed-dim italic">import</span> Dashboard <span class="text-primary-fixed-dim italic">from</span> <span class="text-secondary">'./components/Dashboard'</span>;

<span class="text-outline italic">// Core Tactical Logic Wrapper</span>
<span class="text-primary-fixed-dim italic">function</span> <span class="text-primary">App</span>() {
  <span class="text-primary-fixed-dim italic">return</span> (
    <span class="text-outline-variant">&lt;</span><span class="text-primary-fixed-dim">ShadowProvider</span><span class="text-outline-variant">&gt;</span>
      <span class="text-outline-variant">&lt;</span><span class="text-primary-fixed-dim">main</span> <span class="text-secondary">className</span><span class="text-outline-variant">=</span><span class="text-secondary">"tactical-hud-v1"</span><span class="text-outline-variant">&gt;</span>
        <span class="text-outline-variant">&lt;</span><span class="text-primary-fixed-dim">Dashboard</span> <span class="text-secondary">level</span><span class="text-outline-variant">=</span>{<span class="text-primary">01</span>} <span class="text-secondary">mode</span><span class="text-outline-variant">=</span><span class="text-secondary">"ELITE"</span> <span class="text-outline-variant">/&gt;</span>
      <span class="text-outline-variant">&lt;/</span><span class="text-primary-fixed-dim">main</span><span class="text-outline-variant">&gt;</span>
    <span class="text-outline-variant">&lt;/</span><span class="text-primary-fixed-dim">ShadowProvider</span><span class="text-outline-variant">&gt;</span>
  );
}

<span class="text-primary-fixed-dim italic">export default</span> App;</pre>
</div>
<!-- Glow Effect -->
<div class="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 blur-[80px] rounded-full"></div>
</div>
<!-- Instruction Sidebar -->
<div class="lg:col-span-4 flex flex-col gap-6">
<div class="bg-surface-container border-l-4 border-secondary p-6">
<h3 class="font-headline font-bold text-xl uppercase tracking-tight mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="git_branch">rebase</span>
                        GITHUB DEPLOYMENT
                    </h3>
<div class="space-y-8 relative">
<!-- Step 1 -->
<div class="relative flex gap-4">
<div class="flex-none w-8 h-8 bg-surface-container-highest border border-secondary/30 flex items-center justify-center font-headline font-black text-secondary">1</div>
<div class="space-y-1">
<p class="text-xs text-outline uppercase font-bold tracking-widest">INITIALIZE</p>
<p class="text-sm text-on-surface">Go to <span class="text-secondary font-bold">ShadowLight-RECON/Shadowlight_Suite</span> on GitHub.com</p>
</div>
</div>
<!-- Step 2 -->
<div class="relative flex gap-4">
<div class="flex-none w-8 h-8 bg-surface-container-highest border border-secondary/30 flex items-center justify-center font-headline font-black text-secondary">2</div>
<div class="space-y-1">
<p class="text-xs text-outline uppercase font-bold tracking-widest">ACTION</p>
<p class="text-sm text-on-surface">Click <span class="bg-surface-container-highest px-2 py-0.5 border border-outline-variant/30 rounded text-xs">'Add file'</span> → <span class="bg-surface-container-highest px-2 py-0.5 border border-outline-variant/30 rounded text-xs">'Create new file'</span></p>
</div>
</div>
<!-- Step 3 -->
<div class="relative flex gap-4">
<div class="flex-none w-8 h-8 bg-surface-container-highest border border-secondary/30 flex items-center justify-center font-headline font-black text-secondary">3</div>
<div class="space-y-1">
<p class="text-xs text-outline uppercase font-bold tracking-widest">COMMIT</p>
<p class="text-sm text-on-surface">Name file <code class="text-primary font-mono bg-primary/5 px-1">'src/App.jsx'</code>, paste code, and click <span class="text-secondary font-bold underline">'Commit changes'</span></p>
</div>
</div>
<!-- Connecting Line -->
<div class="absolute left-4 top-8 bottom-4 w-px bg-gradient-to-b from-secondary/40 via-secondary/10 to-transparent -z-10"></div>
</div>
</div>
<!-- Warning/Intel Box -->
<div class="bg-surface-container-lowest border border-error/20 p-4 flex gap-4 items-start">
<span class="material-symbols-outlined text-error" data-icon="warning">warning</span>
<p class="text-[10px] uppercase font-bold tracking-widest text-error-container leading-tight">
                        INTEGRITY ALERT: ENSURE DIRECTORY STRUCTURE MATCHES "SRC/" PRECISELY OR DEPLOYMENT HOOKS WILL FAIL.
                    </p>
</div>
</div>
</div>
<!-- Confirmation Action -->
<div class="pt-8 flex flex-col items-center">
<button class="w-full max-w-2xl group relative bg-primary-container text-on-primary-container py-6 font-headline font-black text-2xl tracking-[0.2em] uppercase transition-all duration-300 hover:tracking-[0.3em] active:scale-95 shadow-[0_0_40px_rgba(143,0,255,0.2)]">
<div class="absolute inset-0 border-2 border-primary scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                I HAVE ADDED THE FILE
                <div class="absolute right-6 top-1/2 -translate-y-1/2">
<span class="material-symbols-outlined text-3xl animate-pulse" data-icon="chevron_right">chevron_right</span>
</div>
</button>
<p class="mt-4 font-mono text-[10px] text-outline uppercase tracking-[0.5em]">AUTH_TOKEN: ELITE_PROTOCOL_881</p>
</div>
</main>
<!-- Footer -->
<footer class="w-full py-12 px-8 border-t border-[#393939] bg-[#0e0e0e] cursor-crosshair">
<div class="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
<div class="flex flex-col gap-2">
<span class="text-[#dab9ff] font-bold font-headline tracking-widest uppercase">SHADOWLIGHT ELITE</span>
<p class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939]">© 2024 SHADOWLIGHT ELITE. ALL RIGHTS RESERVED. TACTICAL GRADE ENCRYPTION ACTIVE.</p>
</div>
<nav class="flex gap-8">
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500" href="#">TERMINAL</a>
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500" href="#">OPERATIONS</a>
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500" href="#">COMPLIANCE</a>
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500" href="#">INTEL</a>
</nav>
</div>
</footer>
</body></html>
