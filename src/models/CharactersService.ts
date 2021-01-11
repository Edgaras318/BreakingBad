import { Character, CharacterInterface } from "./Character";

const api = "https://breakingbadapi.com/api";

class CharactersService {

  static async getTenCharacters(): Promise<Character[]> {
    return fetch(`${api}/characters?limit=10&offset=10`)
      .then(res => res.json())
      .then(res =>
        res.map(
          (character: CharacterInterface) => character as CharacterInterface
        )
      );
  }
  
  static async getRandomCharacter(): Promise<Character> {
    return fetch(`${api}/character/random`)
      .then(res => res.json())
      .then(res =>
        res.map(
          (character: CharacterInterface) => character as CharacterInterface
        )[0]
    );
  }
    static async getCharacterById(id: string): Promise<Character> {
      return fetch(`${api}/characters/${id}`)
        .then((res) => res.json())
        .then((res) =>
          res.map(
            (character: CharacterInterface) => character as CharacterInterface
          )[0]
        );
  }
    static async getCharactersByCategory(category: string): Promise<Character[]> {
      return fetch(
        `${api}/characters?category=${category}&limit=3&offset=1`
      )
        .then((res) => res.json())
        .then((res) =>
          res.map(
            (character: CharacterInterface) => character as CharacterInterface
          )
        );
    }
}

export default CharactersService;
