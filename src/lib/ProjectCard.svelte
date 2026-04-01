<script>
    let { href, title, type, description, tags } = $props(); 
</script>

<li>
  <a {href} 
  class="group flex flex-col gap-4 rounded-xl p-4 -ml-4 transition-colors hover:bg-slate-900/80" 
  target="_blank" 
  rel="noopener noreferrer">
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between gap-4">
        <h3 class="text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors flex flex-wrap items-center gap-2">
          {title} <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-400" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
        </h3>
        <span class="shrink-0 font-mono text-sm font-bold text-slate-400 group-hover:text-slate-300">
          {type} </span>
      </div>
      
      <p class="text-xl leading-relaxed text-slate-300 group-hover:text-slate-200 transition-colors">
        {description} </p>
      
      <div class="flex items-center flex-wrap gap-4 mt-2">
        {#each tags as tag}
          <span class="text-base font-mono font-bold text-purple-400">#{tag}</span>
        {/each}
      </div>
    </div>
  </a>
</li>