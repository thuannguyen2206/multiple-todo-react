import { CHANGE_STATUS } from "../constants";

export const changeStatus = (status) => {
  return {
    type: CHANGE_STATUS,
    payload: status,
  };
};
