//const { now } = require("@vueuse/shared")
const now = new Date();

//① let , const ,对象
console.log("start write js ================================")

let foods = {
    furit : "apple",
    "meat":"beef",
    "vagi":"onion",
    main_1 :"rice",
    "main-2":"noodle",

    ilike : function (param)  {       
        console.log(`i like ${param}`)
        
    }
}
console.log(foods)
console.log("food main-1 :" + foods["main_1"])
foods.ilike('aplle and banana')
console.log("===========================================================================")
let cities = ['beijing','shanghai','dalian']
console.log(`waht the cities in chiba : ${cities}`)

cities.push('Tokyo')
cities.push('nagoya')
console.log(`after push some cities : ${cities}`)
cities.pop()
console.log(`after pop city : ${cities}`)

console.log("================================Teamplate literals===========================================")

//② 反写引号【``】 Teamplate literals

console.log(`fruit : ${foods.furit}  ---  meat : ${foods.meat}`)

//③ 箭头函数【() => {}】
console.log("============================ arrow funtion ===============================================")

const menber = (s,x,y) => {

    let name = s
    let math = x
    let english = y

    console.log(`your name : ${name} ,math score : ${math} ,english score: ${english}`) 
    return   math + english  
        
}

let sumScore = menber('xiong',98,95)
console.log(`your sum score : ${sumScore}`)

//const student = stuname => alert(`you are good man  !! : ${stuname}`)
//let googman = student('xiong')
//console.log(`your sum score : ${sumScore}`)



// ④ 类
console.log("============================== class =============================================")

class Athlet {
    name = 'lixiong';
    sport ='swim';
    level;

    constructor(n,s,l){
        this.name =n;
        this.sport =s;
        this.level=l;
    }
    print(){
        console.log(`The athlet name is : ${this.name}  , sport :${this.sport}  , level is :${this.level}`);
    }       
}

let xiong =new Athlet('xiong','badminton' ,'hingh')

//alert(`The athlet name is : ${xiong.name}  , sport :${xiong.sport}  , level is :${xiong.level}`)
xiong.print()

// 5. Destruction Assignment [,,] [, ...]

console.log("============================== Destruction Assignment =============================================")

let languege = {
    first : "java",
    second : "basic",
    third : "python",
    fouth : "vb.net"
}

const{ first,second,third,fouth} =languege 
console.log(`Destruction Assignment  . from class languege : first : ${first} ,second :${second} ,third :${third}`)

const [one,two,three,four,,] = cities
console.log(`Destruction Assignment  . from class cities : one : ${one} ,two :${two} ,three :${three}`)

const [thefirst, ... last] = cities
console.log(`Destruction Assignment  . from class cities : thefirst : ${thefirst} ,last :${last} `)

// 6. Spread operator  [...]

console.log("============================== 6. Spread operator =============================================")

let lang = ["java",'c','python','VC++']
let copylang = [... lang]

console.log(`Spread operator =====  copylang : ${copylang}`)

//added in front of array
copylang = ['VB.net', ...  lang]
console.log(`Spread operator =====  copylang : ${copylang[0]}`)

let newLang = [ ...lang ,...copylang]
console.log(`Spread operator =====  newLang : ${newLang}`)

const chineseFoods = {...foods, fastfood: "pissa"}
console.log( chineseFoods)

// 7. map 
console.log("============================== 7. [map] [filter]  =============================================")
let num = [2,3,5,6,8,9]
console.log (`origin  num : ${num}`)

let newNum = num.map( num =>   num + 6)
console.log (` after map num newNum : ${newNum}`)

let filterNum = newNum.filter( num => num > 10)
console.log (` after filter num filterNum : ${filterNum}`)

// 8. Synchronous, Asynchronous 
console.log("============================== 8. Synchronous, Asynchronous ，promise =============================================")

console.log("The main process Start============" + formatDateTime())

setTimeout(

    ()=>{
        console.log("Asynchronous process start ==================" + formatDateTime())
        console.log("Asynchronous process End ==================" + formatDateTime())
    }
    ,3000
)

console.log("The main process End============" + formatDateTime())

console.log("============================== ，promise  =============================================")

// 9. formatDateTime (yyyy-mm-dd hh:MM:ss)
console.log("============================== 9. formatDateTime (yyyy-mm-dd hh:MM:ss)  =============================================")
    function formatDateTime() {
        const now = new Date();
        
        // 获取日期组成部分
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        
        // 获取时间组成部分
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        // 组合成所需格式
        return `${year}-${day}-${month} ${hours}:${minutes}:${seconds}`;
    }

    // 10. fetch
    console.log("==============================10.  fetch =============================================")
    const fetchposts = async() =>{
        try {

            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            if(!response.ok){
                throw new error("error,,,,!!")
            }
            //debugger
            const data = await response.json()
            console.log(data)
            
        } catch (error) {
            throw new error("error,,,,!!")
        }
    }

    fetchposts()
