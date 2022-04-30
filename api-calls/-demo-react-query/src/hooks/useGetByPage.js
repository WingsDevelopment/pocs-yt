import { useQuery, useQueryClient } from "react-query";
import { getByPage } from "../api/FetchDataApi";

export const useGetByPage = (page, perPage) => {
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      ["getByPage", `${page}-${perPage}`],
      () => getByPage(page, perPage),
      {
        keepPreviousData: true,
        //setup stale time to not get confused while debugging.
        //   staleTime: 5000,
        initialData: () => {
          //once again we provide initial data to getAll query
          const data = queryClient.getQueryData("getAll");
          if (!data) return undefined;

          const start = page * perPage;
          const end = start + perPage;
          return data.slice(start, end);
        },
        //add query data to cache
        onSuccess: (data) => {
          data.map((fruit) => {
            queryClient.setQueryData(["getById", fruit?.id.toString()], fruit);
          });
        },
      }
    );

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  };
};
