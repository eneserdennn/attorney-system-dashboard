import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUserOptions } from "redux/store/reducers/users";

export const useGetUsers = (status) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUserOptions);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return { users };
};
