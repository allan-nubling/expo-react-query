import { fetchCharacterService } from "../Services/FetchCharacter/FetchCharacter.service";
import { useQuery } from "react-query";

export const useFetchCharactersList = () => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["Character:List"],
    queryFn: fetchCharacterService.execute,
  });

  return { isLoading, characterList: data, refetchCharacterList: refetch };
};
