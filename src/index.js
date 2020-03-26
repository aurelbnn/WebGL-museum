import './style/main.styl'
import * as THREE from 'three'
import {
    PointerLockControls
} from 'three/examples/jsm/controls/PointerLockControls.js'
import Room from './javascript/Room.js'
import FirstFramework from './javascript/FirstFramework.js'
import SecondFramework from './javascript/SecondFramework.js'
import Fire from './javascript/Fire.js'
import KlimtFramework from './javascript/KlimtFramework.js'
import VitruvianMan from './javascript/VitruvianMan.js'
import Controllers from './javascript/Controllers.js'
import Star from './javascript/Star.js'
import JocondeSoundSource from './audios/huming-sound.mp3'
import EnferSoundSource from './audios/fire.mp3'
import KlimtSoundSource from './audios/debussy.mp3'
import VitruveSoundSource from './audios/marchetto-cara.mp3'
import wallpaperColorSource from './images/Wallpaper/WallpaperBasecolor.jpg' // Wall texture
import wallpaperNormalSource from './images/Wallpaper/WallpaperNormal.jpg' // Wall normal
import wallpaperAmbientSource from './images/Wallpaper/WallpaperAmbientOcclusion.jpg' // Wall ambient occlusion



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

const vitruvianManZone = new VitruvianMan(scene)

const controllers = new Controllers(scene)

const star = new Star(scene)

/**
* Camera
*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 50)
// camera.lookAt(scene.position)
camera.position.x = 12
camera.position.z = -6
camera.position.y = 1.8
camera.rotation.y = Math.PI * 0.6

scene.add(camera)

// move
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

/**
 * Audio
 */

const listener = new THREE.AudioListener()
camera.add(listener)

// JOCONDE FRAME
const JocondeSoundGroup = new THREE.Group()
    JocondeSoundGroup.visible = true
    scene.add(JocondeSoundGroup)
const JocondeSound = new THREE.PositionalAudio(listener)

const audioLoader = new THREE.AudioLoader()
audioLoader.load(JocondeSoundSource, function (buffer) {
    JocondeSound.setBuffer(buffer)
    JocondeSound.setRefDistance(0.1)
    JocondeSound.play()
})

const whiteMaterial = new THREE.MeshStandardMaterial({
    map: wallpaperColorTexture,
    color: 0xffffff,
})

const frameworkMaterial = new THREE.MeshStandardMaterial({
    map: wallpaperColorTexture,
    aoMap: wallpaperAmbientTexture,
    metalness: 0.4,
    roughness: 0.4,
    color: 0xD2C895,
})


const JocondeFrameTop = new THREE.BoxGeometry(2.6, 0.1, 0.1, 0.1)
const JocondeFrameTopMesh = new THREE.Mesh(JocondeFrameTop, frameworkMaterial)
JocondeFrameTopMesh.position.x = 2.5
JocondeFrameTopMesh.position.y = 3
JocondeFrameTopMesh.position.z = 7.9 
JocondeSoundGroup.add(JocondeFrameTopMesh)

const JocondeFrameBottom = new THREE.BoxGeometry(2.6, 0.1, 0.1, 0.1)
const JocondeFrameBottomMesh = new THREE.Mesh(JocondeFrameBottom, frameworkMaterial)
JocondeFrameBottomMesh.position.x = 2.5
JocondeFrameBottomMesh.position.y = 1
JocondeFrameBottomMesh.position.z = 7.9 
JocondeSoundGroup.add(JocondeFrameBottomMesh)

const JocondeFrameLeft = new THREE.BoxGeometry(0.1, 2.1, 0.1, 0.1)
const JocondeFrameLeftMesh = new THREE.Mesh(JocondeFrameLeft, frameworkMaterial)
JocondeFrameLeftMesh.position.x = 3.8
JocondeFrameLeftMesh.position.y = 2
JocondeFrameLeftMesh.position.z = 7.9 
JocondeSoundGroup.add(JocondeFrameLeftMesh)

const JocondeFrameRight = new THREE.BoxGeometry(0.1, 2.1, 0.1, 0.1)
const JocondeFrameRightMesh = new THREE.Mesh(JocondeFrameRight, frameworkMaterial)
JocondeFrameRightMesh.position.x = 1.2
JocondeFrameRightMesh.position.y = 2
JocondeFrameRightMesh.position.z = 7.9 
JocondeSoundGroup.add(JocondeFrameRightMesh)

