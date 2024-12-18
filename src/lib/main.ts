import { Vector3 } from '@babylonjs/core';
import { createSkybox } from './skybox';
import { createStars } from './stars';
import { setup } from './setup';

export function run(canvas: HTMLCanvasElement) {
	const { engine, scene } = setup(canvas);

	createStars(scene);
	createSkybox(scene);

	engine.runRenderLoop(() => scene.render());
	window.addEventListener('resize', () => engine.resize());

	return () => {
		scene.dispose();
		engine.dispose();
	};
}
