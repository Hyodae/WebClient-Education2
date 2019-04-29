export const INCREASE = "increase";
export const DECREASE = "decrease";
export const RESET = "reset";
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