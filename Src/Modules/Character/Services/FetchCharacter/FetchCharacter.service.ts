import { graphqlClient } from "../../../Shared/Services/GraphqlClient";
import { sleep } from "../../../Shared/Utils";
import { FetchCharacterDTO } from "./FetchCharacter.dto";
import { FetchCharacterQuery } from "./FetchCharacter.query";

class FetchCharacterService {
  async execute() {
    console.log("FETCHING CHARACTER LIST");
    await sleep(3000);
    const response = await graphqlClient.request<FetchCharacterDTO>(
      FetchCharacterQuery
    );
    return response.character
      .slice(0, 5)
      .map((character) => ({ ...character, id: Number(character.id) }));
  }
}

export const fetchCharacterService = new FetchCharacterService();
