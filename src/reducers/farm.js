import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";

const initialState = {
  orders: []
};

const farm = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return Object.assign({}, state, {
        orders: state.orders.filter(order => action.payload.id !== order.id)
      });
    default:
      return state;
  }
};

export default farm;
