alturas = [1.75, 1.96, 1.62, 1.65, 1.59, 1.77, 1.86, 1.90, 1.60]
print()
print(alturas[0]) # primeiro indice da lista
print(alturas[-1]) # ultimo item da lista
print(alturas[0:3:1]) # fatiamento podem ser feitos em strings e listas, pega 4 itens da lista
                      # 0=inicio, 3=quantidade fim, 1=contar de 1 em 1
print(alturas[4::1]) # pega o indice 4 em diante de 1 em 1
print(alturas[:4:1]) # pega os 4 primeiros de 1 em 1
print(alturas[::-1]) # printa a lista invertida

nome = 'Maria'

print(nome[::-1]) # printa o nome invertido

if 1.62 in alturas:
    print(f"Achei a dona da calça")
else:
    print(f"Não achei a dona da calça!")
# alturas.sort() # isso altera minha lista, ele nao retorna nada, apenas ordena
# print(alturas)

alturas_ordenadas = sorted(alturas) # isso nao altera minha lista, pois sorted instancia o alturas e retorna ele ordenado
print(alturas_ordenadas)

# a, b = alturas[0], alturas[-1]
a, *b, c = alturas # desempacotamento (desestruturacao) pega 'a' e salva o primeiro item. dentro de 'c' salva o ultimo item
print(a)
print(c)
print(b) # *b salva todos os itens do meio

nova_lista = [['Kebler', 1.60], ['Carol', 1.75]]
dicionario = {}

for item in nova_lista:
    print(item[0], item[1])
                            # esses dois for tem o mesmo objetivo
for name, height in nova_lista:
    dicionario[name] = height #adiciona no dicionario {'Kebler': 1.6, 'Carol': 1.75}
print(dicionario)


dicionario2 = {name: height for name, height in nova_lista} # adiciona no dicionario2 {'Kebler': 1.6, 'Carol': 1.75}
print(dicionario2)

heights_in_feet = [round(height * 3.28, 1) for height in alturas] # return [5.7, 6.4, 5.3, 5.4, 5.2, 5.8, 6.1, 6.2, 5.2]
print(heights_in_feet)
