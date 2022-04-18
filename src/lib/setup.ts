import {
    Scene,
    Engine,
    Vector3,
    Color3,
    ArcRotateCamera,
    Color4,
} from '@babylonjs/core';

export const setup = (canvas: HTMLCanvasElement) => {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
        'camera',
        -Math.PI / 2,
        Math.PI,
        200,
        new Vector3(0, 0, 0),
        scene,
    );

    engine.resize();
    camera.attachControl();

    scene.clearColor = new Color4(0, 0, 0, 0);
    scene.ambientColor = new Color3(50, 50, 50);

    return {
        engine,
        scene,
    };
};
