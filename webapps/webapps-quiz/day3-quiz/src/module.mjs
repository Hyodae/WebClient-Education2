/*
    @TODO
    - getMax()는 default로 export
    - isString는 일반 export
    - color는 'colorList'로 export
*/
function getMax(...val) {
    return Math.max(...val);
}

const isString = (val) => typeof val === "string";
const color = ["yellow", "brown", "red", "green", "black"];