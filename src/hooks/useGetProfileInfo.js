import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, SelectUser } from "../Redux/slices/userSlice";

const useGetProfileInfo = (status) => {
  const dispatch = useDispatch();
  const profileInfo = useSelector(SelectUser);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProfile());
    }
  }, [dispatch, status]);

  return { profileInfo };
};

export default useGetProfileInfo;
