from soma import soma

def test_soma_positivos():
    soma(3, 4) == 7

def test_soma_negativos():
    soma(-3, 4) == 1
