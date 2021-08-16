import { BUY_PASTAS,EAT_PASTAS } from "./pastasTypes";

const initialStatePastas = {
 pastas : 4
};

const pastasReducer = (state = initialStatePastas, action) => {
  switch(action.type) {
    case BUY_PASTAS:
      return {
        ...state,
        pastas: state.pastas + 1
      };
    default:
      return state;
  }
}

export default pastasReducer;