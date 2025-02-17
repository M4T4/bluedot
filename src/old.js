// Module.onRuntimeInitialized = function () {
//   console.log('Emscripten module initialized');
//   // Wrap the C++ functions
//   addFunction = Module.cwrap('add', 'number', ['number', 'number']);
//   multiplyFunction = Module.cwrap('multiply', 'number', ['number', 'number']);
//   updatePositionFunction = Module.cwrap('updatePosition', 'number', ['number']);

//   console.log(addFunction (2, 3)); // Should log 5


//   // Start the Three.js animation loop
//   animate();
// };


// Module().then((instance) => {
//   console.log("Available functions:", instance.exports);
//   addFunction = instance.cwrap('addNumbers', 'number', ['number', 'number']);
//   updatePositionFunction = Module.cwrap('updatePosition', 'number', ['number']);
//   console.log(addFunction(10, 4)); // Should log 7
//   console.log(updatePositionFunction(1)); // Should log 2

//   // Set initial positions for x and y (e.g., for the dot's movement)
//   let xPosition = 0;
//   let yPosition = 0;

//   // Example of using addNumbers to update positions
//   const newXPosition = addNumbers(xPosition, 0); // Adds 1 to the current x position
//   const newYPosition = addNumbers(yPosition, 0); // Adds 2 to the current y position

//   // Update dot's position
//   dot.position.set(newXPosition, newYPosition, 0); // Set the new position

//   console.log(`Dot moved to: (${newXPosition}, ${newYPosition})`);
// });




// Module.then((ModuleFactory) => {
//   ModuleFactory().then((Module) => {
//     console.log('Emscripten module initialized');

//     // Wrap C++ functions
//     const addFunction = Module.cwrap('add', 'number', ['number', 'number']);
//     const multiplyFunction = Module.cwrap('multiply', 'number', ['number', 'number']);
//     const updatePositionFunction = Module.cwrap('updatePosition', 'number', ['number']);

//     console.log(addFunction(2, 3)); // Should log 5

//     // Start the animation loop
//     animate();
//   });
// }).catch((err) => {
//   console.error('Failed to load WebAssembly:', err);
// });