let fs = require('fs');
// let counter = 0;

// function Counter(){
//     setInterval(() => {
//         console.log(counter++);
//     }, 1000);
// }

// Counter();

// let counter = 0;

// function Counter(){
//     console.log(counter++);
//     setTimeout(() => {
//         Counter()
//     }, 1000);
// }

// Counter();


// fs.open(__dirname+"/a.txt","w",function(err,data) {
//     fs.appendFile(__dirname+"/a.txt"," Hello how are you not a problem.",(err)=>{
//         console.log(err);
//     })
//     console.log(data);
// })

// fs.readFile(__dirname+"/a.txt","utf-8",(err,data)=>{
//     let d = data.split(" ").filter(Boolean).join(" ");
//     let d = data.replace(/\s+/g," ").trim();
//     fs.appendFile(__dirname+"/a.txt",`\n${d}`,(err)=>{
//         console.log(err);
//     })
//     console.log(d); 
// })

// function clock(){let d = new Date();
// let hours = d.getHours();
// let mins = d.getMinutes();
// let sec = d.getSeconds();

// console.log(`${hours}:${mins}:${sec}`);
// }
// clock();
// setInterval(clock,1000);



// function wait(duration){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,duration*1000);
//     })
//     .then(function() {
//         console.log("hi");
//     })
// }

// wait(3);

// function wait(duration){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,duration*1000);
//     })

// }

// wait(3).then(function() {
//     console.log("hi");
// });

//making thread busy
// function wait(duration){
//     return new Promise((resolve, reject) => {
//         let end = Date.now()+duration;
//         while(Date.now() < end){}
//         resolve();
//     })
// }

// wait(3000).then(()=>{
//     console.log("busy wait");
// })

// function wait1(t) {
// return new Promise((resolve, reject) => {
//     setTimeout(resolve,t);
// })
// }

// function wait2(t) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,t);
//     })
// }

// function wait3(t) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,t);
//     })
// }

// function calculateTime(t1, t2, t3) {
//     Promise.all([wait1(t1),wait2(t2),wait3(t3)])
//     .then(()=>{
//         console.log("Every thing resolved");
//     })
// }

// calculateTime(1000,1000,2000);

//promise chaining
// function wait1(t) {
// return new Promise((resolve, reject) => {
//     setTimeout(resolve,t);
// })
// }

// function wait2(t) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,t);
//     })
// }

// function wait3(t) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,t);
//     })
// }

// function calculateTime(t1, t2, t3) {
//     // Promise.all([wait1(t1),wait2(t2),wait3(t3)])
//     // .then(()=>{
//     //     console.log("Every thing resolved");
//     // })
//     let start = Date.now();
//     return wait1(t1).then(()=>{
//         return wait2(t2);
//     })
//     .then(()=>{
//         return wait3(t3);
//     })
//     .then(()=>{
//         let end = Date.now();
//         console.log((end-start)/1000+"sec");
//     })
// }

// calculateTime(1000,1000,2000);

