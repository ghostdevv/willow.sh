<script lang="ts">
	import { onMount } from 'svelte';
	import { run } from '$lib/main';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		return run(canvas);
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;

		width: 100%;
		height: 100vh;
	}
</style>
