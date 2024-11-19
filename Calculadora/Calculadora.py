#CALCULADORA CUINTIFICA SIN GUI
import math

# Historial de operaciones
historial = []

#COMPROBACION DE NATURALEZA DEL NUMRO
def mostrar_resultado(valor):
    """Verifica si el resultado es entero o flotante, y lo muestra."""
    if valor.is_integer():  # Verifica si el número es entero
        print(f"Resultado: {int(valor)}")  # Mostrar como entero
    else:
        print(f"Resultado: {valor:.2f}")  # Mostrar con 2 decimales

#CREACION DE FUNCION DEL HISTORIAL
def agregar_a_historial(op, a, b, resultado):
    """Guarda la operación realizada en el historial."""
    historial.append(f"{a} {op} {b} = {resultado}")

#CREACION DE FUNCIONES PARA OPERACIONES DE CLACULADORA
def suma(a,b):
    return a+b

def resta(a,b):
    return a-b

def multiplicacion(a,b):
    return a*b

def division(a,b):
    #ESTE IF EVITA EL EROR DE DIVIDIR ALGO POR CERO LO CUAL NO ES POSOBLE
    if b == 0:
        return "Error: división por cero"
    return a/b

def exponenciacion(a,b):
    return a**b

def raiz_cuadrada(a):
    return math.sqrt(a)

def logaritmo(a):
    if a <= 0:
        return "Error: logaritmo de número no positivo"
    return math.log(a)

#FUNCIONES PARA SUBMENU(GEOMETRIA)
def calcular_hipotenusa(cateto_a, cateto_b):
    return math.sqrt(cateto_a**2 + cateto_b**2)

def calcular_trigonometria(angulo):
    seno = math.sin(math.radians(angulo))
    coseno = math.cos(math.radians(angulo))
    tangente = math.tan(math.radians(angulo))
    return seno, coseno, tangente

if __name__ == "__main__":

    #INICIO DE BUCLE
    while True:
        print("\n    CALCULADORA   ")
        print("1. SUMAR")
        print("2. RESTAR")
        print("3. MULTIPLICAR")
        print("4. DIVIDIR")
        print("5. EXPONENCIACIÓN")
        print("6. RAÍZ CUADRADA")
        print("7. LOGARITMO")
        print("8. TRIAGONOMETRIA")
        print("9. VER HISTORIAL")
        print("10. SALIR")

        opcion = input("SELECCIONO UNA OPCION: ")
        
        #FIN DEL BUCLE
        if opcion == "10":
            print("GRACIAS POR USARNOS")
            break
        
        if opcion in ["1", "2", "3", "4", "5"]:
            try:
                num1 = float(input("Ingresa el primer número: "))
                num2 = float(input("Ingresa el segundo número: "))

                if opcion == "1":
                    resultado = suma(num1, num2)
                    agregar_a_historial("+", num1, num2, resultado)
                elif opcion == "2":
                    resultado = resta(num1, num2)
                    agregar_a_historial("-", num1, num2, resultado)
                elif opcion == "3":
                    resultado = multiplicacion(num1, num2)
                    agregar_a_historial("*", num1, num2, resultado)
                elif opcion == "4":
                    resultado = division(num1, num2)
                    agregar_a_historial("/", num1, num2, resultado)
                elif opcion == "5":
                    resultado = exponenciacion(num1, num2)
                    agregar_a_historial("^", num1, num2, resultado)

                mostrar_resultado(resultado)
            
            except ValueError:
                print("Por favor, ingresa números válidos.")

        elif opcion == "6":
            try:
                num = float(input("Ingresa el número: "))
                resultado = raiz_cuadrada(num)
                agregar_a_historial("√", num, "", resultado)
                mostrar_resultado(resultado)
            except ValueError:
                print("Por favor, ingresa un número válido.")

        elif opcion == "7":
            try:
                num = float(input("Ingresa el número: "))
                resultado = logaritmo(num)
                agregar_a_historial("log", num, "", resultado)
                mostrar_resultado(resultado)
            except ValueError:
                print("Por favor, ingresa un número válido.")







        elif opcion == "8":
            while True:
                print("\n    MENU DE TRIGONOMETRIA   ")
                print("1. HIPOTENUSA")
                print("2. SENO, COSENO, TANGENTE")
                print("3. VER HISTORIAL")
                print("4. SALIR")

                opcion = input("SELECCIONE UNA OPCION: ")
        
                #FIN DEL BUCLE
                if opcion == "4":
                    print("GRACIAS POR USARNOS")
                    break
                if opcion in ["1", "2", "3", "4", "5"]:
                    try:
                        num1 = float(input("Ingresa el primer número: "))
                        num2 = float(input("Ingresa el segundo número: "))

                        if opcion == "1":
                            cateto_a = float(input("Ingrese la longitud del cateto opuesto (a): "))
                            cateto_b = float(input("Ingrese la longitud del cateto adyacente (b): "))
                            hipotenusa = calcular_hipotenusa(cateto_a, cateto_b)
                            print(f"La longitud de la hipotenusa es: {hipotenusa:.2f}")
                            agregar_a_historial(" ", cateto_a, cateto_b, hipotenusa)
                        elif opcion == "2":
                            angulo = float(input("Ingrese el ángulo en grados: "))
                            seno, coseno, tangente = calcular_trigonometria(angulo)
                            print(f"Seno del ángulo: {seno:.2f}")
                            print(f"Coseno del ángulo: {coseno:.2f}")
                            print(f"Tangente del ángulo: {tangente:.2f}")
                            agregar_a_historial("-", angulo, seno,tangente)
                

                        mostrar_resultado(resultado)
            
                    except ValueError:
                        print("Por favor, ingresa números válidos.")

                elif opcion == "3":
                    print("\nHISTORIAL DE OPERACIONES:")
                    for operacion in historial:
                        print(operacion)
                else:
                    print("Opción no válida. Inténtalo de nuevo.")




        elif opcion == "9":
            print("\nHISTORIAL DE OPERACIONES:")
            for operacion in historial:
                print(operacion)
        
        else:
            print("Opción no válida. Inténtalo de nuevo.")




