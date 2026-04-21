<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
	import TechnologyBadge from '$lib/TechnologyBadge.svelte';
	import CertificateItem from '$lib/CertificateItem.svelte';
	import SocialsBadge from '$lib/SocialsBadge.svelte';
	import BackToTop from '$lib/BackToTop.svelte';

	const name = 'Arav Goyal';
	const title = 'AI & Big Data Engineer';
	const techStack = [
		{ name: 'Python', iconCode: 'logos:python', url: 'https://www.python.org/' },
		{ name: 'TensorFlow', iconCode: 'logos:tensorflow', url: 'https://www.tensorflow.org/' },
		{ name: 'PyTorch', iconCode: 'logos:pytorch-icon', url: 'https://pytorch.org/' },
		{
			name: 'LangChain',
			iconCode: 'streamline-color:link-chain',
			url: 'https://python.langchain.com/'
		},
		{ name: 'Scikit-learn', iconCode: 'devicon:scikitlearn', url: 'https://scikit-learn.org/' },
		{ name: 'Pandas', iconCode: 'devicon:pandas', url: 'https://pandas.pydata.org/' },
		{ name: 'NumPy', iconCode: 'logos:numpy', url: 'https://numpy.org/' },
		{ name: 'SQL', iconCode: 'vscode-icons:file-type-sql', url: 'https://www.mysql.com/' },
		{
			name: 'Hugging Face',
			iconCode: 'fluent-emoji-flat:hugging-face',
			url: 'https://huggingface.co/'
		},
		{ name: 'Git', iconCode: 'logos:git-icon', url: 'https://git-scm.com/' }
	];

	const projects = [
		{
			href: 'https://drive.google.com/file/d/1WT1123nVLqI7Jrb5FRdPxzaDbt58nJbB/view?usp=sharing',
			title: 'Accessible Navigation with AI',
			type: 'Research Paper',
			description:
				'Context Aware Guidance for Individuals with Visual Impairments. Accepted for presentation at the ISDIA 2026 conference in Dubai.',
			tags: ['Accessibility', 'Ai', 'MachineLearning', 'ISDIA2026']
		},
		{
			href: 'https://geonavision-hc9dvzy96cb8auq9bwxzgq.streamlit.app/',
			title: 'GeoNavision',
			type: 'Software',
			description:
				'An innovative navigation solution, aimed to help visually impared individuals to navigate the world with confidence. Built using Streamlit, Python, LangChain, Gemini, and Google APIs.',
			tags: ['AI', 'Navigation', 'Streamlit', 'Python', 'LangChain', 'Gemini', 'Google-APIs']
		},
		{
			href: 'https://github.com/TherealArav/yolo_traficsign_classification_app.git',
			title: 'Road Sign Classificiation',
			type: 'Open Source',
			description:
				'A webapp, which can classify road signs powered by YOLO v8. Trained on andrewmvd/road-sign-detection dataset, which contains 4 classes of road signs.',
			tags: ['Python', 'YOLO', 'ComputerVision']
		}
	];

	const skills = [
		'Artificial Intelligence',
		'Computer Science',
		'Machine Learning',
		'Big Data',
		'Mathematics'
	];

	const certificates = [
		{
			date: 'Feb 2026',
			issuer: 'University of Wollongong Dubai',
			title: 'ISDIA 2026 Conference Presentation',
			badge: 'Certificate',
			description:
				'Presented research on AI-powered navigation for visually impaired individuals at ISDIA 2026 in Dubai.',
			url: 'https://drive.google.com/file/d/1WtL-FQUXskYZJIf4x_yvwKqotyzRL7X4/view?usp=sharing'
		},
		{
			date: 'Oct 2025',
			issuer: 'DeepLearning.AI',
			title: 'Machine Learning in Production (MLIP) Conference',
			badge: 'Certificate',
			description: 'Comprehensive study of machine learning concepts, applied in production.',
			url: 'https://www.coursera.org/account/accomplishments/verify/83055BUMS86F'
		},
		{
			date: 'Aug 2025',
			issuer: 'Stanford University',
			title: 'Introduction to Statistics',
			badge: 'Certificate',
			description: 'Basics of statistical inference and how it is appolied in data analysis.',
			url: 'https://www.coursera.org/account/accomplishments/verify/NHFIO8YP6XC5'
		},
		{
			date: 'Aug 2025',
			issuer: 'Stanford Universityq',
			title: 'Machine Learning Specialization',
			badge: 'Certificate',
			description:
				'Learned model architecture of structured and unstructured ML models and how they are applied to solve problems.',
			url: 'https://www.coursera.org/account/accomplishments/specialization/QBML3KZLVO1N'
		},
		{
			date: 'June 2025',
			issuer: 'Imperial College London',
			title: 'Mathematics for Machine Learning',
			badge: 'Certificate',
			description: 'Learned underlying math concepts, applied in ML/Ai model architectures .',
			url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/PQ0T09RA667M'
		},
		{
			date: 'Jan 2025',
			issuer: 'Apple',
			title: 'Apple Development with Swift Associate',
			badge: 'Certificate',
			description: 'Learned the fundamentals of Swift programming and iOS app development.',
			url: 'https://www.credly.com/badges/b9b8b8e4-5f3e-4523-9dde-b5a47c709b68/linked_in_profile'
		}
	];

	// Show all certificates
	let showAll = $state(false);
	let visibleCertificates = $derived(showAll ? certificates : certificates.slice(0, 3));

	let mainScrollY = $state(0);
	let scrollContainer = $state();

	function handleScrollToTop() {
		if (scrollContainer) {
			scrollContainer.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	}
</script>

<main
	bind:this={scrollContainer}
	onscroll={(e) => (mainScrollY = e.currentTarget.scrollTop)}
	class="no-scrollbar h-screen overflow-y-auto scroll-smooth bg-slate-950"
>
	<header class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
		<h1 class="mb-6 text-6xl font-extrabold tracking-tight text-white md:text-8xl">{name}</h1>
		<h2 class="mb-24 text-3xl font-semibold tracking-wide text-teal-400 md:text-4xl">{title}</h2>
		<SocialsBadge />
	</header>
	<section id="main-content" aria-labelledby="about-heading" class="border-t border-slate-800 px-6 py-20" tabindex="-1">
		<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div class="space-y-6 text-xl leading-relaxed font-medium text-slate-200">
				<h2
					id="about-heading"
					class="mb-4 inline-block border-b-2 border-teal-500/30 pb-2 text-4xl font-bold tracking-wide text-teal-400"
				>
					About Me
				</h2>
				<p>
					Hi, I'm Arav, an undergraduate at the University of Wollongong Dubai. I specialize in
					building accessible AI solutions particularly for people with low vision leveraging
					Computer Vision and NLP.
				</p>
				<p>
					My experience spans presenting research at ISDIA, developing award winning hackathon
					software, and driving machine learning projects through to successful deployment.
				</p>
			</div>
			<div class="flex justify-center lg:justify-end">
				<img
					src="/profile1.jpg"
					alt="Portrait of Arav Goyal"
					class="w-full max-w-md rounded-2xl border-4 border-slate-700 object-cover shadow-2xl transition-all duration-250 hover:-translate-y-3 hover:scale-105 hover:border-teal-400"
				/>
			</div>
		</div>
	</section>
	<section aria-labelledby="skills-heading" class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2 id="skills-heading" class="mb-8 border-b-2 border-slate-800 pb-4 text-4xl font-bold text-teal-400">Skills</h2>
			<ul
				class="ml-6 list-outside list-disc space-y-5 text-xl font-medium tracking-wide text-slate-200 marker:text-teal-500 md:text-2xl"
			>
				{#each skills as skill (skill)}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Technologies & Tooling -->
	<section aria-labelledby="technologies-heading"class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2
				id="technologies-heading"
				class="mb-8 border-b-2 border-slate-800 pb-4 text-4xl font-bold tracking-wide text-teal-400"
			>
				Technologies
			</h2>
			<ul class="flex flex-wrap gap-4">
				{#each techStack as tech (tech.url)}
					<TechnologyBadge name={tech.name} iconCode={tech.iconCode} url={tech.url} />
				{/each}
			</ul>
		</div>
	</section>
	<section aria-labelledby="projects-heading" class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<div class="mb-12 border-b-2 border-slate-800 pb-8">
				<h2 id="projects-heading" class="mb-4 text-4xl font-bold tracking-wide text-teal-400">Projects</h2>
				<p class="text-xl font-medium text-slate-300">
					AI solutions, research, and applications I've built.
				</p>
			</div>
			<ul class="flex flex-col gap-14">
				{#each projects as project (project.href)}
					<ProjectCard
						href={project.href}
						title={project.title}
						type={project.type}
						description={project.description}
						tags={project.tags}
					/>
				{/each}
			</ul>
		</div>
	</section>

	<section aria-labelledby="certificate-heading" class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2
				id="certificate-heading"
				class="mb-8 border-b-2 border-slate-800 pb-4 text-4xl font-bold tracking-wide text-teal-400"
			>
				Certificates & Education
			</h2>
			<ul class="flex flex-col">
				{#each visibleCertificates as cert (cert.url)}
					<CertificateItem
						date={cert.date}
						issuer={cert.issuer}
						title={cert.title}
						badge={cert.badge}
						description={cert.description}
						url={cert.url}
					/>
				{/each}
			</ul>
			{#if certificates.length > 3}
				<div class="mt-8 flex justify-center">
					<button
						onclick={() => (showAll = !showAll)}
						class="cursor-pointer rounded-full border-2 border-slate-700 bg-slate-800 px-8 py-3 text-xl font-bold text-teal-400 shadow-lg transition-all hover:border-teal-400 hover:bg-slate-700 focus:ring-4 focus:ring-teal-500 focus:outline-none"
						aria-expanded={showAll}
					>
						{showAll ? 'Show Less' : 'View All Certificates'}
					</button>
				</div>
			{/if}
		</div>
	</section>

	<!-- End of main content -->
	<!-- Link to GitHub and LinkedIn profiles -->
	<footer aria-labelledby="social-heading" class="mt-12 border-t-2 border-slate-900 bg-slate-950 px-6 py-16">
		<div class="mx-auto flex max-w-4xl flex-col items-center gap-8">
			<h2 id="social-heading" class="text-3xl font-bold tracking-wide text-teal-400">Let's Connect</h2>
			<SocialsBadge />
			<p class="mt-4 text-lg font-medium text-slate-500">
				© 2026 Arav Goyal. Built with Svelte & Tailwind.
			</p>
		</div>
	</footer>
	<BackToTop scrollY={mainScrollY} scrollToTopAction={handleScrollToTop} />
</main>
