// const { log } = require('console');
const { log } = require('console');
var fs = require('fs');
// function getLen(str){
//     return str.length;
// }

// console.log(getLen("arya"));
//static keyword makes a funtion assciated to class not a object class cannot access the functions which are not static
// class user{
//     constructor(username,password){
//         this.username = username;
//         this.password = password;
//     }

//     getDetail(){
//       console.log(`${this.username} ${this.password}`);  
//     }    
// }

// let Arya = new user("Arya","123a");
// Arya.getDetail();

// const curr = new Date();

// console.log(curr.getDate());
// console.log(curr.getMonth());
// console.log(curr.getSeconds());

// setTimeout(()=>{
//     console.log("hello");
// },0)
// console.log("world");

//Promises 

function learnPromise() {
  return new Promise(function (resolve) {
    fs.readFile(__dirname + "/a.txt", "utf-8", function (err, data) {
      setTimeout(function () {
        resolve(data)
      }, 3000);
    });
  })
}
// function printP(data){
//  console.log(data);
// }
// learnPromise().then(printP);


// let p = new Promise((resolve, reject) => {

// })

async function printP() {
  let data = await learnPromise(); console.log(data);
}

printP();

console.log("hello there");
