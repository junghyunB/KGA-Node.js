const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")

// userid, userpw

app.use(express.json())

app.post("/auth/token", (req, res) => {

    const { userid, userpw } = req.body
    let result = { result: false, msg: "아이디와 패스워드가 맞지 않습니다." }
    if (userid !== "jh" || userpw !== "1234") return res.status(401).json(result)

    const payload = {
        userid: "jh"
    }
    // salt
    const secret = "jh2"
    const token = jwt.sign(payload, secret, {
        algorithm: "HS256"
    })
    result = { result: true, token, msg: null }
    res.status(200).json(result)
})

// http://localhost:3500/user/me/web7722
// url 깔끔하게 하려고
app.get("/user/me/:userid", (req, res) => {
    const {userid} = req.params

    const response = {
        userid,
        name:"jh"
    }
    res.status(200).json(response)
})

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJqaCIsImlhdCI6MTY1MzAzMzI4Mn0.fPsB43rXgcDtcR1EASCddyAlnf96JTEvaqvBE64Bh78

app.post("/auth/verify", (req, res) => {
    const { token } = req.body
    let response = { result:false, data: null, msg: null }
    //1. token
    //2. salt
    try {
        const result = jwt.verify(token, "jh2")
        response.result = true;
        response.data = result
        res.status(200).json(response)
    } catch (e) {
        response.msg = "토큰 변조"
        res.status(401).json(response)
    }
})

app.listen(3500, () => {
    console.log("서버 시작")
})