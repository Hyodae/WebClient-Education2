import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Counter from "./components/Counter";
import {
  increase,
  increaseAsync,
  decrease,
  decreaseAsync,
  reset,
  resetAsync
} from "./ducks/counter-module";

// store의 state와 맵핑할 prop를 지정
const mapStateToProps = state => {
  return {
    count: state.counter.number
  };
};

// dispatch를 맵핑할 prop를 지정
// TODO: 1. dispatch를 호출하도록 지정해줌.
// const mapDispatchToProps = dispatch => ({
//   onIncrease: step => dispatch(increase(step)),
//   onDecrease: step => dispatch(decrease(step)),
//   onReset: () => dispatch(reset()),
//   onIncreaseAsync: step => dispatch(increaseAsync(step)),
//   onDecreaseAsync: step => dispatch(decreaseAsync(step)),
//   onResetAsync: () => dispatch(resetAsync())
// });

// TODO: 2. redux의 bindActionCreators 호출
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       onIncrease: increase,
//       onDecrease: decrease,
//       onReset: reset,
//       onIncreaseAsync: increaseAsync,
//       onDecreaseAsync: decreaseAsync,
//       onResetAsync: resetAsync
//     },
//     dispatch
//   );

// TODO: 3. 함수명의 객체를 넘기면 dispatch를 인자로 갖는 함수로 자동 변경
const mapDispatchToProps = {
  onIncrease: increase,
  onDecrease: decrease,
  onReset: reset,
  onIncreaseAsync: increaseAsync,
  onDecreaseAsync: decreaseAsync,
  onResetAsync: resetAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
