// TODO: react-actions로 간소화해보기
const {
  createAction,
  combineActions,
  handleActions
} = ReduxActions;

const INCREASE = "increase";
const INCREASE_START = "increase_start";
const INCREASE_SUCCESS = "increase_success";
const INCREASE_FAILURE = "increase_failure";
const DECREASE = "decrease";
const DECREASE_START = "decrease_start";
const DECREASE_SUCCESS = "decrease_success";
const DECREASE_FAILURE = "decrease_failure";
const RESET = "reset";
const RESET_START = "reset_start";
const RESET_SUCCESS = "reset_success";
const RESET_FAILURE = "reset_failure";

// 1. action creator를 createAction으로 바꾸기.
// 2. increase, decrease를 하나의 로직으로 쓸수 있도록 바꾸기
export const increase = createAction(INCREASE, step => ({
  step
}));
export const decrease = createAction(DECREASE, step => ({
  step: -step
}));
export const reset = createAction(RESET);

export const increaseAsync = (step) => ({
  type: {
    REQUEST: INCREASE_START,
    SUCCESS: INCREASE_SUCCESS,
    FAILURE: INCREASE_FAILURE
  },
  request: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(Math.random() * 2)) {
        resolve(increase(step).payload);
      } else {
        reject();
      }
    }, 1000);
  })
});

export const decreaseAsync = (step) => ({
  type: {
    REQUEST: DECREASE_START,
    SUCCESS: DECREASE_SUCCESS,
    FAILURE: DECREASE_FAILURE
  },
  request: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(Math.random() * 2)) {
        resolve(decrease(step).payload);
      } else {
        reject();
      }
    }, 1000);
  })
});
export const resetAsync = (step) => ({
  type: {
    REQUEST: RESET_START,
    SUCCESS: RESET_SUCCESS,
    FAILURE: RESET_FAILURE
  },
  request: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(Math.random() * 2)) {
        resolve(reset());
      } else {
        reject();
      }
    }, 1000);
  })
});

// 3. reducer를 handleActions로 바꾸기
// combineActions로 다중 case 처리하기
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
  [combineActions(INCREASE_SUCCESS, DECREASE_SUCCESS)]: (state, {
    payload: {
      step,
      isLoading,
      error
    }
  }) => ({
    ...state,
    number: state.number + step,
    isLoading,
    error,
  }),
  [RESET_SUCCESS]: (state, {
    payload: {
      isLoading,
      error
    }
  }) => ({
    ...state,
    number: 0,
    isLoading,
    error
  }),
  [combineActions(INCREASE_START, INCREASE_FAILURE,
    DECREASE_START, DECREASE_FAILURE,
    RESET_START, RESET_FAILURE
  )]: (state, {
    payload
  }) => ({
    ...state,
    ...payload
  })
}, {
  number: 0,
  name: "sclove-warren",
  isLoading: false,
  error: false
});