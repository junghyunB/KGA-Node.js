const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(cors({
    origin: true,  
    credentials: true, 
})); 

app.use((req, res, next) => {    
res.setHeader("Set-Cookie", "name=JungHyun; httpOnly=true;path=/")
.send("hello setCookie")
})

app.get("/", (req, res) => {
    res.send("Hello Wolrd")
})

app.get("/setCookie", (req, res) => {

})

app.post("/getCookie", (req, res) => {
    res.send(req.cookies)
    
})

app.listen(3500, () => {
    console.log("서버 시작")
})