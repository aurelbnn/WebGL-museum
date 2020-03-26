import './style/main.styl'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Room from './javascript/Room.js'
import FirstFramework from './javascript/FirstFramework.js'
import SecondFramework from './javascript/SecondFramework.js'
import Fire from './javascript/Fire.js'
import KlimtFramework from './javascript/klimtFramework.js'


/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

//Import of all Objects
const roomSetUp = new Room(scene)

const firstFrameworkZone = new FirstFramework(scene)

const secondFrameworkZone = new SecondFramework(scene)

const fireEffect = new Fire(scene)

const klimtFrameworkZone = new KlimtFramework(scene)


/**
 * Camera
 */
 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 40)
camera.position.x = 11
camera.position.y = 8
camera.position.z = -8
scene.add(camera)


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
directionalLight.position.x = -2
directionalLight.position.y = 4
directionalLight.position.z = -3
scene.add(directionalLight)

// white spotlight shining from the side, casting a shadow

const spotLight = new THREE.SpotLight( 0xffffff )
spotLight.position.set( 1, 9, -8 )

spotLight.castShadow = true

scene.add( spotLight)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)
/**
 * Camera Controls
 */
const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.zoomSpeed = 0.3
cameraControls.enableDamping = true

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

    // Camera controls
    cameraControls.update()

    // Render
    renderer.render(scene, camera)
}

loop()