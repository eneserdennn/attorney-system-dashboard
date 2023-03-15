import React, { useState } from "react";
import { Steps, Button } from "antd";
import { stepInfo } from "./Constants";
const ModalStep = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = stepInfo.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Steps current={current} items={items} />
      {current < stepInfo.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          Next
        </Button>
      )}
      {current === stepInfo.length - 1 && (
        <Button type="primary" onClick={() => console.log("tik")}>
          Done
        </Button>
      )}
      {current > 0 && (
        <Button
          style={{
            margin: "0 8px",
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )}
    </>
  );
};

export default ModalStep;
