import { BUY_PASTAS } from "./pastasTypes";

const initialState = {
  pastas: 4
};

const pastasReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_PASTAS:
      return {
        ...state,
        pastas: state.pastas + action.weight
      };
    case EAT_PASTAS:
      return {
        ...state,
        pastas: state.pastas - action.weight
      }
    case BUY_RICE:
      return {
        ...state,
        rice: state.rice + action.weight
      }
    case EAT_RICE:
      return {
        ...state,
        rice: state.rice - action.weight
      }
    default:
      return state;
  }
}

export default pastasReducer;