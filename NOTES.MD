Para correr este proyecto

npm run dev

para compilar C++

emcc sum.cpp -o sum.js -sEXPORTED_FUNCTIONS=_addNumbers -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s MODULARIZE=1 -s EXPORT_ES6=1