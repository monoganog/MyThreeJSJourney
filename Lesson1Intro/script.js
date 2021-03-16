// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object 1
const cubeGeometry = new THREE.BoxGeometry(1, 10, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: '#e534eb'
})
// Object 2
const cube2Geometry = new THREE.BoxGeometry(1, 10, 1)
const cube2Material = new THREE.MeshBasicMaterial({
    color: '#64eb34'
})

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
const cube2Mesh = new THREE.Mesh(cube2Geometry, cube2Material)
scene.add(cubeMesh)
scene.add(cube2Mesh)

cubeMesh.position.x = -2
cube2Mesh.position.x = 2


// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 10
scene.add(camera)

const color = 0xFFFFFF;
const intensity = 10;
const light = new THREE.AmbientLight(color, intensity);

light.position.z = 2
scene.add(light);




// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)