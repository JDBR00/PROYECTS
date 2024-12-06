"""
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
"""

def PrimeNumber():
    for i in range(1, 101):
        if i == 1:
            print(f"{i} no es primo")  
        else:
            is_prime = True 
            for j in range(2, i):
                if i % j == 0:  
                    is_prime = False  
                    break  
            if is_prime:  
                print(f"{i} es primo")
         
PrimeNumber()
