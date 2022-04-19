<script lang="ts">
    import { createSkybox } from '$lib/skybox';
    import { Vector3 } from '@babylonjs/core';
    import { createStars } from '$lib/stars';
    import { setup } from '$lib/setup';
    import { onMount } from 'svelte';

    let canvas: HTMLCanvasElement;

    onMount(() => {
        const resolution = window.innerWidth < 900 ? 1 : 4;
        const { engine, scene } = setup(canvas);

        const { skybox } = createSkybox(scene, resolution);
        const { starMesh } = createStars(scene, 1000);

        scene.registerBeforeRender(() => {
            starMesh.rotation.addInPlace(new Vector3(0, -0.0003, 0));
            skybox.rotation.addInPlace(new Vector3(0, -0.0001, 0));
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
