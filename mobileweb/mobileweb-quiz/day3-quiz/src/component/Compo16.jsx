import React, {Component} from "react";

/**
 * @todo
 * 1) "+" 버튼을 클릭하면, 목록(allItems 배열)이 순서대로 노출됩니다.
 *    a) 노출은 다음과 같이 출력 되어야 합니다.
 *       "-" 버튼 / 과일명 / 수량입력 <input> 요소
 *    b) 목록이 모두 출력되면, "+" 버튼이 비활성되어 더이상 클릭되지 않아야 합니다.
 * 
 * 2) "-" 버튼 클릭시 해당 요소가 삭제 됩니다.
 */
const allItems = [
    {id: "apple", value: "사과"},
    {id: "orange", value: "오렌지"},
    {id: "grape", value: "포도"},
    {id: "pear", value: "배"},
    {id: "banana", value: "바나나"}
];