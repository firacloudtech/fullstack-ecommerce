<script>
	import { brands } from './data';
</script>

<section id="hero" class="relative overflow-hidden mb-10 font-display">
	<img
		class="absolute object-cover h-full w-full -z-10 top-0"
		src="./images/home/hero.png"
		alt="home-hero"
	/>
	<div class="flex justify-between py-8 xl:py-20 px-4">
		<div class="w-1/2" />
		<div class="w-1/2 pl-10">
			<h3 class="text-lg xl:text-xl uppercase mb-5">Welcome to Our</h3>
			<h1 class="text-5xl xl:text-8xl font-extrabold uppercase">Furniture</h1>
			<h2 class="text-5xl xl:text-8xl font-bold uppercase">Gallery</h2>
			<hr class="mt-4" />
			<div class="uppercase mt-4 font-bold">Browse our selections</div>
			<p class="w-2/3 mt-5 text-sm text-gray-500">
				Featuring sleek designs and innovative materials that seamlessly blend form and function.
			</p>
		</div>
	</div>
</section>
<section id="gallery">
	<div class="grid grid-cols-4 gap-6 h-auto px-40 font-display mb-10">
		<div class="mx-auto px-10 bg-gray-200 w-full text-left py-12 overflow-hidden relative">
			<img class="absolute -top-1 right-4 w-20" src="/images/home/light1.svg" alt="light-1" />
			<img class="absolute -top-1 right-14 w-24" src="/images/home/light2.svg" alt="light-1" />
			<div class="mt-48">
				<h1 class="uppercase font-bold">Hanging light</h1>
				<p class="mt-4 text-sm text-gray-500 font-display">
					Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient
					LED lighting, and adjustable height.
				</p>
				<button class="mt-6 text-gray-500 hover:text-gray-700">View more ></button>
			</div>
		</div>
		<div class="col-span-2 bg-emerald-50 w-full text-center relative overflow-hidden">
			<h1 class="text-center mt-10 font-bold uppercase">Designed Sofa</h1>
			<p class="w-1/2 mx-auto text-gray-500 mt-6 text-sm">
				Introducing our newest sofa, the perfect combination of style and comfort, designed to
				elevate your living space and provide ultimate relaxation.
			</p>
			<button class="mt-6 text-gray-500 hover:text-gray-700">View more ></button>
			<img class="bottom-4 absolute" src="/images/home/sofa.svg" alt="sofa" />
		</div>
		<div class="bg-gray-200 w-full text-left px-10 overflow-hidden relative">
			<div class="font-bold uppercase mt-10">Nova Chair</div>
			<p class="mt-10 text-sm text-gray-500">
				a stylish and comfortable addition to any room, with its sleek design and plush cushions
				creating the ultimate seating experience.
			</p>
			<button class="mt-6 text-gray-500 hover:text-gray-700">View more ></button>
			<img class="absolute -bottom-0.5" src="/images/home/chair.svg" alt="chair" />
		</div>
	</div>
</section>
<section id="trustedby" class="my-20">
	<h1 class="text-center font-extrabold text-xl uppercase mb-10">Trusted by</h1>
	<div class="grid grid-cols-6 px-40">
		{#each brands as brand}
			<img src={brand.src} alt={brand.name} />
		{/each}
	</div>
</section>
