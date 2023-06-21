import { gql } from "graphql-request";

export const FetchCharacterQuery = gql`
  query fetchCharacter {
    character {
      id
      name
    }
  }
`;
