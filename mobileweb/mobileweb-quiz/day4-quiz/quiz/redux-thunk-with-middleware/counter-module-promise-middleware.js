// TODO: 미들웨어로 간소화하기
// 
// 비동기 액션을 다음과 같이 호출하기
// {
//   type: {
//     REQUEST: INCREASE_START,
//     SUCCESS: INCREASE_SUCCESS,
//     FAILURE: INCREASE_FAILURE
//   },
//   request: () => new Promise.resolve() 
// }
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

// TODO: increaseAsync를 참조하여 간소화하기
export const decreaseAsync;
// TODO: increaseAsync를 참조하여 간소화하기
export const resetAsync;

export default function counter(state = {
  number: 0,
  name: "sclove-warren",
  isLoading: false,
  error: false
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
    case INCREASE_SUCCESS:
      return {
        ...state,
        number: state.number + action.payload.step,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case INCREASE_START:
    case INCREASE_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
      // TODO: INCREASE_SUCCESS를 참조하여 DECREASE_SUCCESS, RESET_SUCCESS 간소화하기
      // TODO: INCREASE_START, INCREASE_FAILURE를 참조하여
      // DECREASE_START, DECREASE_FAILURE, RESET_START, RESET_FAILURE 간소화하기
  }
}