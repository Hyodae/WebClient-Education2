const express = require("express");

const app = express();
const port = 3000

/*
    @TODO
    1) 템플릿 엔진으로 pug를 설정하고
    2) /view/main 템플릿을 출력하도록 title, heading, text 데이터를 설정하라.
*/
app.get("/", function(req, res) {
    // 템플릿 사용해 응답을 구성
});

app.listen(port, function() {
    console.log("server started!");
});