var express = require("express");  // express 모듈을 import
var app = express();  // express 초기화
var port = 3000;  // 서버 포트번호

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./WebApps.db");

/**
 * @TODO
 * 1) 작성된 test 테이블의 내용을 출력해 본다.
 * 2) 웹 서버를 설정하고, "/list" 라우팅이 된 경우, test 테이블의 데이터를 응답으로 출력한다.
 */

/*db.serialize(function () {
    db.run("INSERT INTO test (nickname) VALUES (?)", "닉네임", function() {
        console.log("inserted!");
    });

    db.each("SELECT * FROM test", function (err, row) {
        console.log(row);
    });
});

db.close();*/


app.get("/list", function(req, res) {
	db.all("SELECT * FROM test", function(err, rows) {
		res.send(rows);
	});

	// 컨텐츠 대신 파일을 response로 내려줄 때
	//res.sendFile(path +"landing.html");
});

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