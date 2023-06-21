<script>
	import Featured from '$lib/components/Featured.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Product from '$lib/components/Product.svelte';
	import { brands, chooseUs, products } from '../data';
</script>

<section id="hero" class="relative overflow-hidden mb-10">
	<img
		class="md:absolute md:h-full w-full -z-10 top-0 lg:object-scale-down md:object-fit object-cover md:object-center object-left h-60"
		src="./images/home/hero.png"
		alt="home-hero"
	/>
	<div class="flex justify-between md:py-20 md:px-4 2xl:py-16 mt-10 md:mt-0">
		<div class="w-full text-center md:w-1/2 sm:block hidden" />
		<div class="w-full md:w-1/2 pl-10">
			<h3 class="text-lg xl:text-xl uppercase mb-5">Welcome to Our</h3>
			<h1 class="text-5xl xl:text-8xl font-extrabold uppercase font-hero">Furniture</h1>
			<h2 class="text-5xl xl:text-8xl font-bold uppercase font-hero">Gallery</h2>
			<hr class="mt-1 w-1/2 border-slate-500" />
			<div class="uppercase mt-4 font-bold">Browse our selections</div>
			<p class="w-2/3 mt-5 text-sm text-gray-500">
				Featuring sleek designs and innovative materials that seamlessly blend form and function.
			</p>
		</div>
	</div>
</section>
<section id="gallery">
	<div class="flex flex-col w-full lg:grid lg:grid-cols-4 lg:gap-6 h-auto md:px-10 mb-10 lg:px-10">
		<div
			class="mx-auto px-10 md:px-40 lg:px-10 bg-gray-200 w-full text-left py-12 overflow-hidden relative"
		>
			<img
				class="absolute -top-1 right-4 w-30 lg:w-24"
				src="/images/home/light1.svg"
				alt="light-1"
			/>
			<img
				class="absolute -top-1 right-14 w-30 lg:w-24"
				src="/images/home/light2.svg"
				alt="light-1"
			/>
			<div class="mt-48">
				<h1 class="uppercase font-bold">Hanging light</h1>
				<p class="mt-4 text-sm text-gray-500">
					Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient
					LED lighting, and adjustable height.
				</p>
				<button class="mt-6 text-gray-500 hover:text-gray-700">View more ></button>
			</div>
		</div>
		<div class="lg:col-span-2 bg-emerald-50 w-full px-10 md:text-center relative overflow-hidden">
			<h1 class="text-center md: mt-10 font-bold uppercase">Designed Sofa</h1>
			<p class="w-full md:w-1/2 mx-auto text-gray-500 my-6 text-sm">
				Introducing our newest sofa, the perfect combination of style and comfort, designed to
				elevate your living space and provide ultimate relaxation.
			</p>
			<button class="mt-6 text-gray-500 hover:text-gray-700 mb-4">View more ></button>
			<img class="bottom-4 max-w-1/2 mx-auto" src="/images/home/sofa.svg" alt="sofa" />
		</div>
		<div class="bg-gray-200 w-full md:text-left px-10 overflow-hidden relative">
			<div class="font-bold uppercase mt-10">Nova Chair</div>
			<p class="mt-10 text-sm md:w-1/2 text-gray-500">
				a stylish and comfortable addition to any room, with its sleek design and plush cushions
				creating the ultimate seating experience.
			</p>
			<button class="mt-6 text-gray-500 hover:text-gray-700 md:mb-10">View more ></button>
			<img class="md:absolute md:right-0 -bottom-0.5" src="/images/home/chair.svg" alt="chair" />
		</div>
	</div>
</section>
<section id="trustedby" class="my-20 lg:px-20">
	<h1 class="text-center font-extrabold text-xl uppercase mb-10">Trusted by</h1>
	<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
		{#each brands as brand}
			<img src={brand.src} alt={brand.name} />
		{/each}
	</div>
</section>
<section class="text-center p-10">
	<h1 class="uppercase font-extrabold text-xl mb-10">Featured Products</h1>
	<Featured />
</section>
<section class="text-center p-10">
	<h1 class="uppercase font-extrabold text-xl mb-10">WHY CHOOSE US?</h1>
	<div class="grid md:grid-cols-3 gap-4">
		{#each chooseUs as choice}
			<div class="flex flex-col w-full my-10">
				<img class="w-16 mx-auto mb-4" src={choice.image} alt={choice.name} />
				<p class="mb-4 font-bold">{choice.name}</p>
				<p class="px-8">
					{choice.description}
				</p>
			</div>
		{/each}
	</div>
</section>
