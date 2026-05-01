<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';


    let theme = $state('dark'); 


    onMount(() => {
        if (!document.documentElement.classList.contains('dark')) {
            theme = 'light';
        } else {
            theme = 'dark';
        }
    });

    
    function toggleTheme() {
        if (theme === 'dark') {
            theme = 'light';
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            theme = 'dark';
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
</script>

<button 
    onclick={toggleTheme}
    aria-label="Toggle Dark Mode"
    class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-800 transition-all hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-teal-500 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
>
    {#if theme === 'dark'}
        <Icon icon="lucide:sun" class="text-2xl" />
    {:else}
        <Icon icon="lucide:moon" class="text-2xl" />
    {/if}
</button>