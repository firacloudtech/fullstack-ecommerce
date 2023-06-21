<script>
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	let toggle = false;

	/**
	 * Sets the value of the toggle.
	 * @param {boolean} value - The new value for the toggle.
	 * @returns {void}
	 */
	function setToggle(value) {
		toggle = value;
	}
</script>

<nav class="bg-white py-10">
	{#if toggle}
		<div
			in:fly={{ x: -20, duration: 500, delay: 500 }}
			out:fade
			class="absolute md:hidden top-0 p-10 flex flex-col bg-black/10 z-10 w-full h-full"
		>
			<div class="p-10 bg-white shadow-sm z-10 h-full text-lg text-center">
				<button class="mb-4" on:click={() => setToggle(!toggle)}>Close </button>
				<hr class="w-20 mx-auto border-1" />
				<div class="flex flex-col space-y-8 text-left mt-6">
					<a class="" href="/" aria-current={$page.url.pathname === '/'}>Home</a>
					<a class="" href="/shop" aria-current={$page.url.pathname === '/shop'}>Shop</a>
					<a class="" href="/blog">Blog</a>
					<a class="" href="/about">About Us</a>
				</div>
			</div>
		</div>
	{/if}

	<div class=" flex px-10 justify-between items-center mx-auto 2xl:px-0 relative">
		<button on:click={() => setToggle(!toggle)}>
			<img class="md:h-8 lg:h-10" src="./images/layout/logo.png" alt="brand-logo" />
		</button>

		<div class="md:flex hidden space-x-4">
			<a class="navBtn" href="/" aria-current={$page.url.pathname === '/'}>Home</a>
			<a class="navBtn" href="/shop" aria-current={$page.url.pathname === '/shop'}>Shop</a>
			<a class="navBtn" href="/blog">Blog</a>
			<a class="navBtn" href="/about">About Us</a>
		</div>

		<a href="/cart" class="flex items-center space-x-2">
			<img src="images/layout/shop.svg" alt="shop" />
			<div>Cart</div>
		</a>
	</div>
</nav>

<style>
	.navBtn {
		width: 80px;
		text-align: center;
	}

	nav a[aria-current='true'] {
		border-bottom: 2px solid;
	}
	nav a[aria-current='false'] {
		border-bottom: 2px solid transparent;
	}
</style>
