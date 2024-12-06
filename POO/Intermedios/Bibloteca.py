class Bibloteca:
    def __init__(self,Catalogo):
        self.Catalogo = Catalogo

    def agregar(self):
            Titulo = input("Digite el nuevo título del Libro: ")
            Autor = input("Digite el Autor del Libro: ")
            Disponibilidad = input("¿Está disponible? (sí/no): ").lower() == "sí"
            Libro_nuevo = Libro(Titulo, Autor, Disponibilidad)
            self.Catalogo.append(Libro_nuevo)
            print(f"Libro '{Titulo}' agregado correctamente.")

    def mostrar(self):
        for Libro in self.Catalogo:
            print(f"Título: {Libro.Titulo}, Autor: {Libro.Autor}, Disponible: {Libro.Disponibilidad}")



class Libro:
    def __init__(self,Titulo,Autor,Disponibilidad):
        self.Titulo = Titulo
        self.Autor = Autor
        self.Disponibilidad = Disponibilidad
        

    def prestar(self):
        if self.Disponibilidad:
            self.Disponibilidad = False
            print(f"Préstamo del Libro '{self.Titulo}' realizado con éxito.")
        else:
            print(f"El Libro '{self.Titulo}' no está disponible para préstamo.")

    def devolver(self):
        if not self.Disponibilidad:
            self.Disponibilidad = True
            print(f"Libro '{self.Titulo}' devuelto correctamente.")
        else:
            print(f"El Libro '{self.Titulo}' no estaba prestado.")

Libro1 = Libro("Cien Años de Soledad", "Gabriel García Márquez", True)
Libro2 = Libro("1984", "George Orwell", False)
biblioteca1 = Bibloteca([Libro1, Libro2])

biblioteca1.agregar()

biblioteca1.mostrar()

Libro1.prestar()
Libro1.devolver()
