export const PUSH_MESSAGE = "push_message";
export const POP_MESSAGE = "pop_message";

// TODO: Action Creator 함수 만들기 
// 인자를 받지 않는 push => 특정 문자열을 임의로 생성하여 전달한다.
// 인자를 받지 않는 pop => 등록한 문자를 제거한다.
export const push = () => ({
  type: PUSH_MESSAGE,
  payload: {
    message: `메시지를 추가합니다 ${Date.now()}`
  }
});

export const pop = () => ({
  type: POP_MESSAGE
});