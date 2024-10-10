#!/bin/bash

# Verificar que se ha pasado un patrón y un directorio como argumentos
if [ $# -ne 2 ]; then
    echo "Uso: $0 <patron> <directorio>"
    exit 1
fi

# Asignar los argumentos a variables
PATRON=$1
DIRECTORIO=$2

# Verificar si el directorio existe
if [ ! -d "$DIRECTORIO" ]; then
    echo "El directorio $DIRECTORIO no existe."
    exit 1
fi

# Buscar el patrón en todos los archivos y subdirectorios
echo "Buscando el patrón '$PATRON' en los archivos del directorio '$DIRECTORIO' y sus subdirectorios:"
grep -r "$PATRON" "$DIRECTORIO"
