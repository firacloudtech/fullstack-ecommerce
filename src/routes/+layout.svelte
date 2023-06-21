<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<div class="max-w-8xl mx-auto">
	<Navbar />
	<slot />
</div>
