<script>
	import { fade, fly } from 'svelte/transition';

	let { scrollY, scrollToTopAction } = $props();
	let isVisible = $derived(scrollY > 300);
</script>

{#if isVisible}
	<button
		onclick={scrollToTopAction}
		aria-label="Scroll back to the top of the page"
		in:fly={{ y: 20, duration: 300 }}
		out:fade={{ duration: 200 }}
		class="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none sm:right-10 sm:bottom-10"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2.5"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
		</svg>
	</button>
{/if}
