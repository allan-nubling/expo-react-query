import { gql } from "graphql-request";

export const FetchCharacterByIdQuery = gql`
  query fetchCharacterById($id: Int!) {
    characterById(id: $id) {
      id
      name
      status
      species
      gender
    }
  }
`;
