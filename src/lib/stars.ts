import type { Scene } from '@babylonjs/core';
import {
    Color3,
    MeshBuilder,
    Scalar,
    SolidParticleSystem,
    StandardMaterial,
} from '@babylonjs/core';

export const createStars = (scene: Scene, amount: number) => {
    const particles = new SolidParticleSystem('Stars', scene);
    const star = MeshBuilder.CreateSphere('sphere', {});

    particles.addShape(star, amount);
    star.dispose();

    const material = new StandardMaterial('starMaterial', scene);
    const starMesh = particles.buildMesh();

    material.emissiveColor = new Color3(0.8, 0.8, 0.8);

    starMesh.material = material;

    const range = () => Scalar.RandomRange(-400, 400);

    particles.initParticles = () => {
        for (let p = 0; p < particles.nbParticles; p++) {
            const particle = particles.particles[p];

            // Place particles at random positions with a cube
            particle.position.x = range();
            particle.position.y = range();
            particle.position.z = range();

            if (particle.color && Scalar.RandomRange(0, 10) > 8) {
                particle.color.r = 33 / 255;
                particle.color.g = 96 / 255;
                particle.color.b = 236 / 255;
            }
        }
    };

    particles.initParticles();
    particles.setParticles();

    return {
        starMesh,
        particles,
    };
};