import * as THREE from 'three'
import particleImageSource from '../../static/textures/fire.jpg'

export default class Stars
{
    constructor(_scene)
    {
        const starsGroup = new THREE.Group()
        starsGroup.visible = true
        _scene.add(starsGroup)

        const textureLoader = new THREE.TextureLoader()
        const particleTexture = textureLoader.load(particleImageSource)
        const particlesGeometry = new THREE.Geometry()

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            sizeAttenuation: true,
            alphaMap: particleTexture,
            color: new THREE.Color(0xffffff),
            metalness: 0.8,
            roughness: 0.3

        })

        for(let i = 0; i < 1000; i++)
        {
            const vertice = new THREE.Vector3(
                (Math.random() - 0.5) * 120,
                (Math.random() - 0.5) * 120,
                (Math.random() - 0.8),
            )
            particlesGeometry.vertices.push(vertice)
        }
        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        starsGroup.add(particles)
        particles.position.x = -10.5
        particles.position.y = 20
        particles.position.z = 1
        particles.rotation.x = Math.PI * 0.5

        const loop = () =>
        {
            window.requestAnimationFrame(loop)

            particles.rotation.z += 0.0002
        }

        loop()
    }

}
