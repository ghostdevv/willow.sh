import {
	MeshBuilder,
	StandardMaterial,
	CubeTexture,
	Vector3,
	type Scene,
} from '@babylonjs/core';

export function createSkybox(scene: Scene) {
	const skybox = MeshBuilder.CreateBox('skyBox', { size: 1000 }, scene);
	const skyboxMaterial = new StandardMaterial('skyBox', scene);

	skyboxMaterial.backFaceCulling = false;

	skyboxMaterial.reflectionTexture = new CubeTexture(
		`/skybox${window.innerWidth < 900 ? 1 : 4}k/sb`,
		scene,
	);

	skyboxMaterial.disableLighting = true;
	skybox.material = skyboxMaterial;

	scene.registerBeforeRender(() => {
		skybox.rotation.addInPlace(new Vector3(0, -0.00006, 0));
	});
}
