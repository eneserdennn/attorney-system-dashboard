import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllClients, fetchClients } from "redux/store/reducers/clients";

export const useGetAllClients = (status) => {
  const dispatch = useDispatch();
  const clients = useSelector(selectAllClients);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchClients());
    }
  }, [status, dispatch]);
  return { clients };
};