JocondeSoundGroup.add(JocondeSound)

// ENFER FRAME
const EnferSoundGroup = new THREE.Group()
    EnferSoundGroup.visible = true
    scene.add(EnferSoundGroup)
const EnferSound = new THREE.PositionalAudio(listener)

audioLoader.load(EnferSoundSource, function (buffer) {
    EnferSound.setBuffer(buffer)
    EnferSound.setRefDistance(0.1)
    EnferSound.play()
})

const EnferFrameTop = new THREE.BoxGeometry(2.6, 0.1, 0.1, 0.1)
const EnferFrameTopMesh = new THREE.Mesh(EnferFrameTop, frameworkMaterial)
EnferFrameTopMesh.position.x = 2.5
EnferFrameTopMesh.position.y = 3
EnferFrameTopMesh.position.z = 7.9 
EnferSoundGroup.add(EnferFrameTopMesh)

const EnferFrameBottom = new THREE.BoxGeometry(2.6, 0.1, 0.1, 0.1)
const EnferFrameBottomMesh = new THREE.Mesh(EnferFrameBottom, frameworkMaterial)
EnferFrameBottomMesh.position.x = 2.5
EnferFrameBottomMesh.position.y = 1
EnferFrameBottomMesh.position.z = 7.9 
EnferSoundGroup.add(EnferFrameBottomMesh)

const EnferFrameLeft = new THREE.BoxGeometry(0.1, 2.1, 0.1, 0.1)
const EnferFrameLeftMesh = new THREE.Mesh(EnferFrameLeft, frameworkMaterial)
EnferFrameLeftMesh.position.x = 3.8
EnferFrameLeftMesh.position.y = 2
EnferFrameLeftMesh.position.z = 7.9 
EnferSoundGroup.add(EnferFrameLeftMesh)

const EnferFrameRight = new THREE.BoxGeometry(0.1, 2.1, 0.1, 0.1)
const EnferFrameRightMesh = new THREE.Mesh(EnferFrameRight, frameworkMaterial)
EnferFrameRightMesh.position.x = 1.2
EnferFrameRightMesh.position.y = 2
EnferFrameRightMesh.position.z = 7.9 
EnferSoundGroup.add(EnferFrameRightMesh)

EnferSoundGroup.position.x = -11
EnferSoundGroup.add(EnferSound)

// KLIMT FRAME
const KlimtSoundGroup = new THREE.Group()
    KlimtSoundGroup.visible = true
    scene.add(KlimtSoundGroup)
const KlimtSound = new THREE.PositionalAudio(listener)

audioLoader.load(KlimtSoundSource, function (buffer) {
    KlimtSound.setBuffer(buffer)
    KlimtSound.setRefDistance(0.1)
    KlimtSound.play()
})

const KlimtFrameTop = new THREE.BoxGeometry(3, 0.1, 0.1, 0.1)
const KlimtFrameTopMesh = new THREE.Mesh(KlimtFrameTop, frameworkMaterial)
KlimtFrameTopMesh.position.x = 2.5
KlimtFrameTopMesh.position.y = 4
KlimtFrameTopMesh.position.z = 7.9 
KlimtSoundGroup.add(KlimtFrameTopMesh)

const KlimtFrameBottom = new THREE.BoxGeometry(3, 0.1, 0.1, 0.1)
const KlimtFrameBottomMesh = new THREE.Mesh(KlimtFrameBottom, frameworkMaterial)
KlimtFrameBottomMesh.position.x = 2.5
KlimtFrameBottomMesh.position.y = 1
KlimtFrameBottomMesh.position.z = 7.9 
KlimtSoundGroup.add(KlimtFrameBottomMesh)

const KlimtFrameLeft = new THREE.BoxGeometry(0.1, 3.1, 0.1, 0.1)
const KlimtFrameLeftMesh = new THREE.Mesh(KlimtFrameLeft, frameworkMaterial)
KlimtFrameLeftMesh.position.x = 4
KlimtFrameLeftMesh.position.y = 2.5
KlimtFrameLeftMesh.position.z = 7.9 
KlimtSoundGroup.add(KlimtFrameLeftMesh)

const KlimtFrameRight = new THREE.BoxGeometry(0.1, 3.1, 0.1, 0.1)
const KlimtFrameRightMesh = new THREE.Mesh(KlimtFrameRight, frameworkMaterial)
KlimtFrameRightMesh.position.x = 1
KlimtFrameRightMesh.position.y = 2.5
KlimtFrameRightMesh.position.z = 7.9 
KlimtSoundGroup.add(KlimtFrameRightMesh)

