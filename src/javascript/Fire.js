import * as THREE from 'three'
import particleImageSource from '../../static/textures/fire.jpg'

export default class Fire
{
    constructor(_scene)
    {
        const fireGroup = new THREE.Group()
        fireGroup.visible = true
        _scene.add(fireGroup)

        const textureLoader = new THREE.TextureLoader()
        const particleTexture = textureLoader.load(particleImageSource)
        const particlesGeometry = new THREE.Geometry()

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            sizeAttenuation: true,
            alphaMap: particleTexture,
            color: new THREE.Color(0xffd700),
            metalness: 0.8,
            roughness: 0.3

        })

        for(let i = 0; i < 500; i++)
        {
            const vertice = new THREE.Vector3(
                (Math.random() - 0.5) * 3,
                (Math.random() - 0.5) * 3,
                (Math.random() - 0.5),
            )
            particlesGeometry.vertices.push(vertice)
        }
        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        fireGroup.add(particles)
        particles.position.x = -10.5
        particles.position.y = 2.25
        particles.position.z = 1
        particles.rotation.y = Math.PI * 0.5

        const loop = () =>
        {
            window.requestAnimationFrame(loop)

            // Update objects
            //particles.rotation.x = Math.random() * Math.PI 
            //particles.rotation.y = Math.random() * Math.PI 

        }

    loop()
    }

}
