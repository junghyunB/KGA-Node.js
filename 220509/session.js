// 구분값을 쿠키로 활용
// 세션 쿠키

/*
    쿠키: 쿠키
    세션: 쿠키 + 세션
*/

/*
    데이터를 계속 가지고 다녀야 한다,
    
*/

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

a.reduce( (acc, value) => {
    console.log(acc, value)
    return value + acc
}, 0)