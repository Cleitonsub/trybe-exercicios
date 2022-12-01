cities_list = [('Elaine', 'Santo André'), ('Felipe', 'Belo Horizonte')]

cities_dict = {}

for nome, cidade in cities_list: # percorre a lista acessando as tuplas e adicionando ao dicionário
    cities_dict[nome] = cidade

print(f"Forma comum {cities_dict}")

#---------------------------------
cities_dict = {nome: cidade for nome, cidade in cities_list} # substitui as linhas 3, 5 e 6

print(f"Simplificado {cities_dict}")

#---------------------------------
cities_dict = dict(cities_list)

print(f"Mais simplificado ainda {cities_dict}")