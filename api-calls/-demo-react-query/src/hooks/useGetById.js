import { useQuery, useQueryClient } from "react-query";
import { getById } from "../api/FetchDataApi";

export const useGetById = (id, pageId) => {
  const queryClient = useQueryClient();

  const { isLoading, error, data, isFetching } = useQuery(
    ["getById", id],
    //get single by name
    () => getById(id, pageId),
    {
      initialData: () => {
        //breaking change, use queryClient from hook instead of queryCache
        //filter your list from CACHE by name
        //if item is found, it will instant load and after that fetch for changes
        //if item is not found, it will load
        const data = queryClient.getQueryData("getAll");
        return data ? data.find((x) => x.id == id) : undefined;
      },
    }
  );

  return {
    isLoading,
    error,
    data,
    isFetching,
  };
};
