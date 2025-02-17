#include <emscripten.h>

// Expose this function to JavaScript
extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int add(int a, int b) {
        return a + b;
    }

    EMSCRIPTEN_KEEPALIVE
    float multiply(float a, float b) {
        return a * b;
    }

    EMSCRIPTEN_KEEPALIVE
    float updatePosition(float a) {
        return a + 0.01f;
    }
}
