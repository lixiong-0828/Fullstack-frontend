// 具体名字函数
function add(x, y) {
    return x + y;
}
console.log("具体名字函数 :" + add(10, 20));
// 匿名函数
let add2 = function (x, y) {
    return x + y;
};
console.log("匿名函数 :" + add2(22, 44));
//箭头函数
let add3 = (x, y, a, b) => {
    return x + y;
};
console.log("箭头函数" + add3(55, 99));
