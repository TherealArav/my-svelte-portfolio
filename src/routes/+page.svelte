<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
	import TechnologyBadge from '$lib/TechnologyBadge.svelte';
	import CertificateItem from '$lib/CertificateItem.svelte';
  import Icon from '@iconify/svelte';


	const techStack = [
    { name: 'Python', iconCode: 'logos:python' },
    { name: 'TensorFlow', iconCode: 'logos:tensorflow' },
    { name: 'PyTorch', iconCode: 'logos:pytorch-icon' },
    { name: 'LangChain', iconCode: 'simple-icons:langchain' },
    { name: 'Scikit-learn', iconCode: 'logos:scikit-learn' },
    { name: 'Pandas', iconCode: 'simple-icons:pandas' },
    { name: 'NumPy', iconCode: 'logos:numpy' },
    { name: 'SQL', iconCode: 'vscode-icons:file-type-sql' },
    { name: 'Git', iconCode: 'logos:git-icon' },
  ];

	const projects = [
    {
      href: "https://github.com/TherealArav/GeoNavision.git",
      title: "GeoNavision",
      type: "Software",
      description: "An innovative navigation solution.",
      tags: ['AI', 'Navigation', 'Streamlit', 'Python', 'LangChain', 'Gemini', 'Google-APIs']
    },
    {
      href: "https://drive.google.com/file/d/1WT1123nVLqI7Jrb5FRdPxzaDbt58nJbB/view?usp=sharing",
      title: "Accessible Navigation with AI",
      type: "Research Paper",
      description: "Context Aware Guidance for Individuals with Visual Impairments. Accepted for presentation at the ISDIA 2026 conference in Dubai.",
      tags: ['Accessibility', 'Ai', 'MachineLearning', 'ISDIA2026']
    },
    {
      href: "https://github.com/TherealArav/yolo_traficsign_classification_app.git",
      title: "Road Sign Classificiation",
      type: "Open Source",
      description: "A webapp, which can classify road signs powered by YOLO v8.",
      tags: ['Python', 'YOLO','ComputerVision']
    }
  ];

	const skills = [
    "Artificial Intelligence",
    "Computer Science",
    "Machine Learning",
    "Big Data",
    "Mathematics"
  ];

	const certificates = [
    {
      date: "Oct 2025",
      issuer: "DeepLearning.AI",
      title: "Machine Learning in Production (MLIP) Conference",
      badge: "Certificate",
      description: "Comprehensive study of machine learning concepts, applied in production.",
      url: "https://www.coursera.org/account/accomplishments/verify/83055BUMS86F"
    },
    {
      date: "Aug 2025",
      issuer: "Stanford University",
      title: "Introduction to Statistics",
      badge: "Certificate",
      description: "Basics of statistical inference and how it is appolied in data analysis.",
      url: "https://www.coursera.org/account/accomplishments/verify/NHFIO8YP6XC5"
    },
    {
      date: "Aug 2025",
      issuer: "Stanford Universityq",
      title: "Machine Learning Specialization",
      badge: "Certificate",
      description: "Learned model architecture of structured and unstructured ML models and how they are applied to solve problems.",
      url: "https://www.coursera.org/account/accomplishments/specialization/QBML3KZLVO1N"
    },
    {
      date: "June 2025",
      issuer: "Imperial College London",
      title: "Mathematics for Machine Learning",
      badge: "Certificate",
      description: "Learned underlying math concepts, applied in ML/Ai model architectures .",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/PQ0T09RA667M"
    },
	{
	  date: "Jan 2025",
	  issuer: "Apple",
	  title: "Apple Development with Swift Associate",
	  badge: "Certificate",
	  description: "Learned the fundamentals of Swift programming and iOS app development.",
	  url: "https://www.credly.com/badges/b9b8b8e4-5f3e-4523-9dde-b5a47c709b68/linked_in_profile"
	}
  ];

  // Show all certificates
  let showAll = $state(false);
  let visibleCertificates = $derived(showAll ? certificates : certificates.slice(0,3));

</script>

