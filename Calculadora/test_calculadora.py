import math
import unittest
from Calculadora import suma, resta, multiplicacion, division, exponenciacion, raiz_cuadrada, logaritmo, calcular_hipotenusa, calcular_trigonometria


class TestCalculadora(unittest.TestCase):

    def test_suma(self):
        self.assertEqual(suma(2, 3), 5)

    def test_resta(self):
        self.assertEqual(resta(5, 3), 2)

    def test_multiplicacion(self):
        self.assertEqual(multiplicacion(2, 3), 6)

    def test_division(self):
        self.assertEqual(division(6, 3), 2)
        self.assertEqual(division(6, 0), "Error: división por cero")

    def test_exponenciacion(self):
        self.assertEqual(exponenciacion(2, 3), 8)

    def test_raiz_cuadrada(self):
        self.assertEqual(raiz_cuadrada(9), 3)

    def test_logaritmo(self):
        self.assertEqual(logaritmo(math.e), 1)
    
    def test_calcular_hipotenusa(self):
        self.assertEqual(calcular_hipotenusa(3, 4), 5.0)
        self.assertEqual(calcular_hipotenusa(5, 12), 13.0)
        self.assertAlmostEqual(calcular_hipotenusa(2.5, 6.1), 6.592, places=3)

    def test_calcular_trigonometria(self):
        seno, coseno, tangente = calcular_trigonometria(30)
        self.assertAlmostEqual(seno, 0.5, places=2)
        self.assertAlmostEqual(coseno, 0.866, places=3)
        self.assertAlmostEqual(tangente, 0.577, places=3)

        seno, coseno, tangente = calcular_trigonometria(45)
        self.assertAlmostEqual(seno, 0.707, places=3)
        self.assertAlmostEqual(coseno, 0.707, places=3)
        self.assertAlmostEqual(tangente, 1.0, places=1)


if __name__ == "__main__":
    unittest.main()
