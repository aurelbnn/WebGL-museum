import * as THREE from 'three'
import wallpaperColorSource from '../images/Wallpaper/WallpaperBasecolor.jpg' // Wall texture
import wallpaperNormalSource from '../images/Wallpaper/WallpaperNormal.jpg' // Wall normal
import enferNormalSource from '../images/enfer/enferPlan.jpg'// Chaudron
import enferAlphaSource from '../images/enfer/enferAlpha.jpg' // Chaudron Alpha
import fireNormalSource from '../images/enfer/fire.jpg'// flammes
import fireAlphaSource from '../images/enfer/fireAlpha.jpg' // flammes Alpha

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

//Painting
const enferNormalTexture = textureLoader.load(enferNormalSource)
const enferAlphaTexture = textureLoader.load(enferAlphaSource)

//Fire
const fireNormalTexture = textureLoader.load(fireNormalSource)
const fireAlphaTexture = textureLoader.load(fireAlphaSource)

//Walls
const wallpaperColorTexture = textureLoader.load(wallpaperColorSource)
const wallpaperNormalTexture = textureLoader.load(wallpaperNormalSource)

export default class SecondFramework
{
    constructor(_scene)
    {
        const secondFrameworkGroup = new THREE.Group()
        secondFrameworkGroup.visible = true
        _scene.add(secondFrameworkGroup)

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

        /**
         * Box
        */

        const secondFrameworkWallPartOneMesh = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        secondFrameworkWallPartOneMesh.position.x = -10.375
        secondFrameworkWallPartOneMesh.position.y = 2
        secondFrameworkWallPartOneMesh.position.z = 8
        secondFrameworkGroup.add(secondFrameworkWallPartOneMesh)

        const secondFrameworkWallPartTwoMesh = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        secondFrameworkWallPartTwoMesh.position.x = -6.675
        secondFrameworkWallPartTwoMesh.position.y = 2
        secondFrameworkWallPartTwoMesh.position.z = 8
        secondFrameworkGroup.add(secondFrameworkWallPartTwoMesh)

        const secondFrameworkWallPartThreeMesh = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        secondFrameworkWallPartThreeMesh.position.x = -8.5
        secondFrameworkWallPartThreeMesh.position.y = 3.5
        secondFrameworkWallPartThreeMesh.position.z = 8
        secondFrameworkGroup.add(secondFrameworkWallPartThreeMesh)

        const secondFrameworkWallPartFourMesh = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        secondFrameworkWallPartFourMesh.position.x = -8.5
        secondFrameworkWallPartFourMesh.position.y = 0.5
        secondFrameworkWallPartFourMesh.position.z = 8
        secondFrameworkGroup.add(secondFrameworkWallPartFourMesh)

        const secondFrameworkFloorMesh = new THREE.Mesh(new THREE.BoxGeometry( 5, 0.1, 4 ), darkMaterial)
        secondFrameworkFloorMesh.position.x = -8.5
        secondFrameworkFloorMesh.position.y = 0.1
        secondFrameworkFloorMesh.position.z = 10
        secondFrameworkGroup.add(secondFrameworkFloorMesh)

        const secondFrameworkCeilingMesh = new THREE.Mesh(new THREE.BoxGeometry( 5.1, 0.1, 4.1 ), wallsMaterial)
        secondFrameworkCeilingMesh.position.x = -8.7
        secondFrameworkCeilingMesh.position.y = 4
        secondFrameworkCeilingMesh.position.z = 10
        secondFrameworkGroup.add(secondFrameworkCeilingMesh)

        /**
         * Images et plan Enfer 
         */

         //FIRST : flammes
         const enferFirstPlan = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 3, 1, 1),
            new THREE.MeshBasicMaterial({ 
                map: fireNormalTexture,
                alphaMap: fireAlphaTexture,
                transparent: true,
            })
        )        
        enferFirstPlan.position.x = -8.5
        enferFirstPlan.position.y = 1.5
        enferFirstPlan.position.z = 8
        enferFirstPlan.rotation.x = Math.PI
        enferFirstPlan.rotation.z = Math.PI
        secondFrameworkGroup.add(enferFirstPlan)

         //SECOND
        const enferSecondPlan = new THREE.Mesh(
            new THREE.PlaneGeometry(3, 3, 1, 1),
            new THREE.MeshBasicMaterial({ 
                map: enferNormalTexture,
                alphaMap: enferAlphaTexture,
                transparent: true,
            })
        )        
        enferSecondPlan.position.x = -8.5
        enferSecondPlan.position.y = 1.5
        enferSecondPlan.position.z = 8.5
        enferSecondPlan.rotation.x = Math.PI
        enferSecondPlan.rotation.z = Math.PI
        secondFrameworkGroup.add(enferSecondPlan)

    }
}