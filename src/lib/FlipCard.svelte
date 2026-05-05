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
        class="w-full rounded-2xl border-4 border-slate-700 object-cover shadow-2xl font-vidaloka"
      />
    </div>
    <div class="absolute inset-0 h-full w-full rounded-2xl border-4 border-teal-400 bg-slate-800 p-6 text-slate-200 shadow-2xl backface-hidden rotate-y-180">
      <div class="flex h-full flex-col items-center justify-center text-center">
        <h3 class="mb-2 text-2xl font-bold text-teal-400 font-vidaloka">Arav Goyal</h3>
        <p class="mb-4 text-sm text-slate-300">AI Engineer</p>
        <p class="text-sm leading-relaxed">
          Building accessible AI technologies, with a focus on Computer Vision and NLP.
        </p>
      </div>
    </div>
  </div>
</div>