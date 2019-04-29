import Messager from "./components/Messager";
import { push, pop } from "./ducks/messager-module";


// TODO: store의 state와 맵핑할 prop를 지정
// store의 messager의 messages를 count props로 전달한다.
const mapStateToProps;

// dispatch를 맵핑할 prop를 지정
//   onPush <- push
//   onPop  <- pop
//
// TODO: 1. dispatch를 호출하도록 지정해줌.
// TODO: 2. redux의 bindActionCreators 호출
// TODO: 3. 함수명의 객체를 넘기면 dispatch를 인자로 갖는 함수로 자동 변경
const mapDispatchToProps;

// TODO: Counter를 connect한다.
export default Messager;
