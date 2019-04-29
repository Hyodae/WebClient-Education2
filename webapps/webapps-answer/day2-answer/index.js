var express = require("express")
var serveIndex = require("serve-index");
var bodyParser = require("body-parser");

var cors = require("cors");

// DB connection
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./WebApps.db");

var app = express();
var port = 3000;
var path = __dirname + "/";


// POST 데이터 처리
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // 전달된 데이터를 JSON 형식으로 파싱


// @TODO
// 1) POST method에 응답하는 '/data' API를 만들고, 전달된 파라미터를 출력하라. (Ajax/01_ajax.html 요청을 처리)
// 2) POST/GET method에 응답하는 '/cors' API를 만들고 method 종류와 각각의 method들로부터 전송된 파라미터를 출력하라.
//    (Ajax/02_cors.html 요청을 처리)
//    --> method 구분은 콜백 함수에 전달되는 request.method 속성을 통해 알아올 수 있다.
// 3) cors 패키지를 이용해 기존의 '/cors'를 '/cors2'로 패키지를 활용하도록 변경하라.
//    --> cors를 테스트 하기 위해, 로컬 컴퓨터의 hosts 파일에 아래의 설정을 추가한다.
//        127.0.0.1 testapi.com
//        파일위치:
//        macOS : /private/etc/hosts
//        win: /Windows/system32/drivers/etc/hosts


// for ajax
// Ajax/01_ajax.html 요청을 처리
app.post("/data", function(req, res) {
	var query = req.body;

    res.send(query);
});

// CORS
app.all("/cors", function(req, res) {
    res.set({
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "X-Test",
      "Access-Control-Allow-Credentials": true
    });

    res.send(req.method === "POST" ? req.body : req.query);
});

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.all("/cors2", function (req, res, next) {
    res.json({
        msg: "This is CORS-enabled for all origins!"
    });
});

// 디렉토리 목록 출력
app.use("/", express.static(path), serveIndex(path, {
	icons: true,
	view: "details"
}));

// listening
var server = app.listen(port, function() {
	console.log("Listening on port "+ port +"!");
});

process.on("SIGINT", function() {
	server.close(function () {
		console.log( "Server closed!!!");

		// Close db connections
		db.close();
	});
});
