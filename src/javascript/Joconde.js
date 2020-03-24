import * as THREE from 'three'
import woodFloorColorSource from '../images/WoodFloor/WoodfloorColor.jpg' //Floor texture
import woodFloorNormalSource from '../images/WoodFloor/WoodfloorNormal.jpg' // Floor normal
import wallpaperColorSource from '../images/Wallpaper/WallpaperBasecolor.jpg' // Wall texture
import wallpaperNormalSource from '../images/Wallpaper/WallpaperNormal.jpg' // Wall normal

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

//Floor
const woodfloorColorTexture = textureLoader.load(woodFloorColorSource)
woodfloorColorTexture.repeat.x = 6
woodfloorColorTexture.repeat.y = 6
woodfloorColorTexture.wrapS = THREE.RepeatWrapping
woodfloorColorTexture.wrapT = THREE.RepeatWrapping
const woodfloorNormalTexture = textureLoader.load(woodFloorNormalSource)
woodfloorNormalTexture.wrapS = THREE.RepeatWrapping
woodfloorNormalTexture.wrapT = THREE.RepeatWrapping

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

        const jocondeWallPartOne = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        jocondeWallPartOne.position.x = 4.375
        jocondeWallPartOne.position.y = 2
        jocondeWallPartOne.position.z = 8

        const jocondeWallPartTwo = new THREE.Mesh(new THREE.BoxGeometry( 1.25, 4, 0.1 ), wallsMaterial)
        jocondeWallPartTwo.position.x = 0.625
        jocondeWallPartTwo.position.y = 2
        jocondeWallPartTwo.position.z = 8

        const jocondeWallPartThree = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        jocondeWallPartThree.position.x = 2.5
        jocondeWallPartThree.position.y = 3.5
        jocondeWallPartThree.position.z = 8

        const jocondeWallPartFour = new THREE.Mesh(new THREE.BoxGeometry( 2.5, 1, 0.1 ), wallsMaterial)
        jocondeWallPartFour.position.x = 2.5
        jocondeWallPartFour.position.y = 0.5
        jocondeWallPartFour.position.z = 8

        _scene.add(jocondeWallPartOne, jocondeWallPartTwo, jocondeWallPartThree, jocondeWallPartFour)
    }
}