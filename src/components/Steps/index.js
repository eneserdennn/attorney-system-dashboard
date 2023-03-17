import React from "react";
import { Steps, Button } from "antd";
import { stepInfo } from "./Constants";
import EditFormFirstStep from "pages/client/EditFormFirstStep";
import { useDispatch, useSelector } from "react-redux";
import {
  getModalType,
  nextStepCount,
  prevStepCount,
  stepCountState,
} from "redux/store/reducers/modal";
import EditFormSecondStep from "pages/client/EditFormSecondStep";
import EditFormThirdStep from "pages/client/EditFormThirdStep";
const ModalStep = () => {
  const dispatch = useDispatch();
  const stepCount = useSelector(stepCountState);
  const modalType = useSelector(getModalType);
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

  return (
    <>
      <Steps current={stepCount} items={items} />
      {modalType === "client" && stepCount == 0 && <EditFormFirstStep />}
      {modalType === "client" && stepCount == 1 && <EditFormSecondStep />}
      {modalType === "client" && stepCount == 2 && <EditFormThirdStep />}

      {stepCount < stepInfo.length - 1 && (
        <Button type="primary" onClick={handleNext}>
          Next
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
