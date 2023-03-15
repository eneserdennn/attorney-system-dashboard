import React, { useState } from "react";
import { Steps, Button } from "antd";
import { stepInfo } from "./Constants";
import EditForm from "pages/client/EditForm";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStepCount,
  prevStepCount,
  resetStepCount,
  stepCountState,
} from "redux/store/reducers/modal";
const ModalStep = () => {
  const dispatch = useDispatch();
  const stepCount = useSelector(stepCountState);

  const handleNext = () => {
    dispatch(nextStepCount());
  };
  const handlePrev = () => {
    dispatch(prevStepCount());
  };

  const items = stepInfo.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const handleDone = () => {
    dispatch(resetStepCount());
  };
  console.log(stepCount);

  return (
    <>
      <Steps current={stepCount} items={items} />
      {stepCount < stepInfo.length - 1 && (
        <Button type="primary" onClick={handleNext}>
          Next
        </Button>
      )}
      {stepCount === stepInfo.length - 1 && (
        <Button type="primary" onClick={handleDone}>
          Done
        </Button>
      )}
      {stepCount > 0 && (
        <Button
          style={{
            margin: "0 8px",
          }}
          onClick={handlePrev}
        >
          Previous
        </Button>
      )}
    </>
  );
};

export default ModalStep;
