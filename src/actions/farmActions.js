import { MOVE_ORDER_TO_CUSTOMER } from "./farmTypes";

const moveOrderToCustomer = payload => {
  return {
    type: MOVE_ORDER_TO_CUSTOMER,
    payload
  };
};

export { moveOrderToCustomer };
