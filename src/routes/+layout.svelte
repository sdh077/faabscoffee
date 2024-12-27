<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="text-primary z-50 w-full border-b-[1px] border-white bg-white py-6 font-thin md:fixed">
	<div class="container flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
		<a href="/" class="w-full">
			<img src="/faabslogo.png" class="w-40" />
			<!-- <div class="w-full text-2xl font-thin md:text-4xl">FAABS COFFEE</div> -->
		</a>
		<div class="flex justify-between gap-4 text-sm sm:text-base">
			{#each ['ABOUT', 'HISTORY', 'PRODUCT', 'CONTACT'] as menu}
				<a href={`/${menu.toLocaleLowerCase()}`}>{menu}</a>
			{/each}
		</div>
	</div>
</div>
<div class="md:h-[90px]" />
{@render children()}
