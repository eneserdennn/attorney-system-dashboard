import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectAllUsers } from "redux/store/reducers/users";

export const useGetAllUsers = (status) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return { users };
};
