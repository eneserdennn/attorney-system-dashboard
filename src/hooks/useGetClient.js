import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClient, selectClient } from "redux/store/reducers/clients";

const useGetClient = (windowLocation) => {
  const location = windowLocation.split("/")[2];
  const dispatch = useDispatch();
  const client = useSelector(selectClient);
  useEffect(() => {
    let dnm = true;
    if (dnm === true) {
      dispatch(fetchClient(location));
    }
  }, [dispatch, location]);

  return { client };
};
export default useGetClient;
