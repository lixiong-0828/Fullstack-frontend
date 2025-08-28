const people:{name:string,age?:number,haveHobby:boolean,friendname:string[],
            ages:number[],actionIt():void} ={
    
    name:'',
    age:48,
    haveHobby: true,
    friendname:['Tom','Bruce','Steave'],
    ages:[11,22,33,44,55],
    actionIt(){
        console.log('hello ,world')
    }
}

people.name = 'hello people!!!'
people.age = 99

console.log("people.name: " + people.name)
console.log("people.age: " +people.age)
console.log("people.ages: " +people.ages)
console.log("people.friendname: " +people.friendname)
console.log("people.actionIt: " + people.actionIt)
people.actionIt()


let people2:{name:string,age:number,haveHobby:boolean,friendname:string[]} = {
    
    name:'',
    age:48,
    haveHobby: true,
    friendname:['Tom','Bruce','Steave'],
   
}
people2.name ="people2"