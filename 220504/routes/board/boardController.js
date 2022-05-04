const items = [];

const list = (req, res) => {
    res.render("board/list")
}
const write = (req, res) => {
    res.render("board/write")
}
const view = (req, res) => {
    // const {index} = req.query
    // console.log(index)
    console.log(req.query.name)
    res.render("board/view", {
        // item:items[index - 1]
        name:req.query.name
    })
}
const update = (req, res) => {
    res.render("board/update", {
        name:req.query.name
    })
}
const writeAction = (req, res) => {
    const {subject, content} = req.body;
    const obj = {subject, content}
    items.push(obj)
    // res.redirect(`/board/view?index=${items.length}`)
    res.redirect(`/board/view`)
}
const updateAction = (req, res) => {
    res.redirect(`/board/view?name=${req.body.name}`)
}
const deleteAction = (req, res) => {
    res.redirect("/board/list")
}

module.exports = {
    list, write, view, update, writeAction, updateAction, deleteAction
}