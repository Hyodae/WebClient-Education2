import "@babel/polyfill";
import getMaxNumber, {isString, colorList as color} from "./module";

const demo = {};
window.demo = demo;

demo.letConst = function() {
    // *** var를 let, const 선언으로 변경하라.
    const max = 5;
    const config = {
        value1: "abcd",
        value2: 3
    };

    try {
        max = 6;      // 오류가 발생되어야 한다.
    } catch(e) {
        console.log("const는 다시 할당할 수 없습니다.");
    }

    for(let x in config) {
        console.log(x, "=>", config[x]);
    }

    console.error(x, "<== undefined 인가?");
};

demo.defaultParam = function() {
    // *** 3개의 파라미터에 각각 다음의 값을 갖도록 구성하라.
    // ==> name은 "kildong", age는 24, hobby는 ["soccer", "music"]
    // 파라미터를 다음의 array에 포함시켜라
    function getInfo(name = "kildong", age = 24, hobby = ["soccer", "music"]) {
        return [name, age, hobby];
    }

    console.log(getInfo());
};

// *** Arrow function
// (5-1) 다음의 일반 함수들을 arrow function으로 변경하라
demo.arrowFunc1 = function() {
    const division = (val1, val2) => val1 / val2;
    const func1 = () => "오늘 날짜는 "+ (new Date()).toLocaleString() + " 입니다.";
    const func2 = name => "반갑습니다!, "+ name +"님~ ^^";

    console.log(division(100, 2));
    console.log(func1());
    console.log(func2("홍길동"));
}

// (5-2) lexical 스코프
demo.arrowFunc2 = function() {
    var handler = {
        el: document.getElementById("info"),
        init: function() {
            this.el.querySelector("button").addEventListener("click", e => {
                this.show(e.type);
            }, false);
        },
        show: function(type) {
            this.el.innerHTML = "Event " + type  + " fired. Id is " + this.el.id;
        }
    };

    handler.init();
}

// (5-3) 다음의 코드를 동작하도록 수정하세요.
demo.arrowFunc3 = function() {
    const Hobby = function() {
        this.list = [];
    }

    Hobby.prototype = {
        get: function() {
            return this.list;
        },
        add: function(name) {
            this.list.push(name);
        },
        size: function() {
            return this.list.length;
        }
    };

    const h = new Hobby();
    h.add("Movie");
    h.add("Music");

    console.log(h.get(), h.size());  // ["Movie", "Music"], 2 <== 출력
}

// (5-4) arguments 파라미터 값
// arrow function에서는 arguments를 사용할 수 없다.
demo.arrowFunc4 = function() {
    const sumAll = function() {
        let res = 0;

        // arrow function에서는 arguments를 사용할 수 없다.
        for(var i = 0; i < arguments.length; i++) {
            res += arguments[i];
        }

        return res;
    }

    console.log("-->", sumAll(10, 20, 30));  // 60이 출력되어야 함
}

// *** Object 표현식
// 최대한 object 표현식을 사용해 단순화 시켜 보세요.
demo.object = function() {
    const idol = ["Twice", "BTS", "Blackpink", "ITZY", "IZ*ONE"];

    const singer = {
        idol,
        get() {
            return this.idol;
        },
        [idol[1]]() {
            return "뷔, 정국, 지민, 슈가, 진, RM, 제이홉";
        }
    };

    console.log(singer.get());
    console.log(singer.BTS());
}


// *** Destructuring
// 다음을 destructuring으로 개별적 변수로 할당하라.
demo.destructuring = function() {
    const fruits = {
        banana: "yellow",
        apple: "red",
        melon: "green"
    };
    const fullname = ["Kil", "Dong", "Hong"];

    const {banana, apple, melon} = fruits;
    let [middleName, lastName, surName, age = 30] = fullname;

    console.log(banana, apple, melon);
    console.log(surName, middleName, lastName, age);

    [middleName, lastName] = [lastName, middleName];
    console.log(surName, middleName, lastName, age);
}

