<script lang="ts">
	import { run } from '$lib/main';
</script>

<canvas use:run></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;

		width: 100%;
		height: 100vh;
	}
</style>
