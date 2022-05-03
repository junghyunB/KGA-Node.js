// const name = (type) => {
//     if (type === "send") {
//         console.log('send실행')
//         send()
//     } else if (type === "call") {
//         console.log("call실행")
//         call()
//     }
//     return 'jh'
// }

const name = (callback) => {
    callback()
    return "jh"
}
const call = () => {
    console.log("call실행")
    return "hello"
}

const send = () => {
    console.log('send실행')
    return "world"
}

name(call);

