// TODO:
// [상태 관리하기] increaseAsync, decreaseAsync, resetAsync 상태 action 처리하기
// action start - (pending) - action end (success)
//                          ㄴ action end (failure)
// action start 액션에서 isLoading 속성을 true로 , error을 false로 변경
// action end 액션에서 isLoading 속성을 false로 변경
//   - success 액션에서 error 속성을 false로 추가
//   - failure 액션에서 error 속성을 true로 추가
// 예제에서는 parseInt(Math.random()*2)의 값으로 성공 실패 상태를 랜덤하게 구성한다.
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
const increateAsyncStart = () => ({
  type: INCREASE_START
});
const increateAsyncSuccess = () => ({
  type: INCREASE_SUCCESS
});
const increateAsyncFailure = () => ({
  type: INCREASE_FAILURE
});
const decreateAsyncStart = () => ({
  type: DECREASE_START
});
const decreateAsyncSuccess = () => ({
  type: DECREASE_SUCCESS
});
const decreateAsyncFailure = () => ({
  type: DECREASE_FAILURE
});
const resetAsyncStart = () => ({
  type: RESET_START
});
const resetAsyncSuccess = () => ({
  type: RESET_SUCCESS
});
const resetAsyncFailure = () => ({
  type: RESET_FAILURE
});

export const increaseAsync = (step) => (dispatch, getState) => {
  dispatch(increateAsyncStart());
  setTimeout(() => {
    if (parseInt(Math.random() * 2)) {
      dispatch(increase(step));
      dispatch(increateAsyncSuccess());
    } else {
      dispatch(increateAsyncFailure());
    }
  }, 1000);
}
export const decreaseAsync = (step) => (dispatch, getState) => {
  dispatch(decreateAsyncStart());
  setTimeout(() => {
    if (parseInt(Math.random() * 2)) {
      dispatch(decrease(step));
      dispatch(decreateAsyncSuccess());
    } else {
      dispatch(decreateAsyncFailure());
    }
  }, 1000);
}
export const resetAsync = (step) => (dispatch, getState) => {
  dispatch(resetAsyncStart());
  setTimeout(() => {
    if (parseInt(Math.random() * 2)) {
      dispatch(reset(step));
      dispatch(resetAsyncSuccess());
    } else {
      dispatch(resetAsyncFailure());
    }
  }, 1000);
}

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
    case INCREASE_START:
    case DECREASE_START:
    case RESET_START:
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case INCREASE_SUCCESS:
    case DECREASE_SUCCESS:
    case RESET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false
      };
    case INCREASE_FAILURE:
    case DECREASE_FAILURE:
    case RESET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}