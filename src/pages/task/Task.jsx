import { Tabs } from "antd";

import React from "react";
import MainCard from "../../components/MainCard";
import NotStarted from "./NotStarted/index";

const Task = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Not Started`,
      children: <NotStarted />,
    },
    {
      key: "2",
      label: `In Progress`,
      children: `Content of Tab Pane 2`,
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
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </MainCard>
  );
};

export default Task;
