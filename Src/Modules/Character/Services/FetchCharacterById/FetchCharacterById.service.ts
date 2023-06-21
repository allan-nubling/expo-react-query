import { sleep } from "../../../Shared/Utils";
import { graphqlClient } from "../../../Shared/Services/GraphqlClient";
import { FetchCharacterByIdDTO } from "./FetchCharacterById.dto";
import { FetchCharacterByIdQuery } from "./FetchCharacterById.query";

class FetchCharacterByIdService {
  async execute(id: number) {
    console.log(`FETCHING CHARACTER BY ID: ${id}`);
    await sleep(3000);
    const response = await graphqlClient.request<FetchCharacterByIdDTO>(
      FetchCharacterByIdQuery,
      {
        id,
      }
    );
    return response.characterById;
  }
}

export const fetchCharacterByIdService = new FetchCharacterByIdService();