KlimtSoundGroup.position.x = -18.8
KlimtSoundGroup.position.y = -0.5
KlimtSoundGroup.position.z = 3.5
KlimtSoundGroup.rotation.x = Math.PI 
KlimtSoundGroup.rotation.z = Math.PI
KlimtSoundGroup.rotation.y = Math.PI / 2

KlimtSoundGroup.add(KlimtSound)

//VITRUVE BASE

//Walls
const textureLoader = new THREE.TextureLoader()

const wallsMaterial = new THREE.MeshStandardMaterial({
    map: wallpaperColorTexture,
    normalMap: wallpaperNormalTexture,
    aoMap: wallpaperAmbientTexture,
    color: 0x04072C,
})

const wallpaperColorTexture = textureLoader.load(wallpaperColorSource)
const wallpaperNormalTexture = textureLoader.load(wallpaperNormalSource)
const wallpaperAmbientTexture = textureLoader.load(wallpaperAmbientSource)

const VitruveSound = new THREE.PositionalAudio(listener)

audioLoader.load(VitruveSoundSource, function (buffer) {
    VitruveSound.setBuffer(buffer)
    VitruveSound.setRefDistance(0.1)
    VitruveSound.play()
})

const vitruveBase = new THREE.Mesh(new THREE.BoxGeometry( 3, 1, 3 ), wallsMaterial)
vitruveBase.position.x = 2.5
vitruveBase.position.y = 0
vitruveBase.position.z = -0.5
vitruveBase.rotation.y = Math.PI * -0.5
scene.add(vitruveBase)

vitruveBase.add(VitruveSound)


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
scene.add(ambientLight)

const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 1)
scene.add(hemisphereLight)

const spotLight = new THREE.SpotLight( 0xd3d3d3 )
spotLight.position.set( 1, 9, -20 )

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
 * Controls
 */
const controls = new PointerLockControls( camera, document.body )
let prevTime = performance.now()
let velocity = new THREE.Vector3()
let clock = new THREE.Clock()
let direction = new  THREE.Vector3
controls.unlock()
scene.add( controls.getObject() )



    /** Controls KeysDown*/
    const onKeyDown =  ( _event ) => {
    if (_event.code === 'KeyW')
    {
        moveForward = true
        controls.lock()
    }
    if (_event.code === 'KeyS')
    {
        moveBackward = true
        controls.lock()

    }
    if (_event.code === 'KeyA')
    {
        moveLeft = true
        controls.lock()

    }
    if (_event.code === 'KeyD')
    {
        moveRight = true
        controls.lock()
    }
}
    /** Controls KeyUp*/
    const onKeyUp = ( _event ) =>{
    if (_event.code === 'KeyW')
    {
        moveForward = false

    }
    if (_event.code === 'KeyS')
    {
        moveBackward = false

    }
    if (_event.code === 'KeyA')
    {
        moveLeft = false

    }
    if (_event.code === 'KeyD')
    {
        moveRight = false
    }

}

document.addEventListener( 'keydown', onKeyDown )
document.addEventListener( 'keyup', onKeyUp )



/**
 * Resize
 */
window.addEventListener('resize', () => {
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

    /**
     *  Get the the performance time to create a velocity
    */
    const time = performance.now();
    const delta = ( time - prevTime ) / 1000;

    velocity.x -= velocity.x * 5 * delta;
    velocity.z -= velocity.z * 5 * delta;

    /**
     *   Create a variable to have the axe of direction  exp : if direction x === -1 the locker go left
    */
    direction.z = Number( moveForward ) - Number( moveBackward );
    direction.x = Number( moveRight ) - Number( moveLeft );
    direction.normalize()
 
    /**
     *   Applicate the velocity for direction
    */
    if ( moveForward || moveBackward )
    {
        velocity.z -= direction.z * 8 * delta;
    }
    if ( moveLeft || moveRight )
    {
        velocity.x -= direction.x * 8 * delta;
    }

    /**
     *  Applicate the controls and velocity together
    */
    controls.moveRight( - velocity.x * delta );
    controls.moveForward( - velocity.z * delta );
    controls.moveRight( - velocity.x * delta );
    controls.moveForward( - velocity.z * delta );

    prevTime = time;

    renderer.render( scene, camera );
    // Render
   
}
loop()