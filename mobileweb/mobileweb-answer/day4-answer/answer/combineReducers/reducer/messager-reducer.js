// TODO: action을 import 한다. counter-reducer 참조
import {
  PUSH_MESSAGE,
  POP_MESSAGE
} from "../action/messager-action.js";

// TODO: messager reducer를 만든다.
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