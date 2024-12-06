class Estudiante:
    def __init__(self,Name,StudentID,Courses):
        self.Name = Name
        self.StudentID = StudentID
        self.Courses = Courses
        
class Curse:
    def __init__(self,Name,codigo,students = None):
        self.Name = Name
        self.codigo = codigo
        self.students = students if students else []
    
    def AddStudent(self,student):
        self.students.append(student)
        print(f"Estudiante '{student}' agregado correctamente al curso {self.codigo}.")
        print(f"Estudiantes actuales en el curso {self.codigo}: {self.students}")

class Sistema:
    def __init__(self,courses):
        self.courses = courses

    def agregar_estudiante_sistema(self,name):
        self.asignar_curso(name)

    def asignar_curso(self, estudiante):
        # Asignar al curso con menos estudiantes
        curso_menor = min(self.courses, key=lambda curso: len(curso.students))
        curso_menor.AddStudent(estudiante)

    def mostrar_estudiantes(self):
        for curso in self.courses:
            print(f"Curso {curso.codigo}: {curso.students}")
        

curso1 = Curse("11", 1101, ["Juan", "Pablo", "Sofía"])
curso2 = Curse("11", 1102, ["Camilo", "Pepe", "Lucía"])

system1 = Sistema([curso1,curso2])


nuevo_estudiante = input("Digite el nombre del nuevo estudiante: ")
system1.agregar_estudiante_sistema(nuevo_estudiante)

system1.mostrar_estudiantes()


