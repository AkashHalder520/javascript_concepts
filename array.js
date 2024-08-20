// normal methord

let arr=[10,20,30,40]
var sum=0
// for(let a=0;a<4;a++){or
// sum= sum+arr[a];
for(let a of arr){
     sum=sum+a
    }
console.log("total sum="+sum)

// another way to create array

// let ary = new Array();
// for(let a=0;a<4;a++){
//     ary[a]=prompt("enter the values")
//    }
// document.write("<ul>")
// for(let a=0;a<4;a++){
// document.write("<li>"+ary[a]+"</li>")}
// delete ary[0]// when deleteing the element gets deleted but the memory doesnt deleted
// document.write("after delete")
// for(let a=0;a<4;a++){
//     document.write("<li>"+ary[a]+"</li>")}
    
// document.write("<ul>")

//max element in an array 
function max (arr){ // send a array as a parameter
let max=-1 // as if not given -1 then it wont work on negative number
    arr.forEach((er)=>{
        if (er>max){
            max=er
        }
    })
    return max
}

//min element in an array 

function find_minimum(arr){
    /*Function to find the minimum in the array--> arr 
      return the minimum value*/

var min = Infinity
arr.forEach((param)=>{
    if(param<min){
        min=param
    }
})
return min
}

//how to destructure a array 

let [item1,item2,...item3]=arr

console.log(item1);// 20
console.log(item2);// 10
console.log(item3);// [ 30, 40 ]

