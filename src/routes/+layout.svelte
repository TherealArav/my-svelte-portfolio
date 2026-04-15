<script>
	import './layout.css';

	let { children } = $props();
</script>
<a 
    href="#main-content" 
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-6 focus:py-3 focus:text-xl focus:font-bold focus:text-teal-400 focus:ring-4 focus:ring-teal-500 focus:outline-none"
>
    Skip to main content
</a>
{@render children()}
