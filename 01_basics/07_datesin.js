//Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,7,13) //(year,month,date)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025,7,13,5,3,55)   // (year,month,date,hour,min,sec)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-08-13") //(yyyy-mm-dd)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("08-13-2025")  //(mm-dd-yyyy)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long"
})
