<script>
    let { date, issuer, title, badge, description, url } = $props();
</script>

<li>
    <article
        class="relative flex flex-col gap-4 border-b border-slate-200 py-8 last:border-0 sm:flex-row sm:items-start sm:gap-8 dark:border-slate-800"
    >
        <div class="shrink-0 pt-1 sm:w-32">
            <span class="font-mono text-xl font-medium text-slate-600 dark:text-slate-400">{date}</span>
        </div>

        <div class="flex w-full flex-col gap-3">
            
            <header class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {issuer}
                    <span class="block font-medium text-slate-600 sm:ml-2 sm:inline dark:text-slate-400">— {title}</span>
                </h3>
                {#if badge}
                    <div class="mt-1 shrink-0 self-start">
                        <span
                            class="rounded border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-sm font-bold tracking-wide text-teal-700 dark:border-teal-700/50 dark:bg-teal-900/40 dark:text-teal-300"
                        >
                            {badge}
                        </span>
                    </div>
                {/if}
            </header>
            
            <p class="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                {description}
                {#if url}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded px-1 font-medium text-purple-700 underline underline-offset-4 transition-colors hover:text-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                        View Credential
                    </a>
                {/if}
            </p>
        </div>
    </article>
</li>