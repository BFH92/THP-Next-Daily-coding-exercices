import { BUY_RICE, EAT_RICE } from "./ricesTypes";

const initialStateRice = {
  rice: 4
};

const riceReducer = (state = initialStateRice, action) => {
  switch(action.type) {
    case BUY_RICE:
      return {
        ...state,
        rice: state.rice + 1
      }
    case EAT_RICE:
      return {
        ...state,
        rice: state.rice - 1
      }
    default:
      return state;
  }
}

export default riceReducer;