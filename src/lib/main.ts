import type { Action } from 'svelte/action';
import { createSkybox } from './skybox';
import { createStars } from './stars';
import { setup } from './setup';

export const run: Action<HTMLCanvasElement> = (canvas) => {
	const { engine, scene } = setup(canvas);

	createStars(scene);
	createSkybox(scene);

	engine.runRenderLoop(() => scene.render());
	window.addEventListener('resize', () => engine.resize());

	return {
		destroy() {
			scene.dispose();
			engine.dispose();
		},
	};
};
