const name = "Payal"
const repoCount = 7
// console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Onother ways of string declarationt 
const gameName = new String("Payal-kri")
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = " Payal  "
console.log(newStringOne);

console.log(newStringOne.trim());

console.log(gameName.split('-'));






