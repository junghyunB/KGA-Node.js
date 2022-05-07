const pool = require("../../db.js")

const list = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM board ORDER BY idx DESC")
        res.render("board/list", {
            items:result,
        })
    } catch(e) {
        console.log("db con error")
    }

}
const write = (req, res) => {
    res.render("board/write")
}
const update = async (req, res) => {
    const idx = req.query.idx
    const [result] = await pool.query(`SELECT * FROM board where idx=${idx}`)
    res.render("board/update", {
        items:result[0]
    })
}
const view = async (req, res) => {
    const idx = req.query.idx
    const [result] = await pool.query(`SELECT * FROM board where idx=${idx}`)
    res.render("board/view", {
        items:result[0]
    })
}

const writeAction = async (req, res) => {
    let subject = req.body.subject;
    let content = req.body.content;
    let name = req.body.name;
    await pool.query(`INSERT INTO board(subject, content, name) VALUES("${subject}","${content}","${name}")`)
    const [result] = await pool.query(`SELECT * FROM board ORDER BY idx DESC LIMIT 1`);
    res.redirect(`/board/view?idx=${result[0].idx}`)
}

const updateAction = async(req, res) => {
    let idx = req.body.idx;
    let subject = req.body.subject;
    let content = req.body.content;
    await pool.query(`UPDATE board SET subject="${subject}", content="${content}" where idx=${idx}`);
    res.redirect(`/board/view?idx=${idx}`)
}

const deleteAction = async(req, res) => {
    let idx = req.body.idx;
    await pool.query(`DELETE FROM board where idx=${idx}`)
    res.redirect("/board/list")

}

const hit = async(req, res) => {
    let idx = req.query.idx;
    await pool.query(`UPDATE board SET hit = hit + 1 where idx=${idx}`)
    res.redirect(`/board/view?idx=${idx}`)
}

const like = async(req, res) => {
    let idx = req.query.idx;
    await pool.query(`UPDATE board SET likes=likes + 1 where idx=${idx}`)
    res.redirect(`/board/view?idx=${idx}`)
}
module.exports = {
    list, write, update, view, writeAction, updateAction, deleteAction, hit, like
}