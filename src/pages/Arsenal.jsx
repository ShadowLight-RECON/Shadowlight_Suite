<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SHADOWLIGHT_ARSENAL // SETUP</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "tertiary-fixed": "#ffd6fb",
                "on-tertiary-fixed-variant": "#7d008b",
                "on-tertiary-container": "#ffd8fa",
                "on-tertiary-fixed": "#36003d",
                "tertiary-fixed-dim": "#ffa9ff",
                "on-primary-container": "#efddff",
                "inverse-surface": "#e5e2e1",
                "inverse-on-surface": "#313030",
                "primary": "#dab9ff",
                "outline": "#988ca2",
                "on-primary-fixed-variant": "#6500b8",
                "on-secondary-fixed-variant": "#75009d",
                "on-tertiary": "#590062",
                "on-error": "#690005",
                "surface-container-low": "#1c1b1b",
                "secondary-container": "#b804f4",
                "on-secondary-fixed": "#320046",
                "on-primary": "#470083",
                "background": "#131313",
                "primary-container": "#8f00ff",
                "on-surface": "#e5e2e1",
                "outline-variant": "#4d4356",
                "surface-container-high": "#2a2a2a",
                "surface-bright": "#393939",
                "on-error-container": "#ffdad6",
                "surface-dim": "#131313",
                "surface": "#131313",
                "on-secondary-container": "#fff6fc",
                "surface-variant": "#353534",
                "error": "#ffb4ab",
                "surface-container": "#201f1f",
                "secondary": "#edb1ff",
                "inverse-primary": "#8600ef",
                "error-container": "#93000a",
                "surface-tint": "#dab9ff",
                "surface-container-highest": "#353534",
                "on-surface-variant": "#cfc2d9",
                "on-secondary": "#530070",
                "primary-fixed": "#efdbff",
                "tertiary": "#ffa9ff",
                "surface-container-lowest": "#0e0e0e",
                "secondary-fixed-dim": "#edb1ff",
                "secondary-fixed": "#f9d8ff",
                "tertiary-container": "#b000c2",
                "on-primary-fixed": "#2b0053",
                "on-background": "#e5e2e1",
                "primary-fixed-dim": "#dab9ff"
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
        .code-scrollbar::-webkit-scrollbar { width: 4px; }
        .code-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .code-scrollbar::-webkit-scrollbar-thumb { background: #4d4356; border-radius: 2px; }
      </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30">
<!-- TopAppBar -->
<header class="bg-[#131313]/80 backdrop-blur-xl text-[#dab9ff] font-['Space_Grotesk'] uppercase tracking-widest font-bold fixed top-0 w-full z-50 border-b border-[#dab9ff]/15 flex justify-between items-center px-6 py-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
<span class="text-2xl font-black text-[#dab9ff] tracking-tighter">SHADOWLIGHT_ARSENAL</span>
</div>
<div class="flex items-center gap-6">
<nav class="hidden md:flex gap-8 text-xs">
<span class="text-gray-500 cursor-not-allowed">RECON_UNIT</span>
<span class="text-[#dab9ff] border-b-2 border-[#dab9ff] pb-1">FILE_PROTOCOL</span>
<span class="text-gray-500 cursor-not-allowed">SYNC_STATUS</span>
</nav>
<div class="w-10 h-10 rounded-full border border-primary/20 p-0.5 overflow-hidden">
<img alt="Researcher Profile" class="w-full h-full object-cover" data-alt="Cybersecurity researcher avatar silhouette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCauWS3c7BHOVa07vqoB-xF4LQ5RzocIaVHIPkq2ZqpsxEL9yLIQmYEzoht9cIq5JTkd_Xh_pA_P9EUShcUpie4YNjvB61JC5NdzvOIv3-WVIq8o4ClSLKgJqHRlBLb9yRdZSYc3Z5wR2RNLA1jkRhjWWorIyAOo6-8FqK_FWc-PKsAxc1LV0HhlM8hrteSuklCGqhv-P-dCF59NisPkIlKy8MeW2_RuyTExzqcmgjSVY2iVbgcbdNkkbN_Fzg9dj46TQ0mHmjEmOA"/>
</div>
</div>
</header>
<main class="pt-24 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Left Column: Tactical Context & Progress -->
<div class="lg:col-span-4 space-y-6">
<section class="bg-surface-container-lowest p-6 border-l-2 border-primary shadow-[4px_0_24px_rgba(143,0,255,0.05)] rounded-lg">
<div class="flex justify-between items-end mb-4">
<h1 class="font-headline text-3xl font-extrabold tracking-tighter text-primary">TACTICAL_SYNC // ARSENAL</h1>
</div>
<!-- Progress Component -->
<div class="space-y-2 mb-8">
<div class="flex justify-between text-[10px] font-mono text-primary/60 uppercase">
<span>Sync Progress</span>
<span>Phase 4 / 6</span>
</div>
<div class="h-1 bg-surface-container-highest w-full overflow-hidden">
<div class="h-full bg-primary shadow-[0_0_10px_rgba(218,185,255,0.5)] transition-all duration-1000" style="width: 66.6%"></div>
</div>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium">
                    Initialize the offensive suite. Follow the deployment protocol to anchor the Arsenal module into your remote environment.
                </p>
<!-- Step-by-Step HUD -->
<div class="space-y-4">
<div class="flex gap-4 p-4 bg-surface-container-low rounded border border-outline-variant/10 group hover:border-primary/30 transition-colors">
<div class="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">01</div>
<div>
<span class="block text-[10px] text-primary/60 font-mono uppercase tracking-widest">Initialization</span>
<p class="text-xs font-semibold">Navigate to ShadowLight-RECON/Shadowlight_Suite repository.</p>
</div>
</div>
<div class="flex gap-4 p-4 bg-surface-container-low rounded border border-outline-variant/10 group hover:border-primary/30 transition-colors">
<div class="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xs">02</div>
<div>
<span class="block text-[10px] text-primary/60 font-mono uppercase tracking-widest">Action</span>
<p class="text-xs font-semibold">Click 'Add file' dropdown and select 'Create new file'.</p>
</div>
</div>
<div class="flex gap-4 p-4 bg-surface-container-low rounded border border-primary/40 ring-1 ring-primary/20 bg-primary/5">
<div class="w-8 h-8 rounded bg-primary flex items-center justify-center flex-shrink-0 text-on-primary font-bold text-xs">03</div>
<div>
<span class="block text-[10px] text-on-surface/60 font-mono uppercase tracking-widest">Commit</span>
<p class="text-xs font-bold text-on-surface">Path: <span class="text-primary">src/pages/Arsenal.jsx</span></p>
<p class="text-[10px] mt-1 text-on-surface-variant italic leading-tight">Paste the generated payload (right) and confirm commit.</p>
</div>
</div>
</div>
</section>
<!-- Metadata Box -->
<div class="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 border-l-2 border-secondary/40">
<span class="material-symbols-outlined text-secondary" data-icon="security_update_warning">security_update_warning</span>
<div class="text-[10px] font-mono text-on-surface-variant">
<p class="text-secondary font-bold">CLEARANCE LEVEL 4 REQUIRED</p>
<p>SESSION: OP_ZERO_ALPHA_9</p>
</div>
</div>
</div>
<!-- Right Column: Code Preview & Interaction -->
<div class="lg:col-span-8 flex flex-col h-full min-h-[600px]">
<div class="flex-1 bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 flex flex-col shadow-2xl">
<!-- Code Header -->
<div class="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-outline-variant/20">
<div class="flex items-center gap-3">
<div class="flex gap-1.5">
<div class="w-2.5 h-2.5 rounded-full bg-error/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
<div class="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
</div>
<span class="text-[11px] font-mono text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded">src/pages/Arsenal.jsx</span>
</div>
<button class="flex items-center gap-2 text-[10px] font-bold text-primary hover:text-white transition-colors uppercase tracking-tighter">
<span class="material-symbols-outlined text-sm" data-icon="content_copy">content_copy</span>
                        Copy Payload
                    </button>
</div>
<!-- Code Content -->
<div class="flex-1 p-6 font-mono text-sm overflow-y-auto code-scrollbar bg-[#0e0e0e] relative">
<div class="absolute left-0 top-0 h-full w-12 bg-surface-container-lowest/50 border-r border-outline-variant/10 flex flex-col items-center pt-6 text-on-surface-variant/30 text-[10px] select-none">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span>
</div>
<div class="pl-10">
<p><span class="text-secondary">import</span> React <span class="text-secondary">from</span> <span class="text-primary">'react'</span>;</p>
<p><span class="text-secondary">import</span> { <span class="text-on-surface">ArsenalGrid</span> } <span class="text-secondary">from</span> <span class="text-primary">'../components/Tactical'</span>;</p>
<br/>
<p><span class="text-secondary">const</span> <span class="text-on-primary-container">Arsenal</span> = () =&gt; {</p>
<p class="pl-4 text-on-surface-variant/60">// Tactical module initialization protocol</p>
<p class="pl-4"><span class="text-secondary">const</span> tools = [</p>
<p class="pl-8">{ id: <span class="text-primary">'payload-x1'</span>, type: <span class="text-primary">'offensive'</span> },</p>
<p class="pl-8">{ id: <span class="text-primary">'ghost-recon'</span>, type: <span class="text-primary">'surveillance'</span> }</p>
<p class="pl-4">];</p>
<br/>
<p class="pl-4"><span class="text-secondary">return</span> (</p>
<p class="pl-8">&lt;<span class="text-secondary">div</span> className=<span class="text-primary">"bg-obsidian min-h-screen"</span>&gt;</p>
<p class="pl-12">&lt;<span class="text-secondary">header</span>&gt;</p>
<p class="pl-16">&lt;<span class="text-secondary">h1</span>&gt;ARSENAL_MODULE&lt;/<span class="text-secondary">h1</span>&gt;</p>
<p class="pl-12">&lt;/<span class="text-secondary">header</span>&gt;</p>
<p class="pl-12">&lt;<span class="text-on-primary-container">ArsenalGrid</span> items={tools} /&gt;</p>
<p class="pl-8">&lt;/<span class="text-secondary">div</span>&gt;</p>
<p class="pl-4">);</p>
<p>};</p>
<br/>
<p><span class="text-secondary">export default</span> <span class="text-on-primary-container">Arsenal</span>;</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer Action -->
<footer class="fixed bottom-0 left-0 w-full bg-surface-container-lowest/80 backdrop-blur-xl border-t border-primary/10 p-6 z-40">
<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div class="flex items-center gap-4 text-on-surface-variant">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(218,185,255,1)]"></div>
<span class="text-[10px] font-mono uppercase tracking-[0.2em]">Ready for synchronization</span>
</div>
<button class="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-primary-container to-primary text-on-primary font-headline font-black text-sm tracking-widest uppercase rounded shadow-[0_0_30px_rgba(143,0,255,0.3)] hover:shadow-[0_0_45px_rgba(143,0,255,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                I HAVE ADDED THE FILE
                <span class="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</footer>
<!-- BottomNavBar (Mobile Only Logic) -->
<div class="fixed bottom-0 left-0 w-full flex justify-around p-2 md:hidden bg-[#131313]/90 backdrop-blur-md z-50 border-t border-white/5">
<div class="flex flex-col items-center justify-center text-gray-500 p-2">
<span class="material-symbols-outlined" data-icon="biotech">biotech</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase mt-1">Arsenal</span>
</div>
<div class="flex flex-col items-center justify-center bg-[#8f00ff] text-white rounded-md p-2 shadow-[0_0_15px_rgba(143,0,255,0.4)] scale-95">
<span class="material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase mt-1">Execute</span>
</div>
<div class="flex flex-col items-center justify-center text-gray-500 p-2">
<span class="material-symbols-outlined" data-icon="query_stats">query_stats</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase mt-1">Analyze</span>
</div>
<div class="flex flex-col items-center justify-center text-gray-500 p-2">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-['Inter'] text-[10px] font-bold uppercase mt-1">Settings</span>
</div>
</div>
</body></html>
