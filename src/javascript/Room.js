import * as THREE from 'three'

export default class Room
{
    constructor(_scene)
    {
        const wallsGeometry = new THREE.PlaneGeometry( 12, 4, 32 )
        const wallsMaterial = new THREE.MeshStandardMaterial()
        const material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
        })

        const wallCentralMesh = new THREE.Mesh(wallsGeometry, wallsMaterial)
        wallCentralMesh.position.x = 0
        wallCentralMesh.position.y = 2
        wallCentralMesh.position.z = -6

        const wallSideOneMesh = new THREE.Mesh(wallsGeometry, wallsMaterial)
        wallSideOneMesh.position.x = -6
        wallSideOneMesh.position.y = 2
        wallSideOneMesh.position.z = 0
        wallSideOneMesh.rotation.y = Math.PI * 0.5

        const wallSideTwoMesh = new THREE.Mesh(wallsGeometry, wallsMaterial)
        wallSideTwoMesh.position.x = 6
        wallSideTwoMesh.position.y = 2
        wallSideTwoMesh.position.z = 0
        wallSideTwoMesh.rotation.y = Math.PI * -0.5

        const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(20, 20, 1, 1), material)
        floor.position.y = 0
        floor.rotation.x -= Math.PI * 0.5

        _scene.add(wallCentralMesh, wallSideOneMesh, wallSideTwoMesh, floor)
    }
}
