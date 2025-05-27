const marvel_heros=["thor","Iron Man","spiderMan"]

const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// console.log(marvel_heros[3])

// const allHeros=marvel_heros.concat(dc_heros)

// console.log(allHeros);

const allNewHeros=[...marvel_heros,...dc_heros]

// console.log(allNewHeros)

const anotherArray=[1,2,3,[4,5,6],[6,7,8]]

const realAnotherArry=anotherArray.flat(Infinity)

// console.log(realAnotherArry)

console.log(Array.isArray("Praroop"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"HItesh"}))//return blank 


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))



