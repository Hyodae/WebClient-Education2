var express = require("express");  // express 모듈을 import
var app = express();  // express 초기화
var port = 3000;  // 서버 포트번호

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

app.listen(port, function() {
	console.log("Example app listening on port "+ port +"!");
});
