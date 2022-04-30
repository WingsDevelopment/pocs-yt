import { useMutation, useQueryClient } from "react-query";
import { createFruit } from "../api/FetchDataApi";

export const useCreateFruit = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, error } = useMutation(
    ({ name }) => createFruit(name),
    {
      //default behavior is to retry 3 times, but we don't will override this behavior
      retry: null,
      //optimistic update, add item to the cache array before server response
      onMutate: () => {
        queryClient.setQueriesData(["getTotalCount"], (prevData = 0) => {
          return ++prevData;
        });
      },
      onSuccess: (data) => {
        // refresh the cash by invalidating queries
        queryClient.invalidateQueries(["getList"]);
        queryClient.invalidateQueries(["getByPage"]);
      },
      onError: (err) => {
        //you can't just undo, you have to implement undo logic
        queryClient.setQueriesData(["getTotalCount"], (prevData = 0) => {
          if (prevData === 0) return prevData;
          return --prevData;
        });
      },
    }
  );

  return {
    isLoading,
    error,
    mutateAsync, //retun the length of the array
  };
};
