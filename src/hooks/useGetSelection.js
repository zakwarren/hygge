import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getSelection } from "../store/actions/hygge";

export const useGetSelection = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSelection()), [dispatch]);
};
