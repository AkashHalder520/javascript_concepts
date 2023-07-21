// a callback fucnt is a function passed as an argument to another function
// a higher order function which takes another function as an argument




const addition=(a,b)=>a+b

const subtraction=(a,b)=>a-b

const calculator=(a,b,operation)=>{// this is higer order funtion  as it is accepting another function as argument(add or subtract)
    return operation(a,b)
}

const addresule= calculator(5,5,addition)//passing the addition function as an argument called call back
console.log(addresule,"add");
const subresule= calculator(5,5,addition)
console.log(subresule,"sub");