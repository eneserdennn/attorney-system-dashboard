import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, selectTasks } from "redux/store/reducers/tasks";

export const useGetAllTasks = (status) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks());
    }
  }, [dispatch, status]);

  return { tasks };
};
