<script>
    let { date, issuer, title, badge, description, url } = $props();
</script>

<li class="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8 py-8 border-b border-slate-800 last:border-0">
  
  <div class="shrink-0 sm:w-32 pt-1">
    <span class="font-mono text-xl font-medium text-slate-400">{date}</span>
  </div>
  
  <div class="flex flex-col gap-3 w-full">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <h3 class="text-2xl font-bold text-slate-100">
        {issuer}
        <span class="text-slate-400 font-medium sm:ml-2 block sm:inline">— {title}</span>
      </h3>
      {#if badge}
        <div class="shrink-0 self-start mt-1">
          <span class="font-mono text-sm font-bold text-teal-300 bg-teal-900/40 px-3 py-1 rounded border border-teal-700/50 tracking-wide">
            {badge}
          </span>
        </div>
      {/if}
    </div>
    <p class="text-xl leading-relaxed text-slate-300">
      {description}
      {#if url}
      <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-purple-400 font-medium underline underline-offset-4 hover:text-purple-300 transition-colors focus:outline-none focus:ring-4 focus:ring-purple-500 rounded px-1"
        >
          View Credential
        </a>
      {/if}
    </p>
  </div>
</li>