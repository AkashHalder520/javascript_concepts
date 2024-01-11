// shift && unshift
let arr = ["akash", "rohit", "mukesh", "rohan"]
 let x = arr.shift();// removes array from first akash gets removed and returns removed element
// let y = arr.unshift("reshmi")// additon of element from first and returns new length
document.write("<ul>")
for (let a = 0; a < arr.length; a++) {
    document.write("<li>" + arr[a] + "</li>")
}

document.write("shifted element=>" + x)
document.write("<ul>")

// short 
arr.sort()
document.write("shorted element=>" + arr +"<br/>")
// sort of numeric 

let num=[1,3,5,8,9,85,47,10]
num.sort((a, b) => {return(a - b)})//If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.

document.write("sorted numeric value=>"+num+"<br/>")

// reverse
arr.reverse()
document.write("reverse element=>" + arr+ "<br/>")

// concat

let arr2=["neha", "Roham"]
let arr3=["karan", "asish"]

let c=arr.concat(arr2,arr3);
document.writeln("after concat=>"+ c +"<br/>");

// another way of merging 
let p=[...arr2,...arr3]
console.log("merge array",p);

//indexof last indexoff
let arv = ["akash", "rohit", "mukesh", "rohan","mukesh"]
let index= arv.indexOf("mukesh") //indexof("searchelement", search start index) it returns the first occured element index if not found then returns -1 
document.write("index of=>" +index)
let lastindex=arv.lastIndexOf("mukesh")
document.write("lastindex of=>" +lastindex+"<br/>")

//findindex
let findindex=arv.findIndex((item)=>{return item==="rohit"})// find index of the first occured element it takes a function  
console.log(findindex,"gfghfghf");

//include function 

let ans= arv.includes("akash")// returns true or false and its case sensitive
document.write("incudes =>"+ans +"<br/>")

// some and every 
 
let num2=[1,3,5,8,9,85,47,10]
// let checkReq=(param)=>{
//     console.log(param);
//     return param>5;
//     }   
let b=num2.some(checkReq)// some always returns true or false if one element is found out and we have to create a test function 
let d=num2.every(checkReq) //The every() method returns true if the function returns true for all elements.
document.write(b+"<br><br>")

function checkReq(param){
    console.log(param);
    return param>5;
    }

//filter
let e=num2.filter(checkadult)
document.write("filter=>",e,"<br/>")
function checkadult(age){ //can be used using array function also
    return age>18;
}

//reduce 

let xx=num2.reduce((item1,item2)=>{ // reducer(accumulator,value)reduces an array to a single value 
    return item1+item2
})// this will give t
console.log(xx,"reduce func");


//Array toString() function ... it converts an array to string and returns the reasult

let f=num2.toString()

document.write("number to string=>",f,typeof(f),"<br/>")

// array join function

let text = arr.join(); //The join() method returns an array as a string.
let text2 = arr.join(" and ") //it doesnot change the original array as a parameter we can pass the separator
console.log(text,typeof(text),"join function");
console.log(text2,typeof(text),"join xyz");


//for-each loop
arr.forEach((value,index)=>{// in for each we can not retun any value
    document.write(index,":",value)
})

