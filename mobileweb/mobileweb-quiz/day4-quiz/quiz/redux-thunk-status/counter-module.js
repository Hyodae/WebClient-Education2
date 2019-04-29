// TODO:
// [상태 관리하기] increaseAsync, decreaseAsync, resetAsync 상태 action 처리하기
// action start - (pending) - action end (success)
//                          ㄴ action end (failure)
// action start 액션에서 isLoading 속성을 true로 , error을 false로 변경
// action end 액션에서 isLoading 속성을 false로 변경
//   - success 액션에서 error 속성을 false로 추가
//   - failure 액션에서 error 속성을 true로 추가
// 예제에서는 parseInt(Math.random()*2)의 값으로 성공 실패 상태를 랜덤하게 구성한다.
const INCREASE = "increase";
const INCREASE_START;
const INCREASE_SUCCESS;
const INCREASE_FAILURE;

const DECREASE = "decrease";
const DECREASE_START;
const DECREASE_SUCCESS;
const DECREASE_FAILURE;

const RESET = "reset";
const RESET_START;
const RESET_SUCCESS;
const RESET_FAILURE;

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
const increateAsyncStart;
const increateAsyncSuccess;
const increateAsyncFailure;
const decreateAsyncStart;
const decreateAsyncSuccess;
const decreateAsyncFailure;
const resetAsyncStart;
const resetAsyncSuccess;
const resetAsyncFailure;

export const increaseAsync = (step) => (dispatch, getState) => {
  // TODO: 1초 후 
  // action start - (pending) - action end (success)
  //                          ㄴ action end (failure)
  // increaseStart -> increate -> increaseSuccess
  //               -> increaseFailure
}
export const decreaseAsync = (step) => (dispatch, getState) => {
  // TODO: 1초 후
  // action start - (pending) - action end (success)
  //                          ㄴ action end (failure)
  // decreaseStart -> decreate -> decreaseSuccess
  //               -> decreaseFailure
}
export const resetAsync = (step) => (dispatch, getState) => {
  // TODO: 1초 후
  // action start - (pending) - action end (success)
  //                          ㄴ action end (failure)
  // resetStart -> reset -> resetSuccess
  //            -> resetFailure
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

      // TODO:
    case INCREASE_START:
    case DECREASE_START:
    case RESET_START:
    case INCREASE_SUCCESS:
    case DECREASE_SUCCESS:
    case RESET_SUCCESS:
    case INCREASE_FAILURE:
    case DECREASE_FAILURE:
    case RESET_FAILURE:
    default:
      return state;
  }
}