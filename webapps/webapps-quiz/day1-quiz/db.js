/**
 * @TODO
 * 1) 작성된 test 테이블의 내용을 출력해 본다.
 * 2) 웹 서버를 설정하고, "/list" 라우팅이 된 경우, test 테이블의 데이터를 응답으로 출력한다.
 */

db.serialize(function () {
    // test 테이블에 데이터를 추가한다.
	db.run("", "", function() {
	    console.log("inserted!");
    });

    // test 테이블의 데이터를 출력한다.
    db.each("", function (err, row) {
        console.log(row);
    });
});

db.close();