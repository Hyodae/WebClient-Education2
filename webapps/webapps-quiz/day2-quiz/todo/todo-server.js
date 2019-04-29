var express = require("express")
var serveIndex = require("serve-index");
var bodyParser = require("body-parser");

// DB connection
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./WebApps.db");

var app = express();
var port = 3000;
var path = __dirname + "/";

// POST 데이터 처리
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // 전달된 데이터를 JSON 형식으로 파싱

app.post("/create", function(req, res) {
	var body = req.body;

	db.run("INSERT INTO todo (todo) VALUES (?)", body.todo, function() {
		res.redirect("/");
	});
});

app.get("/list", function(req, res) {
	db.all("SELECT * FROM todo", function(err, rows) {
		res.send(rows);
	});

	// 컨텐츠 대신 파일을 response로 내려줄 때
	//res.sendFile(path +"landing.html");
});

app.get("/done", function(req, res) {
	var query = req.query;

	db.run("UPDATE todo SET complete=1 WHERE idx = ?", +query.idx);

	res.send(query);
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
