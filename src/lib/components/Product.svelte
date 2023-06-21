<script>
	import Rating from '$lib/components/Rating.svelte';

	/** @type {import('$lib/types').Product}*/
	export let product;
</script>

<div class="h-96 overflow-hidden relative flex flex-col border items-center border-orange-200">
	<div class="h-full w-full relative overflow-hidden">
		<img
			src={product.image}
			alt={product.name}
			class="absolute object-cover h-full w-full object-center"
		/>
	</div>
	<div class="w-full z-10 mx-auto text-center flex flex-col items-center p-4">
		<p class="uppercase">{product.description}</p>
		<Rating rating={product.rating} total={5} />
	</div>
</div>
