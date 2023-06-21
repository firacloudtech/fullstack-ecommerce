<script>
	import Star from '$lib/assets/star.svg';
	import GreyStar from '$lib/assets/greyStar.svg';

	export let rating = 0;
	export let total = 0;

	let roundedRating = Math.ceil ? Math.ceil(rating) : Math.floor(rating);
	let greyStars = total - roundedRating;
</script>

<div class="flex flex-row">
	{#each Array(roundedRating) as _, star}
		<img src={Star} alt="star" />
	{/each}
	{#each Array(greyStars) as _, star}
		<img src={GreyStar} alt="star" />
	{/each}
</div>
