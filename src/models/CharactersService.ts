import { Character, CharacterInterface } from "./Character";

const api = "https://breakingbadapi.com/api";

class CharactersService {
  getTenCharacters(): Promise<Character[]> {
    return fetch(`${api}/characters?limit=10&offset=10`)
      .then(res => res.json())
      .then(res =>
        res.map(
          (character: CharacterInterface) => character as CharacterInterface
        )
      );
  }
}

const charactersService = new CharactersService();

export default charactersService.getTenCharacters();
