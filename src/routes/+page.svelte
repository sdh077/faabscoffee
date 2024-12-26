<script>
	let src = '/bg.png';
	let name = 'Rick Astley';
</script>

<div class="relative h-screen w-screen bg-cover" style="background-image: url('/bg.png');">
	<div class="dim-overlay">
		<div class="border-b-[1px] border-white py-8 text-center text-4xl text-white">FAABS COFFEE</div>
	</div>
</div>

<style>
	.dim-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* 검은색 50% 투명도 */
	}
</style>
