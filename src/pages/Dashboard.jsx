<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FILE_02: ELITE_DASHBOARD | SETUP</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #131313;
            color: #e5e2e1;
        }
        .glass-panel {
            background: rgba(28, 27, 27, 0.7);
            backdrop-filter: blur(12px);
        }
    </style>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "inverse-primary": "#8600ef",
              "tertiary-container": "#b000c2",
              "background": "#131313",
              "primary-fixed-dim": "#dab9ff",
              "on-secondary-fixed-variant": "#75009d",
              "inverse-surface": "#e5e2e1",
              "tertiary": "#ffa9ff",
              "on-primary-fixed": "#2b0053",
              "surface-container-low": "#1c1b1b",
              "tertiary-fixed": "#ffd6fb",
              "surface-container-highest": "#353534",
              "on-tertiary-fixed": "#36003d",
              "surface-container": "#201f1f",
              "on-primary-fixed-variant": "#6500b8",
              "primary-container": "#8f00ff",
              "on-secondary-container": "#fff6fc",
              "on-primary": "#470083",
              "on-tertiary": "#590062",
              "on-secondary": "#530070",
              "surface-container-high": "#2a2a2a",
              "error-container": "#93000a",
              "secondary-container": "#b804f4",
              "error": "#ffb4ab",
              "tertiary-fixed-dim": "#ffa9ff",
              "outline": "#988ca2",
              "on-tertiary-container": "#ffd8fa",
              "outline-variant": "#4d4356",
              "secondary": "#edb1ff",
              "primary": "#dab9ff",
              "on-tertiary-fixed-variant": "#7d008b",
              "on-secondary-fixed": "#320046",
              "surface": "#131313",
              "secondary-fixed-dim": "#edb1ff",
              "on-surface-variant": "#cfc2d9",
              "surface-bright": "#393939",
              "surface-variant": "#353534",
              "surface-dim": "#131313",
              "on-primary-container": "#efddff",
              "on-surface": "#e5e2e1",
              "on-error": "#690005",
              "primary-fixed": "#efdbff",
              "inverse-on-surface": "#313030",
              "surface-tint": "#dab9ff",
              "surface-container-lowest": "#0e0e0e",
              "on-error-container": "#ffdad6",
              "on-background": "#e5e2e1",
              "secondary-fixed": "#f9d8ff"
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
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-body selection:bg-primary-container selection:text-white overflow-x-hidden">
<!-- Top Navigation Bar -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-[#dab9ff]/10 shadow-[0_0_20px_rgba(143,0,255,0.05)]">
<div class="flex justify-between items-center px-6 py-4 max-w-full mx-auto">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-[#dab9ff]" data-icon="security">security</span>
<span class="text-2xl font-black text-[#dab9ff] tracking-widest font-headline uppercase">SHADOWLIGHT</span>
</div>
<div class="hidden md:flex items-center gap-8">
<a class="font-headline font-bold tracking-tighter uppercase text-gray-400 hover:text-white transition-colors text-sm" href="#">TERMINAL</a>
<a class="font-headline font-bold tracking-tighter uppercase text-gray-400 hover:text-white transition-colors text-sm" href="#">OPERATIONS</a>
<a class="font-headline font-bold tracking-tighter uppercase text-gray-400 hover:text-white transition-colors text-sm" href="#">INTEL</a>
</div>
<button class="px-5 py-2 bg-primary-container text-on-primary-container font-headline font-bold tracking-tighter uppercase text-xs hover:bg-[#8f00ff]/80 active:scale-95 duration-200 ease-in-out">
                GET STARTED
            </button>
</div>
</nav>
<main class="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
<!-- Header Section -->
<header class="mb-12 border-l-4 border-primary-container pl-6">
<div class="flex items-center gap-2 mb-2">
<span class="text-primary font-headline text-xs tracking-widest uppercase opacity-60">Sequence_Initiated</span>
<div class="h-px flex-grow bg-outline-variant/20"></div>
</div>
<h1 class="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface uppercase mb-4">
                FILE_02: <span class="text-primary">ELITE_DASHBOARD</span>
</h1>
<p class="text-on-surface-variant max-w-2xl font-body leading-relaxed">
                Deploying the tactical command center. Follow the synchronization protocols below to integrate the Dashboard module into your secure environment.
            </p>
</header>
<!-- Main Configuration Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
<!-- Instructions Column -->
<div class="lg:col-span-7 space-y-6">
<div class="bg-surface-container-low p-8 relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl" data-icon="terminal">terminal</span>
</div>
<h2 class="text-primary font-headline font-bold tracking-widest text-sm mb-8 flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="settings_input_component">settings_input_component</span>
                        DEPLOYMENT_STEPS
                    </h2>
<div class="space-y-8 relative z-10">
<!-- Step 1 -->
<div class="flex gap-6 items-start">
<span class="font-headline text-3xl font-black text-outline-variant">01</span>
<div>
<h3 class="text-on-surface font-headline font-bold tracking-tight mb-1">NAVIGATE DIRECTORY</h3>
<p class="text-on-surface-variant text-sm">Open your GitHub repository and go to <code class="bg-surface-container-highest px-2 py-0.5 text-primary text-xs">Shadowlight_Suite/src/pages</code></p>
</div>
</div>
<!-- Step 2 -->
<div class="flex gap-6 items-start">
<span class="font-headline text-3xl font-black text-outline-variant">02</span>
<div>
<h3 class="text-on-surface font-headline font-bold tracking-tight mb-1">INITIALIZE FILE</h3>
<p class="text-on-surface-variant text-sm">Click <span class="text-on-surface font-bold">Add file</span> → <span class="text-on-surface font-bold">Create new file</span></p>
</div>
</div>
<!-- Step 3 -->
<div class="flex gap-6 items-start">
<span class="font-headline text-3xl font-black text-outline-variant">03</span>
<div>
<h3 class="text-on-surface font-headline font-bold tracking-tight mb-1">NAME COMPONENT</h3>
<p class="text-on-surface-variant text-sm">Set filename as <code class="bg-surface-container-highest px-2 py-0.5 text-primary text-xs font-bold">Dashboard.jsx</code></p>
</div>
</div>
<!-- Step 4 -->
<div class="flex gap-6 items-start">
<span class="font-headline text-3xl font-black text-outline-variant">04</span>
<div>
<h3 class="text-on-surface font-headline font-bold tracking-tight mb-1">INJECT SOURCE CODE</h3>
<p class="text-on-surface-variant text-sm">Copy the code from the <span class="text-primary font-medium">Elite Dashboard</span> screen and paste it into the editor.</p>
</div>
</div>
<!-- Step 5 -->
<div class="flex gap-6 items-start">
<span class="font-headline text-3xl font-black text-outline-variant">05</span>
<div>
<h3 class="text-on-surface font-headline font-bold tracking-tight mb-1">VALIDATE CHANGES</h3>
<p class="text-on-surface-variant text-sm">Click <span class="text-on-surface font-bold uppercase">Commit changes</span> to finalize deployment.</p>
</div>
</div>
</div>
</div>
</div>
<!-- Visualization Column -->
<div class="lg:col-span-5 space-y-6">
<!-- Directory View -->
<div class="bg-surface-container p-6 border-l-2 border-primary">
<h3 class="text-xs font-headline font-bold tracking-[0.2em] text-outline mb-6 uppercase">Directory_Structure</h3>
<div class="font-mono text-sm space-y-3">
<div class="flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-lg" data-icon="folder_open">folder_open</span>
<span>Shadowlight_Suite</span>
</div>
<div class="ml-6 flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-lg" data-icon="folder">folder</span>
<span>src</span>
</div>
<div class="ml-12 flex items-center gap-3 text-on-surface-variant">
<span class="material-symbols-outlined text-lg" data-icon="folder">folder</span>
<span>pages</span>
</div>
<div class="ml-20 flex items-center gap-3 text-primary animate-pulse">
<span class="material-symbols-outlined text-lg" data-icon="description">description</span>
<span class="font-bold">Dashboard.jsx</span>
<span class="text-[10px] bg-primary/10 px-1 border border-primary/20">NEW</span>
</div>
</div>
</div>
<!-- Call to Action -->
<div class="bg-surface-container-highest p-8 flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
<span class="material-symbols-outlined text-5xl text-primary" data-icon="content_copy">content_copy</span>
<div>
<h4 class="text-on-surface font-headline font-bold text-xl uppercase tracking-tighter">Copy Code Protocol</h4>
<p class="text-on-surface-variant text-xs mt-2 uppercase tracking-widest">Reference: SCREEN_148</p>
</div>
<button class="w-full py-4 bg-primary text-on-primary font-headline font-black tracking-[0.2em] text-sm uppercase shadow-[0_0_30px_rgba(143,0,255,0.3)] hover:shadow-[0_0_50px_rgba(143,0,255,0.5)] transition-all active:scale-95 group">
                        COPY CODE
                        <span class="ml-2 material-symbols-outlined text-xs align-middle group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<!-- Preview Thumbnail -->
<div class="relative group cursor-crosshair">
<img alt="Dashboard Preview" class="w-full aspect-video object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" data-alt="Digital tactical dashboard interface with data grids" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1-GMKiS7FCXSM26hIflQ9r0r07I_I5bxTkk_zh8eiuogYod9Bhr-H0y_rMB0Ww0uftQ34f552-mzkYmV3Jucu3ZtJlCmxiAHUr3iI9l98-5ZbQ9K1AfpVpZjrzcRnm_xHX-jZ7reI2qBpKraKq7EnXP17grsIx4K5FFsK8ftvabfJbKXePpgwz3zuNU9oQY4y02cj6XRxBYKRgYnM9vJcqU3OgbQExRR_1w9OGgCJBi6nVBV0_94lYRQse0RWSaerepkN2AgJPFI"/>
<div class="absolute inset-0 border border-primary/20 flex items-center justify-center">
<div class="bg-background/80 backdrop-blur-sm px-4 py-2 border border-primary/40">
<span class="text-[10px] font-headline font-bold text-primary tracking-widest uppercase">PREVIEW_DASHBOARD_148</span>
</div>
</div>
</div>
</div>
</div>
<!-- Footer Metric / Status -->
<div class="mt-12 flex flex-wrap gap-8 items-center justify-center md:justify-start">
<div class="flex flex-col">
<span class="text-[10px] text-outline font-headline tracking-widest uppercase">Encryption</span>
<span class="text-on-surface font-bold text-sm">AES-256_ACTIVE</span>
</div>
<div class="w-px h-8 bg-outline-variant/20 hidden md:block"></div>
<div class="flex flex-col">
<span class="text-[10px] text-outline font-headline tracking-widest uppercase">Node_Status</span>
<span class="text-primary font-bold text-sm">SYNCHRONIZING...</span>
</div>
<div class="w-px h-8 bg-outline-variant/20 hidden md:block"></div>
<div class="flex flex-col">
<span class="text-[10px] text-outline font-headline tracking-widest uppercase">Session_ID</span>
<span class="text-on-surface font-mono text-sm">SL-E_9921_X</span>
</div>
</div>
</main>
<!-- Footer Component -->
<footer class="w-full py-12 px-8 border-t border-[#393939] bg-[#0e0e0e]">
<div class="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-[#dab9ff]" data-icon="security" style="font-variation-settings: 'FILL' 1;">security</span>
<p class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-gray-400">
                    © 2024 <span class="text-[#dab9ff] font-bold">SHADOWLIGHT ELITE</span>. ALL RIGHTS RESERVED. TACTICAL GRADE ENCRYPTION ACTIVE.
                </p>
</div>
<div class="flex gap-8">
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500 cursor-crosshair" href="#">TERMINAL</a>
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500 cursor-crosshair" href="#">OPERATIONS</a>
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500 cursor-crosshair" href="#">COMPLIANCE</a>
<a class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase font-medium text-[#393939] hover:text-gray-300 hover:tracking-[0.3em] transition-all duration-500 cursor-crosshair" href="#">INTEL</a>
</div>
</div>
</footer>
</body></html>
