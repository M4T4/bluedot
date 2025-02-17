import './style.css';
// import Module from '/physics/output.js';
import * as THREE from 'three';
console.log('Module object:', Module);

let addFunction, updatePosition

// Wait for the WebAssembly module to initialize
Module().then((instance) => {
  console.log('Emscripten module initialized');
  addFunction = instance.cwrap('add', 'number', ['number', 'number']);
  updatePosition = instance.cwrap('updatePosition', 'number', ['number']);
  const multiplyFunction = instance.cwrap('multiply', 'number', ['number', 'number']);
  console.log(addFunction(2, 3)); // Should log 5
  console.log(multiplyFunction(5,5))

  animate();
});

// Settings
const settings = {
  colors: {
    circle: "#3182bd"
  }
};

// Set up scene
const scene = new THREE.Scene();

// Get aspect ratio
const aspect = window.innerWidth / window.innerHeight;

// Set up an orthographic camera
const camera = new THREE.OrthographicCamera(
  -aspect, aspect, 1, -1, 0.1, 10
);
camera.position.set(0, 0, 2);
camera.lookAt(0, 0, 0);

// Create renderer
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a simple dot
const dotGeometry = new THREE.CircleGeometry(0.02, 32); // Small dot
const dotMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(settings.colors.circle) });
const dot = new THREE.Mesh(dotGeometry, dotMaterial);
dot.position.set(0, -1.1, 0)
scene.add(dot);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  
  let currentYposition = dot.position.y;
  if (addFunction) {
    // addFunction(currentYposition, 10)
    console.log(addFunction(22, 32));
  }

  if (updatePosition) {
    const newYPosition = updatePosition(currentYposition);
    dot.position.set(0, newYPosition, 0);
  }

  console.log(`Dot position: ${currentYposition}`);


  // let currentYposition = dot.position.y;
  // const newYPosition = updatePosition(currentYposition);
  // dot.position.set(0, newYPosition, 0);

}


// animate(); // Start animation loop