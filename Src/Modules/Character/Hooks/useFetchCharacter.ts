import { useQuery } from "react-query";
import { fetchCharacterByIdService } from "../Services/FetchCharacterById/FetchCharacterById.service";

export const useFetchCharacterDetail = (id: number) => {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["Character:Detail", id],
    queryFn: () => fetchCharacterByIdService.execute(id),
  });

  return {
    isLoading,
    character: data,
    refetchCharacterList: refetch,
  };
};
