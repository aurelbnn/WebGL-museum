import * as THREE from 'three'
import wallpaperColorSource from '../images/Wallpaper/WallpaperBasecolor.jpg' // Wall texture
import wallpaperNormalSource from '../images/Wallpaper/WallpaperNormal.jpg' // Wall normal

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

//Walls
const wallpaperColorTexture = textureLoader.load(wallpaperColorSource)
const wallpaperNormalTexture = textureLoader.load(wallpaperNormalSource)

export default class Scream
{
    constructor(_scene)
    {
        const wallsMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            normalMap: wallpaperNormalTexture,
            color: 0x04072C,
        })

        const screamWallPartOneMesh = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        screamWallPartOneMesh.position.x = -10.375
        screamWallPartOneMesh.position.y = 2
        screamWallPartOneMesh.position.z = 8

        const screamWallPartTwoMesh = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        screamWallPartTwoMesh.position.x = -6.675
        screamWallPartTwoMesh.position.y = 2
        screamWallPartTwoMesh.position.z = 8

        const screamWallPartThreeMesh = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        screamWallPartThreeMesh.position.x = -8.5
        screamWallPartThreeMesh.position.y = 3.5
        screamWallPartThreeMesh.position.z = 8

        const screamWallPartFourMesh = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        screamWallPartFourMesh.position.x = -8.5
        screamWallPartFourMesh.position.y = 0.5
        screamWallPartFourMesh.position.z = 8

        const screamFloorMesh = new THREE.Mesh(new THREE.BoxGeometry( 5, 0.1, 4 ), wallsMaterial)
        screamFloorMesh.position.x = -8.5
        screamFloorMesh.position.y = 0.1
        screamFloorMesh.position.z = 10

        const screamCeilingMesh = new THREE.Mesh(new THREE.BoxGeometry( 5.1, 0.1, 4.1 ), wallsMaterial)
        screamCeilingMesh.position.x = -8.5
        screamCeilingMesh.position.y = 4
        screamCeilingMesh.position.z = 10
        
        _scene.add(screamWallPartOneMesh, screamWallPartTwoMesh, screamWallPartThreeMesh, screamWallPartFourMesh, screamFloorMesh, screamCeilingMesh)
    }
}