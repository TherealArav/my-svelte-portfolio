<script>
    import Icon from '@iconify/svelte';
    let { scrollY, scrollToTopAction } = $props();
</script>

{#if scrollY > 300}
    <button
        onclick={scrollToTopAction}
        aria-label="Scroll back to top"
        class="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-800 shadow-xl transition-all hover:-translate-y-2 hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-teal-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
    >
        <Icon icon="lucide:arrow-up" class="text-3xl" />
    </button>
{/if}