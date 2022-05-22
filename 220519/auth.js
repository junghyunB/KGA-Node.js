const express = require("express");
const app = express();
const cors = require("cors")
const nunjucks = require("nunjucks")
const axios = require("axios")
const qs = require("qs")

app.set("view engine", "html")
nunjucks.configure("views", {
    express: app
})

const client_id = "4cd469d52fa75efd29ff262563bb518b"
const redirect_uri = "http://localhost:3005/auth/kakao"
const client_secret = "emENNSzVNvVWSRuSZmtP9gb83MvOqChr"
const host = "https://kauth.kakao.com"

app.use(cors())


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/kakao/login", (req, res) => {
    const redirect = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    res.redirect(redirect)
})

app.get("/auth/kakao", async(req, res) => {
    const { code } = req.query;
    const body = qs.stringify({
        grant_type:"authorization_code",
        client_id,
        redirect_uri,
        code,
        client_secret
    })
    //axios post 인자 
    // 1. url
    // 2. body내용
    // 3. headers
    const headers = {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
    }
    const response = await axios.post(`${host}/oauth/token`, body, headers)
    console.log(response.data)
    try {
        const { access_token } = response.data
        const url = "https://kapi.kakao.com/v2/user/me"
        const userinfo = await axios.post(url, null, {
            headers:{
                "Authorization": `Bearer ${access_token}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        })
        console.log(userinfo.data)
    } catch(e) {

    }
    res.send("hello")
})

app.listen(3005, () => {
    console.log("서버 시작!")
})

