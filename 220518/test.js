const time = () => (parseInt(Math.random() * 10) + 1) * 1000
let count = 0;
const a = () => {
    count++;
    if (count === 3) {
        console.log("경기종료")
    }
}


const 아반떼 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("아반떼 end")
        }, time())
        console.log("아반떼 go")
    })
}



const 소나타 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("소나타 end")
        }, time())
        console.log("소나타 go")
    })
}

const 제네시스 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("제네시스 end")
        }, time())
        console.log("제네시스 go")
    })
}

// 아반떼().then(a => {
//     console.log(a)
//     return 소나타()
// })
//     .then(b => {
//         console.log(b)
//         return 제네시스()
//     })
//     .then(c => {
//         console.log(c)
//     })

// 아반떼()
// 소나타()
// 제네시스()

const main = async () => {
    console.log("경기시작")
    const result = await 아반떼()
    console.log(result)
    const result2 = await 소나타();
    console.log(result2)
    const result3 = await 제네시스();
    console.log(result3)
    console.log("경기끝")
}

main()


