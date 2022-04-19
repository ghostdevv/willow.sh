<script lang="ts">
    import { GlowLayer, Scene, Vector3 } from '@babylonjs/core';
    import { createStars } from '$lib/stars';
    import { setup } from '$lib/setup';
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;

    onMount(() => {
        const { engine, scene } = setup(canvas);

        const glow = new GlowLayer('glow', scene, {
            mainTextureSamples: 4, // anti-aliasing
            mainTextureFixedSize: 1024,
            blurKernelSize: 256,
        });

        glow.intensity = 2;

        const { starMesh } = createStars(scene, 1500);

        scene.registerBeforeRender(() => {
            starMesh.rotation.addInPlace(new Vector3(0, -0.0003, 0));
        });

        engine.runRenderLoop(() => scene.render());
        window.addEventListener('resize', () => engine.resize());

        return () => {
            scene.dispose();
        };
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
