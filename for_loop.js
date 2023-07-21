//for loop- loop to run a block of code number of times
// for in loop- loops that goes through the keys of object
//for of loop - values of an object

// const prompt = require("prompt-sync")({sigint:true});
// let n= prompt("enter a number")
// n=Number.parseInt(n);
// let sum=0
// for (let i = 0; i < n; i++) {
//      sum=sum+i
//     //console.log(i);
    
// }
// console.log(sum);
// // sum of first n number


// for in loop

let obj={
    harry :90, subh: 80 ,akash : 70 , rohan :85
}
for (const key in obj) {
    console.log(key);
}
// for (const key of obj) {// this wont work because for of loop required itterable objeccts
//     console.log(key);
// }
for (const key of "isst") {
    console.log(key);
}

const cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) { // 
console.log(x);
}