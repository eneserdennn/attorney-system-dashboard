import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClients, selectAllClients } from "redux/store/reducers/clients";

export const useGetEvents = (status) => {
  const dispatch = useDispatch();
  const clients = useSelector(selectAllClients);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchClients());
    }
  }, [dispatch, status]);

  return { clients };
};
