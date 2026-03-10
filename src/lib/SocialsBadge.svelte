<!-- Svelte Component: SocialsBadge.svelte -->
<script>
    import Icon from '@iconify/svelte';
</script>
<ul class="flex flex-wrap justify-center gap-6">
	<li>
		<a
			href="https://github.com/TherealArav"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex cursor-pointer items-center gap-3 rounded-full border-2 border-slate-800 bg-slate-900 px-6 py-4 shadow-lg transition-all hover:border-teal-400 hover:bg-slate-800 focus:ring-4 focus:ring-teal-500 focus:outline-none"
			aria-label="Visit my GitHub profile"
		>
			<div
				aria-hidden="true"
				class="text-3xl text-slate-400 transition-colors group-hover:text-teal-400"
			>
				<Icon icon="mdi:github" />
			</div>
			<span class="text-xl font-bold text-slate-200 transition-colors group-hover:text-white">
				GitHub
			</span>
		</a>
	</li>

	<li>
		<a
			href="https://linkedin.com/in/arav-goyal-9585ab366/"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex cursor-pointer items-center gap-3 rounded-full border-2 border-slate-800 bg-slate-900 px-6 py-4 shadow-lg transition-all hover:border-teal-400 hover:bg-slate-800 focus:ring-4 focus:ring-teal-500 focus:outline-none"
			aria-label="Visit my LinkedIn profile"
		>
			<div
				aria-hidden="true"
				class="text-3xl text-slate-400 transition-colors group-hover:text-teal-400"
			>
				<Icon icon="mdi:linkedin" />
			</div>
			<span class="text-xl font-bold text-slate-200 transition-colors group-hover:text-white">
				LinkedIn
			</span>
		</a>
	</li>
</ul>
