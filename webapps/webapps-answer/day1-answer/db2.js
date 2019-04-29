var express = require("express");  // express 모듈을 import
var app = express();  // express 초기화
var port = 3000;  // 서버 포트번호

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./WebApps.db");

db.serialize(function () {
    // test 테이블에 데이터를 추가한다.
	db.run("insert into test (nickname) values (?)", "닉네임", function() {
	    console.log("inserted!");
    });

    // test 테이블의 데이터를 출력한다.
    db.each("select * from test", function (err, row) {
        console.log(row);
    });
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