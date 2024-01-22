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

//difference between for in loop and for off loop in an array
let arr=[10,20,30,40]
var sum=0
// for(let a=0;a<4;a++){or
// sum= sum+arr[a];
for(let a of arr){
     sum=sum+a
    }
console.log("total sum="+sum)

// for in loop

let obj={
    harry :90, subh: 80 ,akash : 70 , rohan :85
}
for (const key in obj) {
    console.log(key); // for accessing the keys only
    console.log(obj[key]);// for accesssing key value
}
// for (const key of obj) {// this wont work because for of loop required itterable objeccts
//     console.log(key);
// }

for (const value of "isst") {
    console.log(value); // i s s t
}



const cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) { // 
console.log(x);
}

// FOR EACH

arr.forEach((valuec,keyc)=>{
    console.log(valuec,"==",keyc);
});

// obj.forEach(element => {// foreach only array or array of objects
//    console.log(element); 
// });