import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllClients } from "redux/store/reducers/clients";
import { fetchClients } from "redux/store/reducers/fetchClients";

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
