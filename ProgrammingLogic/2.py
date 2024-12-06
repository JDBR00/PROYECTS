"""""
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
"""""

def Anagrama(user1: str,user2: str):

    if len(user1) == len(user2):
        if sorted(user1) == sorted(user2):
            print(True)
        else:
            print(False)
        
    else:
         print("Las palabras tienen diferentes longitudes, no pueden ser anagramas.")
    

user1 = input("hola intruduce la primera palabra ")
user2 = input("hola intruduce la Segunda palabra ")
Anagrama(user1,user2)


