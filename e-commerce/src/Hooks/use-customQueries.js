import { useDispatch } from "react-redux";
import { fetchingRequest } from "../utlis/fetching";
import { useMemo } from "react";
import { useQueries } from "@tanstack/react-query";
const useCustomQueries = (arrayOfQueries) => {
  const dispatch = useDispatch();
  const queries = useMemo(
    () =>
      arrayOfQueries.map((query) => {
        return {
          queryKey: query.key,
          queryFn: ({ signal }) => fetchingRequest({ url: query.url, signal }),
          onSuccess: (data) => {
            query.replacerAction && dispatch(query.replacerAction(data));
          },
          staleTime: 10000,
        };
      }),
    [arrayOfQueries]
  );
  const result = useQueries({
    queries: queries,
    combine: (queries) => queries,
  });
  const isLoading = result.some((query) => query.isLoading);
  return { result, isLoading };
};

export default useCustomQueries;
