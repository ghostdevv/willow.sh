<script lang="ts">
    import {
        Scene,
        Engine,
        Vector3,
        Color3,
        ArcRotateCamera,
        HemisphericLight,
        MeshBuilder,
        Color4,
    } from '@babylonjs/core';

    const init = (canvas: HTMLCanvasElement) => {
        const engine = new Engine(canvas);
        const scene = new Scene(engine);

        const camera = new ArcRotateCamera(
            'camera',
            -Math.PI / 2,
            Math.PI,
            2,
            new Vector3(0, 0, 0),
            scene,
        );

        camera.attachControl();

        const light = new HemisphericLight(
            'light',
            new Vector3(0, 1, 0),
            scene,
        );

        const sphere = MeshBuilder.CreateSphere('sphere', {}, scene);
        sphere.position = new Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
        );

        scene.clearColor = new Color4(0, 0, 0, 0);
        scene.ambientColor = new Color3(50, 50, 50);

        engine.resize();

        let delta = 1;
        scene.registerBeforeRender(() => {
            sphere.position.x *= Math.sin(delta);
            delta += 0.001;
            // animation stuff
        });

        engine.runRenderLoop(() => scene.render());
        window.addEventListener('resize', () => engine.resize());

        return {
            destroy: () => {
                scene.dispose();
            },
        };
    };
</script>

<canvas use:init />

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100vh;
    }
</style>
