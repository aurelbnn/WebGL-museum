import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import wallpaperColorSource from '../images/Wallpaper/WallpaperBasecolor.jpg' // Wall texture
import wallpaperNormalSource from '../images/Wallpaper/WallpaperNormal.jpg' // Wall normal
import jocondeFirstSource from '../images/joconde/jocondeFirstPlan.jpg' //Premier plan Joconde
import jocondeSecondSource from '../images/joconde/jocondeSecondPlan.jpg' //Deuxième plan Joconde
import jocondeThirdSource from '../images/joconde/jocondeThirdPlan.jpg' //Troisème plan Joconde
import jocondeFirstAlphaSource from '../images/joconde/jocondeFirstAlphaTexture.jpg' //Premier Alpha Joconde
import jocondeSecondAlphaSource from '../images/joconde/jocondeSecondAlphaTexture.jpg' //Deuxième Alpha Joconde


/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const jocondeFirstTexture = textureLoader.load(jocondeFirstSource)
const jocondeSecondTexture = textureLoader.load(jocondeSecondSource)
const jocondeThirdTexture = textureLoader.load(jocondeThirdSource)
const jocondeFirstAlphaTexture = textureLoader.load(jocondeFirstAlphaSource) 
const jocondeSecondAlphaTexture = textureLoader.load(jocondeSecondAlphaSource)

//Walls
const wallpaperColorTexture = textureLoader.load(wallpaperColorSource)
const wallpaperNormalTexture = textureLoader.load(wallpaperNormalSource)

export default class Room {
    constructor(_scene) {
        const wallsMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            normalMap: wallpaperNormalTexture,
            color: 0x04072C,
        })

        const jocondeWallPartOneMesh = new THREE.Mesh(new THREE.BoxGeometry(1.25, 4, 0.1), wallsMaterial)
        jocondeWallPartOneMesh.position.x = 4.375
        jocondeWallPartOneMesh.position.y = 2
        jocondeWallPartOneMesh.position.z = 8

        const jocondeWallPartTwoMesh = new THREE.Mesh(new THREE.BoxGeometry(1.25, 4, 0.1), wallsMaterial)
        jocondeWallPartTwoMesh.position.x = 0.625
        jocondeWallPartTwoMesh.position.y = 2
        jocondeWallPartTwoMesh.position.z = 8

        const jocondeWallPartThreeMesh = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1, 0.1), wallsMaterial)
        jocondeWallPartThreeMesh.position.x = 2.5
        jocondeWallPartThreeMesh.position.y = 3.5
        jocondeWallPartThreeMesh.position.z = 8


        const jocondeWallPartFourMesh = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1, 0.1), wallsMaterial)
        jocondeWallPartFourMesh.position.x = 2.5
        jocondeWallPartFourMesh.position.y = 0.5
        jocondeWallPartFourMesh.position.z = 8

        const jocondeFloorMesh = new THREE.Mesh(new THREE.BoxGeometry(5, 0.1, 2), wallsMaterial)
        jocondeFloorMesh.position.x = 2.5
        jocondeFloorMesh.position.y = 0.1
        jocondeFloorMesh.position.z = 9

        const jocondeCeilingMesh = new THREE.Mesh(new THREE.BoxGeometry(5.1, 0.1, 2.1), wallsMaterial)
        jocondeCeilingMesh.position.x = 2.5
        jocondeCeilingMesh.position.y = 4
        jocondeCeilingMesh.position.z = 9

        /**
         * Images Joconde
         */

        //FIRST       
        const jocondeFirstImage = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 3, 1, 1),
            new THREE.MeshBasicMaterial({ 
                map: jocondeFirstTexture,
                alphaMap: jocondeFirstAlphaTexture,
                transparent: true,
            })
        )
        jocondeFirstImage.position.x = 2.5
        jocondeFirstImage.position.y = 1.5
        jocondeFirstImage.position.z = 8.5
        jocondeFirstImage.rotation.x = Math.PI
        jocondeFirstImage.rotation.z = Math.PI

        //SECOND
        const jocondeSecondImage = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 3, 1, 1),
            new THREE.MeshBasicMaterial({ 
                map: jocondeSecondTexture,
                alphaMap: jocondeSecondAlphaTexture,
                transparent: true,
            })
        )        
        jocondeSecondImage.position.x = 2.5
        jocondeSecondImage.position.y = 1.5
        jocondeSecondImage.position.z = 9
        jocondeSecondImage.rotation.x = Math.PI
        jocondeSecondImage.rotation.z = Math.PI

        //THIRD
        const jocondeThirdImage = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 3, 1, 1),
            new THREE.MeshBasicMaterial({ 
                map: jocondeThirdTexture,
            })
        )
        jocondeThirdImage.position.x = 2.5
        jocondeThirdImage.position.y = 1.5
        jocondeThirdImage.position.z = 9.5
        jocondeThirdImage.rotation.x = Math.PI
        jocondeThirdImage.rotation.z = Math.PI

        _scene.add(jocondeFirstImage, jocondeSecondImage, jocondeThirdImage);
    
        _scene.add(jocondeWallPartOneMesh, jocondeWallPartTwoMesh, jocondeWallPartThreeMesh, jocondeWallPartFourMesh, jocondeFloorMesh, jocondeCeilingMesh)
    }
}