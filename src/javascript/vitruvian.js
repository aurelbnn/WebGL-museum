import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class VitruvianMan{
    constructor(_scene)
    {
        const vitruvianManGroup = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        gltfLoader.load(
            '/models/vitruvian/vitruvian_creature001.gltf',
            (_gltf) =>
            {
                 console.log(_gltf)
                while(_gltf.scene.children.length)
                {
                    const child = _gltf.scene.children[0]
                    _scene.add(child)

                    child.rotation.y = Math.PI * -0.75
                    child.position.y = 4
                    
                }
            }
        )
    }
}