<main class="bg-slate-950">
	<section class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
		<h1 class="mb-6 text-6xl font-extrabold tracking-tight text-white md:text-8xl">Arav Goyal</h1>
		<h2 class="text-3xl font-semibold tracking-wide text-teal-400 md:text-4xl">
			AI & Big Data Engineer
		</h2>
	</section>
	<section class="border-t border-slate-800 px-6 py-20">
		<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div class="space-y-6 text-xl leading-relaxed font-medium text-slate-200">
				<h2
					class="mb-4 inline-block border-b-2 border-teal-500/30 pb-2 text-4xl font-bold tracking-wide text-teal-400"
				>
					About Me
				</h2>
				<p>
					Hi, I'm Arav. I live in the UAE, Dubai. I build innovative and accessible AI solutions
					designed to make a positive real-world impact.
				</p>
				<p>
					As someone who navigates the world with a visual disability, I have a deep-seated passion
					for using AI to break down barriers. I specialize in computer vision and natural
					language processing.
				</p>
			</div>
			<div class="flex justify-center lg:justify-end">
				<img
					src="/profile1.jpg"
					alt="Portrait of Arav Goyal"
					class="w-full max-w-md rounded-2xl border-4 border-slate-700 object-cover shadow-2xl"
				/>
			</div>
		</div>
	</section>
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 border-b-2 border-slate-800 pb-4 text-4xl font-bold text-teal-400">Skills</h2>
			<ul
				class="ml-6 list-outside list-disc space-y-5 text-xl font-medium tracking-wide text-slate-200 marker:text-teal-500 md:text-2xl"
			>
				{#each skills as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>
	</section>
	
	<!-- Technologies & Tooling -->
	<section class="px-6 py-20">
		<div class="mx-auto max-w-4xl">
			<h2
				class="mb-8 border-b-2 border-slate-800 pb-4 text-4xl font-bold tracking-wide text-teal-400"
			>
				Technologies
			</h2>
			<ul class="flex flex-wrap gap-4">
				{#each techStack as tech}
					<TechnologyBadge name={tech.name} iconCode={tech.iconCode} />
				{/each}
			</ul>
		</div>
	</section>
	<section class="py-20 px-6">
		<div class="mx-auto max-w-4xl">
			<div class="mb-12 border-b-2 border-slate-800 pb-8">
				<h2 class="mb-4 text-4xl font-bold tracking-wide text-teal-400">Projects</h2>
				<p class="text-xl font-medium text-slate-300">
					AI solutions, research, and applications I've built.
				</p>
			</div>
			<ul class="flex flex-col gap-14">
				{#each projects as project}
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

<section class="py-20 px-6">
  <div class="max-w-4xl mx-auto">   
    <h2 class="text-4xl font-bold text-teal-400 mb-8 border-b-2 border-slate-800 pb-4 tracking-wide">
      Certificates & Education
    </h2>
    <ul class="flex flex-col">
      {#each visibleCertificates as cert}
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
          onclick={() => showAll = !showAll}
          class="px-8 py-3 bg-slate-800 text-teal-400 font-bold text-xl rounded-full border-2 border-slate-700 hover:bg-slate-700 hover:border-teal-400 transition-all focus:outline-none focus:ring-4 focus:ring-teal-500 shadow-lg cursor-pointer"
          aria-expanded={showAll}
        >
          {showAll ? 'Show Less' : 'View All Certificates'}
        </button>
      </div>
    {/if}
  </div>
</section>
<footer class="bg-slate-950 py-16 px-6 border-t-2 border-slate-900 mt-12">
  <div class="max-w-4xl mx-auto flex flex-col items-center gap-8">
    
    <h2 class="text-3xl font-bold text-teal-400 tracking-wide">
      Let's Connect
    </h2>

    <ul class="flex flex-wrap justify-center gap-6">
      
      <li>
        <a 
          href="https://github.com/TherealArav" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-full border-2 border-slate-800 hover:border-teal-400 hover:bg-slate-800 transition-all focus:outline-none focus:ring-4 focus:ring-teal-500 shadow-lg cursor-pointer"
          aria-label="Visit my GitHub profile"
        >
          <div aria-hidden="true" class="text-3xl text-slate-400 group-hover:text-teal-400 transition-colors">
            <Icon icon="mdi:github" />
          </div>
          <span class="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
            GitHub
          </span>
        </a>
      </li>

      <li>
        <a 
          href="https://linkedin.com/in/arav-goyal-9585ab366/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-full border-2 border-slate-800 hover:border-teal-400 hover:bg-slate-800 transition-all focus:outline-none focus:ring-4 focus:ring-teal-500 shadow-lg cursor-pointer"
          aria-label="Visit my LinkedIn profile"
        >
          <div aria-hidden="true" class="text-3xl text-slate-400 group-hover:text-teal-400 transition-colors">
            <Icon icon="mdi:linkedin" />
          </div>
          <span class="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">
            LinkedIn
          </span>
        </a>
      </li>
    </ul>
    <p class="text-slate-500 text-lg mt-4 font-medium">
      © 2026 Arav Goyal. Built with Svelte & Tailwind.
    </p>

  </div>
</footer>
</main>

