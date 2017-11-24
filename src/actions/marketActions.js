import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "./marketTypes";

const createOder = () => {
  return {
    type: CREATE_ORDER,
    playload: ""
  };
};

const moveOrderToFarm = () => {
  return {
    type: MOVE_ORDER_TO_FARM,
    playload: ""
  };
};

export { createOder, moveOrderToFarm };
