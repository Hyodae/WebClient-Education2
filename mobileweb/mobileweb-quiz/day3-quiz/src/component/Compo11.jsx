import React, {Component} from "react";

/**
 * @todo
 * 1) 상위 노드에서 하위노드로 state 값이 전달되는 컴포넌트를 만드세요.
 *    각각은 아래와 같이 하위 노드를 렌더링해야 합니다.
 *    - <First />: <div><h1>First <Second /></h1></div>
 *    - <Second />: <div><h2>Second</h1> <Thrid /></div>
 *    - <Third />: <div><h3>Third</h1> {전달된 값}</div>
 * 
 * 2) 1번 항목에서 만든 컴포넌트를 ContextAPI를 사용하도록 변경해 보세요.
 */