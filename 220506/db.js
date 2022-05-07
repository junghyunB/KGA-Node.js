const mysql = require("mysql2/promise"); // promise 객체를 반환해줄수 있는애

const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"1234",
    database:"homepage"
})


async function select() {
    try {
    const sql = "SELECT * FROM board"
    const [result] = await pool.query(sql) 
    } catch(e) {
        console.log("error")
    } 
}

module.exports = pool;