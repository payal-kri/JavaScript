// Primitive

// 7 types : String, Number, Boolean, null, undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol ("123")

console.log(id===anotherId);
// const bigNumber = 233454354


// Reference (Non primitive)

//Array, Objects, Function
const heros = [" shaktiman","naagraj","dog"];
let myObj = {
    name: "Payal",
    age: 40,
}
const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof heros);
console.log( typeof anotherId);

