def Poligono():
    try:
        Type = int(input("el poligono es 1.triangulo,2.cuadrado,3.rectangulo"))
        if Type == 1:
            b = int(input("Ingrese la base "))
            h = int(input("Ingrese la altura "))
            A=(b*h)/2
            print(f"el area del triangulo es {A}")
        elif Type == 2:
            L = int(input("Ingrese el lado "))
            A = L**2
            print(f"el area del Cuadrado es {A}")
        elif Type == 3:
            b = int(input("Ingrese la base "))
            h = int(input("Ingrese la altura "))
            A = b*h
            print(f"el area del Rectangulo es {A}")
        else: 
            print("Opción incorrecta. Debes ingresar 1, 2 o 3.")
    except ValueError:
        print("Error: Debes ingresar un número válido.")
Poligono()