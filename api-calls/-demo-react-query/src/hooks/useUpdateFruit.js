import { useMutation, useQueryClient } from "react-query";
import { updateFruit } from "../api/FetchDataApi";

export const useUpdateFruit = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, error } = useMutation(
    ({ id, name, description }) => updateFruit(id, name, description),
    {
      //default behavior is to retry 3 times, but we don't will override this behavior
      retry: null,
      //optimistic update, add item to the cache array before server response
      onMutate: ({ id, name, description }) => {
        queryClient.setQueriesData(["getById", id], (prevData) => {
          return { id, name, description };
        });
      },
      onSuccess: (data) => {
        // refresh the cash by invalidating queries
        queryClient.invalidateQueries(["getList"]);
        queryClient.invalidateQueries(["getByPage"]);
      },
      onError: (_err, _newData, context) => {
        //you can't just undo, you have to implement undo logic
        queryClient.setQueriesData(["getById", context.id], (prevData) => {
          console.log(prevData);
          return { ...prevData };
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
