import { Tabs } from "antd";

import React from "react";

const Task = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Not Started`,
      children: <p>ns deneme</p>,
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
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default Task;
