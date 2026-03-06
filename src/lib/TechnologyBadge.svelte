<script>
    import Icon from '@iconify/svelte';
    let { name, iconCode } = $props();
</script>

<li class="flex items-center gap-3 rounded-xl border-2 border-slate-700 bg-slate-800 px-5 py-3 text-lg font-medium tracking-wide text-slate-100 shadow-sm transition-colors hover:border-teal-500 hover:bg-slate-700"> 
  <div aria-hidden="true" class="flex items-center justify-center text-2xl">
    <Icon icon={iconCode} />
  </div>
  <span>{name}</span>
</li>