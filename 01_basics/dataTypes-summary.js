// Primitive 

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt;

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 5451565544654n


//Reference (Non premetive)

//Array,Objects,Functions

//arrays

const heros = ["shaktiman","nagraj","doga"];  

//objects

let myObj = {
  name:"hitesh",
  age:22
}

//Function

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);