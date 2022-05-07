const items = [];

const list = (req, res) => {
    res.render("board/list")
}
const write = (req, res) => {
   
    res.render("board/write", {
       
    })
}
const update = (req, res) => {
    res.render("board/update", {
        two:req.query.two
    })
}
const view = (req, res) => {
    const {index} = req.query 
    res.render("board/view", {
        one:req.query.one,
        item:items[index - 1]
    })
}
const writeAction = (req, res) => {
    const {subject, content} = req.body
    const obj = {subject, content}
    items.push(obj)
    console.log(items)
    res.redirect(`/board/view?index=${items.length}`)
}
const updateAction = (req, res) => {
    const {subject, content} = req.body
    const obj = {subject, content}
    items.pop()
    console.log(items)
    items.push(obj)
    console.log(items)
    res.redirect(`/board/view?index=${items.length}`)
}

module.exports = {
    list, write, update, view, writeAction, updateAction
}
