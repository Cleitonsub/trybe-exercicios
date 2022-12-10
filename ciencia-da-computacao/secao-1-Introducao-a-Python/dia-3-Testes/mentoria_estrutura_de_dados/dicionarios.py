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

#---------------------------------
cities_dict['Guilherme'] = 'Contagem' # adiciona no dicionário

print(f"Outra forma de criar um dicionário {cities_dict}")

cities_dict["Guilherme"] = 'Algum lugar' # com a mesma chave ele sobrescreve

print(f"Outra forma de criar um dicionário {cities_dict}")

#---------------------------------
print(f"Valor comum {cities_dict['Guilherme']}")

print(f"Como chamar dois valores {cities_dict['Guilherme']}, {cities_dict['Felipe']}")

print(f"Como pesquisar alguém inexistente sem o código quebrar {cities_dict.get('Thiago')}") # return none

if 'Santo André' in cities_dict.values(): # pesquisa pelo valor
    print('Vou visitar a Elaine')

print(cities_dict.keys()) # return dict_keys(['Elaine', 'Felipe', 'Guilherme'])

conjunto = set() # é igual ao dicionário mas apenas os valores (não aceita valores repetidos)
conjunto2 = set({'Rio de Janeiro', 'Recife'}) # cria conjunto2

conjunto.add('Santo André')
conjunto.add('Rio de Janeiro')
conjunto.add('Belo Horizonte')

print(conjunto)
print(conjunto2)

print(conjunto.difference(conjunto2)) # diferença do conjunto para o conjunto2 (pega tudo do 1)
