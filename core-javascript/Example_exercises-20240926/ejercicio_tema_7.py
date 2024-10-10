# Definición de la función coordenadaZ
def coordenadaZ(x, y):
    # Sumar 10 a x y 15 a y
    x = x + 10
    y = y + 15
    # Retornar la suma de los nuevos valores de x y y
    return x + y

# Programa principal
x = int(input("Coordenada eje x: "))  # Entrada del usuario para x
y = int(input("Coordenada eje y: "))  # Entrada del usuario para y

# Bucle que se repite 3 veces
for i in range(3):  # Corrección de Range a range
    z = coordenadaZ(x, y)  # Llamada a la función coordenadaZ
    x = x + 1  # Incrementar x en 1
    y = y + 1  # Incrementar y en 1
    # Imprimir los valores actualizados de x e y
    print(x, ".", y)
