const webSocket = require("ws")

let sockets = [];
module.exports = (server) => {
    const wss = new webSocket.Server({ server })

    wss.on("connection", (ws, req)=> {
        ws.id = req.headers['sec-websocket-key']
        sockets.push(ws)
        const obj1 = {type:"message", payload:"jh님 환영합니다"}
        const obj2 = {type:"add", payload:1}

        ws.send(JSON.stringify(obj1))
        ws.send(JSON.stringify(obj2))

        ws.on("close", () => {
            sockets = sockets.filter(v => v.id != ws.id)
            console.log(sockets.length)
        })
        console.log(sockets.length)
    })

    function broadcast(data) {
        sockets.forEach(ws => {
            ws.send(data)
        })
    }
}