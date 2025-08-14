//const tinderUser = new Object()  //singleton object
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname: "singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser);

const obj1={
    1:"a",
    2:"b"
}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 ={...obj1,...obj2,...obj4}
//console.log(obj3);

const users = [
    {
       id:1,
       email:"h@gmail.com" 
    },
    {
       id:2,
       email:"m@gmail.com" 
    },
    {

    },{

    }
]
// console.log(users);
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
