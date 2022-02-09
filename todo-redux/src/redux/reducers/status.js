import { CHANGE_STATUS } from "../constants";
import { TypeStatus } from "../../services/Common";

const StatusReducer = (state = TypeStatus.All, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default StatusReducer;
