import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import ReduxThunk from "redux-thunk";
import counterReducer from "./ducks/counter-module";
import messagerReducer from "./ducks/messager-module";

// store 생성
const store = createStore(
  combineReducers({
    counter: counterReducer,
    messager: messagerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(ReduxThunk))
);

export default store;