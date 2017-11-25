import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "./marketTypes";

const createOrder = payload => {
  return {
    type: CREATE_ORDER,
    payload
  };
};

const moveOrderToFarm = payload => {
  return {
    type: MOVE_ORDER_TO_FARM,
    payload
  };
};

export { createOrder, moveOrderToFarm };
