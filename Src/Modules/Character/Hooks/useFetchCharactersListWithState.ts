import { useEffect, useState } from "react";
import { fetchCharacterService } from "../Services/FetchCharacter/FetchCharacter.service";
import { CharacterModel } from "../Model/Character.model";

export const useFetchCharactersList = () => {
  const [loading, setLoading] = useState(false);

  const [characterList, setCharacterList] = useState<
    Pick<CharacterModel, "id" | "name">[]
  >([]);

  const fetch = async () => {
    setLoading(true);
    const character = await fetchCharacterService.execute();
    setCharacterList(character);
    setLoading(false);
  };

  useEffect(() => {
    console.log("fetch");
    fetch();
  }, []);

  return { isLoading: loading, characterList, refetchCharacterList: fetch };
};
