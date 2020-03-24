import * as THREE from 'three'
import woodFloorColorSource from '../images/WoodFloor/WoodfloorColor.jpg'
import woodFloorNormalSource from '../images/WoodFloor/WoodfloorNormal.jpg'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const woodfloorColorTexture = textureLoader.load(woodFloorColorSource)
const woodfloorNormalTexture = textureLoader.load(woodFloorNormalSource)

export default class Room
{
    constructor(_scene)
    {
        const wallsMaterial = new THREE.MeshStandardMaterial()
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        })

        const wallFirstMesh = new THREE.Mesh(new THREE.BoxGeometry( 12, 4, 0.125 ), wallsMaterial)
        wallFirstMesh.position.x = -5
        wallFirstMesh.position.y = 2
        wallFirstMesh.position.z = -6

        const wallSecondMesh = new THREE.Mesh(new THREE.BoxGeometry( 16, 4, 0.125 ), wallsMaterial)
        wallSecondMesh.position.x = -11
        wallSecondMesh.position.y = 2
        wallSecondMesh.position.z = 2
        wallSecondMesh.rotation.y = Math.PI * 0.5

        const wallThirdMesh = new THREE.Mesh(new THREE.BoxGeometry( 5, 4, 0.125 ), wallsMaterial)
        wallThirdMesh.position.x = -8.5
        wallThirdMesh.position.y = 2
        wallThirdMesh.position.z = 10
        wallThirdMesh.rotation.y = Math.PI

        const wallFourthMesh = new THREE.Mesh(new THREE.BoxGeometry( 2, 4, 0.125 ), wallsMaterial)
        wallFourthMesh.position.x = -6
        wallFourthMesh.position.y = 2
        wallFourthMesh.position.z = 9
        wallFourthMesh.rotation.y = Math.PI * -0.5

        const wallFifthMesh = new THREE.Mesh(new THREE.BoxGeometry( 6, 4, 0.125 ), wallsMaterial)
        wallFifthMesh.position.x = -3
        wallFifthMesh.position.y = 2
        wallFifthMesh.position.z = 8
        wallFifthMesh.rotation.y = Math.PI

        const wallSixthMesh = new THREE.Mesh(new THREE.BoxGeometry( 2, 4, 0.125 ), wallsMaterial)
        wallSixthMesh.position.x = 0
        wallSixthMesh.position.y = 2
        wallSixthMesh.position.z = 9
        wallSixthMesh.rotation.y = Math.PI * 0.5

        const wallSeventhMesh = new THREE.Mesh(new THREE.BoxGeometry( 5, 4, 0.125 ), wallsMaterial)
        wallSeventhMesh.position.x = 2.5
        wallSeventhMesh.position.y = 2
        wallSeventhMesh.position.z = 10
        wallSeventhMesh.rotation.y = Math.PI

        const wallEighthMesh = new THREE.Mesh(new THREE.BoxGeometry( 13, 4, 0.125 ), wallsMaterial)
        wallEighthMesh.position.x = 5
        wallEighthMesh.position.y = 2
        wallEighthMesh.position.z = 3.5
        wallEighthMesh.rotation.y = Math.PI * -0.5

        const wallNinthMesh = new THREE.Mesh(new THREE.BoxGeometry( 4, 4, 0.125 ), wallsMaterial)
        wallNinthMesh.position.x = 3
        wallNinthMesh.position.y = 2
        wallNinthMesh.position.z = -3

        const wallTenthMesh = new THREE.Mesh(new THREE.BoxGeometry( 0.75, 4, 0.125 ), wallsMaterial)
        wallTenthMesh.position.x = 1
        wallTenthMesh.position.y = 1.375
        wallTenthMesh.position.z = -3.375
        wallTenthMesh.rotation.y = Math.PI * -0.5

        const wallEleventhMesh = new THREE.Mesh(new THREE.BoxGeometry( 3, 1.25, 0.125 ), wallsMaterial)
        wallEleventhMesh.position.x = 1
        wallEleventhMesh.position.y = 3.375
        wallEleventhMesh.position.z = -4.5
        wallEleventhMesh.rotation.y = Math.PI * -0.5

        const wallTwelfthMesh = new THREE.Mesh(new THREE.BoxGeometry( 0.75, 2.75, 0.125 ), wallsMaterial)
        wallTwelfthMesh.position.x = 1
        wallTwelfthMesh.position.y = 1.375
        wallTwelfthMesh.position.z = -5.625
        wallTwelfthMesh.rotation.y = Math.PI * -0.5

        const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(30, 30, 1, 1), material)
        floor.position.y = 0
        floor.rotation.x -= Math.PI * 0.5
        

        _scene.add(wallFirstMesh, wallSecondMesh, wallThirdMesh, wallFourthMesh, wallFifthMesh, wallSixthMesh, wallSeventhMesh, wallEighthMesh, wallNinthMesh, wallTenthMesh, wallEleventhMesh, wallTwelfthMesh, floor)
    }
}