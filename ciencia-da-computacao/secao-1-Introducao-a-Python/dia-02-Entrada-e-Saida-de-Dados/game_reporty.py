import json

def main():
    print("Executando main")
    try:
        with open ('data/video_games.json', 'r') as file:
          video_games = json.load(file)
    except FileNotFoundError as exc:
        print("Arquivo inexistente")
    except json.decoder.JSONDecodeError as exc:
        print("Arquivo com problema")
    except:
        print("Problema desconhecido")

    all_consoles = set()
    for game in video_games:
        all_consoles.add(game["Release"]["Console"])
    print(f"Consoles: {all_consoles}")

    all_genres = set()
    for game in video_games:
        genres = game["Metadata"]["Genres"]
        for genre in genres.split(','):
            all_genres.add(genre)
    print(f"Genres: {all_genres}")

    scores_by_genre = {genre: [] for genre in all_genres}
    for game in video_games:
        genres = game["Metadata"]["Genres"]
        score = game["Metrics"]["Review Score"]
        for genre in genres.split(','):
            scores_by_genre[genre].append(score)
    print(f"Scores: {scores_by_genre}")

    avg_score_by_genre = {}
    for genre, scores in scores_by_genre.items(): # essa linha retorna duas coisas
      avg_score_by_genre[genre] = sum(scores) / len(scores)
    print(f"Average Scores: {avg_score_by_genre}")

    # with open('data/video_games.json', 'w') as file: # transforma para json
    #   json.dump(avg_score_by_genre, file) # depois de file coloque ', indent=4' para formatar

if __name__ == '__main__':
    main()