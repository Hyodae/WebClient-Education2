import {
  createAction,
  combineActions,
  handleActions
} from "redux-actions";

const INCREASE_START = "increase_start";
const INCREASE = "increase";
const INCREASE_SUCCESS = "increase_success";
const INCREASE_FAILURE = "increase_failure";

const DECREASE_START = "decrease_start";
const DECREASE = "decrease";
const DECREASE_SUCCESS = "decrease_success";
const DECREASE_FAILURE = "decrease_failure";

const RESET_START = "reset_start";
const RESET = "reset";
const RESET_SUCCESS = "reset_success";
const RESET_FAILURE = "reset_failure";

export const increase = createAction(INCREASE, step => ({
  step
}));
export const decrease = createAction(DECREASE, step => ({
  step: -step
}));
export const reset = createAction(RESET);

const increateAsyncStart = createAction(INCREASE_START);
const increateAsyncSuccess = createAction(INCREASE_SUCCESS);
const decreateAsyncStart = createAction(DECREASE_START);
const decreateAsyncSuccess = createAction(DECREASE_SUCCESS);
const resetAsyncStart = createAction(RESET_START);
const resetAsyncSuccess = createAction(RESET_SUCCESS);

export const increaseAsync = (step) => (dispatch, getState) => {
  dispatch(increateAsyncStart());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(increase(step));
      dispatch(increateAsyncSuccess());
      resolve();
    }, 1000)
  });
}

export const decreaseAsync = (step) => (dispatch, getState) => {
  dispatch(decreateAsyncStart());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(decrease(step));
      dispatch(decreateAsyncSuccess());
      resolve();
    }, 1000);
  });
}
export const resetAsync = (step) => (dispatch, getState) => {
  dispatch(resetAsyncStart());
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(reset(step));
      dispatch(resetAsyncSuccess());
      resolve();
    }, 1000);
  });
}
export default handleActions({
  [combineActions(INCREASE, DECREASE)]: (state, {
    payload: {
      step
    }
  }) => ({
    ...state,
    number: state.number + step
  }),
  [RESET]: state => ({
    ...state,
    number: 0
  }),
  [combineActions(INCREASE_START, DECREASE_START, RESET_START)]: state => ({
    ...state,
    isLoading: true,
    error: false
  }),
  [combineActions(INCREASE_SUCCESS, DECREASE_SUCCESS, RESET_SUCCESS)]: state => ({
    ...state,
    isLoading: false,
    error: false
  }),
  [combineActions(INCREASE_FAILURE, DECREASE_FAILURE, RESET_FAILURE)]: state => ({
    ...state,
    isLoading: false,
    error: true
  }),
}, {
  number: 0,
  name: "sclove-warren",
  isLoading: false,
  error: false
});