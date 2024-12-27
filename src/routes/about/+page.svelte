<script>
	import aboutImage01 from '$lib/images/about_image_01.png';
	import Brand from './Brand.svelte';
	import Story from './Story.svelte';

	let tabItem = 1;
	const defaultTabClass = 'border-b border-gray-300 text-gray-400 text-center';
	const activeTabClass = 'border-b border-faabs-500 text-faabs-600 text-center';
</script>

<div class="">
	<div class="grid grid-cols-2 py-10">
		<button class={tabItem == 1 ? activeTabClass : defaultTabClass} on:click={() => (tabItem = 1)}
			>Brand</button
		>
		<button class={tabItem == 2 ? activeTabClass : defaultTabClass} on:click={() => (tabItem = 2)}
			>Story</button
		>
	</div>

	{#if tabItem == 1}
		<Brand />
	{:else if tabItem == 2}
		<Story />
	{/if}
</div>
