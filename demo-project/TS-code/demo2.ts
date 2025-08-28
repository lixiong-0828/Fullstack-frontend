// 具体名字函数
function add( x: number , y : number)   {
    return x + y
}

console.log("具体名字函数 :" + add(10,20))

// 匿名函数
let add2 = function (x : number ,y : number) : number{
    return x + y
}

console.log("匿名函数 :" + add2(22,44))

//箭头函数 --> 参数[a] ，【b】是可选参数

let add3 = ( x : number ,y : number ,a ?:String, b ?:number) : number => {
    return x +y
}

console.log("箭头函数" + add3( 55, 99))