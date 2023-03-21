import { useGetAllTasks } from "hooks/useGetAllTasks";
import React from "react";
import { useSelector } from "react-redux";
import { selectStatusTasks } from "redux/store/reducers/tasks";

const NotStarted = () => {
  const status = useSelector(selectStatusTasks);
  const dnm = useGetAllTasks(status);
  console.log(dnm);

  return <div>NotStarted</div>;
};

export default NotStarted;
