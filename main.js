import * as THREE from 'three'
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const CSS3DScene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer(document.getElementById("webgl-container"))
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const CSSRenderer = new CSS3DRenderer(document.getElementById("css3d-container"))
CSSRenderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(CSSRenderer.domElement)

const geometry = new THREE.BoxGeometry( 50, 50, 50 )
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
const cube = new THREE.Mesh( geometry, material )
scene.add( cube )

const helloWorld = new CSS3DObject(document.getElementById("hello-world"))
helloWorld.position.copy(cube.position)
helloWorld.rotation.copy(cube.rotation)
CSS3DScene.add(helloWorld)

camera.position.z = 200
const controls = new OrbitControls( camera, renderer.domElement )
const CSSControls = new OrbitControls( camera, CSSRenderer.domElement )
controls.minZoom = 0.5
controls.maxZoom = 2
CSSControls.minZoom = 0.5
CSSControls.maxZoom = 2

function animate() {
	requestAnimationFrame( animate )
    controls.update()
    CSSControls.update()
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    // helloWorld.rotation.x += 0.01
    // helloWorld.rotation.y += 0.01
	renderer.render( scene, camera )
    CSSRenderer.render(CSS3DScene, camera)
}
animate()

//hi its ian