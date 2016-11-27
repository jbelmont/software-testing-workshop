#!/bin/bash

MATHJAX_LIBRARY_PATH="./node_modules/mathjax/MathJax.js"

copy_mathjax_library() {
    cp ${MATHJAX_LIBRARY_PATH} .
}

copy_mathjax_library