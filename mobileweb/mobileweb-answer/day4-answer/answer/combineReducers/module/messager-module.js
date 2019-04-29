const PUSH_MESSAGE = "push_message";
const POP_MESSAGE = "pop_message";

export const push = () => ({
  type: PUSH_MESSAGE,
  payload: {
    message: `메시지를 추가합니다 ${Date.now()}`
  }
});

export const pop = () => ({
  type: POP_MESSAGE
});

export default function messager(state = {
  messages: []
}, action) {
  switch (action.type) {
    case PUSH_MESSAGE:
      return {
        messages: [
          ...state.messages,
          action.payload.message
        ]
      };
    case POP_MESSAGE:
      return {
        messages: state.messages.slice(1)
      };
    default:
      return state;
  }
}