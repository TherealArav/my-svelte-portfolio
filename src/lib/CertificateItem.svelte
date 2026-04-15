<script>
    let { date, issuer, title, badge, description, url } = $props();
</script>

<li>
    <article
        class="relative flex flex-col gap-4 border-b border-slate-800 py-8 last:border-0 sm:flex-row sm:items-start sm:gap-8"
    >
        <div class="shrink-0 pt-1 sm:w-32">
            <span class="font-mono text-xl font-medium text-slate-400">{date}</span>
        </div>

        <div class="flex w-full flex-col gap-3">
            
            <header class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h3 class="text-2xl font-bold text-slate-100">
                    {issuer}
                    <span class="block font-medium text-slate-400 sm:ml-2 sm:inline">— {title}</span>
                </h3>
                {#if badge}
                    <div class="mt-1 shrink-0 self-start">
                        <span
                            class="rounded border border-teal-700/50 bg-teal-900/40 px-3 py-1 font-mono text-sm font-bold tracking-wide text-teal-300"
                        >
                            {badge}
                        </span>
                    </div>
                {/if}
            </header>
            
            <p class="text-xl leading-relaxed text-slate-300">
                {description}
                {#if url}
                    <a
                        // eslint-disable-next-line svelte/no-navigation-without-resolve
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded px-1 font-medium text-purple-400 underline underline-offset-4 transition-colors hover:text-purple-300 focus:ring-4 focus:ring-purple-500 focus:outline-none"
                    >
                        View Credential
                    </a>
                {/if}
            </p>
        </div>
    </article>
</li>