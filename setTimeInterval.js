const a =23;    // this type of code called synchorized code
const b = 12;
//const c = a+b;

// console.log('ordering burger');
// for(let i=0;i<5;i++){
//     let n = i*6;
// }
// console.log('burger eaten');
// const d = 12;

// function greet() {
//     console.log('Hello world');
// } 
// function greet(name) {
//     console.log('Hello',name);
// }
//console.log('before greet');
// setTimeout(greet ,2000); // that particular time it will be printed
// // we use set time out to set delay the function
// const timeoutId = setTimeout(() =>{
//     greet('Aman')
// },5000)
//clearTimeout(timeoutId)
//console.log('this is written after greet');

// set interval
// const intervalId = setInterval(increaseCount,2000);
// let count =0;
// function increaseCount() {
//     count++;
//     console.log(count);
//     if(count == 5){
//         clearInterval(intervalId);
//     }
   
    
// }

const intervalId = setInterval(increaseCount,2000);
let count =0;
function increaseCount() {
    count++;
    const date = new Date().toTimeString();
    console.log(date);
    if(count == 5){
        clearInterval(intervalId);
    } 
}

console.log('another work');





















