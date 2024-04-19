import { useQuery } from "react-query";
import { fetchProducts, productsActions } from "../store/products";
import { useDispatch, useSelector } from "react-redux";
import { fetchingRequest } from "../utlis/fetching";
import { useCallback } from "react";
const useCustomQuery = ({queryKey,url, replacerAction}) => {
  const dispatch = useDispatch();
  const onSuccess = useCallback((data)=>{
    replacerAction && dispatch(replacerAction(data));
  },[]);
  const result = useQuery({
    queryKey,
    queryFn: () => fetchingRequest(url),
    onSuccess: onSuccess,
    staleTime:1000
  });
  return result;
};

export default useCustomQuery;
