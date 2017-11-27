import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";

const initialState = {
  orders: []
};

const market = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case MOVE_ORDER_TO_FARM:
      return Object.assign({}, state, {
        orders: state.orders.filter(order => action.payload.id !== order.id)
      });
    default:
      return state;
  }
};

export default market;
