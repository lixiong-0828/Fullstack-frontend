interface people {
    name : string,
    age: number
    names: string[]
}

let user1 : people = {
    name : 'brude',
    age:20,
    names :['tom','steave']
}

let user2 : people = {
    name : 'lixiong',
    age:33,
    names :['li111','li222']
}

console.log(`user1 : ${user1.name}`)
console.log(`user2 : ${user2.name}`)