const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const router = require("./routes");

app.use(express.urlencoded({extended:true}))

app.use(router);

app.set("view engine", "html")
nunjucks.configure("views", {
    express:app
})

app.listen(3000, () => {
    console.log("서버연결")
})