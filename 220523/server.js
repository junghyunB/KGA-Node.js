const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const router = require("./routes")

app.use(router);
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine", "html")
nunjucks.configure("views", {
    express:app
})


const result = app.listen(3000, () => {
    console.log("서버 시작")
})
require("./socket.js")(result)