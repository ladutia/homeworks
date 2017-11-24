import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const market = (state = { orders: [] }, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return state;
    case MOVE_ORDER_TO_FARM:
      return state;
    default:
      return state;
  }
};

export default market;
