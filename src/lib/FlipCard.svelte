<script>
	let { imageSrc = '/profile1.jpg', altText = 'Portrait of Arav Goyal' } = $props();
</script>

<div class="group w-full max-w-md cursor-pointer perspective-[1000px]">
	<div class="relative transition-all duration-500 transform-3d group-hover:rotate-y-180">
		<div class="w-full backface-hidden">
			<img
				src={imageSrc}
				alt={altText}
				class="w-full rounded-2xl border-4 border-slate-700 object-cover shadow-2xl"
			/>
		</div>
		<div
			class="absolute inset-0 h-full w-full rotate-y-180 rounded-2xl border-4 border-teal-400 bg-slate-800 p-8 text-slate-200 shadow-2xl backface-hidden"
		>
			<div class="flex h-full flex-col items-center justify-center">
				<h3 class="mb-2 font-vidaloka text-2xl font-bold text-teal-400">Arav Goyal</h3>
				<hr class="mb-6 w-48 border-t-2 border-teal-400" />

				<div class="w-full max-w-[280px] text-left">
					<p class="mb-2 text-sm font-semibold text-slate-300">AI Engineer</p>
					<p class="mb-6 text-sm leading-relaxed">
						Building accessible AI technologies, with a focus on Computer Vision and NLP.
					</p>

					<h4 class="mb-3 text-xs font-bold tracking-wider text-teal-400 uppercase">Core Stack</h4>
					<div class="flex flex-wrap gap-2">
						<a
							href="https://www.python.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-slate-900"
						>
							Python
						</a>

						<a
							href="https://opencv.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-slate-900"
						>
							Computer Vision
						</a>

						<a
							href="https://en.wikipedia.org/wiki/Natural_language_processing"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-slate-900"
						>
							NLP
						</a>

						<a
							href="https://www.langchain.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-slate-900"
						>
							LangChain
						</a>

						<a
							href="https://www.docker.com/"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-xs text-slate-200 transition-colors hover:border-teal-500 hover:bg-teal-500 hover:text-slate-900"
						>
							Docker
						</a>
					</div>
					<div class="mt-8 flex w-full justify-center">
						<img
							src="/aiSymbol.svg"
							alt="AI Symbol"
							class="h-10 w-10 opacity-70 transition-opacity hover:opacity-100"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
