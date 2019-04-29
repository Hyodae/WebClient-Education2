import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Messager from "./components/Messager";
import { push, pop } from "./ducks/messager-module";

// store의 state와 맵핑할 prop를 지정
const mapStateToProps = state => {
  return {
    messages: state.messager.messages
  };
};

// TODO: dispatch를 맵핑할 prop를 지정
// 1. dispatch를 호출하도록 지정해줌.
// const mapDispatchToProps = dispatch => ({
//   onPush: () => dispatch(push()),
//   onPop: () => dispatch(pop())
// });

// TODO: 2. redux의 bindActionCreators 호출
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       onPush: push,
//       onPop: pop
//     },
//     dispatch
//   );

// TODO: 3. 함수명의 객체를 넘기면 dispatch를 인자로 갖는 함수로 자동 변경
const mapDispatchToProps = {
  onPush: push,
  onPop: pop
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messager);
