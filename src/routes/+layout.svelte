<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="text-primary fixed z-50 w-full border-b-[1px] border-white py-6 font-thin">
	<div class="container flex justify-between">
		<div class="text-4xl font-thin">FAABS COFFEE</div>
	</div>
</div>
<div class="h-[90px]" />
{@render children()}
