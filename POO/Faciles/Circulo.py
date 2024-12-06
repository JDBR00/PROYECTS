PI = 3.1416
class Circulo:
    def __init__(self,R):
        self.R = R

    def Area(self):
        Area = PI*self.R**2
        return Area

    def Perimetro(self):
        Perimetro = 2*PI*self.R
        return Perimetro


Circulo1 = Circulo(7)

print(f"El area es {Circulo1.Area} cm2")
print(f"El Perimetro es {Circulo1.Perimetro}")

