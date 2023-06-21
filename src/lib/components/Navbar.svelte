<script>
	import { page } from '$app/stores';
</script>

<nav class="bg-white py-10">
	<div class=" flex px-10 justify-between items-center mx-auto 2xl:px-0">
		<img class="h-12" src="./images/layout/logo.png" alt="brand-logo" />

		<div class="flex space-x-4">
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
