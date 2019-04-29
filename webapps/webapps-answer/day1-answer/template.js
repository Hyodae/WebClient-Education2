const express = require("express");

const app = express();
const port = 3000

/*
    @TODO
    1) 템플릿 엔진으로 pug를 설정하고
    2) /view/main 템플릿을 출력하도록 title, heading, text 데이터를 설정하라.
*/

app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("content", {
    title: "웹앱 샘플 페이지",
    message: "안녕하세요~",
    content: "여기는 페이지 내용이 출력됩니다."
  });
});

app.listen(port, function() {
    console.log("server started!");
});