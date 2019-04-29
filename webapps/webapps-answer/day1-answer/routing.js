var express = require("express");  // express 모듈을 import
var serveIndex = require("serve-index");
var bodyParser = require("body-parser");

const app = express();  // express 초기화
const port = 3000;  // 서버 포트번호

var path = __dirname + "/";

app.get("/", function(req, res) {
	res.send("Hello World!");
});

/**
 * @TODO
 * 1) 각각 다음 항목에 대한 라우팅을 작성하라.
 *    그리고 응답 메세지로 "${라우팅명} 호출됨" 이라고 처리하라.
 *    - create
 *    - list
 *    - done
 *
 * 2) 다음의 값을 전달 받을 수 있는 Router parameter를 작성하라.
 *    { "type": "문자열", "number": 숫자 }
 *
 * 3) /time 라우팅에서 time이 출력되는 미들웨어를 작성하라.
 *
 * 4) body-parser를 설정하고, /post 라우팅에서 form.html로 부터 전달되는 값을 출력하라.
 *
 * 5) '/template' 라우팅을 작성하고, title, message, content가 출력되는 템플릿을 작성하라.
 *
 * 6) 모든 디렉토리의 파일 내용이 출력되도록 server-index를 설정하라.
 */


// (1) 각각 다음 항목에 대한 라우팅을 작성하라.
//     그리고 응답 메세지로 "${라우팅명} 호출됨" 이라고 처리하라.
//      - create
//      - list
//      - done
app.get(/(create|list|done)/, function(req, res) {
	console.log(req.originalUrl)

	res.send(req.originalUrl +" 호출됨");
});

// (2) 다음의 값을 전달 받을 수 있는 Router parameter를 작성하라.
// { "type": "문자열", "number": 숫자 }
app.get('/type/:type/number/:number', function(req, res) {
	res.send(req.params);
});

// 3) /time 라우팅에서 time이 출력되는 미들웨어를 작성하라.
// 요청이 발생할 때 마다 현재 time 정보를 전달
var requestTime = function (req, res, next) {
	req.requestTime = Date.now();
	next();
};

app.use(requestTime);

app.get("/time", function (req, res) {
	var responseText = "Hello World!";

	// 요청이 처리될 때 마다 미들웨어에서 전달된 time 정보를 반환한다.
	responseText += "Requested at: "+ req.requestTime;
	res.send(responseText);
});


// (4) body-parser를 설정하고, /post 라우팅에서 form.html로 부터 전달되는 값을 출력하라.
// url 인코딩 라이브러리 사용설정 – true: qs / false: querystring (true는 deprecate 처리됨)
// qs는 querystring에서 nested 객체 표현이 가능 (ex. a[b]=1 => '{a: { b: 1}}'로 표현됨
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // 전달된 데이터를 JSON 형식으로 파싱

app.all("/post", function(req, res) {
	var body = req.body;

	if (!Object.keys(body).length) {
		body = req.query;
	}

	res.send(body);
});


// (5) '/template' 라우팅을 작성하고, title, message, content가 출력되는 템플릿을 작성하라.
app.set("view engine", "pug");

app.all("/template", function(req, res) {
	res.render("content", {
		title: "Yo!",
		message: "Hello there!",
		content: "hello~ again~~~~"
	});
});

// (6) 모든 디렉토리의 파일 내용이 출력되도록 server-index를 설정하라.
app.use("/", express.static(path), serveIndex(path, {
	icons: true,
	view: "details"
}));

app.listen(port, function() {
	console.log("Example app listening on port "+ port +"!");
});
