### 1. redux 개요

- 상태 관리 라이브러리들
- Flux 아키텍쳐
  https://facebook.github.io/flux/

  Why?
  첫번째 단방향
  최상위 컴포넌트에서 상태관리를 하는 메소드가 너무 많아 복잡
  props를 밑으로 내려야하는 불편함.
  성능이슈 (상위가 바뀌면 하위도 다 바뀜)

  - 상태관리의 로직을 컴포넌트 밖에서 처리.
  - dispatch -> reducer가 상태를 바꿈. 해당 reducer와 연결된 컴포넌트에 상태가 바로 props로 전달됨.

1. 프리젠테이셔널 컴포넌트: 오직 뷰만.
   오직 props만 데이터를 가져옮. (state가 있다면 데이터가 아닌 UI에 관련된것 정도)
2. 컨테이너 컴포넌트: 내부에 DOM이 없음. 감싸는 용도만 사용. 스타일도 없음. 리덕스에 접근. 상태를 가짐.

=> 유저와 데이터의 분리로 재사용성 좋다.

### 2. 함수형 프로그래밍.

- 본질
- higher-order function
- forEach, map, reduce, flatMap

### 3. Redux 사용하기

#### Redux 구성

`01. redux_basic.html` : Action, ActionCreator, Reducer, Store, Middleware

- Action => 객체 { type, payload? }
- ActionCreator
- Reducer => 순수 함수 (store이 상태를 변경하는 작업)
- Store => 오직 하나. getState만 존재. state 변경을 action으로.
- ducks = Action, Action Creator, Reducer
- middleware => higher-order function, side effect 처리 (순수함수가 아닌 것), async action을 action으로 변경한다.

[추가 설명]

- Object.assign
- Object spread operator

### 4. Redux Store 설계

- Store 설계 방법
  1. 기능 단위로 구성
  2. 페이지 단위로 구성

#### Redux 규칙

- Store 는 하나
- Reducer는 순수함수
- state는 readonly `단 방향`

`2. redux_combine_reducer.html`

[추가 설명]

- script type="module"
  https://jakearchibald.com/2017/es-modules-in-browsers/
- duck구조: actionType + action 생성함수 + 리듀서

#### 코드 단순화하기. (redux-actions)

- action 생성 함수 => createAction
- switch => handleActions / combineActions

### 5. Middleware

Action과 리듀서 사이의 중간자

- 로거 미들웨어 만들기. `04.middleware_logger_answer.html`

  > compose(sqr, add2); // sqr(add2(x))
  > Each function is expected to accept a single parameter. 오른쪽에서 왼쪽으로. 예외적으로 가장 마지막 함수는 여러개의 인자를 받을수 있다.

- 비동기 미들웨어 만들기. (redux-thunk)
  thunk 생성 함수 (Action `객체`가 아닌 `함수`를 생성하는 함수)

  `05.middleware_react-thunk_answer.html`
  `06.react-thunk-status_answer.html`

- 그외로.. redux-promise-middleware, redux-saga, redux-observable

### 6. Redux + React

`react-redux`

- connect
  - mapStateToProps <store의 state를 props로 받기>
  - mapDispatchToProps

### 7. React의 context와 redux의 비교.

#### redux

- 로컬 스토리지에 상태를 영속적으로 저장하고 시작할 때 다시 불러오는 데 특히 뛰어납니다.
- 상태를 서버에서 미리 채워서 HTML에 담아 클라이언트로 보내고 앱을 시작할 때 다시 불러오는데 특히 뛰어납니다.
- 사용자의 액션을 직렬화해서 상태와 함께 자동으로 버그 리포트에 첨부할 수 있습니다. 개발자들은 이를 통해 에러를 재현할 수 있습니다.
- 액션 객체를 네트워크를 통해 보내면 코드를 크게 바꾸지 않고도 협업 환경을 구현할 수 있습니다.
- 실행취소 내역의 관리나 낙관적인 변경(optimistic mutations)을 코드를 크게 바꾸지 않고도 구현할 수 있습니다.
- 개발할 때 상태 내역 사이를 오가고 액션 내역에서 현재 상태를 다시 계산하는 일을 TDD 스타일로 할 수 있습니다.
- 개발자 도구에게 완전한 조사와 제어를 가능하게 해서 개발자들이 자신의 앱을 위한 도구를 직접 만들 수 있게 해 줍니다.
- 비즈니스 로직 대부분을 재사용하면서 UI를 변경할 수 있게 해 줍니다.
