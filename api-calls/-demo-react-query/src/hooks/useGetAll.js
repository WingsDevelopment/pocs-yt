import { useQuery } from "react-query";
import { getAll } from "../api/FetchDataApi";

export const useGetAll = () => {
  const { isLoading, error, data, isFetching } = useQuery(["getAll"], getAll, {
    onSuccess: (data) => {
      //you could add this to query QueryData for getById, but there is even a better way!
    },
  });

  return {
    isLoading,
    error,
    data,
    isFetching,
  };
};
