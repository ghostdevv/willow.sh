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
        0,
        0,
        0,
        new Vector3(0, 0, 0),
        scene,
    );

    camera.setPosition(new Vector3(0, 0, -200));

    camera.wheelDeltaPercentage = 0.02;
    camera.pinchDeltaPercentage = 0.02;
    camera.upperRadiusLimit = 300;
    camera.lowerRadiusLimit = 5;

    engine.resize();
    camera.attachControl();

    scene.clearColor = new Color4(0, 0, 0, 0);
    scene.ambientColor = new Color3(50, 50, 50);

    return {
        engine,
        scene,
    };
};
