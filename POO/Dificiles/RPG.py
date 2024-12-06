class Character:
    def __init__(self,Name,Life,Stroke) -> None:
        self.Name = Name
        self.Life = Life
        self.Stroke = int (Stroke)

    def Attack(self, target):
        target.Life -= self.Stroke
        print(f"{self.Name} atacó a {target.Name}, causando {self.Stroke} de daño. Vida restante de {target.Name}: {target.Life}")



class Magician(Character):
    def __init__(self,Name,Life,Stroke):
        super().__init__(Name,Life,Stroke)

    def Attack(self,target):
        super().Attack(target)
    
    def Spell(self, target):
        extra_damage = self.Stroke + 10
        target.Life -= extra_damage
        print(f"{self.Name} lanzó un hechizo a {target.Name}, causando {extra_damage} de daño. Vida restante de {target.Name}: {target.Life}")


class Warrior(Character):
    def __init__(self,Name,Life,Stroke):
        super().__init__(Name,Life,Stroke)

    def Attack(self,target):
        super().Attack(target)

    def Block(self, damage):
        reduced_damage = damage // 2
        self.Life -= reduced_damage
        print(f"{self.Name} bloqueó un ataque y recibió {reduced_damage} de daño. Vida restante: {self.Life}")


Warrior1 = Warrior("Leonidas",400,15)
Magician1 = Magician("Merlin",200,25)
Magician1.Attack(Warrior1)
Warrior1.Block(Magician1.Stroke)

Magician1.Spell(Warrior1)
Warrior1.Attack(Magician1)

if Warrior1.Life <= 0:
    print(f"{Warrior1.Name} ha caído en combate.")
if Magician1.Life <= 0:
    print(f"{Magician1.Name} ha caído en combate.")
