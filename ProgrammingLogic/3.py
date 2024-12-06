"""
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
"""

def Fibonacci():
    origin = 0
    plus = 1
    for _ in range(51):  
        print(origin)
        nextTerm = origin + plus  
        origin = plus  
        plus = nextTerm  

Fibonacci()
