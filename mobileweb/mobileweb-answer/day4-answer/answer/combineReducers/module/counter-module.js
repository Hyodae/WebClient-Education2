const INCREASE = "increase";
const DECREASE = "decrease";
const RESET = "reset";
export const increase = step => ({
  type: INCREASE,
  payload: {
    step
  }
});
export const decrease = step => ({
  type: DECREASE,
  payload: {
    step
  }
});
export const reset = () => ({
  type: RESET
});

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