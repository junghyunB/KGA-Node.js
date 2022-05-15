const express = require("express")
const app = express()

app.use((req ,res, next) => {
    const {cookie} = req.headers
    const newArr2 = cookie.split(";").map( (value) => { return value.trim().split("=") })

    // 내가 배열인 상태인 애들을 객체로 변환할때만 reduce를 사용해라, 데이터 타입이 변할때만..
    const cook = newArr2.reduce((acc, val) => {
        acc[val[0]] = val[1]
        console.log(acc)
        return acc
    }, {})
    console.log(cook);
    next()
})

//map 인자값이 콜백함수,

app.get("/", (req, res, ) => {
    res.send("hello Wolrd")
   
})

app.get("/cookie", (req, res, next) => {
    res.send("hello Cookie")
})

app.get("/setCookie", (req, res) => {

    /*
        http 통신 프로토콜에서 
        Set-Cookie에 대한 문법이 따로 존재 
        걔만 지키면서 작성하면 됨
    */

        /*
        로그인을 했는데 5분뒤에 로그인이 풀려, 5분뒤에 쿠키가 사라지면됨, 

        Max-age : 시간
        Expires : 짧은시간 5분, 10분 등등
        
        내가 요청으로 들어온 쿠키를 어디라우터에서든 사용
        */
    res.setHeader("Set-Cookie", "name2=ingoo2; httpOnly=true;path=/")
    .send("hello setCookie")

})

app.listen(3000, () => {
    console.log("서버 시작")
})