import * as THREE from 'three'
import woodFloorColorSource from '../images/WoodFloor/WoodfloorColor.jpg' //Floor texture
import woodFloorNormalSource from '../images/WoodFloor/WoodfloorNormal.jpg' // Floor normal
import woodFloorAmbientSource from '../images/WoodFloor/WoodfloorAmbientOcculsion.jpg' // Floor Ambient occlusion
import wallpaperColorSource from '../images/Wallpaper/WallpaperBasecolor.jpg' // Wall texture
import wallpaperNormalSource from '../images/Wallpaper/WallpaperNormal.jpg' // Wall normal
import wallpaperAmbientSource from '../images/Wallpaper/WallpaperAmbientOcclusion.jpg' // Wall ambient occlusion

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

const woodFloorAmbientTexture = textureLoader.load(woodFloorAmbientSource)
woodFloorAmbientTexture.wrapS = THREE.RepeatWrapping
woodFloorAmbientTexture.wrapT = THREE.RepeatWrapping

//Walls
const wallpaperColorTexture = textureLoader.load(wallpaperColorSource)
const wallpaperNormalTexture = textureLoader.load(wallpaperNormalSource)
const wallpaperAmbientTexture = textureLoader.load(wallpaperAmbientSource)

export default class Room
{
    constructor(_scene)
    {
        const wallsMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            normalMap: wallpaperNormalTexture,
            aoMap: wallpaperAmbientTexture,
            color: 0x04072C,
        })
        const material = new THREE.MeshStandardMaterial({
            map: woodfloorColorTexture,
            normalMap: woodfloorNormalTexture,
            aoMap: woodFloorAmbientTexture,
        })

        const wallFirstMesh = new THREE.Mesh(new THREE.BoxGeometry( 12, 4, 0.1 ), wallsMaterial)
        wallFirstMesh.position.x = -5
        wallFirstMesh.position.y = 2
        wallFirstMesh.position.z = -6

        const wallSecondMesh = new THREE.Mesh(new THREE.BoxGeometry( 18, 4, 0.1 ), wallsMaterial)
        wallSecondMesh.position.x = -11
        wallSecondMesh.position.y = 2
        wallSecondMesh.position.z = 3
        wallSecondMesh.rotation.y = Math.PI * 0.5

        const wallThirdMesh = new THREE.Mesh(new THREE.BoxGeometry( 5, 3.9, 0.1 ), new THREE.MeshStandardMaterial({color: 0xffffff}))
        wallThirdMesh.position.x = -8.5
        wallThirdMesh.position.y = 2
        wallThirdMesh.position.z = 12

        const wallFourthMesh = new THREE.Mesh(new THREE.BoxGeometry( 4, 4, 0.1 ), wallsMaterial)
        wallFourthMesh.position.x = -6
        wallFourthMesh.position.y = 2
        wallFourthMesh.position.z = 10
        wallFourthMesh.rotation.y = Math.PI * -0.5

        const wallFifthMesh = new THREE.Mesh(new THREE.BoxGeometry( 6, 4, 0.1 ), wallsMaterial)
        wallFifthMesh.position.x = -3
        wallFifthMesh.position.y = 2
        wallFifthMesh.position.z = 8

        const wallSixthMesh = new THREE.Mesh(new THREE.BoxGeometry( 2, 4, 0.1 ), wallsMaterial)
        wallSixthMesh.position.x = 0
        wallSixthMesh.position.y = 2
        wallSixthMesh.position.z = 9
        wallSixthMesh.rotation.y = Math.PI * 0.5

        const wallSeventhMesh = new THREE.Mesh(new THREE.BoxGeometry( 5, 3.9, 0.1 ), new THREE.MeshStandardMaterial({color: 0xffffff}))
        wallSeventhMesh.position.x = 2.5
        wallSeventhMesh.position.y = 2
        wallSeventhMesh.position.z = 10

        const wallEighthMesh = new THREE.Mesh(new THREE.BoxGeometry( 13, 4, 0.1 ), wallsMaterial)
        wallEighthMesh.position.x = 5
        wallEighthMesh.position.y = 2
        wallEighthMesh.position.z = 3.5
        wallEighthMesh.rotation.y = Math.PI * -0.5

        const wallNinthMesh = new THREE.Mesh(new THREE.BoxGeometry( 4, 4, 0.1 ), wallsMaterial)
        wallNinthMesh.position.x = 3
        wallNinthMesh.position.y = 2
        wallNinthMesh.position.z = -3

        const wallTenthMesh = new THREE.Mesh(new THREE.BoxGeometry( 0.75, 2.75, 0.1 ), wallsMaterial)
        wallTenthMesh.position.x = 1
        wallTenthMesh.position.y = 1.375
        wallTenthMesh.position.z = -3.375
        wallTenthMesh.rotation.y = Math.PI * -0.5

        const wallEleventhMesh = new THREE.Mesh(new THREE.BoxGeometry( 3, 1.25, 0.1 ), wallsMaterial)
        wallEleventhMesh.position.x = 1
        wallEleventhMesh.position.y = 3.375
        wallEleventhMesh.position.z = -4.5
        wallEleventhMesh.rotation.y = Math.PI * -0.5

        const wallTwelfthMesh = new THREE.Mesh(new THREE.BoxGeometry( 0.75, 2.75, 0.1 ), wallsMaterial)
        wallTwelfthMesh.position.x = 1
        wallTwelfthMesh.position.y = 1.375
        wallTwelfthMesh.position.z = -5.625
        wallTwelfthMesh.rotation.y = Math.PI * -0.5

        const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(30, 30, 1, 1), material)
        floor.position.y = 0
        floor.rotation.x -= Math.PI * 0.5
        

        const vitruveBase = new THREE.Mesh(new THREE.BoxGeometry( 3, 1, 3 ), wallsMaterial)
        vitruveBase.position.x = 2.5
        vitruveBase.position.y = 0
        vitruveBase.position.z = -0.5
        vitruveBase.rotation.y = Math.PI * -0.5

        _scene.add(wallFirstMesh, wallSecondMesh, wallThirdMesh, wallFourthMesh, wallFifthMesh, wallSixthMesh, wallSeventhMesh, wallEighthMesh, wallNinthMesh, wallTenthMesh, wallEleventhMesh, wallTwelfthMesh, floor, vitruveBase)
    }
}