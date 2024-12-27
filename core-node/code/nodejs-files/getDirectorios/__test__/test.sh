#!/bin/bash
# Ejecutar index.js y capturar la salida
output=$(node ../index.js)

# Obtener el directorio actual
current_dir=$(dirname $(pwd))

# Imprimir la salida de index.js
echo "Output from index.js: $output"
echo "Current directory: $current_dir"

# Verificar si la salida de index.js es igual al directorio actual
if [ "$output" == "$current_dir" ]; then
    echo "Test passed: Output matches the current directory."
    exit 0
else
    echo "Test failed: Output does not match the current directory."
    exit 1
fi