<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="text-primary fixed z-50 w-full border-b-[1px] border-white py-6 font-thin">
	<div class="container flex items-end justify-between">
		<a href="/"><div class="text-4xl font-thin">FAABS COFFEE</div></a>
		<div class="flex gap-4">
			{#each ['ABOUT', 'HISTORY', 'PRODUCT', 'CONTACT'] as menu}
				<a href={`/${menu.toLocaleLowerCase()}`}>{menu}</a>
			{/each}
		</div>
	</div>
</div>
<div class="h-[90px]" />
{@render children()}
