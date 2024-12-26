<script lang="ts">
	let { data } = $props();
	console.log(data);
</script>

<div class="relative h-[80vh] w-screen bg-cover" style="background-image: url('/bg.png');">
	<div class="dim-overlay"></div>
</div>

<style>
	.dim-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7); /* 검은색 50% 투명도 */
	}
</style>
