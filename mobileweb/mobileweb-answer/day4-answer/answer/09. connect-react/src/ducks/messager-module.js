import {
  createAction,
  handleActions
} from "redux-actions";

const PUSH_MESSAGE = "push_message";
const POP_MESSAGE = "pop_message";

export const push = createAction(PUSH_MESSAGE, () => ({
  message: `메시지를 추가합니다 ${Date.now()}`
}));
export const pop = createAction(POP_MESSAGE);

export default handleActions({
  [PUSH_MESSAGE]: (state, {
    payload: {
      message
    }
  }) => ({
    messages: [
      ...state.messages,
      message
    ]
  }),
  [POP_MESSAGE]: (state) => ({
    messages: state.messages.slice(1)
  })
}, {
  messages: []
});