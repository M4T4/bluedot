Para correr este proyecto

npm run dev

para compilar C++

emcc sum.cpp -o sum.js -sEXPORTED_FUNCTIONS=_addNumbers -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -s MODULARIZE=1 -s EXPORT_ES6=1
\

emcc physics/main.cpp -o public/physics/output.js \
    -s EXPORTED_FUNCTIONS='["_add", "_multiply", "_updatePosition"]' \
    -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
    -s MODULARIZE=1 -s EXPORT_ES6=0


### Github Pages

Lo que hice fui primero hacer build en dist

```
npm run build
```

Luego lo empuje al branch de github pages

```
npm run deploy
```
