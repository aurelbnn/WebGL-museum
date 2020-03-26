import * as THREE from 'three'
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

export default class FirstFramework {
    constructor(_scene) {
        const firstFrameworkGroup = new THREE.Group()
        firstFrameworkGroup.visible = true
        _scene.add(firstFrameworkGroup)

        /**
         * Box
        */

        const wallsMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            normalMap: wallpaperNormalTexture,
            color: 0xd3d3d3,
        })

        const darkMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            normalMap: wallpaperNormalTexture,
            color: 0x04072C,
        })

        const whiteMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            color: 0xffffff,
        })


        const firstFrameworkWallPartOneMesh = new THREE.Mesh(new THREE.BoxGeometry(1.25, 4, 0.1), wallsMaterial)
        firstFrameworkWallPartOneMesh.position.x = 4.375
        firstFrameworkWallPartOneMesh.position.y = 2
        firstFrameworkWallPartOneMesh.position.z = 8
        firstFrameworkGroup.add(firstFrameworkWallPartOneMesh)

        const firstFrameworkWallPartTwoMesh = new THREE.Mesh(new THREE.BoxGeometry(1.25, 4, 0.1), wallsMaterial)
        firstFrameworkWallPartTwoMesh.position.x = 0.625
        firstFrameworkWallPartTwoMesh.position.y = 2
        firstFrameworkWallPartTwoMesh.position.z = 8
        firstFrameworkGroup.add(firstFrameworkWallPartTwoMesh)

        const firstFrameworkWallPartThreeMesh = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1, 0.1), wallsMaterial)
        firstFrameworkWallPartThreeMesh.position.x = 2.5
        firstFrameworkWallPartThreeMesh.position.y = 3.5
        firstFrameworkWallPartThreeMesh.position.z = 8
        firstFrameworkGroup.add(firstFrameworkWallPartThreeMesh)


        const firstFrameworkWallPartFourMesh = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1, 0.1), wallsMaterial)
        firstFrameworkWallPartFourMesh.position.x = 2.5
        firstFrameworkWallPartFourMesh.position.y = 0.5
        firstFrameworkWallPartFourMesh.position.z = 8
        firstFrameworkGroup.add(firstFrameworkWallPartFourMesh)

        const firstFrameworkFloorMesh = new THREE.Mesh(new THREE.BoxGeometry(5, 0.1, 2), darkMaterial)
        firstFrameworkFloorMesh.position.x = 2.5
        firstFrameworkFloorMesh.position.y = 0.1
        firstFrameworkFloorMesh.position.z = 9
        firstFrameworkGroup.add(firstFrameworkFloorMesh)

        const firstFrameworkCeilingMesh = new THREE.Mesh(new THREE.BoxGeometry(5.1, 0.1, 2), whiteMaterial)
        firstFrameworkCeilingMesh.position.x = 2.5
        firstFrameworkCeilingMesh.position.y = 4
        firstFrameworkCeilingMesh.position.z = 9.05
        firstFrameworkGroup.add(firstFrameworkCeilingMesh)

        /**
         * Images Joconde
         */
        const jocondeGroup = new THREE.Group()
        jocondeGroup.visible = true
        _scene.add(jocondeGroup)

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
        firstFrameworkGroup.add(jocondeFirstImage)

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
        firstFrameworkGroup.add(jocondeSecondImage)

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
        firstFrameworkGroup.add(jocondeThirdImage)

        /**
         * Caption
         */
        

         /**
          * Lights
          */

        const spotLight = new THREE.SpotLight(0xe39d52, 1, 0, Math.PI * -0.2, 0.5)
        spotLight.position.x = 2.5
        spotLight.position.y = 4
        spotLight.position.z = 8
        firstFrameworkGroup.add(spotLight)

        spotLight.target.position.x = 2.5
        spotLight.target.position.y = 1.5
        spotLight.target.position.z = 8.5
        firstFrameworkGroup.add(spotLight.target)

        }
}