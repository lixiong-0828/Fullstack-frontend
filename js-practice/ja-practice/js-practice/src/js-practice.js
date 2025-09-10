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

const student = stuname => alert(`you are good man  !! : ${stuname}`)
let googman = student('xiong')
//console.log(`your sum score : ${sumScore}`)



// ④ 类
console.log("============================== class =============================================")

class Athlet {

    name;
    sport;
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

alert(`The athlet name is : ${xiong.name}  , sport :${xiong.sport}  , level is :${xiong.level}`)
xiong.print()

// ④ Destruction Assignment

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
