const express = require("express");
const app = express(); // app은 객체
const router = express.Router();


app.use(router)
// app.use(express.json());
// app.use(express.urlencoded({extended:true})); // 미들웨어 req.body라는 것을 만들어서 다음 라우터에 조건이 맞는애가 있으면 넘겨준다.

// GET, POST method 
// 요청 메서드 (request) -> http를 검색해야함

// next를 이용하면 이전에 실행된 미들웨어에서 생성된 변수를 그대로 다음 미들웨어에 내려 줄 수 있다.
app.get('/', (req, res) => {
    res.send("hello World!!")
})
// app.use path만 맞으면 다 실행.

// URL 패턴

// https://localhost:3000/user/profile
// 프로토콜 host           pathname

//미들웨어
// 문법적으로 봤을떄는 callback
// express app 객체안에 있는 method 중에 
// get, post, use, ....

//콜백함수를 쓰는 이유 : 내가 원하는 시점에 함수를 실행하고 싶어서,

app.listen(3000, () => {
    console.log('서버 시작')
})