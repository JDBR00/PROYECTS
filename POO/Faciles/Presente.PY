class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def presentarse(self):
        if self.edad >= 18:
            print(f"Hola, soy {self.nombre} y tengo {self.edad} años soy mayor de edad.")
        else:
            print(f"Hola, soy {self.nombre} y tengo {self.edad} años soy menor de edad.")
           
    
persona1 = Persona("Juan", 25)
persona1.presentarse()





