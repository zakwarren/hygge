import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getSelection, getCategories } from "../store/actions/index";

export const useLoadData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSelection());
  }, [dispatch]);
};
