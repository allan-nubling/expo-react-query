import { sleep } from "../../Shared/Utils";
import { CharacterModel } from "../Model/Character.model";
import { useInfiniteQuery } from "react-query";

export const useFetchCharactersListWithInfinityQuery = () => {
  const fetchProjects = async ({
    pageParam = "https://rickandmortyapi.com/api/character?page=1",
  }) => {
    // await sleep(200);
    const data = await fetch(pageParam, {
      method: "GET",
    });
    return data.json();
  };

  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    "FetchAllCharacters",
    fetchProjects,
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.info.next || undefined;
      },
    }
  );

  const characterList = data?.pages.flatMap(
    (item) => item.results
  ) as CharacterModel[];

  return {
    isFetching,
    characterList: characterList || ([] as CharacterModel[]),
    fetchNextPage,
  };
};
