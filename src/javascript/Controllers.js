import * as THREE from 'three'
import font from 'three/examples/fonts/helvetiker_bold.typeface.json'

export default class Controllers
{
    constructor(_scene)
    {
        const controllersMaterial = new THREE.MeshStandardMaterial({
            metalness: 0.4,
            roughness: 0.4,
            color: 0xb33939,
        })

        const controllerGroup = new THREE.Group()
        controllerGroup.visible = true
        _scene.add(controllerGroup)

        const controllersList = new THREE.Mesh(new THREE.TextGeometry(
            'Control button list',
            {
                font: new THREE.Font(font),
                size: 0.2,
                height: 0.2,
                curveSegments: 12,
            }
        ), controllersMaterial)
        controllersList.position.x = 2
        controllersList.position.y = 3
        controllersList.position.z = -7
        controllersList.rotation.y = Math.PI * 0.45
        controllerGroup.add(controllersList)

        const zController = new THREE.Mesh(new THREE.TextGeometry(
            'Z : Go forward',
            {
                font: new THREE.Font(font),
                size: 0.2,
                height: 0.2,
                curveSegments: 12,
            }
        ), controllersMaterial)
        zController.position.x = 2
        zController.position.y = 2.6
        zController.position.z = -7
        zController.rotation.y = Math.PI * 0.45
        controllerGroup.add(zController)

        const qController = new THREE.Mesh(new THREE.TextGeometry(
            'Q : Go on the left',
            {
                font: new THREE.Font(font),
                size: 0.2,
                height: 0.2,
                curveSegments: 12,
            }
        ), controllersMaterial)
        qController.position.x = 2
        qController.position.y = 2.2
        qController.position.z = -7
        qController.rotation.y = Math.PI * 0.45
        controllerGroup.add(qController)

        const sController = new THREE.Mesh(new THREE.TextGeometry(
            'S : Go backward',
            {
                font: new THREE.Font(font),
                size: 0.2,
                height: 0.2,
                curveSegments: 12,
            }
        ), controllersMaterial)
        sController.position.x = 2
        sController.position.y = 1.8
        sController.position.z = -7
        sController.rotation.y = Math.PI * 0.45
        controllerGroup.add(sController)

        const dController = new THREE.Mesh(new THREE.TextGeometry(
            'D : Go on the right',
            {
                font: new THREE.Font(font),
                size: 0.2,
                height: 0.2,
                curveSegments: 12,
            }
        ), controllersMaterial)
        dController.position.x = 2
        dController.position.y = 1.4
        dController.position.z = -7
        dController.rotation.y = Math.PI * 0.45
        controllerGroup.add(dController)

        const escapeController = new THREE.Mesh(new THREE.TextGeometry(
            'Escape : Control your mouse',
            {
                font: new THREE.Font(font),
                size: 0.2,
                height: 0.2,
                curveSegments: 12,
            }
        ), controllersMaterial)
        escapeController.position.x = 2
        escapeController.position.y = 0.8
        escapeController.position.z = -7
        escapeController.rotation.y = Math.PI * 0.45
        controllerGroup.add(escapeController)

        
    }    
}
