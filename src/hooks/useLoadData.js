import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getSelection, getCategories } from "../store/actions/hygge";

export const useLoadData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSelection());
  }, [dispatch]);
};
