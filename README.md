## To run this project

```sh
npm run dev
```

## To compile C++

### Compile `sum.cpp`
```sh
emcc sum.cpp -o sum.js \
    -s EXPORTED_FUNCTIONS=_addNumbers \
    -s EXPORTED_RUNTIME_METHODS=ccall,cwrap \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1
```

### Compile `physics/main.cpp`
```sh
emcc physics/main.cpp -o public/physics/output.js \
    -s EXPORTED_FUNCTIONS='["_add", "_multiply", "_updatePosition"]' \
    -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=0
```

it will export a JS file and a WASM file to public folder.


# Project Documentation

## 2D physics

- [Elastic Collision](docs/elastic_collision.md)
- [Cloth]()
- [Fluids]()