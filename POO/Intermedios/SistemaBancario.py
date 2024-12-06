
class CuentaBancaria:
    def __init__(self,Titular,Saldo,Moneda):
        self.Titular = Titular
        self.Saldo = Saldo
        self.Moneda = Moneda
    
    def Depositar(self):
        try:
            Cantidad = float(input("Cuanto quiere depositar"))
            if Cantidad > 0:
                self.Saldo += Cantidad 
                print(f"Depósito exitoso. El nuevo saldo es {self.saldo} {self.moneda}.")  
            else:
                print(f"Depósito exitoso. El nuevo saldo es {self.saldo} {self.moneda}.")
        except ValueError:
            print("Error: por favor ingrese una cantidad válida.")


    def Retirar (self):
        try:
            valor = float(input("¿Cuánto desea retirar? "))
            if valor > 0 and valor <= self.saldo:
                self.Saldo -= valor
                print(f"Retiro exitoso. El saldo restante es {self.saldo} {self.moneda}.")
            else:
                print("Error: saldo insuficiente o valor inválido.")
                
        except ValueError:
            print(f"El saldo actual es {self.saldo} {self.moneda}.")

    def mostrar_saldo(self):
        print(f"El saldo actual es de {self.Saldo}{self.Moneda}")

            


CuentaBancaria1 = CuentaBancaria("Juan",20000,"COP")
CuentaBancaria1.Depositar()
CuentaBancaria1.Retirar()
CuentaBancaria1.mostrar_saldo()