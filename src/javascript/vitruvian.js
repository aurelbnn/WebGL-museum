import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class VitruvianMan{
    constructor(_scene)
    {
        const vitruvianManGroup = new THREE.Group()
        vitruvianManGroup.visible = true
        _scene.add(vitruvianManGroup)

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/vitruvian/vitruvian_creature001.gltf',
            (_gltf) =>
            {
                while(_gltf.scene.children.length)
                {
                    const child = _gltf.scene.children[0]
                    _scene.add(child)
                    
                    child.position.x = 2.5
                    child.position.y = 0.3
                    child.position.z = -0.5

                    /**
                     * Loop
                     */
                    const loop = () => {
                        window.requestAnimationFrame(loop)
                    
                        //Vitruvian rotation
                        child.rotation.y += -0.01
                    }

                    loop()
                }
            }
        )

        /**
         * Lights
         */      
        
        const spotLight = new THREE.SpotLight(0xe39d52, 1, 0, Math.PI * -0.2, 0.3)
        spotLight.position.x = 2.5
        spotLight.position.y = 3.5
        spotLight.position.z = -0.5
        vitruvianManGroup.add(spotLight)

        spotLight.target.position.x = 2.5
        spotLight.target.position.y = 0
        spotLight.target.position.z = -0.5
        vitruvianManGroup.add(spotLight.target)

        
    }
}