// *** Spread operator/Rest parameter
demo.restParam = function() {
    // sumAll함수를 rest parameter를 받는 arrow function으로 재작성해 동작하도록 만드세요.
    const sumAll2 = (...args) => {
        let res = 0;

        args.forEach(v => res+= v);

        return res;
    };

    console.log(sumAll2(10, 20, 30));  // 60이 출력되어야 함
}

// spread operator
demo.spreadOperator = function() {
    // 다음을 spread operator등 최대한 ES6 syntax를 활용해 단순하게 재작성 하세요.
    const getMinMax = (type, ...val) => Math[type](...val);

    console.log("Min:", getMinMax("min", 20, 30));
    console.log("Max:", getMinMax("max", 20, 30));
}

// *** Template literals
demo.templateLiterals = function() {
    // template literal로 변경 하세요.
    // '월'과 '일'의 경우 1자리수일 경우, 2자리로 표현하게 해주세요.
    //  ==> 2018월1일5일 --> 2018년 01월05일
    function getDate() {
        const today = new Date();
        const get2digit = val => val < 10 ? `0${val}` : val;

        return `${today.getFullYear()}년 ${get2digit(today.getMonth() + 1)}월${get2digit(today.getDate())}일`;
    }

    console.log(getDate());
}

// tagged template
demo.taggedTemplate = function() {
    // single quotation을 double quotation으로 변경하는 tagged template을 작성하세요.
    function dblQuote(literals) {
       let res = "";

       literals.forEach(v => {
            res += v.replace(/'/g, "\"");
       });

       return res;
    }

    console.log(dblQuote`'K-POP'은 전세계 적으로 큰 '인기'를 얻고 있다.`);
}


// *** Class
demo.class = function() {
    // 다음을 ES6 class로 변환하세요.
    class Animal {
        constructor(name) {
            this.name = name;
            this._color = "white";
        }

        get color() {
            return this._color;
        }

        set color(color) {
            this._color = color;
        }

        getName() {
            return this.name;
        }

        bark() {
            console.log("bark!");
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name);
        }

        static factory(name) {
            return new this(name);
        }

        bark() {
            console.log("왈왈~!");
        }
    }

    const dog = Dog.factory("Jay");
    
    // class accessor를 적용해 주세요.
    dog.color = "red";

    dog.bark();
    console.info(dog.color, dog.getName());
}

// *** Modules
demo.modules = function() {
    // module.mjs를 import 해서 다음과 같이 사용되게 만드세요.
    // getMax --> getMaxNumber
    console.log(getMaxNumber(10, 100, 20));
    console.log(isString("abc"));
    console.log(color);
}

// *** Promise
demo.promise = function() {
    // 다음을 Promise로 변환 하세요.
    /*setTimeout(() => {
        console.count("Timer callback hell! -.-");

        setTimeout(() => {
            console.count("Timer callback hell! -.-");

            setTimeout(() => {
                console.count("Timer callback hell! -.-");
            }, 200);
        }, 200);
    }, 200);*/

    new Promise((resolve, reject) => {
        setTimeout(
            () => resolve("Timer callback hell! -.-")
        , 200);
    }).then(msg => {
        console.count(msg);

        return new Promise((resolve, reject) => {
            setTimeout(
                () => resolve("Timer callback hell! -.-")
            , 200);
        });
    }).then(msg => {
        console.count(msg);

        return new Promise((resolve, reject) => {
            setTimeout(
                () => resolve("Timer callback hell! -.-")
            , 200);
        });
    }).then(msg => {
        console.count(msg);
    });
}

// *** Async/Await
demo.asyncAwait = function() {
    // Promise 예제를 Async/Await로 변환하세요.
    async function callAsync() {
        const getPromise = () => {
            return new Promise((resolve, reject) => {
                setTimeout(
                    () => resolve("Timer callback hell! -.-")
                , 200);
            });
        };

        console.count(await getPromise());
        console.count(await getPromise());
        console.count(await getPromise());
    }

    callAsync();
}

// *** fetch API
demo.fetch = async function() {
    // 다음 API를 fetch를 사용해 호출하고, 데이터를 출력하세요
    // - API 주소: ./test-data.json
    // - GET 방식
    const data = await fetch("./test-data.json", {
        method: "GET"
    }).then(res => res.json());

    console.log(data);
}
