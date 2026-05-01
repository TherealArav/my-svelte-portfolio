<script>
    let { href, title, type, description, tags } = $props();
</script>

<li>
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
    <a
        href={href}
        class="group -ml-4 flex flex-col gap-4 rounded-xl p-4 transition-colors hover:bg-slate-100 dark:hover:bg-slate-900/80 focus:outline-none focus:ring-4 focus:ring-teal-500"
        target="_blank"
        rel="noopener noreferrer"
    >
        <article class="flex flex-col gap-3">
            <header class="flex items-center justify-between gap-4">
                <h3
                    class="flex flex-wrap items-center gap-2 text-2xl font-bold text-black transition-colors group-hover:text-teal-600 dark:text-slate-100 dark:group-hover:text-teal-400"
                >
                    {title}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-600 dark:text-slate-500 dark:group-hover:text-teal-400"
                        aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg
                    >
                </h3>
                <span
                    class="shrink-0 font-mono text-sm font-bold text-slate-600 group-hover:text-black dark:text-slate-400 dark:group-hover:text-slate-300"
                >
                    {type}
                </span>
            </header>

            <p
                class="text-xl leading-relaxed text-slate-700 transition-colors group-hover:text-black dark:text-slate-300 dark:group-hover:text-slate-200"
            >
                {description}
            </p>

            <footer class="mt-2 flex flex-wrap items-center gap-4">
                {#each tags as tag (tag)}
                    <span class="font-mono text-base font-bold text-purple-700 dark:text-purple-400">#{tag}</span>
                {/each}
            </footer>
        </article>
    </a>
</li>