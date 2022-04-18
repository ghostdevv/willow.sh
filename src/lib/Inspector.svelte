<script lang="ts">
    import type { Inspector } from '@babylonjs/inspector';
    import type { Scene } from '@babylonjs/core/scene';

    let inspector: Inspector;
    export let scene: Scene;

    const loadInspector = async () => {
        await import('@babylonjs/core/Debug/debugLayer');
        inspector = (await import('@babylonjs/inspector')).default;
    };

    let showInspector = false;

    const toggle = async (e: any) => {
        if (e.metaKey && e.key == 'i') {
            if (!inspector) await loadInspector();
            showInspector = !showInspector;
            if (showInspector) {
                scene.debugLayer.show();
            } else scene.debugLayer.hide();
        }
    };
</script>

<svelte:window on:keydown={toggle} />

<style global>
    #scene-explorer-host {
        position: absolute !important;
        inset: 0;

        max-width: 300px;
        height: 100vh;

        z-index: 100;
    }
    #inspector-host {
        position: absolute !important;
        right: 0;

        min-width: 300px;
        height: 100vh;

        z-index: 100;
    }
</style>
