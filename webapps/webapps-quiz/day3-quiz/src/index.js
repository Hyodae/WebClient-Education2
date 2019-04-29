const demo = {};
window.demo = demo;

demo.letConst = function() {
    // *** var를 let, const 선언으로 변경하라.
    var max = 5;
    var config = {
        value1: "abcd",
        value2: 3
    };

    try {
        max = 6;      // 오류가 발생되어야 한다.
    } catch(e) {
        console.log("const는 다시 할당할 수 없습니다.");
    }

    for(var x in config) {
        console.log(x, "=>", config[x]);
    }

    console.error(x, "<== undefined 인가?");
};

demo.defaultParam = function() {
        // *** 3개의 파라미터에 각각 다음의 값을 갖도록 구성하라.
        // ==> name은 "kildong", age는 24, hobby는 ["soccer", "music"]
        // 파라미터를 다음의 array에 포함시켜라
        function getInfo() {
            return [];
        }

        console.log(getInfo());
};

// *** Arrow function
// (5-1) 다음의 일반 함수들을 arrow function으로 변경하라
demo.arrowFunc1 = function() {
    function division(val1, val2) {
        return val1 / val2;
    }

    var func1 = function() {
        return "오늘 날짜는 "+ (new Date()).toLocaleString() + " 입니다.";
    }

    var func2 = function(name) {
        return "반갑습니다!, "+ name +"님~ ^^";
    }

    console.log(division(100, 2));
    console.log(func1());
    console.log(func2("홍길동"));
}

// (5-2) lexical 스코프
// 다음의 코드가 올바르게 동작하도록 수정하세요.
demo.arrowFunc2 = function() {
    var handler = {
        el: document.getElementById("info"),
        init: function() {
            this.el.querySelector("button").addEventListener("click", function(e) {
                this.show.bind(this)(e.type);
            }, false);
        },
        show: type => {
            this.el.innerHTML = "Event " + type  + " fired. Id is " + this.el.id;
        }
    };

    handler.init();
}

// (5-3) 다음의 코드를 동작하도록 수정하세요.
demo.arrowFunc3 = function() {
    const Hobby = () => {
        this.list = [];
    }

    Hobby.prototype = {
        get: () => this.list,
        add: name => this.list.push(name),
        size: () => this.list.length
    };

    const h = new Hobby();
    h.add("Movie");
    h.add("Music");

    console.log(h.get(), h.size());  // ["Movie", "Music"], 2 <== 출력
}

// (5-4) arguments 파라미터 값
// arrow function에서는 arguments를 사용할 수 없다.
demo.arrowFunc4 = function() {
    const sumAll = () => {
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
        "idol": idol,
        get: function() {
            return this.idol;
        },
        "BTS": function() {
            return "뷔, 정국, 지민, 슈가, 진, RM, 제이홉";
        }
    };

    console.log(singer.get());
    console.log(singer.BTS());
}

// *** Destructuring
// 다음의 값들을 destructing 해서 각각의 변수에 할당하고 출력 하세요.
demo.destructuring = function() {
    const fruits = {
        banana: "yellow",
        apple: "red",
        melon: "green"
    };
    const fullname = ["Kil", "Dong", "Hong"];

    console.log(banana, apple, melon);  // <== yellow, red, green
    console.log(surName, middleName, lastName, age);  // <== Hong Kil Dong 30
    console.log(surName, middleName, lastName);  // <== Hong Dong Kil
}

// *** Spread operator/Rest parameter
demo.restParam = function() {
    // sumAll함수를 rest parameter를 받는 arrow function으로 재작성해 동작하도록 만드세요.

    console.log(sumAll2(10, 20, 30));  // 60이 출력되어야 함
}

// spread operator
demo.spreadOperator = function() {
    // 다음을 spread operator등 최대한 ES6 syntax를 활용해 단순하게 재작성 하세요.
    function getMinMax(type, val1, val2) {
        if (type === "min") {
            return Math.min(val1, val2);
        } else if (type === "max") {
            return Math.max(val1, val2);
        }
    }

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

        return today.getFullYear() +"년"+ (today.getMonth() + 1) +"월"+ today.getDate() +"일";
    }

    console.log(getDate());
}

// tagged template
demo.taggedTemplate = function() {
    // single quotation을 double quotation으로 변경하는 tagged template을 작성하세요.
    function dblQuote(literals) {

    }

    console.log(`'K-POP'은 전세계 적으로 큰 '인기'를 얻고 있다.`);
    }


// *** Class
demo.class = function() {
    // 다음을 ES6 class로 변환하세요.
    function Animal(name) {
        this.name = name;
        this.color = "white";
    }

    Animal.prototype.getName = function() {
        return this.name;
    }

    Animal.prototype.bark = function() {
         console.log("bark!");
    }

    function Dog(name) {
        this.name = name;
        Animal.call(this, name);
    }

    Dog.factory = function(name) {
        return new this(name);
    }

    Dog.prototype = new Animal();
    Dog.prototype.constructor = Dog;

    Dog.prototype.bark = function() {
        console.log("왈왈~!");
    }

    var dog = Dog.factory("Jay");

    // class accessor를 적용해 주세요.
    dog.color = "red";

    dog.bark();
    console.dir(dog.color, dog.getName());
}

// *** Modules
demo.modules = function() {
    // module.mjs 파일을 import 해서 다음과 같이 사용되게 만드세요.
    // getMax --> getMaxNumber
    console.log(getMaxNumber(10, 100, 20));
    console.log(isString("abc"));
    console.log(color);
}


// *** Promise
demo.promise = function() {
    // 다음을 Promise로 변환 하세요.
    setTimeout(() => {
        console.count("Timer callback hell! -.-");

        setTimeout(() => {
            console.count("Timer callback hell! -.-");

            setTimeout(() => {
                console.count("Timer callback hell! -.-");
            }, 200);
        }, 200);
    }, 200);
}

// *** Async/Await
demo.asyncAwait = function() {
    // Promise 예제를 Async/Await로 변환하세요.
}

// *** fetch API
demo.fetch = function() {
    // 다음 API를 fetch를 사용해 호출하고, 데이터를 출력하세요
    // - API 주소: ./test-data.json
    // - GET 방식
}