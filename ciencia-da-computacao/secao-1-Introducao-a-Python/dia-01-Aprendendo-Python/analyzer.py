def analyze(text):
  # ... = cria função sem desenvolver
  # contagens de palavras e caracteres
  count_words = len(text.split(" "))
  count_letters = len(text)

  # contagem de ocorrências por caracter
  char_counter = dict()
  for char  in text:
    if char in char_counter:
      char_counter[char] += 1
    else:
      char_counter[char] = 1

  return f"Esse texto possui {count_words} palavras e {count_letters} letras no total.\nOcorrência por caracter = {char_counter}"

text_to_analyze = ("Hehe, texto gigante")

print(analyze(text_to_analyze))
