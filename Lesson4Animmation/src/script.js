import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


/**
 * Animate
 */
let time = Date.now()


const clock = new THREE.Clock()
const tick = () => {
    // Time
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime



    const elapsedTime = clock.getElapsedTime()

    // To make objects rotate consistently regarldess of fps
    // Update objects
    mesh.rotation.y += 0.001 * deltaTime

    mesh.position.x = Math.cos(elapsedTime)
    mesh.position.y = Math.sin(elapsedTime)

    // easier way of getting delta time
    mesh.rotation.y = elapsedTime

    camera.position.x = Math.cos(elapsedTime)*0.3
    camera.position.y = Math.sin(elapsedTime)*0.3
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

    // ...
}

tick()