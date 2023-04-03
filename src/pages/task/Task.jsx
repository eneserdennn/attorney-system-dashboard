import { Tabs } from "antd";

import React from "react";
import MainCard from "../../components/MainCard";
import NotStarted from "./NotStarted/index";
import AddIcon from "@mui/icons-material/Add";
import { Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectInProgressTasks,
  selectNotStartedTasks,
} from "redux/store/reducers/tasks";
import InProgress from "./InProgress/index";
const Task = () => {
  const inProgressTasks = useSelector(selectInProgressTasks);
  const notStartedTasks = useSelector(selectNotStartedTasks);
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Not Started`,
      children: <NotStarted notStartedTasks={notStartedTasks} />,
    },
    {
      key: "2",
      label: `In Progress`,
      children: <InProgress inProgressTasks={inProgressTasks} />,
    },
    {
      key: "3",
      label: `On Hold`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Completed`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <MainCard title={"Tasks"}>
      <Link to={"/add/task"}>
        <Tooltip title="Add a Task">
          <Button type="primary" shape="circle" icon={<AddIcon />} />
        </Tooltip>
      </Link>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </MainCard>
  );
};

export default Task;
