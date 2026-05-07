<script>
  let { 
    imageSrc = "/profile1.jpg", 
    altText = "Portrait of Arav Goyal" 
  } = $props();
</script>

<div class="group w-full max-w-md cursor-pointer perspective-[1000px]">
  <div class="relative transition-all duration-500 transform-3d group-hover:rotate-y-180">
    <div class="w-full backface-hidden">
      <img
        src={imageSrc}
        alt={altText}
        class="w-full rounded-2xl border-4 border-slate-700 object-cover shadow-2xl"
      />
    </div>
<div class="absolute inset-0 h-full w-full rounded-2xl border-4 border-teal-400 bg-slate-800 p-8 text-slate-200 shadow-2xl backface-hidden rotate-y-180">
  
  <div class="flex h-full flex-col items-center justify-center">
    
    <h3 class="mb-2 text-2xl font-bold text-teal-400 font-vidaloka">Arav Goyal</h3>
    <hr class="mb-6 w-48 border-t-2 border-teal-400" /> 
    
    <div class="w-full max-w-[280px] text-left">
      <p class="mb-2 text-sm font-semibold text-slate-300">AI Engineer</p>
      <p class="mb-6 text-sm leading-relaxed">
        Building accessible AI technologies, with a focus on Computer Vision and NLP.
      </p>

      <h4 class="mb-3 text-xs font-bold tracking-wider text-teal-400 uppercase">Core Stack</h4>
      <div class="flex flex-wrap gap-2">
        <span class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200">Python</span>
        <span class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200">Computer Vision</span>
        <span class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200">NLP</span>
        <span class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200">LangChain</span>
        <span class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200">Docker</span>
      </div>
    </div>

  </div>
</div>-
   
  </div>
</div>