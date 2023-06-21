<script>
	import Product from '$lib/components/Product.svelte';
	import { products } from '../../data';
</script>

<div class="grid grid-cols-3 gap-4">
	{#each products as product, index}
		<Product {product} />
	{/each}
</div>
