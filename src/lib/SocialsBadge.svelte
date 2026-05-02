<script>
    import Icon from '@iconify/svelte';
</script>

<ul class="flex flex-wrap justify-center gap-6">
    <li>
        <a
            href="https://github.com/TherealArav"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex cursor-pointer items-center gap-3 rounded-full border-2 px-6 py-4 shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-teal-500 bg-white border-slate-200 hover:bg-slate-50 hover:border-teal-500 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-teal-400"
            aria-label="Visit my GitHub profile"
        >
            <div
                aria-hidden="true"
                class="text-3xl transition-colors text-slate-500 group-hover:text-teal-600 dark:text-slate-400 dark:group-hover:text-teal-400"
            >
                <Icon icon="mdi:github" />
            </div>
            <span class="text-xl font-bold transition-colors text-slate-800 group-hover:text-teal-700 dark:text-slate-200 dark:group-hover:text-white">
                GitHub
            </span>
        </a>
    </li>

    <li>
        <a
            href="https://linkedin.com/in/arav-goyal-9585ab366/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex cursor-pointer items-center gap-3 rounded-full border-2 px-6 py-4 shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-teal-500 bg-white border-slate-200 hover:bg-slate-50 hover:border-teal-500 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-teal-400"
            aria-label="Visit my LinkedIn profile"
        >
            <div
                aria-hidden="true"
                class="text-3xl transition-colors text-slate-500 group-hover:text-teal-600 dark:text-slate-400 dark:group-hover:text-teal-400"
            >
                <Icon icon="mdi:linkedin" />
            </div>
            <span class="text-xl font-bold transition-colors text-slate-800 group-hover:text-teal-700 dark:text-slate-200 dark:group-hover:text-white">
                LinkedIn
            </span>
        </a>
    </li>
</ul>