const { a } = require("./a");// requrie = return값이 존재한다. return값 = 객체
const afile = require("./a");
const { b } = require("./b")
const bfile = require("./b")
// console.log(a + b);
console.log({a});
console.log(afile);
console.log({b});
console.log(bfile);

console.log(a+b);
console.log(afile.a + bfile.b)