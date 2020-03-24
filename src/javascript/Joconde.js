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

export default class Room
{
    constructor(_scene)
    {
        const wallsMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            normalMap: wallpaperNormalTexture,
            color: 0x04072C,
        })

        const jocondeWallPartOneMesh = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        jocondeWallPartOneMesh.position.x = 4.375
        jocondeWallPartOneMesh.position.y = 2
        jocondeWallPartOneMesh.position.z = 8

        const jocondeWallPartTwoMesh = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        jocondeWallPartTwoMesh.position.x = 0.625
        jocondeWallPartTwoMesh.position.y = 2
        jocondeWallPartTwoMesh.position.z = 8

        const jocondeWallPartThreeMesh = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        jocondeWallPartThreeMesh.position.x = 2.5
        jocondeWallPartThreeMesh.position.y = 3.5
        jocondeWallPartThreeMesh.position.z = 8

        const jocondeWallPartFourMesh = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        jocondeWallPartFourMesh.position.x = 2.5
        jocondeWallPartFourMesh.position.y = 0.5
        jocondeWallPartFourMesh.position.z = 8

        const jocondeFloorMesh = new THREE.Mesh(new THREE.BoxGeometry( 5, 0.1, 2 ), wallsMaterial)
        jocondeFloorMesh.position.x = 2.5
        jocondeFloorMesh.position.y = 0.1
        jocondeFloorMesh.position.z = 9

        const jocondeCeilingMesh = new THREE.Mesh(new THREE.BoxGeometry( 5.1, 0.1, 2.1 ), wallsMaterial)
        jocondeCeilingMesh.position.x = 2.5
        jocondeCeilingMesh.position.y = 4
        jocondeCeilingMesh.position.z = 9
        
        _scene.add(jocondeWallPartOneMesh, jocondeWallPartTwoMesh, jocondeWallPartThreeMesh, jocondeWallPartFourMesh, jocondeFloorMesh, jocondeCeilingMesh)
    }
}