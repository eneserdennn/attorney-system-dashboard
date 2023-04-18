import { useEffect, useState } from "react";
import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/es/exports";
import { fetchFolders, selectAllFolders } from "redux/store/reducers/folders";

export const useGetAllFolders = (status) => {
  const dispatch = useDispatch();
  const folders = useSelector(selectAllFolders);
  useEffect(() => {
    if (status === "idle" || status === "loading") {
      dispatch(fetchFolders());
    }
  }, [status, dispatch]);

  return { folders };
};
