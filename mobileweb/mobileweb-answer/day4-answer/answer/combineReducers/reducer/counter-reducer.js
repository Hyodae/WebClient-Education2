import {
  INCREASE,
  DECREASE,
  RESET
} from "../action/counter-action.js";

export default function counter(state = {
  number: 0,
  name: "sclove-warren"
}, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + action.payload.step
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - action.payload.step
      };
    case RESET:
      return {
        ...state,
        number: 0
      };
    default:
      return state;
  }
}