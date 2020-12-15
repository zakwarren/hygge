import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  getAllHygge,
  getSelection,
  getCategories,
} from "../store/actions/index";

export const useLoadData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHygge());
    dispatch(getCategories());
    dispatch(getSelection());
  }, [dispatch]);
};
