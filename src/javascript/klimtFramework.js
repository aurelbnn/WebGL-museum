import * as THREE from 'three'
import klimtNormalSource from '../images/klimt/leBaiserKlimt.jpg'// Klimt


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const klimtNormalTexture = textureLoader.load(klimtNormalSource)

export default class KlimtFramework
{
    constructor(_scene)
    {
        const klimtFrameworkGroup = new THREE.Group()
        klimtFrameworkGroup.visible = true
        _scene.add(klimtFrameworkGroup)


        /**
         * KLIMT
         */

        const klimtImage = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 3, 2, 2),
            new THREE.MeshBasicMaterial({ 
                map: klimtNormalTexture,
                transparent: true,
            })
        )        
        klimtImage.position.x = -10.9
        klimtImage.position.y = 2
        klimtImage.position.z = 1
        klimtImage.rotation.x = Math.PI 
        klimtImage.rotation.y = Math.PI / 2
        klimtImage.rotation.z = Math.PI 


        klimtFrameworkGroup.add(klimtImage)

        /**
        * Lights
        */
        const spotLight = new THREE.SpotLight(0xe39d52, 1, 0, Math.PI * -0.2, 0.5)
        spotLight.position.x = -11
        spotLight.position.y = 4
        spotLight.position.z = 1
        klimtFrameworkGroup.add(spotLight)

        spotLight.target.position.x = -11.5
        spotLight.target.position.y = 1.5
        spotLight.target.position.z = 1
        klimtFrameworkGroup.add(spotLight.target)

      
    }
}