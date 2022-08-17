"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 웹 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/", home); // use -> 미들웨어 등록 메소드

// 라우팅으로 뺌
// app.get("/", (req, res) => {
//     res.render("home/index");//기능
// });

// app.get("/login", (req, res) => {
//     res.render("home/login");
// })
 
// 모듈화함 bin
// app.listen(PORT, function () {
//     console.log('Server Open')
// });

module.exports = app;

//package.json

// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200,{"Content-Type": "Text/html; charset=utf-8"});
//     //console.log(req.url);
//     if (req.url === '/') {
//         res.end("여기는 루트입니다.");
//     }    else if (req.url === "/login"){
//             res.end("여기는 로그인 입니다");
        
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.")
// });



//body 내
        // <input type="text placeholder="아이디"><br>
        // <input type="text placeholder="비밀번호"><br>
        // <button>로그인</button>