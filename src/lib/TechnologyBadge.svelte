<script>
    import Icon from '@iconify/svelte';
    let { name, iconCode, url } = $props();
</script>

<li>
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    class="flex items-center gap-3 rounded-xl border-2 px-5 py-3 text-lg font-medium tracking-wide shadow-sm transition-colors focus:outline-none focus:ring-4 focus:ring-teal-500 bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-teal-500 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:border-teal-500"
  > 
    <div aria-hidden="true" class="flex items-center justify-center text-2xl">
      <Icon icon={iconCode} />
    </div>
    <span>{name}</span>
  </a>
</li>